
import React from 'react'
import { Navigate } from 'react-router-dom'

function LogeduserRoute({ children }) {

    const logeduser = localStorage.getItem('isLoggedIn')

    return logeduser === 'true'
        ? children
        : <Navigate to="/" replace state={{ message: "Please Login First" }} />
}

export default LogeduserRoute
