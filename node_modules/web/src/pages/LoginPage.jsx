import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Recycle, Mail, Lock, ArrowRight, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { ROLES } from '@/data/scrapData';

function LoginPage({ onLogin, onNavigateToSignup }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (!email.trim() || !password) {
            setError('Enter your work email and password to continue.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        setLoading(true);

        try {
            // Backend API-க்கு லாகின் கோரிக்கை அனுப்புதல்
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim(), password }),
            });

            const data = await response.json();

            if (response.ok) {
                // பயனர் தரவை localStorage-ல் சேமித்தல்
                localStorage.setItem('reloop_user', JSON.stringify(data));
                
                // Parent component-க்கு லாகின் தகவலை அனுப்புதல்
                onLogin({ 
                    email: email.trim(), 
                    name: data.name || email.split('@')[0], 
                    role: data.role || role 
                });
            } else {
                setError(data.error || 'Invalid email or password.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Unable to connect to server. Make sure backend is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Sign in · ReLoop Scrap Management</title>
                <meta
                    name="description"
                    content="Sign in to the ReLoop scrap management dashboard for role-based collection, partner and user access control."
                />
            </Helmet>

            <div className="relative flex min-h-[100dvh] items-center justify-center bg-[#f4f6f9] px-4 py-10">
                <div
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 12% 18%, rgba(15,23,42,0.06), transparent 42%), radial-gradient(circle at 88% 78%, rgba(16,185,129,0.08), transparent 40%)',
                    }}
                />

                <div className="relative w-full max-w-[420px]">
                    <div className="mb-8 flex flex-col items-center text-center">
                        <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/15">
                            <Recycle className="h-6 w-6" strokeWidth={1.8} />
                        </span>
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">ReLoop Console</h1>
                        <p className="mt-1.5 text-sm text-slate-500">Scrap network access · Tamil Nadu ops</p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)]"
                    >
                        <div className="mb-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Secure access</p>
                            <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">Sign in to continue</h2>
                        </div>

                        <div className="space-y-4">
                            {/* <div className="space-y-2">
                                <label htmlFor="role" className="text-sm font-medium text-slate-700">
                                    Sign in as
                                </label>
                                <div className="relative">
                                    <ShieldCheck className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
                                    <select
                                        id="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-9 text-sm font-medium text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                                    >
                                        {ROLES.map((r) => (
                                            <option key={r.id} value={r.id}>
                                                {r.label} — {r.hint}
                                            </option>
                                        ))}
                                    </select>
                                    <svg className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                                        <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div> */}  

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                                    Work email
                                </label>
                                <div className="relative">
                                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
                                    <input
                                        id="email"
                                        type="email"
                                        autoComplete="username"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@scrapflow.in"
                                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium text-slate-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
                                    <input
                                        id="password"
                                        type={showPw ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-11 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPw((v) => !v)}
                                        aria-label={showPw ? 'Hide password' : 'Show password'}
                                        className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-slate-400 hover:text-slate-700"
                                    >
                                        {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {error ? (
                            <p className="mt-4 rounded-lg bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700 ring-1 ring-rose-100" role="alert">
                                {error}
                            </p>
                        ) : null}

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900, text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99] disabled:opacity-70"
                        >
                            {loading ? 'Signing in…' : 'Sign in'}
                            {!loading ? <ArrowRight className="h-4 w-4" strokeWidth={2} /> : null}
                        </button>

                        <div className="mt-4 text-center">
                            {onNavigateToSignup ? (
                                <button
                                    type="button"
                                    onClick={onNavigateToSignup}
                                    className="text-xs text-slate-500 hover:text-slate-900 font-medium"
                                >
                                    Don't have an account? Create account
                                </button>
                            ) : null}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage;