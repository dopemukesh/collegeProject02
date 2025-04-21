// src/pages/Registration/ForgetPasswordForm.jsx

import React from 'react';
import FormField from './FormField';

const ForgetPasswordForm = ({ formData, handleChange, handleSubmit, switchToLogin }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e, 'forget-password')} className="form p-4">
            <FormField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
            />
            <p className="text-sm text-neutral-500 mb-4">We'll send you a link to reset your password</p>

            <div className="flex justify-between items-center pt-4 gap-2">
                <p className="text-sm">
                    <span className="text-[#8400ff] cursor-pointer" onClick={switchToLogin}>
                        Back to login
                    </span>
                </p>
                <button type="submit" className="bg-[#8400ff] hover:bg-[#6500c4] text-white rounded-lg px-6 py-2 text-sm">
                    Send Reset Link
                </button>
            </div>
        </form>
    );
};

export default ForgetPasswordForm;
