import React from 'react'
import './All_albums.css'
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

function All_albums() {
    return (
        <div>
            <div className="dom">
                <Serchbar />

                <section className="music_section">
                    <Library />

                    <div className="song_section  ">
                        <div className=" all_trendingsong_heder" >

                            Popular albums
                        </div>
                        <div className='all_trendingsongs'>
                            <div className="song_cards all_songs">
                                <img src="../public/Ashiqui.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>


                                <nav >
                                    <Link className="song_name" to={'/'}>Aashiqui2</Link><br />
                                    <Link className="writer" to={'/'}>Mithoon,</Link><br />
                                    <Link className="writer" to={'/'}>Ankit Tiwari,</Link>
                                    <Link className="writer" to={'/'}>jeet Gannguli</Link>

                                </nav>




                            </div>
                            <div className="song_cards all_songs ">
                                <img src="../public/love song.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav>
                                    <Link className="song_name" to={'/'}>Ultimate Love Songs-Arijit Singh</Link><br />

                                    <Link className="writer" to={'/'}>Arijith sing</Link><br />

                                </nav>

                            </div>
                            <div className="song_cards all_songs" >
                                <img src="../public/memoris.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav >
                                    <Link className="song_name" to={'/'}>Making Memoris<p style={{ marginLeft: "5px" }}></p></Link>

                                    <Link className="writer" to={'/'}>Karan Aujila,</Link>
                                    <Link className="writer" to={'/'}>Ikky</Link>

                                </nav>


                            </div>
                            <div className="song_cards all_songs">
                                <img src="../public/jab we met.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav>
                                    <Link className="song_name" to={'/'}>Jam We Met</Link><br />

                                    <Link className="writer" to={'/'}>Pritam,</Link>

                                    <Link className="writer" to={'/'}>Irshad Kamil,</Link>

                                    <Link className="writer" to={'/'}>Sandesh Shandlya</Link>
                                </nav>
                            </div>
                            <div className="song_cards all_songs">
                                <img src="../public/jo thum mere ho.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav>
                                    <Link className="song_name" to={'/'}>Jo Tum Mere Ho</Link><br />

                                    <Link className="writer" to={'/'}>Anuv Jain</Link>

                                </nav>
                            </div>
                            <div className="song_cards all_songs">
                                              <img src="../public/Ashiqui.jpg" alt="" />
                                              <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                             
                                              
                                              <nav >
                                               <Link className="song_name" to={'/'}>Aashiqui2</Link><br />
                                               <Link className="writer" to={'/'}>Mithoon,</Link><br />
                                               <Link className="writer" to={'/'}>Ankit Tiwari,</Link>
                                                 <Link className="writer" to={'/'}>jeet Gannguli</Link>
                            
                                               </nav>
                                               
                                               
                                              
                                              
                                            </div>
                                            <div className="song_cards all_songs">
                                                   <img src="../public/love song.jpg" alt="" />
                                                    <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                                   <nav>
                                                   <Link className="song_name" to={'/'}>Ultimate Love Songs-Arijit Singh</Link><br />
                                              
                                              <Link className="writer" to={'/'}>Arijith sing</Link><br />
                                             
                                             </nav>
                                              
                                            </div>
                                            <div className="song_cards all_songs"> 
                                                  <img src="../public/memoris.jpg" alt="" />
                                                   <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                                  <nav >
                                                    <Link className="song_name" to={'/'}>Making Memoris<p style={{marginLeft:"5px"}}></p></Link>
                                              
                                              <Link className="writer" to={'/'}>Karan Aujila,</Link>
                                              <Link className="writer" to={'/'}>Ikky</Link>
                                             
                                              </nav>
                                            
                                              
                                              </div>
                                            <div className="song_cards all_songs">    
                                              <img src="../public/jab we met.jpg" alt="" />
                                               <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                              <nav>
                                                    <Link className="song_name" to={'/'}>Jam We Met</Link><br />
                                              
                                              <Link className="writer" to={'/'}>Pritam,</Link>
                                              
                                              <Link className="writer" to={'/'}>Irshad Kamil,</Link>
                                              
                                              <Link className="writer" to={'/'}>Sandesh Shandlya</Link>
                                              </nav>
                                              </div>
                                            <div className="song_cards all_songs">    
                                              <img src="../public/jo thum mere ho.jpg" alt="" />
                                               <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                              <nav>
                                                   <Link className="song_name" to={'/'}>Jo Tum Mere Ho</Link><br />
                                              
                                              <Link className="writer" to={'/'}>Anuv Jain</Link>
                                             
                                              </nav>
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

export default All_albums