import React, { useMemo, useState } from 'react';
import { Search, Download, Inbox, ChevronDown } from 'lucide-react';
import { STATUS_TONE } from '@/data/scrapData';

function DataTable({
    title,
    columns,
    rows,
    searchPlaceholder = 'Filter records',
    filterLabel,
    primaryAction,
    showExport = true,
    actionLabel,
}) {
    const [query, setQuery] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');

    const roleOptions = useMemo(() => {
        if (!filterLabel) return [];
        const set = new Set();
        rows.forEach((r) => {
            if (r.role) set.add(r.role);
        });
        return [...set];
    }, [rows, filterLabel]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return rows.filter((r) => {
            if (roleFilter !== 'all' && r.role !== roleFilter) return false;
            if (!q) return true;
            return [...r.cells, r.status, r.role || '', r.action || ''].join(' ').toLowerCase().includes(q);
        });
    }, [rows, query, roleFilter]);

    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <header className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="relative min-w-0 flex-1 sm:max-w-sm">
                        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={searchPlaceholder}
                            aria-label={searchPlaceholder}
                            className="h-11 w-full rounded-full border border-slate-200 bg-[#f8fafc] pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-slate-300 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                        />
                    </div>
                    {filterLabel ? (
                        <div className="relative">
                            <select
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                                aria-label={filterLabel}
                                className="h-11 appearance-none rounded-full border border-slate-200 bg-white py-2 pl-4 pr-10 text-sm font-medium text-slate-700 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-900/5"
                            >
                                <option value="all">{filterLabel}</option>
                                {roleOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
                        </div>
                    ) : null}
                </div>

                <div className="flex items-center gap-2">
                    {showExport && !primaryAction ? (
                        <button
                            type="button"
                            className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 active:scale-[0.98]"
                        >
                            <Download className="h-4 w-4" strokeWidth={1.8} />
                            <span className="hidden sm:inline">Export</span>
                        </button>
                    ) : null}
                    {primaryAction ? (
                        <button
                            type="button"
                            onClick={primaryAction.onClick}
                            className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.98]"
                        >
                            {primaryAction.label}
                        </button>
                    ) : null}
                </div>
            </header>

            {!title ? null : (
                <div className="border-b border-slate-50 px-5 py-2.5">
                    <p className="text-xs text-slate-500">
                        <span className="font-medium text-slate-700">{title}</span>
                        {' · '}
                        {filtered.length} of {rows.length} records
                    </p>
                </div>
            )}

            {filtered.length === 0 ? (
                <div className="flex flex-col items-center gap-2 px-6 py-16 text-center">
                    <Inbox className="h-8 w-8 text-slate-300" strokeWidth={1.6} />
                    <p className="text-sm font-medium text-slate-700">No records match “{query}”</p>
                    <p className="text-xs text-slate-500">Try another name, role or status.</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[880px] text-left text-sm">
                        <thead>
                            <tr className="border-b border-slate-100 bg-white text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                                {columns.map((c) => (
                                    <th key={c} className="whitespace-nowrap px-5 py-3.5 font-semibold">
                                        {c}
                                    </th>
                                ))}
                                {actionLabel ? (
                                    <th className="whitespace-nowrap px-5 py-3.5 font-semibold">Actions</th>
                                ) : null}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.map((r) => (
                                <tr key={r.id} className="transition-colors hover:bg-slate-50/80">
                                    {r.cells.map((cell, idx) => (
                                        <td
                                            key={`${r.id}-${idx}`}
                                            className={`whitespace-nowrap px-5 py-4 ${
                                                idx === 0
                                                    ? 'font-semibold text-slate-900'
                                                    : idx === 1
                                                      ? 'text-slate-500'
                                                      : 'text-slate-600'
                                            }`}
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                    <td className="px-5 py-4">
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                                                STATUS_TONE[r.status] || 'bg-slate-100 text-slate-600 ring-slate-200'
                                            }`}
                                        >
                                            {r.status}
                                        </span>
                                    </td>
                                    {actionLabel ? (
                                        <td className="px-5 py-4">
                                            <button
                                                type="button"
                                                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
                                            >
                                                {r.action || actionLabel}
                                            </button>
                                        </td>
                                    ) : null}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}

export default DataTable;
