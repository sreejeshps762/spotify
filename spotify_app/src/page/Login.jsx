import React from 'react'
import './Login.css'
import { FaSpotify } from "react-icons/fa";
import {Link} from "react-router-dom"

function Sign_in() {
  return (
    <div className='login_page'>
        <div className='login'>
          <FaSpotify className='login_sptifyicon'/>
          <h1>Welcome back</h1>
          
          <input type="text" placeholder='enter email' />
             <input
                    // value={password}
                    // onChange={(e) => {
                    //     setPassword(e.target.value)
                    //     setMessage("")
                    // }}
                    type="password"
                    placeholder=" enter Password"
                />
          <br />
          <button className='countinue_button'>Countinue</button>
          <p>or</p>
          <button className='other_lgin_button'>Countinue with phone number</button>
           <button className='other_lgin_button'>Countinue with google</button>
            <button className='other_lgin_button'>Countinue with facebook</button>
             <button className='other_lgin_button'>Countinue with apple</button>

             <p className='option'>Don't have an account?</p>
             <Link to={'/signup'} className='login_link'>Sign up</Link>
      
        </div>


    </div>
  )
}

export default Sign_in