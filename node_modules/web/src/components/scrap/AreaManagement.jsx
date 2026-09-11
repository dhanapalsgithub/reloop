import React, { useState, useEffect, useMemo } from 'react';
import { 
    Search, 
    MoreVertical, 
    ChevronLeft, 
    ChevronRight,
    Edit3,
    Eye,
    Trash2,
    MapPin
} from 'lucide-react';

export default function AreaManagement() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Filter States
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [openMenuId, setOpenMenuId] = useState(null);

    // Pagination States
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Fetch Real Data from Server
    useEffect(() => {
        fetchAreas();
    }, []);

    const fetchAreas = async () => {
        try {
            setLoading(true);
            const res = await fetch('http://localhost:5000/api/areas');
            const result = await res.json();
            setData(result);
        } catch (err) {
            console.error("Error fetching areas:", err);
        } finally {
            setLoading(false);
        }
    };

    // Delete Handler
    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure you want to delete zone ${id}?`)) {
            try {
                await fetch(`http://localhost:5000/api/areas/${id}`, { method: 'DELETE' });
                setData(data.filter(item => item.id !== id));
                setOpenMenuId(null);
            } catch (err) {
                console.error("Delete failed:", err);
            }
        }
    };

    // Client-side Filter Logic
    const filteredData = useMemo(() => {
        return data.filter((item) => {
            const matchesSearch = 
                item.zone.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.id.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
            const matchesDate = !selectedDate || item.date === selectedDate;

            return matchesSearch && matchesStatus && matchesDate;
        });
    }, [data, searchQuery, statusFilter, selectedDate]);

    // Pagination Calculations
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredData.slice(start, start + itemsPerPage);
    }, [filteredData, currentPage, itemsPerPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            
            {/* Header Toolbar */}
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-indigo-600" />
                        Area Management & Route Coverage
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5">மண்டலங்கள் மற்றும் வழித்தடங்களின் நேரலை தரவுகள்</p>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="p-4 border-b border-slate-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-white">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                        type="text"
                        placeholder="Search zone or city..."
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                        className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                </div>

                {/* Calendar Date Filter */}
                <div className="relative flex items-center">
                    <input 
                        type="date"
                        value={selectedDate}
                        onChange={(e) => { setSelectedDate(e.target.value); setCurrentPage(1); }}
                        className="w-full py-2 px-3 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-700 focus:outline-none"
                    />
                    {selectedDate && (
                        <button onClick={() => setSelectedDate('')} className="absolute right-3 text-xs text-rose-500 hover:underline">
                            Reset
                        </button>
                    )}
                </div>

                {/* Status Filter */}
                <div>
                    <select 
                        value={statusFilter}
                        onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                        className="w-full py-2 px-3 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                    >
                        <option value="All">All Statuses</option>
                        <option value="Completed">Completed</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="In Transit">In Transit</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>

                {/* Rows per page */}
                <div className="flex items-center justify-end gap-2 text-sm text-slate-600">
                    <span>Rows:</span>
                    <select 
                        value={itemsPerPage}
                        onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                        className="py-1.5 px-2 bg-slate-50 border border-slate-300 rounded-lg"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto min-h-[300px]">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
                            <th className="py-3 px-4">Zone ID</th>
                            <th className="py-3 px-4">Area / Zone</th>
                            <th className="py-3 px-4">City</th>
                            <th className="py-3 px-4">Routes</th>
                            <th className="py-3 px-4">Households</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                        {loading ? (
                            <tr><td colSpan="8" className="py-10 text-center text-slate-400">Loading real data...</td></tr>
                        ) : paginatedData.length > 0 ? (
                            paginatedData.map((row) => (
                                <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="py-3 px-4 font-medium text-slate-900">{row.id}</td>
                                    <td className="py-3 px-4 font-semibold text-indigo-950">{row.zone}</td>
                                    <td className="py-3 px-4 text-slate-500">{row.city}</td>
                                    <td className="py-3 px-4">{row.routes} Active</td>
                                    <td className="py-3 px-4">{row.households}</td>
                                    <td className="py-3 px-4">{row.date}</td>
                                    <td className="py-3 px-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            row.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                                            row.status === 'Scheduled' ? 'bg-purple-100 text-purple-800' :
                                            'bg-amber-100 text-amber-800'
                                        }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    
                                    {/* Table 3-Dots Action Menu */}
                                    <td className="py-3 px-4 text-right relative">
                                        <button 
                                            onClick={() => setOpenMenuId(openMenuId === row.id ? null : row.id)}
                                            className="p-1.5 rounded-lg hover:bg-slate-200/60 text-slate-500"
                                        >
                                            <MoreVertical className="w-4 h-4" />
                                        </button>

                                        {openMenuId === row.id && (
                                            <div className="absolute right-4 mt-1 w-36 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-20 text-left">
                                                <button onClick={() => { alert(`Viewing ${row.id}`); setOpenMenuId(null); }} className="w-full px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                                                    <Eye className="w-3.5 h-3.5 text-slate-400" /> View Details
                                                </button>
                                                <button onClick={() => { alert(`Editing ${row.id}`); setOpenMenuId(null); }} className="w-full px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                                                    <Edit3 className="w-3.5 h-3.5 text-slate-400" /> Edit Zone
                                                </button>
                                                <button onClick={() => handleDelete(row.id)} className="w-full px-3 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 border-t border-slate-100">
                                                    <Trash2 className="w-3.5 h-3.5 text-rose-500" /> Delete
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="8" className="py-10 text-center text-slate-400">தேடலுக்குரிய தரவுகள் எதுவும் கிடைக்கவில்லை.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600">
                <div>
                    Showing <strong>{filteredData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}</strong> to <strong>{Math.min(currentPage * itemsPerPage, filteredData.length)}</strong> of <strong>{filteredData.length}</strong> entries
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="p-1.5 border border-slate-300 rounded-lg disabled:opacity-40">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="px-3 py-1 font-medium bg-white border border-slate-300 rounded-lg">Page {currentPage} of {totalPages || 1}</span>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages || totalPages === 0} className="p-1.5 border border-slate-300 rounded-lg disabled:opacity-40">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}