import React from 'react';
import { Recycle, LogOut, FileText, MapPin } from 'lucide-react';
import { getMenu } from '@/data/scrapData';

function Sidebar({ role, roleLabel, activeMenu, onSelect, onLogout, userEmail }) {
    let menu = getMenu(role);
    
    // Ensure Compliance Report menu item shows up if the role is admin
    if (role && role.toLowerCase() === 'admin') {
        const hasCompliance = menu.some(item => item.id === 'compliance' || item.id === 'compliance-report');
        if (!hasCompliance) {
            menu = [
                ...menu,
                { id: 'compliance', label: 'Compliance Report', icon: FileText }
            ];
        }

        // Ensure Area Management menu item shows up if the role is admin
        const hasAreaManagement = menu.some(item => item.id === 'areaManagement' || item.id === 'areas');
        if (!hasAreaManagement) {
            menu = [
                ...menu,
                { id: 'areaManagement', label: 'Area Management', icon: MapPin }
            ];
        }
    }
    
    return (
        <aside className="flex h-full w-full flex-col border-r border-slate-800/40 bg-slate-950 text-slate-50 lg:w-72">
            <div className="flex items-center gap-3 px-6 py-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <Recycle className="h-5 w-5 text-emerald-400" strokeWidth={1.8} />
                </span>
                <div className="leading-tight">
                    <p className="font-semibold tracking-tight">ReLoop</p>
                    <p className="text-xs text-slate-400">Scrap Management</p>
                </div>
            </div>

            <div className="mx-6 mb-5 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Signed in as</p>
                <p className="mt-1 text-sm font-medium">{roleLabel}</p>
                {userEmail ? <p className="mt-0.5 truncate text-xs text-slate-400">{userEmail}</p> : null}
            </div>

            <nav className="flex-1 space-y-1 px-3 pb-6">
                {menu.map((item) => {
                    const Icon = item.icon || FileText;
                    const active = item.id === activeMenu;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelect(item.id)}
                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors active:scale-[0.99] ${
                                active
                                    ? 'bg-white text-slate-950 font-semibold'
                                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                            <Icon className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                            <span className="truncate">{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="border-t border-white/10 px-6 py-4">
                <button
                    type="button"
                    onClick={onLogout}
                    className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                    <LogOut className="h-4 w-4" strokeWidth={1.8} />
                    Sign out
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;