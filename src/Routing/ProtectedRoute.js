import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const isAuth= window.sessionStorage.getItem("Token Value:")
    return isAuth ? <Outlet/>: <Navigate to ="/loginpage" />;
 
};

export default ProtectedRoute;