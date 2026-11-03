import React from 'react'
import {Link} from "react-router-dom"
import './Navbar.css'
import { GrInstallOption } from "react-icons/gr";

function Navbar() {
  return (
    <div className='links'>
        <nav className='download_section'>
           <Link to={'#'}>Premium</Link>
            <Link to={'#'}>Support</Link>
             <Link to={'#'}>Download</Link>
             </nav>
              <div ><hr /></div>
            
             <nav className='login_section'>
               <GrInstallOption className='install_icon'/>
              
             <Link to={'/install'}>install App</Link>
             <Link to={'/signup'}>Sign up</Link>
             <Link to={'/login'}><button className='signin_button'>Login</button></Link>
             </nav>
             
    </div>
  )
}

export default Navbar