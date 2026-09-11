import React, { useState } from 'react';
import { IndianRupee, Scale, CheckCircle2, MapPin } from 'lucide-react';

const MATERIAL_RATES = {
    'Mixed Paper': 14,
    'PET Bottles': 22,
    'Aluminium Cans': 110,
    'E-waste': 85,
    'Iron Scrap': 28,
    'Cardboard': 16,
    'Copper Wire': 450,
    'HDPE Drums': 35,
    'Glass Cullet': 6,
    'Brass Fittings': 320,
};

const TAMIL_NADU_DISTRICTS = [
    'Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy',
    'Tirunelveli', 'Erode', 'Vellore', 'Thanjavur', 'Dindigul'
];

export default function SellScrapForm({ role }) {
    // 1. லோக்கல் ஸ்டோரேஜில் இருந்து லாகின் ஆன யூசர் டேட்டாவைப் பெறுகிறோம்
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const activeEmail = storedUser.email || 'user@reloop.com';
    const activeRole = role || storedUser.role || 'individual';

    const [material, setMaterial] = useState('Mixed Paper');
    const [weight, setWeight] = useState(10);
    const [district, setDistrict] = useState('Chennai');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const ratePerKg = MATERIAL_RATES[material] || 20;
    const totalAmount = weight * ratePerKg;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            const response = await fetch('http://localhost:5000/api/scrap/pickup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    material,
                    weight: Number(weight),
                    ratePerKg,
                    totalAmount,
                    district,
                    address,
                    userEmail: activeEmail // 2. உண்மையான லாகின் ஈமெயில் இங்கு அனுப்பப்படுகிறது
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setSubmitted(true);
        } catch (err) {
            setErrorMsg(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 text-center max-w-xl mx-auto my-6">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 mb-3" strokeWidth={1.8} />
                <h3 className="text-lg font-semibold text-slate-900">Scrap Pickup Request Placed!</h3>
                <p className="mt-1 text-sm text-slate-600">
                    Your request for {weight} kg of {material} in <span className="font-semibold text-slate-800">{district}</span> has been registered. Estimated payout: <span className="font-semibold text-emerald-700">₹{totalAmount.toLocaleString('en-IN')}</span>.
                </p>
                <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                >
                    Submit Another Request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 max-w-2xl mx-auto shadow-sm space-y-6">
            <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">Schedule New Scrap Pickup</h3>
                <p className="mt-0.5 text-xs text-slate-500">Select material type, district and weight to lock in your scrap value instantly.</p>
            </div>

            {errorMsg && (
                <div className="rounded-xl bg-red-50 p-3 text-xs text-red-600 border border-red-200">
                    {errorMsg}
                </div>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Scrap Material Type</label>
                    <select
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    >
                        {Object.keys(MATERIAL_RATES).map((mat) => (
                            <option key={mat} value={mat}>
                                {mat} (₹{MATERIAL_RATES[mat]}/kg)
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Weight ({activeRole === 'individual' ? 'kg' : 'tons'})</label>
                    <div className="relative">
                        <Scale className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input
                            type="number"
                            min="1"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                            required
                        />
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">Select District</label>
                <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    >
                        {TAMIL_NADU_DISTRICTS.map((dist) => (
                            <option key={dist} value={dist}>
                                {dist}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">Pickup Address / Hub Location</label>
                <input
                    type="text"
                    placeholder="Enter complete address with landmark"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    required
                />
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex items-center justify-between">
                <div>
                    <span className="text-xs text-slate-500 block">Calculated Fixed Scrap Value</span>
                    <span className="text-xl font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                        <IndianRupee className="h-5 w-5 text-emerald-600" />
                        {totalAmount.toLocaleString('en-IN')}
                    </span>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">
                    Rate: ₹{ratePerKg}/kg
                </span>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors disabled:opacity-50"
            >
                {loading ? 'Submitting...' : 'Confirm and Schedule Pickup'}
            </button>
        </form>
    );
}