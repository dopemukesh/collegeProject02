// src/utils/showToast.js

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (message, type = 'default') => {
    toast(message, { type });
};

export default showToast;
