import React, { useState, useEffect } from 'react';
import Container from '../../components/Common/Container/Container';

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Get user data from localStorage
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            setUser(JSON.parse(userData));
        } else {
            // Redirect to login if no user data found
            window.location.href = '/';
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        window.location.href = '/';
    };

    if (!user) return null; // Don't render anything while checking user data

    return (
        <Container>
            <div className="min-h-screen p-6">
                <div className="max-w-4xl mx-auto">
                    {/* Welcome Section */}
                    <div className="bg-gradient-to-tr from-blue-50 via-white to-[#8400ff]/5 rounded-2xl p-8 shadow-lg border border-purple-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    Welcome, {user.username}! 👋
                                </h1>
                                <p className="text-gray-600">
                                    We're glad to have you here. Start exploring and enjoy your experience!
                                </p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-[#8400ff] hover:bg-[#6500c4] text-white rounded-lg transition duration-200"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Add more content sections here */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                            {/* Add quick action buttons or links */}
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                            {/* Add recent activity list */}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;