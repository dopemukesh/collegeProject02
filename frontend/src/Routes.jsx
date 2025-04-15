import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './pages/registration/Registration';
import Home from './pages/home/Home';

const AppRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const user = localStorage.getItem('currentUser');
            setIsAuthenticated(!!user);
            setIsLoading(false);
        };

        checkAuth();
        // Add event listener for storage changes
        window.addEventListener('storage', checkAuth);

        return () => {
            window.removeEventListener('storage', checkAuth);
        };
    }, []);

    // Show loading state
    if (isLoading) {
        return null;
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/register"
                    element={isAuthenticated ? <Navigate to="/home" /> : <Registration />}
                />

                <Route
                    path="/home"
                    element={isAuthenticated ? <Home /> : <Navigate to="/register" />}
                />

                <Route
                    path="/"
                    element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/register" />}
                />
            </Routes>
        </Router>
    );
};

export default AppRoutes;