import React from 'react';
import Header from '../components/Header';

const EmployeeDashboard: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h1>Employee Dashboard</h1>
        <p>Welcome, Employee! Track your timesheets here.</p>
        {/* Add employee specific content here */}
      </div>
    </>
  );
};

export default EmployeeDashboard;
