// src/pages/Registration/LoginForm.jsx

import React from 'react';
import FormField from './FormField';

const LoginForm = ({ formData, handleChange, handleSubmit, switchToSignup, switchToForget }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e, 'login')} className="form p-4">
            <FormField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
            />
            <FormField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
            />

            <div className="text-sm text-right mb-4">
                <span className="text-[#8400ff] cursor-pointer" onClick={switchToForget}>
                    Forget Password?
                </span>
            </div>

            <div className="flex justify-between items-center pt-4 gap-2">
                <p className="text-sm">
                    Don’t have an account?{' '}
                    <span className="text-[#8400ff] cursor-pointer" onClick={switchToSignup}>
                        Register
                    </span>
                </p>
                <button type="submit" className="bg-[#8400ff] hover:bg-[#6500c4] text-white rounded-lg px-6 py-2 text-sm">
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
