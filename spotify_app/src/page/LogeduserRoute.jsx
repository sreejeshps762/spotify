import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function LogeduserRoute({ children }) {

    const logeduser = localStorage.getItem('isLoggedIn')
    const location = useLocation()

    return logeduser === 'true'
        ? children
        : <Navigate
            to="/"
            replace
            state={{ message: "Please Login Your Account" }}
        />
}

export default LogeduserRoute