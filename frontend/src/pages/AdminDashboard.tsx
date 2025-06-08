import React from 'react';
import Header from '../components/Header';

const AdminDashboard: React.FC = () => {
  return (
    <>
    
      <div className="container mt-4">
        <h1>Admin Dashboard</h1>
        <p>Welcome, Admin! Manage your organization here.</p>
        {/* Add admin specific content here */}
      </div>
    </>
  );
};

export default AdminDashboard;
