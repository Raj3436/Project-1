import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth, useUser} from './Services/Context/Auth-Context';

const PrivateRoute = ({allowedRoles, element: Component}) => {
  const {isAuthenticated} = useAuth();
  const user = useUser();
  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  if (user && !allowedRoles.includes(user.role)) {
    return <Navigate to='/dashboard' replace />;
  }

  return Component;
};

export default PrivateRoute;
