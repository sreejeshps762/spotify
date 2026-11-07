import React from 'react'
import {Link} from "react-router-dom"
import './Navbar.css'
import { GrInstallOption } from "react-icons/gr";

function Navbar() {
  return (
    <div className='links'>
        <nav className='download_section'>
           <Link to={'https://www.spotify.com/in-en/premium/'}>Premium</Link>
            <Link to={'https://support.spotify.com/in-en/'}>Support</Link>
             <Link to={'https://www.spotify.com/in-en/download/windows/'}>Download</Link>
             </nav>
              <div ><hr /></div>
            
             <nav className='login_section'>
             
              
             <Link className='INSTALLED_APP'  to={'/install'} >install App</Link>
             <Link className='signup_link' to={'/signup'}>Sign up</Link>
             <Link className='login_link' to={'/login'}><button className='signin_button'>Login</button></Link>
             </nav>
             
    </div>
  )
}

export default Navbar