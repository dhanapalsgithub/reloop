import React, { useEffect, useState } from 'react';
import { IndianRupee, Scale, Clock } from 'lucide-react';

export default function UserPickupsList({ userEmail }) {
    const [pickups, setPickups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUserPickups() {
            try {
                const emailToFetch = userEmail || 'user@reloop.com';
                const response = await fetch(`/api/scrap/pickups/user?email=${emailToFetch}`);
                const data = await response.json();
                
                if (response.ok) {
                    setPickups(data);
                }
            } catch (err) {
                console.error("Failed to load user pickups", err);
            } finally {
                setLoading(false);
            }
        }

        fetchUserPickups();
    }, [userEmail]);

    if (loading) return <div className="p-4 text-sm text-slate-500">Loading your history...</div>;

    if (pickups.length === 0) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center max-w-2xl mx-auto my-6">
                <p className="text-sm text-slate-500">No scrap pickup requests found yet.</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto my-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Your Scrap Pickup History</h3>
            {pickups.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-center justify-between">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-slate-900">{item.material}</span>
                            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                                {item.status || 'Pending'}
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                            <Scale className="h-3.5 w-3.5" /> {item.weight} kg | <span className="font-medium text-slate-700">{item.district}</span>
                        </p>
                        <p className="text-xs text-slate-400">{item.address}</p>
                    </div>
                    <div className="text-right">
                        <span className="text-base font-bold text-slate-900 flex items-center justify-end gap-0.5">
                            <IndianRupee className="h-4 w-4 text-emerald-600" />
                            {item.totalAmount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                            {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}