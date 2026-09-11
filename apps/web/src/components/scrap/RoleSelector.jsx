import React from 'react';
import { ROLES } from '@/data/scrapData';

function RoleSelector({ role, onChange }) {
    return (
        <div className="flex flex-wrap gap-2">
            {ROLES.map((r) => {
                const active = r.id === role;
                return (
                    <button
                        key={r.id}
                        type="button"
                        onClick={() => onChange(r.id)}
                        aria-pressed={active}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors active:scale-[0.98] ${
                            active
                                ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm shadow-emerald-900/20'
                                : 'border-stone-300 bg-white text-stone-600 hover:border-emerald-400 hover:text-emerald-700'
                        }`}
                    >
                        <span className="font-medium">{r.label}</span>
                        <span className={`ml-2 hidden text-xs sm:inline ${active ? 'text-emerald-100' : 'text-stone-400'}`}>
                            {r.hint}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

export default RoleSelector;
