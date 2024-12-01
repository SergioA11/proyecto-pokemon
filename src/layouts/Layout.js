import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {children}
      </div>
    </>
  );
};

export default Layout;
