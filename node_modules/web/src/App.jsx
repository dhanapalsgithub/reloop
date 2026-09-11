import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate, useNavigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './components/scrap/LandingPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// ரவுட்டருக்கு ভেতরে useNavigate பயன்படுத்துவதற்காக ஒரு துணை காம்போனென்ட் (Wrapper Component)
function AppRoutes({ session, setSession, handleSuccessfulAuth }) {
    const navigate = useNavigate();

    return (
        <Routes>
            {/* 1. யார் வந்தாலும் முதல் பக்கம் (Landing Page) எப்போதுமே காட்டும் */}
            <Route 
                path="/" 
                element={
                    <LandingPage 
                        session={session}
                        onNavigateToLogin={() => navigate('/login')} 
                        onNavigateToSignup={() => navigate('/signup')}
                        onNavigateToDashboard={() => navigate('/dashboard')}
                    />
                } 
            />

            {/* 2. Login Page */}
            <Route 
                path="/login" 
                element={<LoginPage onLogin={(user) => { handleSuccessfulAuth(user); navigate('/dashboard'); }} />} 
            />

            {/* 3. Signup Page */}
            <Route 
                path="/signup" 
                element={<SignupPage onSignup={(user) => { handleSuccessfulAuth(user); navigate('/dashboard'); }} />} 
            />

            {/* 4. Dashboard / Home Page (லாகின் செய்தவர்கள் மட்டும் செல்லலாம் அல்லது பட்டன் மூலம் போகலாம்) */}
            <Route 
                path="/dashboard" 
                element={
                    session ? (
                        <HomePage session={session} setSession={setSession} />
                    ) : (
                        <Navigate to="/login" replace />
                    )
                } 
            />

            {/* வேறு ஏதேனும் தவறான URL வந்தால் லேண்டிங் பக்கத்திற்கே திருப்புதல் */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

function App() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setSession(JSON.parse(savedUser));
        }
    }, []);

    const handleSuccessfulAuth = (userData) => {
        setSession(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    return (
        <Router>
            <ScrollToTop />
            <AppRoutes 
                session={session} 
                setSession={setSession} 
                handleSuccessfulAuth={handleSuccessfulAuth} 
            />
        </Router>
    );
}

export default App;