import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Menu, X, Bell, MapPin } from 'lucide-react';
import Sidebar from '@/components/scrap/Sidebar';
import MetricCards from '@/components/scrap/MetricCards';
import DataTable from '@/components/scrap/DataTable';
import SellScrapForm from '@/components/scrap/SellScrapForm'; 
import RealPickupsList from '@/components/scrap/RealPickupsList'; 
import PaymentHistory from '@/components/scrap/PaymentHistory';
import ComplianceReport from '@/components/scrap/ComplianceReport'; 
import SettingsView from '@/components/scrap/SettingsView'; 
import AreaManagementView from '@/components/scrap/AreaManagementView'; 
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import { ROLES, getMenu, getView } from '@/data/scrapData';

function HomePage() {
    const [session, setSession] = useState(null);
    const [authMode, setAuthMode] = useState('login'); 
    const [role, setRole] = useState('admin');
    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [navOpen, setNavOpen] = useState(false);
    
    // அனைத்து மெனுக்களுக்கான டைனமிக் ஸ்டேட் கார்டுகள்
    const [dynamicMetrics, setDynamicMetrics] = useState([]);

    const isAdmin = role?.toLowerCase() === 'admin';

    const menu = useMemo(() => {
        let baseMenu = getMenu(role);
        if (isAdmin) {
            const hasCompliance = baseMenu.some(item => item.id === 'compliance' || item.id === 'compliance-report');
            if (!hasCompliance) {
                baseMenu = [
                    ...baseMenu,
                    { id: 'compliance', label: 'Compliance Report' }
                ];
            }
        } else {
            baseMenu = baseMenu.filter(item => item.id !== 'compliance' && item.id !== 'compliance-report');
        }
        return baseMenu;
    }, [role, isAdmin]);

    useEffect(() => {
        if (!menu.some((m) => m.id === activeMenu)) setActiveMenu(menu[0]?.id || 'dashboard');
    }, [menu, activeMenu]);

    // யூசர் மற்றும் மெனு மாறும்போது டேட்டாபேஸிலிருந்து கார்டு தரவுகளை fetch செய்தல்
    useEffect(() => {
        if (!session) return;
        const fetchMenuMetrics = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/scrap/dashboard/summary?role=${role}&email=${session.email}&menu=${activeMenu}`);
                const data = await res.json();
                if (data.metrics) {
                    setDynamicMetrics(data.metrics);
                }
            } catch (err) {
                console.error("Failed to load menu metrics:", err);
            }
        };
        fetchMenuMetrics();
    }, [role, activeMenu, session]);

    const view = getView(role, activeMenu, session);
    const roleLabel = ROLES.find((r) => r.id === role)?.label ?? 'Admin';
    const isDirectory = Boolean(view.directoryMode);

    const handleMenu = (id) => {
        setActiveMenu(id);
        setNavOpen(false);
    };

    const handleSuccessfulAuth = (userData) => {
        const nextRole = userData.role || 'admin';
        setRole(nextRole);
        setActiveMenu(nextRole === 'admin' ? 'users' : 'dashboard');
        setSession(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    if (!session) {
        if (authMode === 'signup') {
            return (
                <SignupPage
                    onSignup={handleSuccessfulAuth}
                    onNavigateToLogin={() => setAuthMode('login')}
                />
            );
        }
        return (
            <LoginPage
                onLogin={handleSuccessfulAuth}
                onNavigateToSignup={() => setAuthMode('signup')}
            />
        );
    }

    return (
        <>
            <Helmet>
                <title>ReLoop Scrap Management Dashboard</title>
                <meta
                    name="description"
                    content="Role-based scrap management dashboard with pricing, partner, compliance and collection views for admins, corporates, hubs and delivery partners."
                />
            </Helmet>

            <div className="min-h-[100dvh] bg-[#f4f6f9] text-slate-900 lg:flex">
                <div className="hidden lg:block lg:sticky lg:top-0 lg:h-[100dvh]">
                    <Sidebar
                        role={role}
                        roleLabel={roleLabel}
                        activeMenu={activeMenu}
                        onSelect={handleMenu}
                        onLogout={() => {
                            localStorage.removeItem('user');
                            setSession(null);
                            setAuthMode('login');
                        }}
                        userEmail={session.email}
                    />
                </div>

                {navOpen && (
                    <div className="fixed inset-0 z-40 lg:hidden">
                        <button type="button" aria-label="Close menu" onClick={() => setNavOpen(false)} className="absolute inset-0 bg-slate-900/50" />
                        <div className="absolute inset-y-0 left-0 w-72">
                            <Sidebar
                                role={role}
                                roleLabel={roleLabel}
                                activeMenu={activeMenu}
                                onSelect={handleMenu}
                                onLogout={() => {
                                    localStorage.removeItem('user');
                                    setSession(null);
                                    setAuthMode('login');
                                }}
                                userEmail={session.email}
                            />
                        </div>
                    </div>
                )}

                <main className="flex-1 min-w-0">
                    <header className="sticky top-0 z-35 border-b border-slate-200/80 bg-[#f4f6f9]/90 backdrop-blur">
                        <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-8">
                            <div className="flex min-w-0 items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setNavOpen((v) => !v)}
                                    aria-label="Toggle navigation"
                                    className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white lg:hidden"
                                >
                                    {navOpen ? <X className="h-5 w-5" strokeWidth={1.8} /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
                                </button>
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h1 className="truncate text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{view.title}</h1>
                                        {view.subtitle ? (
                                            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-slate-500">
                                                {view.subtitle}
                                            </span>
                                        ) : null}
                                    </div>
                                    {!isDirectory && view.subtitle ? <p className="mt-0.5 text-xs text-slate-500">{view.subtitle}</p> : null}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {view.hubLabel ? (
                                    <span className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 sm:inline-flex">
                                        <MapPin className="h-3.5 w-3.5 text-slate-400" strokeWidth={2} />
                                        {view.hubLabel}
                                    </span>
                                ) : null}
                                <button
                                    type="button"
                                    aria-label="Notifications"
                                    className="relative grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white"
                                >
                                    <Bell className="h-5 w-5 text-slate-500" strokeWidth={1.8} />
                                    <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-emerald-500" />
                                </button>
                            </div>
                        </div>
                    </header>

                    <div className="space-y-6 px-5 py-6 lg:px-8 lg:py-8">
                        {/* டைனமிக் மெனு ஸ்டேட் கார்டுகள் (Dynamic Metric Cards) */}
                        {!isDirectory ? <MetricCards metrics={dynamicMetrics.length > 0 ? dynamicMetrics : view.metrics} /> : null}

                        {activeMenu === 'sell-scrap' ? (
                            <SellScrapForm role={role} />
                        ) : activeMenu === 'dashboard' || activeMenu === 'pickups' || activeMenu === 'collection' ? (
                            <RealPickupsList role={role} session={session} />
                        ) : activeMenu === 'payments' || activeMenu === 'payment-history' ? (
                            <PaymentHistory role={role} session={session} />
                        ) : (activeMenu === 'compliance' || activeMenu === 'compliance-report') && isAdmin ? (
                            <ComplianceReport />
                        ) : activeMenu === 'settings' || activeMenu === 'setting' ? (
                            <SettingsView session={session} />
                        ) : activeMenu === 'areas' || activeMenu === 'area' ? (
                            <AreaManagementView data={view} />
                        ) : (
                            <DataTable
                                title={isDirectory ? null : `${view.title} records`}
                                columns={view.table.columns}
                                rows={view.table.rows}
                                searchPlaceholder={isDirectory ? 'Search users by name, role or email…' : 'Filter records'}
                                filterLabel={isDirectory ? 'Filter by System Role' : undefined}
                                primaryAction={isDirectory ? { label: 'Provision New User' } : undefined}
                                showExport={!isDirectory}
                                actionLabel={isDirectory ? 'Edit Scope' : undefined}
                            />
                        )}

                        <footer className="pb-4 pt-2 text-xs text-slate-400">
                            ReLoop Scrap Management · live database · {new Date().getFullYear()}
                        </footer>
                    </div>
                </main>
            </div>
        </>
    );
}

export default HomePage;