import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, ShieldCheck, Phone, Briefcase } from 'lucide-react';
import { ROLES } from '@/data/scrapData';

// Fallback mock data structures if they aren't in scrapData.js yet
const STATES_LIST = ['Tamil Nadu', 'Karnataka', 'Maharashtra', 'Delhi'];
const DISTRICTS_MAP = {
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
    'Karnataka': ['Bangalore Urban', 'Mysore', 'Hubli'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
    'Delhi': ['Central Delhi', 'New Delhi', 'North Delhi']
};
const ZONALS_MAP = {
    'Chennai': ['Zone 1 - North', 'Zone 2 - Central', 'Zone 3 - South'],
    'Coimbatore': ['East Zone', 'West Zone'],
    'Bangalore Urban': ['East Division', 'West Division'],
    'Mumbai': ['Colaba Bandra', 'Andheri Kurla']
};

const SCRAP_TYPES_LIST = [
    { id: 'iron_steel', label: 'Iron & Steel' },
    { id: 'copper_brass', label: 'Copper & Brass' },
    { id: 'electronics', label: 'E-Waste & Electronics' },
    { id: 'plastic_paper', label: 'Plastic & Paper' },
    { id: 'mixed_metal', label: 'Mixed Metal Scrap' }
];

function SignupPage({ onSignup, onNavigateToLogin }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');

    const [organizationName, setOrganizationName] = useState('');

    const [vehicleNo, setVehicleNo] = useState('');
    const [rcCopy, setRcCopy] = useState(null);
    const [licenseCopy, setLicenseCopy] = useState(null);
    const [idDocCopy, setIdDocCopy] = useState(null);

    const [labelName, setLabelName] = useState('');
    const [streetName, setStreetName] = useState('');
    const [postTaluk, setPostTaluk] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedZonal, setSelectedZonal] = useState('');
    const [pincode, setPincode] = useState('');
    const [selectedScrapTypes, setSelectedScrapTypes] = useState([]);

    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showVerificationModal, setShowVerificationModal] = useState(false);

    const isAdmin = role === 'admin';
    const isDeliveryPartner = role === 'delivery_partner';
    const showScrapTypes = ['individual', 'public', 'corporate', 'partner', 'hub'].includes(role);
    const showOrgField = ['corporate', 'partner', 'hub'].includes(role);

    const handleScrapTypeToggle = (scrapId) => {
        setSelectedScrapTypes(prev => 
            prev.includes(scrapId) ? prev.filter(id => id !== scrapId) : [...prev, scrapId]
        );
    };

    // SignupPage.jsx-க்குள் handleSignup ஃபங்ஷனை இப்படி மாற்றவும்:
const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
        const payload = {
            name: name.trim(),
            email: email.trim(),
            mobile: mobile.trim(),
            password: password,
            role: role,
            organizationName: showOrgField ? organizationName.trim() : null,
            scrapTypes: showScrapTypes ? selectedScrapTypes : [],
            addressDetails: {
                labelName: labelName.trim(),
                streetName: streetName.trim(),
                postTaluk: postTaluk.trim(),
                state: selectedState,
                district: selectedDistrict,
                zonal: isAdmin ? selectedZonal : '',
                pincode: pincode.trim()
            },
            deliveryPartnerDetails: isDeliveryPartner ? { vehicleNo: vehicleNo.trim() } : null
        };

        const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // இது மிக முக்கியம்
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        setLoading(false);

        if (response.ok) {
            if (isDeliveryPartner) {
                setShowVerificationModal(true);
            } else {
                onSignup(result.user || { name, email, role });
            }
        } else {
            setError(result.error || 'Signup failed on the server.');
        }

    } catch (err) {
        setLoading(false);
        console.error("Network or server error:", err);
        setError('Could not connect to backend server. Check if server is running.');
    }
};
    return (
        <>
            <Helmet>
                <title>Create Account · ReLoop Scrap Management</title>
                <meta name="description" content="Sign up for a new account on the ReLoop scrap management platform." />
            </Helmet>

           <div className="flex min-h-screen w-full bg-slate-50/50">
            
                {/* Left Side: Brand & Context Panel */}
                <div className="hidden lg:flex lg:w-[38%] flex-col justify-between bg-slate-900 p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-90" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-200 backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Network Portal
                        </div>
                    </div>

                    <div className="relative z-10 space-y-4 my-auto">
                        <h1 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">Streamline your operations.</h1>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Register to access centralized inventory, real-time dispatch tracking, and automated fulfillment workflows.
                        </p>
                    </div>

                    <div className="relative z-10 text-xs text-slate-500">
                        © {new Date().getFullYear()} BMART Network Services. All rights reserved.
                    </div>
                </div>

                {/* Right Side: Fullscreen Form Container */}
                <div className="flex flex-1 flex-col justify-center px-6 py-10 lg:px-16 xl:px-24">
                    <div className="mx-auto w-full max-w-4xl">
                        
                        <div className="mb-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">New registration</p>
                            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Sign up for network access</h2>
                        </div>

                        <form onSubmit={handleSignup} className="space-y-6">
                            
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                
                                {/* Personal Details & Address */}
                                <div className="space-y-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Personal Details</p>
                                    
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-medium text-slate-700">Full Name</label>
                                        <div className="relative">
                                            <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
                                            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="mobile" className="text-xs font-medium text-slate-700">Mobile Number</label>
                                        <div className="relative">
                                            <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
                                            <input id="mobile" type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+91 98765 43210" className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-medium text-slate-700">Email Address</label>
                                        <div className="relative">
                                            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
                                            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 pt-1">
                                        <div className="space-y-1">
                                            <label htmlFor="labelName" className="text-[11px] font-medium text-slate-700">Address Label</label>
                                            <input id="labelName" type="text" value={labelName} onChange={(e) => setLabelName(e.target.value)} placeholder="Home / Office" className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs text-slate-900" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="pincode" className="text-[11px] font-medium text-slate-700">Pincode</label>
                                            <input id="pincode" type="text" maxLength={6} value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="600001" className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs text-slate-900" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="streetName" className="text-[11px] font-medium text-slate-700">Street Name</label>
                                        <input id="streetName" type="text" value={streetName} onChange={(e) => setStreetName(e.target.value)} placeholder="123 Main Road" className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs text-slate-900" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-1">
                                            <label htmlFor="postTaluk" className="text-[11px] font-medium text-slate-700">Post / Taluk</label>
                                            <input id="postTaluk" type="text" value={postTaluk} onChange={(e) => setPostTaluk(e.target.value)} placeholder="Taluk / Area" className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs text-slate-900" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="state" className="text-[11px] font-medium text-slate-700">State</label>
                                            <select id="state" value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setSelectedDistrict(''); setSelectedZonal(''); }} className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-2 text-xs text-slate-900">
                                                <option value="">Select State</option>
                                                {STATES_LIST.map((st) => <option key={st} value={st}>{st}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-1">
                                            <label htmlFor="district" className="text-[11px] font-medium text-slate-700">District</label>
                                            <select id="district" value={selectedDistrict} disabled={!selectedState} onChange={(e) => { setSelectedDistrict(e.target.value); setSelectedZonal(''); }} className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-2 text-xs text-slate-900">
                                                <option value="">Select District</option>
                                                {selectedState && DISTRICTS_MAP[selectedState]?.map((dist) => <option key={dist} value={dist}>{dist}</option>)}
                                            </select>
                                        </div>
                                        {isAdmin ? (
                                            <div className="space-y-1">
                                                <label htmlFor="zonal" className="text-[11px] font-medium text-slate-700">Zonal Area</label>
                                                <select id="zonal" value={selectedZonal} disabled={!selectedDistrict} onChange={(e) => setSelectedZonal(e.target.value)} className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-2 text-xs text-slate-900">
                                                    <option value="">Select Zonal</option>
                                                    {selectedDistrict && ZONALS_MAP[selectedDistrict]?.map((zone) => <option key={zone} value={zone}>{zone}</option>)}
                                                </select>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>

                                {/* Security, Role & Additional Details */}
                                <div className="space-y-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Access & Security</p>

                                    <div className="space-y-1.5">
                                        <label htmlFor="role" className="text-xs font-medium text-slate-700">Assign Role</label>
                                        <div className="relative">
                                            <ShieldCheck className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 z-10" strokeWidth={1.8} />
                                            <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-9 text-xs font-medium text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white">
                                                {ROLES.map((r) => <option key={r.id} value={r.id}>{r.label} — {r.hint}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    {showOrgField && (
                                        <div className="space-y-1.5">
                                            <label htmlFor="organizationName" className="text-xs font-medium text-slate-700">Organization Name</label>
                                            <div className="relative">
                                                <Briefcase className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
                                                <input id="organizationName" type="text" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} placeholder="Acme Inc" className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white" />
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-1.5">
                                        <label htmlFor="password" className="text-xs font-medium text-slate-700">Password</label>
                                        <div className="relative">
                                            <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
                                            <input id="password" type={showPw ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 chars" className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-11 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white" />
                                            <button type="button" onClick={() => setShowPw((v) => !v)} className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-lg text-slate-400 hover:text-slate-700">
                                                {showPw ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                                            </button>
                                        </div>
                                    </div>

                                    {isDeliveryPartner && (
                                        <div className="space-y-3 rounded-xl border border-slate-200/60 bg-slate-50/40 p-3">
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Vehicle & Docs</p>
                                            <div className="space-y-1">
                                                <label htmlFor="vehicleNo" className="text-[11px] font-medium text-slate-700">Vehicle Number</label>
                                                <input id="vehicleNo" type="text" value={vehicleNo} onChange={(e) => setVehicleNo(e.target.value)} placeholder="TN 01 AB 1234" className="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-900" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[11px] font-medium text-slate-700">Upload Documents (RC, License, ID Copy)</label>
                                                <input type="file" multiple onChange={(e) => {
                                                    if (e.target.files && e.target.files.length > 0) {
                                                        setRcCopy(e.target.files[0]);
                                                        setLicenseCopy(e.target.files[1] || e.target.files[0]);
                                                        setIdDocCopy(e.target.files[2] || e.target.files[0]);
                                                    }
                                                }} className="block w-full text-[11px] text-slate-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-slate-100 file:text-slate-700" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>

                            {showScrapTypes && (
                                <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm space-y-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Select Scrap Types of Interest</p>
                                    <div className="flex flex-wrap gap-2">
                                        {SCRAP_TYPES_LIST.map((item) => {
                                            const isSelected = selectedScrapTypes.includes(item.id);
                                            return (
                                                <button
                                                    key={item.id}
                                                    type="button"
                                                    onClick={() => handleScrapTypeToggle(item.id)}
                                                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition border ${
                                                        isSelected 
                                                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                                                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                                                    }`}
                                                >
                                                    {item.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {error ? <p className="rounded-xl bg-rose-50 px-4 py-3 text-xs font-medium text-rose-700 ring-1 ring-rose-100" role="alert">{error}</p> : null}

                            {/* Bottom Action Bar */}
                            <div className="flex items-center justify-between pt-2">
                                <button type="button" onClick={onNavigateToLogin} className="text-xs font-semibold text-slate-600 hover:underline">
                                    Already have an account? Log in
                                </button>
                                <button type="submit" disabled={loading} className="inline-flex h-11 px-8 items-center justify-center gap-2 rounded-xl bg-slate-900 text-xs font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70 shadow-sm">
                                    {loading ? 'Creating account…' : 'Create account'}
                                   {!loading ? <ArrowRight className="h-3.5 w-3.5" /> : null}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

                {showVerificationModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
                        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl space-y-4">
                            <h3 className="text-lg font-bold text-slate-900">Verification Pending</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Your delivery partner account has been created successfully and documents have been securely uploaded for verification. You will be notified once approved.
                            </p>
                            <button
                                type="button"
                                onClick={handleVerificationModalClose}
                                className="w-full h-10 rounded-xl bg-slate-900 text-xs font-semibold text-white hover:bg-slate-800 transition"
                            >
                                Proceed to Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SignupPage;