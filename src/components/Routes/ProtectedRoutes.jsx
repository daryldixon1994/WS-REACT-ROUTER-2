import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoutes({ children }) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(children);
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return <div>{children}</div>;
}

export default ProtectedRoutes;
