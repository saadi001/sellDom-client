import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useSeller from '../../Hooks/useSeller';
import Loading from '../../Pages/Loading/Loading';

const SellerRoute = ({children}) => {
     const {user, loading} = useContext(AuthContext);
     const [isSeller, isSellerloading] = useSeller(user?.email)
     const location = useLocation();

     if(loading || isSellerloading){
          return <Loading></Loading>
     }
     if(user && isSeller){
          return children;
     }
     return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default SellerRoute;