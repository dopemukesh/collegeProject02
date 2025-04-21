import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getUser = () => {
        try {
            const userData = localStorage.getItem('currentUser');
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error('Error parsing user data:', error);
            return null;
        }
    };

    const setUserData = (userData) => {
        try {
            localStorage.setItem('currentUser', JSON.stringify(userData));
            setUser(userData);
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
        navigate('/');
    };

    useEffect(() => {
        const checkAuth = () => {
            const userData = getUser();
            if (userData) {
                setUser(userData);
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    return { 
        user, 
        loading, 
        setUserData, 
        handleLogout,
        isAuthenticated: !!user 
    };
};