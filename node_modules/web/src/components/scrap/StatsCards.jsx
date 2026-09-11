import React, { useEffect, useState } from 'react';

const AllMenuStats = () => {
  const [stats, setStats] = useState({
    pickups: { totalPickups: 0, totalWeight: 0 },
    payments: { totalPastIncome: 0, pendingAmount: 0, lastPayout: 0, lastPayoutMode: 'N/A', nextSettlement: 'T+1 Working Day' },
    hubs: { activeZones: 0 }
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const role = localStorage.getItem('role') || 'user';
        const email = localStorage.getItem('email') || 'test31@gmail.com';

        const res = await fetch(`http://localhost:5000/api/scrap/dashboard/summary?role=${role}&email=${email}`);
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Error fetching summary stats:", err);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* 1. Total Past Income */}
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">TOTAL PAST INCOME</p>
        <h3 className="text-2xl font-bold">₹ {Number(stats.payments.totalPastIncome).toLocaleString('en-IN')}</h3>
        <span className="text-green-600 text-xs">Total pickups: {stats.pickups.totalPickups}</span>
      </div>

      {/* 2. Pending Amount */}
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">PENDING AMOUNT</p>
        <h3 className="text-2xl font-bold">₹ {Number(stats.payments.pendingAmount).toLocaleString('en-IN')}</h3>
        <span className="text-orange-500 text-xs">To be credited</span>
      </div>

      {/* 3. Last Payout */}
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">LAST PAYOUT</p>
        <h3 className="text-2xl font-bold">₹ {Number(stats.payments.lastPayout).toLocaleString('en-IN')}</h3>
        <span className="text-green-600 text-xs">Via {stats.payments.lastPayoutMode}</span>
      </div>

      {/* 4. Next Settlement / Volume */}
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">TOTAL WEIGHT / ZONES</p>
        <h3 className="text-xl font-bold">{stats.pickups.totalWeight} Kg</h3>
        <span className="text-blue-500 text-xs">Active Zones: {stats.hubs.activeZones}</span>
      </div>
    </div>
  );
};

export default AllMenuStats;