import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
    const loginData = localStorage.getItem("lgnData")

    if (loginData) {
        return <Navigate to={"/login"} />
    } else {
        return children;
    }
}