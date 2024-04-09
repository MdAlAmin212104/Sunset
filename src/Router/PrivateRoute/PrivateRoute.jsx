import React, { useContext } from 'react';
import { AuthProvider } from '../../Provider/Provider';

import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
      const { user } = useContext(AuthProvider)
      const location = useLocation()
      console.log(location);


      if (!user) {
            return <Navigate to='/login' state={location?.pathname || '/'} />
      }



      return (
            <div>
                  {children}
                  
            </div>
      );
};

export default PrivateRoute;