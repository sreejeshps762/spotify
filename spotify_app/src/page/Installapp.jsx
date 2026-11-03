
import React from 'react'
import './Installapp.css'
import Library from './Library'
import Serchbar from './Serchbar'
import Off_canvas from './Off_canvas'
import Preview_section from './Preview_section'
import { FaSpotify } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

function Installapp() {
  return (
    <div>
       <div className="dom">
      <Serchbar />

      <section className="music_section">
        <Library />

        <div className="song_section  ">
          <div className='download_page'>
          <div className="downloadpage_content">
            <div className='download_contents'>
                 <h5><FaSpotify className='download_spotify_icon'/>Spotify</h5>
            <h2 className='download_heding'>Download Spotify for Windows</h2>
            <p className='download_paragraph'>Enjoy high-quality audio and offline playback, plus Windows Game Bar integration and a friend activity feed that lets you see what your friends are listening to in real time.</p>
            <Link><button className='microsoft_button'>
           
                <img className='microsoft_icon' src="../public/store.jpg" alt="" />
                  <p>Download from the</p>
                  <h6>Microsoft Store</h6>
                

             
            </button></Link> 
            <br />
            <Link className='download_direct'>Download Direct From Spotify</Link>
            <div classname='download_img'>
                 <img src="../public/spotify download img.png" alt="" /> 

            </div>
            </div>
         
          </div>
          </div>
          

<div style={{marginTop:"60px"}}>
  <div className="line">
        <hr />

        </div>


      <div className="footer">
       
        <div className="sub_footer">
         
          <div className="footer_one">
            <h6>Company</h6>
            <Link to={'/'}>About</Link>
            <Link to={'/'}>Jobs</Link>
            <Link to={'/'}>For The Record</Link>

          </div>
          <div className="footer_one">
              <h6>Communities
</h6>
            <Link to={'/'}>For Artists</Link>
            <Link to={'/'}>For Creators</Link>
            <Link to={'/'}>For Authors</Link>
             <Link to={'/'}>Developers</Link>
            <Link to={'/'}>Advertising</Link>
            <Link to={'/'}>Investors</Link>
            <Link to={'/'}>Vendors</Link>

          </div>
          <div className="footer_one">
                          <h6>Useful links
</h6>
            <Link to={'/'}>Support</Link>
            <Link to={'/'}>Free Mobile App</Link>
            <Link to={'/'}>Popular by Country</Link>
             <Link to={'/'}>Top Song Lyrics</Link>
            <Link to={'/'}>Import your music</Link>
            

          </div>
          <div className="footer_one">
                               <h6>Spotify Plans
</h6>
            <Link to={'/'}>Premium Standard</Link>
            <Link to={'/'}>Premium Platinum</Link>
            <Link to={'/'}>Premium Student</Link>
             <Link to={'/'}>Spotify Free</Link>
            
          </div>
          <div className="footer_last">
            <div className="footer_last_icon">
            <Link to={'/'}><FaInstagram className="media_icons" /></Link>
            </div>

            <div className="footer_last_icon">
            <Link to={'/'}><FaXTwitter className="media_icons" /></Link>
            </div>

            <div className="footer_last_icon">
            <Link to={'/'}><CiFacebook className="media_icons" /></Link>
            </div>
            

          </div>
          

        </div>
      </div>
      
      <div className="line">
        <hr />

        </div>
        <div className="copy_right">
          <p>© 2026 Spotify AB</p>

        </div>
        </div>



        
        </div>

        <Off_canvas />
      </section>

      <Preview_section />
    </div>
    </div>
   
  )
}

export default Installapp
