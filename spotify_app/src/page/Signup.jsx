
import React, { useState } from 'react'
import './Signup.css'
import { FaSpotify } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

function Signup() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const handleCountinue = () => {

        // Check empty fields
        if (
            name.trim() === "" ||
            email.trim() === "" ||
            password.trim() === ""
        ) {
            setMessage("Please fill all the fields")
            return
        }

        // Get all registered users
        const allUsers =
            JSON.parse(localStorage.getItem("User")) || []

        // Check email already exists
        const user = allUsers.find(
            (e) =>
                e.Email?.toLowerCase() ===
                email.trim().toLowerCase()
        )

        if (user) {
            setMessage("Email already registered. Please login.")
            return
        }

        // Create new user
        const newUser = {
            Name: name.trim(),
            Email: email.trim(),
            Password: password
        }

        // Add new user to users array
        allUsers.push(newUser)

        // Store all users
        localStorage.setItem(
            "User",
            JSON.stringify(allUsers)
        )

        // Store current signup user details
        localStorage.setItem(
            "signupuser",
            JSON.stringify(newUser)
        )

        // Clear error message
        setMessage("")

        // Navigate to login page
        navigate("/login")
    }

    return (
        <div className='login_page'>
            <div className='login'>

                <FaSpotify className='login_sptifyicon' />

                <h1>Sign Up</h1>

                <h1 style={{ marginTop: "-20px" }}>
                    Start Listening
                </h1>

                {/* User Name */}
                <input
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                        setMessage("")
                    }}
                    type="text"
                    placeholder="User name"
                />

                {/* Email */}
                <input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setMessage("")
                    }}
                    type="email"
                    placeholder="name@domain.com"
                />

                {/* Password */}
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        setMessage("")
                    }}
                    type="password"
                    placeholder="Password"
                />

                <br />

                {/* Error Message */}
                <p style={{ color: "red" }}>
                    {message}
                </p>

                {/* Continue Button */}
                <button
                    className='countinue_button'
                    onClick={handleCountinue}
                >
                    Continue
                </button>

                <p>or</p>

                <button className='other_lgin_button'>
                    Sign up with phone number
                </button>

                <button className='other_lgin_button'>
                    Sign up with google
                </button>

                <button className='other_lgin_button'>
                    Sign up with apple
                </button>

                <p className='option'>
                    Already have an account?
                </p>

                <Link
                    to='/login'
                    className='signin_link'
                >
                    Login
                </Link>

            </div>
        </div>
    )
}

export default Signup
