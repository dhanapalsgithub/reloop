import React from 'react';
import { TrendingUp } from 'lucide-react';

function MetricCards({ metrics }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((m) => (
                <div
                    key={m.label}
                    className="rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_1px_2px_rgba(28,25,23,0.05)]"
                >
                    <p className="text-xs uppercase tracking-[0.14em] text-stone-500">{m.label}</p>
                    <p className="mt-3 font-mono text-2xl font-semibold tracking-tight text-stone-900">{m.value}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-700">
                            <TrendingUp className="h-3 w-3" strokeWidth={2} />
                            {m.delta}
                        </span>
                        <span className="text-stone-400">{m.note}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MetricCards;
