import React from 'react'
import './All_radio.css'
import { Link } from "react-router-dom";
import Library from './Library'
import Serchbar from './Serchbar'
import Off_canvas from './Off_canvas'
import Preview_section from './Preview_section'
import { FaSpotify } from "react-icons/fa";
import { IoPlaySharp } from "react-icons/io5";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

function All_radio() {
    return (
        <div>
            <div className="dom">
                <Serchbar />

                <section className="music_section">
                    <Library />

                    <div className="song_section  ">
                        <div className=" all_trendingsong_heder" >

                            Popular Artist
                        </div>
                        <div className='all_trendingsongs showall_trendingsongs'>
                           <div className="song_cards all_songs">
                                            <img src="../public/ajith radio.jpg" alt="" />
                                            <div className="playbutton alltrendingsong_playbutton"><Link to={'/ajithradio'}><IoPlaySharp className="play_icon"/></Link></div>
                                           
                                           <p className="radio">
                          Public Playlist
                          With Pritam, A.R. Rahman, Jeet Gannguli</p> 
                                             
                                             
                                            
                                            
                                          </div>
                                          <div className="song_cards all_songs">
                                               <img src="../public/kk.jpg" alt="" />
                                                  <div className="playbutton alltrendingsong_playbutton"><Link to={'/kk'}><IoPlaySharp className="play_icon"/></Link></div>
                          
                                                  <p className="radio">With Pritam, Vishal-Shekhar, Vishal Mishra</p>
                          
                                            
                                          </div>
                                          <div className="song_cards all_songs"> 
                                                <img src="../public/Shreya radio.jpg" alt="" />
                                                 <div className="playbutton alltrendingsong_playbutton"><Link to={'/shreya'}><IoPlaySharp className="play_icon"/></Link></div>
                          
                                                 <p className="radio">With Vishal-Shekhar, Sachin-Jigar, A.R. Rahman</p>
                                            
                                            
                                          
                                            
                                            </div>
                                          <div className="song_cards all_songs">    
                                            <img src="../public/ilayaraja radio.jpg" alt="" />
                                             <div className="playbutton alltrendingsong_playbutton"><Link to={'/ilayaraja'}><IoPlaySharp className="play_icon"/></Link></div>
                                            <p className="radio">With K. J. Yesudas, Swarnalatha, Uma Ramanan</p>
                                            
                                            </div>
                                          <div className="song_cards all_songs">    
                                            <img src="../public/AR radio.jpg" alt="" />
                                             <div className="playbutton alltrendingsong_playbutton"><Link to={'/ar'}><IoPlaySharp className="play_icon"/></Link></div>
                                            <p className="radio">With Hariharan, Arijit Singh, Chinmayi</p>
                                        </div>

                                         <div className="song_cards all_songs">
                                                          <img src="../public/ajith radio.jpg" alt="" />
                                                          <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                                         
                                                         <p className="radio">
                                        Public Playlist
                                        With Pritam, A.R. Rahman, Jeet Gannguli</p> 
                                                           
                                                           
                                                          
                                                          
                                                        </div>
                                                        <div className="song_cards all_songs">
                                                             <img src="../public/kk.jpg" alt="" />
                                                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                        
                                                                <p className="radio">With Pritam, Vishal-Shekhar, Vishal Mishra</p>
                                        
                                                          
                                                        </div>
                                                        <div className="song_cards all_songs"> 
                                                              <img src="../public/Shreya radio.jpg" alt="" />
                                                               <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                        
                                                               <p className="radio">With Vishal-Shekhar, Sachin-Jigar, A.R. Rahman</p>
                                                          
                                                          
                                                        
                                                          
                                                          </div>
                                                        <div className="song_cards all_songs">    
                                                          <img src="../public/ilayaraja radio.jpg" alt="" />
                                                           <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                                          <p className="radio">With K. J. Yesudas, Swarnalatha, Uma Ramanan</p>
                                                          
                                                          </div>
                                                        <div className="song_cards all_songs">    
                                                          <img src="../public/AR radio.jpg" alt="" />
                                                           <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                                          <p className="radio">With Hariharan, Arijit Singh, Chinmayi</p>
                                                      </div>



                        </div>



                        <div style={{ marginTop: "60px" }}>
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

export default All_radio