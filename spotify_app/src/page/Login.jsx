
import React, { useState } from 'react'
import './Login.css'
import { FaSpotify } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"

function Sign_in() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handlesubmit = () => {

    const user = JSON.parse(localStorage.getItem("User")) || []

    const logeduser = user.find(
      (e) => e.Email === email && e.Password === password
    )

    if (logeduser) {

      // Save logged-in user
      localStorage.setItem(
        "loggedUser",
        JSON.stringify(logeduser)
      )

      setMessage("login success")

      navigate('/')

    } else {
      setMessage("invalid email or password")
    }
  }

  return (
    <div className='login_page'>
      <div className='login'>

        <FaSpotify className='login_sptifyicon' />
        <h1>Welcome back</h1>

        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setMessage("")
          }}
          type="email"
          placeholder="enter email"
        />

        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setMessage("")
          }}
          type="password"
          placeholder="enter password"
        />

        <br />

        <button
          className='countinue_button'
          onClick={handlesubmit}
        >
          Continue
        </button>

        <p style={{
          color: message === "login success" ? "green" : "red"
        }}>
          {message}
        </p>

        <p>or</p>

        <button className='other_lgin_button'>
          Continue with phone number
        </button>

        <button className='other_lgin_button'>
          Continue with google
        </button>

        <button className='other_lgin_button'>
          Continue with facebook
        </button>

        <button className='other_lgin_button'>
          Continue with apple
        </button>

        <p className='option'>Don't have an account?</p>
        <Link to={'/signup'} className='login_link'>
          Sign up
        </Link>

      </div>
    </div>
  )
}

export default Sign_in
