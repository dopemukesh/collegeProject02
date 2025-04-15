// src/pages/Registration/FormField.jsx

import React from 'react';

const FormField = ({ label, name, type, value, onChange, placeholder, autoComplete }) => {
  return (
    <div className="form-group flex flex-col gap-1 mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="rounded-lg px-2 py-1.5 h-11 border border-gray-300 outline-none focus:border-[#8400ff]"
      />
    </div>
  );
};

export default FormField;
