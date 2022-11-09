import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ children }) => {
   const { user, loader } = useContext(AuthContext);
   const location = useLocation();

   if (loader) {
      return (
         <div className="flex items-center justify-center space-x-2 h-screen">
            <div className="w-4 h-4 rounded-full animate-pulse bg-teal-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-teal-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-teal-600"></div>
         </div>
      );
   }

   if (user && user.email) {
      return children;
   }

   return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
