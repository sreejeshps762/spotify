import React from 'react'
import './Trendingsongs_all.css'
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

function Trendingsongs_all() {
    return (
        <div>
            <div className="dom">
                <Serchbar />

                <section className="music_section">
                    <Library />

                    <div className="song_section  ">
                        <div className=" all_trendingsong_heder" >
                            Trending Songs
                        </div>
                        <div className='all_trendingsongs showall_trendingsongs'>
                            <div className="song_cards all_songs">
                                <img src="../public/jailer2.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>


                                <nav >
                                    <Link className="song_name" to={'/'}>Ala Bolelo</Link><br />
                                    <Link className="writer" to={'/'}>Anirudh Ravichanden,</Link><br />
                                    <Link className="writer" to={'/'}>Anuraj Kumaraj</Link>

                                </nav>




                            </div>
                            
                            <div className="song_cards all_songs">
                                <img src="../public/images.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav>
                                    <Link className="song_name" to={'/'}>Pesamale</Link><br />

                                    <Link className="writer" to={'/'}>Siri Xander,</Link><br />
                                    <Link className="writer" to={'/'}>Arra Aria Khayal</Link>
                                </nav>

                            </div>
                            <div className="song_cards all_songs">
                                <img src="../public/radhima.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav >
                                    <Link className="song_name" to={'/'}>Radhima-From"Think <p style={{ marginLeft: "5px" }}>India"</p></Link>

                                    <Link className="writer" to={'/'}>Sai Abhyankkar,</Link>
                                    <Link className="writer" to={'/'}>Nargis teji,</Link>
                                    <Link className="writer" to={'/'}>Asma Teji, </Link>
                                    <Link className="writer" to={'/'}>Vivek</Link>
                                </nav>


                            </div>
                            <div className="song_cards all_songs">
                                <img src="../public/sammi meri warr.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav>
                                    <Link className="song_name" to={'/'}>Sammi Meri Waar(Accousic)</Link><br />

                                    <Link className="writer" to={'/'}>Harrykahanhai</Link>
                                </nav>
                            </div>
                            <div  className="song_cards all_songs">
                                <img src="../public/rathinamo.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav>
                                    <Link className="song_name" to={'/'}>Rathinamo-Femail Version</Link><br />

                                    <Link className="writer" to={'/'}>Saurav Srisan,</Link>
                                    <Link className="writer" to={'/'}>Thanisha Gnanavel</Link>
                                </nav>
                            </div>
                            
                            <div className="song_cards all_songs">
                                <img src="../public/jailer2.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>


                                <nav >
                                    <Link className="song_name" to={'/'}>Ala Bolelo</Link><br />
                                    <Link className="writer" to={'/'}>Anirudh Ravichanden,</Link><br />
                                    <Link className="writer" to={'/'}>Anuraj Kumaraj</Link>

                                </nav>




                            </div>
                            <div className="song_cards all_songs">
                                <img src="../public/images.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav>
                                    <Link className="song_name" to={'/'}>Pesamale</Link><br />

                                    <Link className="writer" to={'/'}>Siri Xander,</Link><br />
                                    <Link className="writer" to={'/'}>Arra Aria Khayal</Link>
                                </nav>

                            </div>
                            <div className="song_cards all_songs">
                                <img src="../public/radhima.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav >
                                    <Link className="song_name" to={'/'}>Radhima-From"Think <p style={{ marginLeft: "5px" }}>India"</p></Link>

                                    <Link className="writer" to={'/'}>Sai Abhyankkar,</Link>
                                    <Link className="writer" to={'/'}>Nargis teji,</Link>
                                    <Link className="writer" to={'/'}>Asma Teji, </Link>
                                    <Link className="writer" to={'/'}>Vivek</Link>
                                </nav>


                            </div>
                            <div className="song_cards all_songs">
                                <img src="../public/sammi meri warr.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav>
                                    <Link className="song_name" to={'/'}>Sammi Meri Waar(Accousic)</Link><br />

                                    <Link className="writer" to={'/'}>Harrykahanhai</Link>
                                </nav>
                            </div>
                            <div className="song_cards all_songs">
                                <img src="../public/rathinamo.jpg" alt="" />
                                <div className="playbutton alltrendingsong_playbutton"><Link to={'/'}><IoPlaySharp className="play_icon" /></Link></div>
                                <nav>
                                    <Link className="song_name" to={'/'}>Rathinamo-Femail Version</Link><br />

                                    <Link className="writer" to={'/'}>Saurav Srisan,</Link>
                                    <Link className="writer" to={'/'}>Thanisha Gnanavel</Link>
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

export default Trendingsongs_all