import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import Layout from './components/Layout';
const App: React.FC = () => {

  const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  // Use ReactNode instead of JSX.Element
  const RequireAuth = ({ children }: { children: ReactNode }) => {
    const user = getUser();
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
  };

  const RequireRole = ({ children, role }: { children: ReactNode; role: string }) => {
    const user = getUser();
    if (!user || user.role !== role) {
      return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <RequireAuth>
              <RequireRole role="admin">
                <Layout>
                  <AdminDashboard />
                </Layout>
              </RequireRole>
            </RequireAuth>
          }
        />

        <Route
          path="/employee"
          element={
            <RequireAuth>
              <RequireRole role="employee">
                <Layout>
                  <EmployeeDashboard />
                </Layout>
              </RequireRole>
            </RequireAuth>
          }
        />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
