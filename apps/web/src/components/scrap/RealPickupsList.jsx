import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Download, Calendar, Search, ChevronLeft, ChevronRight, RefreshCw, CreditCard, CheckCircle2, Clock } from 'lucide-react';

export default function RealPickupsList({ role = 'admin', session = null }) {
    const [pickups, setPickups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [paymentFilter, setPaymentFilter] = useState('ALL'); // ALL, Paid, Pending
    const [paymentModeFilter, setPaymentModeFilter] = useState('ALL'); // ALL, UPI, Cash, Bank Transfer, Card
    const [selectedItems, setSelectedItems] = useState(new Set());
    
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 8;

    const userEmail = session?.email || JSON.parse(localStorage.getItem('user') || '{}').email || '';
    const userRole = session?.role || role;

    const fetchPickups = useCallback(async (isBackground = false) => {
        try {
            if (!isBackground) setLoading(true);
            const response = await fetch(`http://localhost:5000/api/scrap/pickups/all?role=${userRole}&email=${userEmail}`);
            const data = await response.json();
            if (response.ok && Array.isArray(data)) {
                setPickups(data);
            }
        } catch (err) {
            console.error("Error fetching real-time records & payment history:", err);
        } finally {
            if (!isBackground) setLoading(false);
        }
    }, [userRole, userEmail]);

    // Real-time data polling every 10 seconds
    useEffect(() => {
        fetchPickups();
        const interval = setInterval(() => {
            fetchPickups(true);
        }, 10000);
        return () => clearInterval(interval);
    }, [fetchPickups]);

    // Filter by search, date range, payment status, and payment mode using useMemo
    const filteredPickups = useMemo(() => {
        return pickups.filter(item => {
            const matchesSearch = 
                (item.material && item.material.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.district && item.district.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.userEmail && item.userEmail.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.paymentId && item.paymentId.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.transactionId && item.transactionId.toLowerCase().includes(searchTerm.toLowerCase()));

            let matchesDate = true;
            if (startDate || endDate) {
                const itemDate = item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : '';
                if (startDate && itemDate < startDate) matchesDate = false;
                if (endDate && itemDate > endDate) matchesDate = false;
            }

            let matchesPayment = true;
            if (paymentFilter !== 'ALL') {
                const status = item.paymentStatus || item.status || 'Pending';
                matchesPayment = status.toLowerCase() === paymentFilter.toLowerCase();
            }

            let matchesMode = true;
            if (paymentModeFilter !== 'ALL') {
                const mode = item.paymentMode || 'N/A';
                matchesMode = mode.toLowerCase() === paymentModeFilter.toLowerCase();
            }

            return matchesSearch && matchesDate && matchesPayment && matchesMode;
        });
    }, [pickups, searchTerm, startDate, endDate, paymentFilter, paymentModeFilter]);

    // Reset page on filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, startDate, endDate, paymentFilter, paymentModeFilter]);

    // Pagination logic
    const { currentRows, totalPages, indexOfFirstRow, indexOfLastRow } = useMemo(() => {
        const lastRow = currentPage * rowsPerPage;
        const firstRow = lastRow - rowsPerPage;
        const rows = filteredPickups.slice(firstRow, lastRow);
        const pages = Math.ceil(filteredPickups.length / rowsPerPage) || 1;
        return {
            currentRows: rows,
            totalPages: pages,
            indexOfFirstRow: firstRow,
            indexOfLastRow: lastRow
        };
    }, [filteredPickups, currentPage, rowsPerPage]);

    // Financial summaries calculation
    const financialSummary = useMemo(() => {
        return filteredPickups.reduce((acc, item) => {
            const amt = Number(item.totalAmount || item.amount || 0);
            const status = (item.paymentStatus || item.status || 'Pending').toLowerCase();
            acc.total += amt;
            if (status === 'paid' || status === 'success') {
                acc.paid += amt;
            } else {
                acc.pending += amt;
            }
            return acc;
        }, { total: 0, paid: 0, pending: 0 });
    }, [filteredPickups]);

    // Handle single row selection toggle
    const toggleSelectItem = (id) => {
        setSelectedItems(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    // Handle select all toggle for current page
    const toggleSelectAll = () => {
        const currentPageIds = currentRows.map(r => r.id || r._id);
        const allSelected = currentPageIds.every(id => selectedItems.has(id));
        setSelectedItems(prev => {
            const next = new Set(prev);
            if (allSelected) {
                currentPageIds.forEach(id => next.delete(id));
            } else {
                currentPageIds.forEach(id => next.add(id));
            }
            return next;
        });
    };

    // Export to comprehensive CSV including payment telemetry
    const exportToCSV = () => {
        const headers = ["ID", "Material", "Weight (Kg)", "Amount (₹)", "Payment Status", "Payment Mode", "Transaction ID", "District", "User Email", "Date"];
        const rowsToExport = selectedItems.size > 0 
            ? filteredPickups.filter(item => selectedItems.has(item.id || item._id))
            : filteredPickups;

        const csvRows = rowsToExport.map(item => [
            item.id || item._id || '',
            `"${item.material || ''}"`,
            item.weight || 0,
            item.totalAmount || item.amount || 0,
            `"${item.paymentStatus || item.status || 'Pending'}"`,
            `"${item.paymentMode || 'N/A'}"`,
            `"${item.transactionId || item.paymentId || 'N/A'}"`,
            `"${item.district || ''}"`,
            `"${item.userEmail || ''}"`,
            `"${item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-IN') : ''}"`
        ]);

        const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...csvRows.map(e => e.join(","))].join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `ReLoop_Payment_History_${userRole}_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading && pickups.length === 0) {
        return <div className="p-8 text-center text-sm text-slate-500">Loading real-time payment history and records...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Financial Overview Metrics Cards for Payment History */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider">
                        <span>Total Volume Amount</span>
                        <CreditCard className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="mt-2 text-2xl font-bold text-slate-900">
                        ₹{financialSummary.total.toLocaleString('en-IN')}
                    </div>
                    <p className="mt-1 text-xs text-slate-500">Across {filteredPickups.length} payment records</p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5 shadow-sm">
                    <div className="flex items-center justify-between text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                        <span>Total Paid / Settled</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div className="mt-2 text-2xl font-bold text-emerald-800">
                        ₹{financialSummary.paid.toLocaleString('en-IN')}
                    </div>
                    <p className="mt-1 text-xs text-emerald-600">Successfully cleared transactions</p>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50/40 p-5 shadow-sm">
                    <div className="flex items-center justify-between text-amber-700 text-xs font-semibold uppercase tracking-wider">
                        <span>Pending Disbursements</span>
                        <Clock className="h-4 w-4 text-amber-600" />
                    </div>
                    <div className="mt-2 text-2xl font-bold text-amber-800">
                        ₹{financialSummary.pending.toLocaleString('en-IN')}
                    </div>
                    <p className="mt-1 text-xs text-amber-600">Awaiting processing or cash clearance</p>
                </div>
            </div>

            {/* Main Content Card with Filters & Table */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                {/* Top Toolbar: Search, Filters, Refresh & Export */}
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-2 flex-1">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search material, email, Txn ID..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3.5 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                            />
                        </div>
                        <button
                            onClick={() => fetchPickups(false)}
                            title="Refresh Real-time Data"
                            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                        >
                            <RefreshCw className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        {/* Payment Status Filter */}
                        <select
                            value={paymentFilter}
                            onChange={(e) => setPaymentFilter(e.target.value)}
                            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 focus:bg-white focus:outline-none"
                        >
                            <option value="ALL">All Statuses</option>
                            <option value="Paid">Paid / Success</option>
                            <option value="Pending">Pending</option>
                        </select>

                        {/* Payment Mode Filter */}
                        <select
                            value={paymentModeFilter}
                            onChange={(e) => setPaymentModeFilter(e.target.value)}
                            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 focus:bg-white focus:outline-none"
                        >
                            <option value="ALL">All Modes</option>
                            <option value="UPI">UPI</option>
                            <option value="Cash">Cash</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                            <option value="Card">Card</option>
                        </select>

                        {/* Date Filter */}
                        <div className="flex items-center gap-1.5 border border-slate-200 rounded-xl px-3 py-1.5 bg-slate-50 text-xs text-slate-600">
                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="bg-transparent focus:outline-none"
                            />
                            <span>to</span>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="bg-transparent focus:outline-none"
                            />
                        </div>

                        {/* Export Button */}
                        <button
                            onClick={exportToCSV}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors"
                        >
                            <Download className="h-3.5 w-3.5" />
                            {selectedItems.size > 0 ? `Export Selected (${selectedItems.size})` : 'Export CSV'}
                        </button>
                    </div>
                </div>

                {/* Table View with Payment History Telemetry */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                                <th className="px-4 py-3 w-10">
                                    <input
                                        type="checkbox"
                                        aria-label="Select all rows on current page"
                                        checked={currentRows.length > 0 && currentRows.every(r => selectedItems.has(r.id || r._id))}
                                        onChange={toggleSelectAll}
                                        className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                                    />
                                </th>
                                <th className="px-4 py-3">Transaction ID</th>
                                <th className="px-4 py-3">Material</th>
                                <th className="px-4 py-3">Weight</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Payment Status</th>
                                <th className="px-4 py-3">Payment Mode</th>
                                <th className="px-4 py-3">District</th>
                                <th className="px-4 py-3">User Email</th>
                                <th className="px-4 py-3">Date & Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                            {currentRows.length > 0 ? (
                                currentRows.map((item) => {
                                    const rowId = item.id || item._id;
                                    const isSelected = selectedItems.has(rowId);
                                    const status = item.paymentStatus || item.status || 'Pending';
                                    const isPaid = status.toLowerCase() === 'paid' || status.toLowerCase() === 'success';

                                    return (
                                        <tr key={rowId} className={`transition-colors ${isSelected ? 'bg-emerald-50/30' : 'hover:bg-slate-50/50'}`}>
                                            <td className="px-4 py-3">
                                                <input
                                                    type="checkbox"
                                                    aria-label={`Select row ${rowId}`}
                                                    checked={isSelected}
                                                    onChange={() => toggleSelectItem(rowId)}
                                                    className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                                                />
                                            </td>
                                            <td className="px-4 py-3 font-mono font-medium text-slate-900">
                                                {item.transactionId || item.paymentId || `TXN-${rowId}`}
                                            </td>
                                            <td className="px-4 py-3 font-medium text-slate-900">{item.material}</td>
                                            <td className="px-4 py-3">{item.weight} kg</td>
                                            <td className="px-4 py-3 font-semibold text-emerald-700">
                                                ₹{(Number(item.totalAmount || item.amount || 0)).toLocaleString('en-IN')}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                                                    isPaid 
                                                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                                                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                                                }`}>
                                                    <CreditCard className="h-3 w-3" />
                                                    {status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 font-medium text-slate-600">{item.paymentMode || 'Online / Cash'}</td>
                                            <td className="px-4 py-3">{item.district || 'N/A'}</td>
                                            <td className="px-4 py-3 text-slate-500">{item.userEmail}</td>
                                            <td className="px-4 py-3 text-slate-500">
                                                {item.createdAt ? new Date(item.createdAt).toLocaleString('en-IN') : 'N/A'}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="10" className="px-4 py-8 text-center text-slate-400">
                                        No real-time payment history records found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-500">
                        Showing {filteredPickups.length > 0 ? indexOfFirstRow + 1 : 0} to {Math.min(indexOfLastRow, filteredPickups.length)} of {filteredPickups.length} entries (Live Synced)
                    </span>
                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                        >
                            <ChevronLeft className="h-3.5 w-3.5" /> Previous
                        </button>
                        <span className="text-xs font-medium text-slate-700 px-2">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages || totalPages === 0}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                        >
                            Next <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}