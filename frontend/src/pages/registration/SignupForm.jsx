// src/pages/Registration/SignupForm.jsx

import React from 'react';
import FormField from './FormField';

const SignupForm = ({ formData, handleChange, handleSubmit, switchToLogin }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e, 'signup')} className="form p-4">
            <FormField label="Full Name" name="fullname" type="text" value={formData.fullname} onChange={handleChange} placeholder="Enter your full name" autoComplete="name" />
            <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" autoComplete="email" />
            <FormField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Create a password" autoComplete="new-password" />

            <div className="flex justify-between items-center pt-4 gap-2">
                <p className="text-sm">
                    Already have an account?{' '}
                    <span className="text-[#8400ff] cursor-pointer" onClick={switchToLogin}>
                        Login
                    </span>
                </p>
                <button type="submit" className="bg-[#8400ff] hover:bg-[#6500c4] text-white rounded-lg px-6 py-2 text-sm">
                    Create Account
                </button>
            </div>
        </form>
    );
};

export default SignupForm;
