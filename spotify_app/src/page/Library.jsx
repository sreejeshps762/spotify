import React from 'react'
import './LIbrary.css'
import {Link} from "react-router-dom"
import { IoMdAdd } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import { MdLanguage } from "react-icons/md";

function Library() {
  return (
    <div className='library'>
      <div className='heading'>
        <h2>Your Library</h2>
         <Link  to={'#'}><IoMdAdd className='add_icon' /></Link>
        
      </div>
      
      <div className='library_content'>
        <div className='create_playlist' >
          <h4>Create Your Frist Playlist</h4>
          <p>it's easy, we'll help you</p>
         <button id='btn'>Create Playlist</button>
          
       
      
        </div>
        <div className='create_playlist' style={{height:"160px"}}>
          <h4 style={{marginLeft:"-27px"}}>Lets Find Some Prodcast to </h4>
          <h4 style={{marginLeft:"-182px",marginTop:"-10px"}}>Follow</h4>
          <p style={{marginLeft:"-48px"}}>we'll keep you updated on new </p>
          <p style={{marginTop:"-5px",marginLeft:"-180px"}}>episodes</p>
          <button>browse prodcast</button>
        </div>
      

        </div>

       
        
            <div className='languge'>
              <nav className='privecy_link'>
                <Link to={'/'}>Legal</Link>
                <Link to={'/'}>Safety&PrivacyCenter</Link>
                <Link to={'/'}>Privacy Policy</Link>
                <br />
                <Link to={'/'}>Cookies</Link>
                <Link to={'/'}>AboutAds</Link>
                <Link to={'/'}>Accessibility</Link>
                <br />
                <Link to={'/'}>Cookies</Link>
              </nav>

              <Link><button className='lng_btn'><MdLanguage className='lng_icon' /><p>English</p></button></Link>
              
        

      </div> 
        
       
      
      

    </div>
  )
}

export default Library