import React, { useEffect, useState } from 'react'
import './Home.css'
import { AiOutlineSpotify } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom"
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

import Library from './Library';
import Top_songs from './Top_songs';
import Preview_section from './Preview_section';
import Example from './Off_canvas'
import Off_canvas from './Off_canvas';
import Serchbar from './Serchbar';

function Home() {

  const location = useLocation()
  const [msg, setMsg] = useState('')
const [closing, setClosing] = useState(false)

useEffect(() => {
    if (location.state?.message) {
        setMsg(location.state.message)
        setClosing(false)

        const timer = setTimeout(() => {
            setClosing(true)
        }, 2500)

        const removeTimer = setTimeout(() => {
            setMsg('')
            setClosing(false)
        }, 3200)

        return () => {
            clearTimeout(timer)
            clearTimeout(removeTimer)
        }
    }
}, [location])

  return (
    <div className='dom'>

      {msg && (
    <div className={`login_overlay ${closing ? 'fade-out' : ''}`}>
        <div className="login_alert">
            <h3>{msg}</h3>
            <Link to="/login" className="login_btn">
                Login
            </Link>
        </div>
    </div>
)}

        <Serchbar/>

        <section className='music_section'>
          <Library/>
          <Top_songs/>
          <Off_canvas/>
        </section>

        <Preview_section/>

    </div>
  )
}

export default Home