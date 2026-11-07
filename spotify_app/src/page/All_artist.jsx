import React from 'react'
import './All_artist.css'
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

function All_artist() {
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
                        <div className='all_trendingsongs showall_trendingsongs'>
                            <div className="song_cards all_artist">
                                              <img src="../public/anirudh.jpg" alt="" />
                                              <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                             
                                              
                                              <nav >
                                               <Link className="song_name" to={'/'}>Anirudh Ravichanden</Link><br />
                                              <p className="artist">Artist</p>
                                               
                            
                                               </nav>
                                               
                                               
                                              
                                              
                                            </div>
                                            <div className="song_cards all_artist"  >
                                                   <img src="../public/MG.jpg" alt="" />
                                                    <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                                   <nav>
                                                   <Link className="song_name" to={'/'}>M.G Sreekumar</Link><br />
                                              
                                              <p className="artist">Artist</p>
                                              
                                             </nav>
                                              
                                            </div>
                                            <div className="song_cards all_artist"> 
                                                  <img src="../public/vineeth.jpg" alt="" />
                                                   <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                                  <nav >
                                                    <Link className="song_name" to={'/'}>Vineeth Sreenivasan</Link>
                                              
                                              <p className="artist">Artist</p>
                                             
                                              
                                              </nav>
                                            
                                              
                                              </div>
                                            <div className="song_cards all_artist">    
                                              <img src="../public/chithra.jpg" alt="" />
                                               <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                              <nav>
                                                    <Link className="song_name" to={'/'}>K.S Chithra</Link><br />
                                              
                                              <p className="artist">Artist</p>
                                              </nav>
                                              </div>
                                            <div className="song_cards all_artist">    
                                              <img src="../public/ajith sing.jpg" alt="" />
                                               <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                                              <nav>
                                                   <Link className="song_name" to={'/'}>Ajith Sing</Link><br />
                                                   <p className="artist">Artist</p>
                                              
                                              
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

export default All_artist