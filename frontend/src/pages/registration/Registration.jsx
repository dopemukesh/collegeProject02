// src/pages/Registration/Registration.jsx

import React, { useState } from 'react';
import Container from '../../components/Common/Container/Container';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ForgetPasswordForm from './ForgetPasswordForm';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../config';

const Registration = () => {
    const [activeForm, setActiveForm] = useState('login');
    const [formData, setFormData] = useState({ fullname: '', email: '', password: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e, type) => {
        e.preventDefault();

        const payload =
            type === 'signup'
                ? { username: formData.fullname, email: formData.email, password: formData.password }
                : { email: formData.email, password: formData.password };

        try {
            const res = await fetch(`${BASE_URL}/${type}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(data.message, 'success');
                if (type === 'login') {
                    localStorage.setItem('currentUser', JSON.stringify(data.user));
                    setTimeout(() => (window.location.href = '/home'), 1500);
                } else if (type === 'signup') {
                    setActiveForm('login');
                    setFormData({ fullname: '', email: '', password: '' });
                }
            } else {
                toast.error(data.message, 'error');
            }
        } catch (err) {
            console.error(`${type} error:`, err);
            toast.error('Something went wrong! Please try again.', 'error');
        }
    };

    return (
        <Container className='bg-neutral-50 text-neutral-800'>
            <div className="h-screen flex items-center justify-center px-4">
                <div className="overflow-hidden border border-purple-200 rounded-2xl shadow-xl max-w-md w-full">
                    {/* Header */}
                    <div className="bg-gradient-to-tl from-blue-50 via-white via-30% to-[#8400ff]/5 border-b-2 p-6">
                        <h1 className="font-semibold">
                            {activeForm === 'login' && 'Welcome Back'}
                            {activeForm === 'signup' && 'Create Account'}
                            {activeForm === 'forget-password' && 'Reset Password'}
                        </h1>
                        <p className="text-sm text-neutral-500">
                            {activeForm === 'login' && 'Sign in to access your account'}
                            {activeForm === 'signup' && 'Join our community and start your journey'}
                            {activeForm === 'forget-password' && 'Enter your email to reset your password'}
                        </p>
                    </div>

                    {/* Render Form */}
                    {activeForm === 'login' && (
                        <LoginForm
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            switchToSignup={() => setActiveForm('signup')}
                            switchToForget={() => setActiveForm('forget-password')}
                        />
                    )}

                    {activeForm === 'signup' && (
                        <SignupForm
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            switchToLogin={() => setActiveForm('login')}
                        />
                    )}

                    {activeForm === 'forget-password' && (
                        <ForgetPasswordForm
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            switchToLogin={() => setActiveForm('login')}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Registration;
