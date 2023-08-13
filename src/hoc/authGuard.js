import React from 'react';
import { Navigate } from "react-router-dom";


export default function authGuard(ComposedComponent) {
    const authCheck = (props) => {
        const isAuth = localStorage.getItem("isAuth");

        console.log(isAuth)


        return isAuth ?<ComposedComponent {...props} /> : <Navigate to="/login" />;

    }

    return authCheck;
}