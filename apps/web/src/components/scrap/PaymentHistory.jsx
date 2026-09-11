import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Download, Calendar, Search, ChevronLeft, ChevronRight, RefreshCw, ShieldCheck } from 'lucide-react';

export default function PaymentHistory() {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');
    
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const storedUser = useMemo(() => {
        try {
            return JSON.parse(localStorage.getItem('user') || '{}');
        } catch {
            return {};
        }
    }, []);
    
    const role = storedUser.role || 'admin';
    const email = storedUser.email || '';

    const fetchPaymentHistory = useCallback(async (isBackground = false) => {
        try {
            if (!isBackground) setLoading(true);
            const response = await fetch(`http://localhost:5000/api/scrap/payments/history?role=${role}&email=${email}`);
            const data = await response.json();
            
            if (response.ok && Array.isArray(data)) {
                setPayments(data);
            } else {
                setPayments([]);
            }
        } catch (err) {
            console.error("Error fetching live payment history from backend:", err);
            setPayments([]);
        } finally {
            if (!isBackground) setLoading(false);
        }
    }, [role, email]);

    // Real-time background sync every 15 seconds
    useEffect(() => {
        fetchPaymentHistory();
        const interval = setInterval(() => {
            fetchPaymentHistory(true);
        }, 15000);
        return () => clearInterval(interval);
    }, [fetchPaymentHistory]);

    // Filter payments strictly against actual backend fields with useMemo optimization
    const filteredPayments = useMemo(() => {
        return payments.filter(item => {
            const matchesSearch = 
                (item.transactionId && item.transactionId.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.material && item.material.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.userEmail && item.userEmail.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.paymentMode && item.paymentMode.toLowerCase().includes(searchTerm.toLowerCase()));

            let matchesDate = true;
            if (startDate || endDate) {
                const itemDate = item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : '';
                if (startDate && itemDate < startDate) matchesDate = false;
                if (endDate && itemDate > endDate) matchesDate = false;
            }

            let matchesStatus = true;
            if (statusFilter !== 'ALL') {
                matchesStatus = item.status?.toLowerCase() === statusFilter.toLowerCase();
            }

            return matchesSearch && matchesDate && matchesStatus;
        });
    }, [payments, searchTerm, startDate, endDate, statusFilter]);

    // Reset to page 1 whenever filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, startDate, endDate, statusFilter]);

    // Pagination calculations
    const { currentRows, totalPages, indexOfFirstRow, indexOfLastRow } = useMemo(() => {
        const lastRow = currentPage * rowsPerPage;
        const firstRow = lastRow - rowsPerPage;
        const rows = filteredPayments.slice(firstRow, lastRow);
        const pages = Math.ceil(filteredPayments.length / rowsPerPage) || 1;
        return {
            currentRows: rows,
            totalPages: pages,
            indexOfFirstRow: firstRow,
            indexOfLastRow: lastRow
        };
    }, [filteredPayments, currentPage, rowsPerPage]);

    // Export real data to CSV
    const exportToCSV = () => {
        const headers = ["Transaction ID", "Material", "Weight (Kg)", "Amount (₹)", "Status", "Payment Mode", "User Email", "Date"];
        const csvRows = filteredPayments.map(item => [
            `"${item.transactionId}"`,
            `"${item.material}"`,
            item.weight,
            item.amount,
            `"${item.status}"`,
            `"${item.paymentMode}"`,
            `"${item.userEmail}"`,
            `"${item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-IN') : ''}"`
        ]);

        const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...csvRows.map(e => e.join(","))].join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `Payment_History_Live_${role}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading && payments.length === 0) {
        return <div className="p-8 text-center text-sm text-slate-500">Loading live payment records from backend...</div>;
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            {/* Header & Controls Toolbar */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-2 flex-1">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search Txn ID, material, email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3.5 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        />
                    </div>
                    <button
                        onClick={() => fetchPaymentHistory(false)}
                        title="Refresh Payments"
                        className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                    >
                        <RefreshCw className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    {/* Status Filter */}
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 focus:bg-white focus:outline-none"
                    >
                        <option value="ALL">All Status</option>
                        <option value="Success">Success / Paid</option>
                        <option value="Pending">Pending</option>
                        <option value="Failed">Failed</option>
                    </select>

                    {/* Date Picker Filter */}
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
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Payment Logs Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                            <th className="px-4 py-3">Transaction ID</th>
                            <th className="px-4 py-3">Material</th>
                            <th className="px-4 py-3">Weight</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Payment Mode</th>
                            <th className="px-4 py-3">User Email</th>
                            <th className="px-4 py-3">Date & Time</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                        {currentRows.length > 0 ? (
                            currentRows.map((item, index) => (
                                <tr key={item.id || item.transactionId || index} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-4 py-3 font-mono font-medium text-slate-900">{item.transactionId}</td>
                                    <td className="px-4 py-3 font-medium text-slate-800">{item.material}</td>
                                    <td className="px-4 py-3">{item.weight} kg</td>
                                    <td className="px-4 py-3 font-semibold text-emerald-700">₹{item.amount?.toLocaleString('en-IN')}</td>
                                    <td className="px-4 py-3">
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                                            (item.status || '').toLowerCase() === 'success' || (item.status || '').toLowerCase() === 'paid'
                                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                                : (item.status || '').toLowerCase() === 'failed'
                                                ? 'bg-rose-50 text-rose-700 border border-rose-200'
                                                : 'bg-amber-50 text-amber-700 border border-amber-200'
                                        }`}>
                                            <ShieldCheck className="h-3 w-3" />
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 font-medium text-slate-600">{item.paymentMode}</td>
                                    <td className="px-4 py-3 text-slate-500">{item.userEmail}</td>
                                    <td className="px-4 py-3 text-slate-500">{item.createdAt ? new Date(item.createdAt).toLocaleString('en-IN') : ''}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="px-4 py-8 text-center text-slate-400">
                                    No live payment records found from the backend.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500">
                    Showing {filteredPayments.length > 0 ? indexOfFirstRow + 1 : 0} to {Math.min(indexOfLastRow, filteredPayments.length)} of {filteredPayments.length} entries (Live Database Synced)
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
    );
}