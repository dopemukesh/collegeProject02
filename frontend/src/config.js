// Local Development URL
// export const BASE_URL = "http://localhost:3000";

// If you want to use production URL in future:
// export const BASE_URL = "https://collegeproject02.onrender.com"; // production backend URL


// // conditional type 
const BASE_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000' // local backend URL
    : 'https://collegeproject02.onrender.com'; // actual backend URL aayega
