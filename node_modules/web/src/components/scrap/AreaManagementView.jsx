import React, { useState } from 'react';
import { Map, Search, Filter, Plus, ChevronRight, CheckCircle2, Clock, MapPin, Building2 } from 'lucide-react';
import { STATUS_TONE } from '@/data/scrapData';

export default function AreaManagementView({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('All');

    const columns = data?.table?.columns || ['Zone ID', 'City', 'Assigned Hub', 'Households', 'Daily Volume', 'Status'];
    const rows = data?.table?.rows || [];

    const filteredRows = rows.filter((row) => {
        const matchesSearch = row.cells.some((cell) =>
            String(cell).toLowerCase().includes(searchTerm.toLowerCase())
        );
        const matchesCity = selectedCity === 'All' || row.cells.some((cell) => String(cell).includes(selectedCity));
        return matchesSearch && matchesCity;
    });

    const citiesList = ['All', 'Chennai', 'Madurai', 'Coimbatore', 'Trichy', 'Salem'];

    return (
        <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search zones, hubs or cities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mr-1">
                        <Filter className="h-3.5 w-3.5" /> City:
                    </div>
                    {citiesList.map((city) => (
                        <button
                            key={city}
                            onClick={() => setSelectedCity(city)}
                            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                                selectedCity === city
                                    ? 'bg-emerald-600 text-white shadow-sm'
                                    : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                            }`}
                        >
                            {city}
                        </button>
                    ))}
                </div>
            </div>

            {/* Zones Data Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-base font-semibold text-slate-900">Active Service Zones & Routes</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Real-time geo-fence and hub mapping across Tamil Nadu</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                        <MapPin className="h-3 w-3" /> {filteredRows.length} Zones Listed
                    </span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50/75 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {columns.map((col, idx) => (
                                    <th key={idx} className="px-6 py-3.5">{col}</th>
                                ))}
                                <th className="px-6 py-3.5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                            {filteredRows.length > 0 ? (
                                filteredRows.map((row) => {
                                    const statusClass = STATUS_TONE[row.status] || 'bg-slate-100 text-slate-600 ring-slate-200';
                                    return (
                                        <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                                            {row.cells.map((cell, cIdx) => (
                                                <td key={cIdx} className="px-6 py-4 whitespace-nowrap">
                                                    {cIdx === 0 ? (
                                                        <span className="font-semibold text-slate-900 flex items-center gap-2">
                                                            <Map className="h-4 w-4 text-emerald-600" /> {cell}
                                                        </span>
                                                    ) : cIdx === 1 ? (
                                                        <span className="inline-flex items-center gap-1.5 text-slate-700">
                                                            <Building2 className="h-3.5 w-3.5 text-slate-400" /> {cell}
                                                        </span>
                                                    ) : (
                                                        cell
                                                    )}
                                                </td>
                                            ))}
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClass}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <button
                                                    onClick={() => alert(`Managing route details for zone: ${row.cells[0]}`)}
                                                    className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
                                                >
                                                    Configure <ChevronRight className="h-3.5 w-3.5" />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={columns.length + 1} className="px-6 py-12 text-center text-slate-400">
                                        No zones found matching your filter criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}