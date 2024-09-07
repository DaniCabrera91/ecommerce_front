import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';

const ProtectedRoute = ({ element, requiredRole }) => {
  const { token, role } = useContext(UserContext);

  const isAuthenticated = !!token;
  const hasRequiredRole = !requiredRole || role === requiredRole;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && !hasRequiredRole) {
    return <Navigate to="/403" />;
  }

  return element;
};

export default ProtectedRoute;
