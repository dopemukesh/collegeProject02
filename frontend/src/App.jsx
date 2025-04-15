import React from 'react';
import Routes from './Routes';  // Importing the Routes component
import { ToastContainer } from 'react-toastify'; // Import toast container
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const App = () => {
  return (
    <div>
      {/* Use the Routes component to manage all the routes */}
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // You can change this to "dark" or "colored" based on your preference

        
      />
    </div>
  );
};

export default App;
