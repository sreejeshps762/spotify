
import React from "react";
import { Link } from "react-router-dom";
import "./Top_songs.css";
import { IoPlaySharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

function Top_songs() {
  return (
    <section className="song_section">
      <div className='song_content'>
      <div className="trending_songs">

        <Link className="header" to="/">
          Trending Songs
        </Link>

        <Link className="showeall" to="/trendingsongs_all">
          Show all
        </Link>

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">

            {/* First slide */}
            <div className="carousel-item active">
              <div className="song_container">
                <div className="song_cards">
                  <img src="/jailer2.jpg" alt="" />
                  <div className="playbutton"><Link to={'/playsongs'}><IoPlaySharp className="play_icon"/></Link></div>
                 
                  
                  <nav >
                   <Link className="song_name" to={'/playsongs'}>Ala Bolelo</Link><br />
                   <Link className="writer" to={'/'}>Anirudh Ravichanden,</Link><br />
                   <Link className="writer" to={'/'}>Anuraj Kumaraj</Link>

                   </nav>
                   
                   
                  
                  
                </div>
                <div className="song_cards">
                       <img src="/images.jpg" alt="" />
                        <div className="playbutton"><Link to={'/pezamale'}><IoPlaySharp className="play_icon"/></Link></div>
                       <nav>
                       <Link className="song_name" to={'/pezamale'}>Pesamale</Link><br />
                  
                  <Link className="writer" to={'/'}>Siri Xander,</Link><br />
                  <Link className="writer" to={'/'}>Arra Aria Khayal</Link>
                 </nav>
                  
                </div>
                <div className="song_cards"> 
                      <img src="/radhima.jpg" alt="" />
                       <div className="playbutton"><Link to={'/rathimasong'}><IoPlaySharp className="play_icon"/></Link></div>
                      <nav >
                        <Link className="song_name" to={'/rathimasong'}>Radhima-From"Think <p style={{marginLeft:"5px"}}>India"</p></Link>
                  
                  <Link className="writer" to={'/'}>Sai Abhyankkar,</Link>
                  <Link className="writer" to={'/'}>Nargis teji,</Link>
                  <Link  className="writer" to={'/'}>Asma Teji, </Link>
                  <Link className="writer" to={'/'}>Vivek</Link>
                  </nav>
                
                  
                  </div>
                <div className="song_cards">    
                  <img src="/sammi meri warr.jpg" alt="" />
                   <div className="playbutton"><Link to={'/sammimerisongs'}><IoPlaySharp className="play_icon"/></Link></div>
                  <nav>
                        <Link className="song_name" to={'/sammimerisongs'}>Sammi Meri Waar(Accousic)</Link><br />
                  
                  <Link className="writer" to={'/'}>Harrykahanhai</Link>
                  </nav>
                  </div>
                <div className="song_cards">    
                  <img src="/rathinamo.jpg" alt="" />
                   <div className="playbutton"><Link to={'/rathinamosongs'}><IoPlaySharp className="play_icon"/></Link></div>
                  <nav>
                       <Link className="song_name" to={'/rathinamosongs'}>Rathinamo-Femail Version</Link><br />
                  
                  <Link className="writer" to={'/'}>Saurav Srisan,</Link>
                  <Link className="writer" to={'/'}>Thanisha Gnanavel</Link>
                  </nav>
                  </div>
              </div>
            </div>

            {/* Second slide */}
            <div className="carousel-item">
              <div className="song_container">
                 <div className="song_cards">
                  <img src="/jailer2.jpg" alt="" />
                  <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                 
                  
                  <nav >
                   <Link className="song_name" to={'/'}>Ala Bolelo</Link><br />
                   <Link className="writer" to={'/'}>Anirudh Ravichanden,</Link><br />
                   <Link className="writer" to={'/'}>Anuraj Kumaraj</Link>

                   </nav>
                   
                   
                  
                  
                </div>
                <div className="song_cards">
                       <img src="/images.jpg" alt="" />
                        <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                       <nav>
                       <Link className="song_name" to={'/'}>Pesamale</Link><br />
                  
                  <Link className="writer" to={'/'}>Siri Xander,</Link><br />
                  <Link className="writer" to={'/'}>Arra Aria Khayal</Link>
                 </nav>
                  
                </div>
                <div className="song_cards"> 
                      <img src="/radhima.jpg" alt="" />
                       <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                      <nav >
                        <Link className="song_name" to={'/'}>Radhima-From"Think <p style={{marginLeft:"5px"}}>India"</p></Link>
                  
                  <Link className="writer" to={'/'}>Sai Abhyankkar,</Link>
                  <Link className="writer" to={'/'}>Nargis teji,</Link>
                  <Link  className="writer" to={'/'}>Asma Teji, </Link>
                  <Link className="writer" to={'/'}>Vivek</Link>
                  </nav>
                
                  
                  </div>
                <div className="song_cards">    
                  <img src="/sammi meri warr.jpg" alt="" />
                   <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                  <nav>
                        <Link className="song_name" to={'/'}>Sammi Meri Waar(Accousic)</Link><br />
                  
                  <Link className="writer" to={'/'}>Harrykahanhai</Link>
                  </nav>
                  </div>
                <div className="song_cards">    
                  <img src="/rathinamo.jpg" alt="" />
                   <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                  <nav>
                       <Link className="song_name" to={'/'}>Rathinamo-Femail Version</Link><br />
                  
                  <Link className="writer" to={'/'}>Saurav Srisan,</Link>
                  <Link className="writer" to={'/'}>Thanisha Gnanavel</Link>
                  </nav>
                  </div>
              </div>
            </div>

        

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
      

      <Link style={{marginLeft:"-612px"}}  className="header mediaqurry_heder" to="/">
          Popular Artist
        </Link>



    
        
        

      <div
  id="popularArtistCarousel"
  className="carousel slide"
  data-bs-ride="false"
  data-bs-interval="false"
>
          <div className="carousel-inner">

            {/* First slide */}
            <div className="carousel-item active">
              
                <div className="artist_section">
                    <Link className="showeall all_artist" to="/allartist">
          Show all 
        </Link>
                  <div className="song_container">
                <div className="song_cards popular_artist">
                  <img src="/anirudh.jpg" alt="" />
                  <div className="playbutton"><Link to={'/anirudh'}><IoPlaySharp className="play_icon"/></Link></div>
                 
                  
                  <nav >
                   <Link className="song_name" to={'/anirudh'}>Anirudh Ravichanden</Link><br />
                  <p className="artist">Artist</p>
                   

                   </nav>
                   
                   
                  
                  
                </div>
                <div className="song_cards popular_artist"  >
                       <img src="/MG.jpg" alt="" />
                        <div className="playbutton"><Link to={'/mgsongs'}><IoPlaySharp className="play_icon"/></Link></div>
                       <nav>
                       <Link className="song_name" to={'/mgsongs'}>M.G Sreekumar</Link><br />
                  
                  <p className="artist">Artist</p>
                  
                 </nav>
                  
                </div>
                <div className="song_cards popular_artist"> 
                      <img src="/vineeth.jpg" alt="" />
                       <div className="playbutton"><Link to={'/veenithsongs'}><IoPlaySharp className="play_icon"/></Link></div>
                      <nav >
                        <Link className="song_name" to={'/veenithsongs'}>Vineeth Sreenivasan</Link>
                  
                  <p className="artist">Artist</p>
                 
                  
                  </nav>
                
                  
                  </div>
                <div className="song_cards popular_artist">    
                  <img src="/chithra.jpg" alt="" />
                   <div className="playbutton"><Link to={'/chithrasongs'}><IoPlaySharp className="play_icon"/></Link></div>
                  <nav>
                        <Link className="song_name" to={'/chithrasongs'}>K.S Chithra</Link><br />
                  
                  <p className="artist">Artist</p>
                  </nav>
                  </div>
                <div className="song_cards popular_artist">    
                  <img src="/ajith sing.jpg" alt="" />
                   <div className="playbutton"><Link to={'/ajithsongs'}><IoPlaySharp className="play_icon"/></Link></div>
                  <nav>
                       <Link className="song_name" to={'/ajithsongs'}>Ajith Sing</Link><br />
                       <p className="artist">Artist</p>
                  
                  
                  </nav>
                  </div>
              </div>
            </div>

            {/* Second slide */}
            <div className="carousel-item active">
              <div className="song_container">
                
              </div>
            </div> 

        

          </div>
         {/* <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#popularArtistCarousel"
  data-bs-slide="prev"
>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>

          <button
  className="carousel-control-next"
  type="button"
  data-bs-target="#popularArtistCarousel"
  data-bs-slide="next"
>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button> */}

        </div>
        </div>
        </div>

         {/* <div className='song_content'> */}
      <div className="trending_songs popular_album" >

        <Link style={{marginLeft:"-510px"}} className="header album_heder" to="/">
          Popular Albums And Singles
        </Link>

        <Link className="showeall" to="/allalbums">
          Show all
        </Link>

        <div
          id="PopularAlbumCaros"
          className="carousel slide"
          data-bs-ride="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">

            {/* First slide */}
            <div className="carousel-item active">
              <div className="song_container">
                <div className="song_cards">
                  <img src="/Ashiqui.jpg" alt="" />
                  <div className="playbutton"><Link to={'/Ashiquisongs'}><IoPlaySharp className="play_icon"/></Link></div>
                 
                  
                  <nav >
                   <Link className="song_name" to={'/Ashiquisongs'}>Aashiqui2</Link><br />
                   <Link className="writer" to={'/'}>Mithoon,</Link><br />
                   <Link className="writer" to={'/'}>Ankit Tiwari,</Link>
                     <Link className="writer" to={'/'}>jeet Gannguli</Link>

                   </nav>
                   
                   
                  
                  
                </div>
                <div className="song_cards ">
                       <img src="/love song.jpg" alt="" />
                        <div className="playbutton"><Link to={'/ultimatesongs'}><IoPlaySharp className="play_icon"/></Link></div>
                       <nav>
                       <Link className="song_name" to={'/ultimatesongs'}>Ultimate Love Songs-Arijit Singh</Link><br />
                  
                  <Link className="writer" to={'/'}>Arijith sing</Link><br />
                 
                 </nav>
                  
                </div>
                <div className="song_cards"> 
                      <img src="/memoris.jpg" alt="" />
                       <div className="playbutton"><Link to={'/memorissong'}><IoPlaySharp className="play_icon"/></Link></div>
                      <nav >
                        <Link className="song_name" to={'/memorissong'}>Making Memoris<p style={{marginLeft:"5px"}}></p></Link>
                  
                  <Link className="writer" to={'/'}>Karan Aujila,</Link>
                  <Link className="writer" to={'/'}>Ikky</Link>
                 
                  </nav>
                
                  
                  </div>
                <div className="song_cards">    
                  <img src="/jab we met.jpg" alt="" />
                   <div className="playbutton"><Link to={'/jamsongs'}><IoPlaySharp className="play_icon"/></Link></div>
                  <nav>
                        <Link className="song_name" to={'/jamsongs'}>Jam We Met</Link><br />
                  
                  <Link className="writer" to={'/'}>Pritam,</Link>
                  
                  <Link className="writer" to={'/'}>Irshad Kamil,</Link>
                  
                  <Link className="writer" to={'/'}>Sandesh Shandlya</Link>
                  </nav>
                  </div>
                <div className="song_cards">    
                  <img src="/jo thum mere ho.jpg" alt="" />
                   <div className="playbutton"><Link to={'/jotumsongs'}><IoPlaySharp className="play_icon"/></Link></div>
                  <nav>
                       <Link className="song_name" to={'/jotumsongs'}>Jo Tum Mere Ho</Link><br />
                  
                  <Link className="writer" to={'/'}>Anuv Jain</Link>
                 
                  </nav>
                  </div>
              </div>
            </div>

            {/* Second slide */}
            <div className="carousel-item">
              <div className="song_container">
                <div className="song_cards">
                  <img src="/Ashiqui.jpg" alt="" />
                  <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                 
                  
                  <nav >
                   <Link className="song_name" to={'/'}>Aashiqui2</Link><br />
                   <Link className="writer" to={'/'}>Mithoon,</Link><br />
                   <Link className="writer" to={'/'}>Ankit Tiwari,</Link>
                     <Link className="writer" to={'/'}>jeet Gannguli</Link>

                   </nav>
                   
                   
                  
                  
                </div>
                <div className="song_cards ">
                       <img src="/love song.jpg" alt="" />
                        <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                       <nav>
                       <Link className="song_name" to={'/'}>Ultimate Love Songs-Arijit Singh</Link><br />
                  
                  <Link className="writer" to={'/'}>Arijith sing</Link><br />
                 
                 </nav>
                  
                </div>
                <div className="song_cards"> 
                      <img src="/memoris.jpg" alt="" />
                       <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                      <nav >
                        <Link className="song_name" to={'/'}>Making Memoris<p style={{marginLeft:"5px"}}></p></Link>
                  
                  <Link className="writer" to={'/'}>Karan Aujila,</Link>
                  <Link className="writer" to={'/'}>Ikky</Link>
                 
                  </nav>
                
                  
                  </div>
                <div className="song_cards">    
                  <img src="/jab we met.jpg" alt="" />
                   <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                  <nav>
                        <Link className="song_name" to={'/'}>Jam We Met</Link><br />
                  
                  <Link className="writer" to={'/'}>Pritam,</Link>
                  
                  <Link className="writer" to={'/'}>Irshad Kamil,</Link>
                  
                  <Link className="writer" to={'/'}>Sandesh Shandlya</Link>
                  </nav>
                  </div>
                <div className="song_cards">    
                  <img src="/jo thum mere ho.jpg" alt="" />
                   <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                  <nav>
                       <Link className="song_name" to={'/'}>Jo Tum Mere Ho</Link><br />
                  
                  <Link className="writer" to={'/'}>Anuv Jain</Link>
                 
                  </nav>
                  </div>
              </div>
            </div>

        

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#PopularAlbumCaros" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#PopularAlbumCaros"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
      {/* </div> */}

 <div className="trending_songs popular_radio">

        
        <Link style={{marginLeft:"-635px"}} className="header radio_heder" to="/">
          Popular Radio
        </Link>

        <Link className="showeall" to="/allradio">
          Show all
        </Link>

         <div
          id="PopularRadioCaros"
          className="carousel slide"
          data-bs-ride="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">

            {/* First slide */}
            <div className="carousel-item active">
              <div className="song_container">
                <div className="song_cards radio_cards">
                  <img src="/ajith radio.jpg" alt="" />
                  <div className="playbutton"><Link to={'/ajithradio'}><IoPlaySharp className="play_icon"/></Link></div>
                 
                 <p className="radio">
Public Playlist
With Pritam, A.R. Rahman, Jeet Gannguli</p> 
                   
                   
                  
                  
                </div>
                <div className="song_cards radio_cards">
                     <img src="/kk.jpg" alt="" />
                        <div className="playbutton"><Link to={'/kk'}><IoPlaySharp className="play_icon"/></Link></div>

                        <p className="radio">With Pritam, Vishal-Shekhar, Vishal Mishra</p>

                  
                </div>
                <div className="song_cards radio_cards"> 
                      <img src="/s.jpg" alt="" />
                       <div className="playbutton"><Link to={'/shreya'}><IoPlaySharp className="play_icon"/></Link></div>

                       <p className="radio">With Vishal-Shekhar, Sachin-Jigar, A.R. Rahman</p>
                  
                  
                
                  
                  </div>
                <div className="song_cards radio_cards">    
                  <img src="/ilayaraja radio.jpg" alt="" />
                   <div className="playbutton"><Link to={'/ilayaraja'}><IoPlaySharp className="play_icon"/></Link></div>
                  <p className="radio">With K. J. Yesudas, Swarnalatha, Uma Ramanan</p>
                  
                  </div>
                <div className="song_cards">    
                  <img src="/AR radio.jpg" alt="" />
                   <div className="playbutton"><Link to={'/ar'}><IoPlaySharp className="play_icon"/></Link></div>
                  <p className="radio">With Hariharan, Arijit Singh, Chinmayi</p>
              </div>
            </div>
            </div>

            {/* Second slide */}
            <div className="carousel-item">
              <div className="song_container">
                 <div className="song_cards radio_cards">
                  <img src="/ajith radio.jpg" alt="" />
                  <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                 
                 <p className="radio">
Public Playlist
With Pritam, A.R. Rahman, Jeet Gannguli</p> 
                   
                   
                  
                  
                </div>
                <div className="song_cards radio_cards">
                     <img src="/kk.jpg" alt="" />
                        <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>

                        <p className="radio">With Pritam, Vishal-Shekhar, Vishal Mishra</p>

                  
                </div>
                <div className="song_cards radio_cards"> 
                      <img src="/Shreya radio.jpg" alt="" />
                       <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>

                       <p className="radio">With Vishal-Shekhar, Sachin-Jigar, A.R. Rahman</p>
                  
                  
                
                  
                  </div>
                <div className="song_cards radio_cards">    
                  <img src="/ilayaraja radio.jpg" alt="" />
                   <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                  <p className="radio">With K. J. Yesudas, Swarnalatha, Uma Ramanan</p>
                  
                  </div>
                <div className="song_cards">    
                  <img src="/AR radio.jpg" alt="" />
                   <div className="playbutton"><Link to={'/'}><IoPlaySharp className="play_icon"/></Link></div>
                  <p className="radio">With Hariharan, Arijit Singh, Chinmayi</p>
              </div>
              </div>
            </div>
            </div>

        

          
          <button class="carousel-control-prev" type="button" data-bs-target="#PopularRadioCaros" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#PopularRadioCaros"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
      

      <div className="line">
        <hr />

        </div>


      <div className="footer">
       
        <div className="sub_footer">
         
          <div className="footer_one">
            <h6>Company</h6>
            <Link to={'https://www.spotify.com/in-en/about-us/contact/'}>About</Link>
            <Link to={'https://www.lifeatspotify.com/'}>Jobs</Link>
            <Link to={'https://newsroom.spotify.com/'}>For The Record</Link>

          </div>
          <div className="footer_one">
              <h6>Communities
</h6>
            <Link to={'https://artists.spotify.com/home'}>For Artists</Link>
            <Link to={'https://creators.spotify.com/'}>For Creators</Link>
            <Link to={'https://authors.spotify.com/'}>For Authors</Link>
             <Link to={'https://developer.spotify.com/'}>Developers</Link>
            <Link to={'https://ads.spotify.com/en-IN/'}>Advertising</Link>
            <Link to={'https://investors.spotify.com/home/default.aspx'}>Investors</Link>
            <Link to={'https://spotifyforvendors.com/'}>Vendors</Link>

          </div>
          <div className="footer_one">
                          <h6>Useful links
</h6>
            <Link to={'https://support.spotify.com/in-en/'}>Support</Link>
            <Link to={'https://www.spotify.com/in-en/free/'}>Free Mobile App</Link>
            <Link to={'https://open.spotify.com/popular-in/in'}>Popular by Country</Link>
             <Link to={'https://open.spotify.com/playlist/37i9dQZF1CLcTo7UzL0sYK'}>Top Song Lyrics</Link>
            <Link to={'https://www.spotify.com/in-en/import-music/'}>Import your music</Link>
            

          </div>
          <div className="footer_one">
                               <h6>Spotify Plans
</h6>
            <Link to={'https://www.spotify.com/in-en/premium/#plans'}>Premium Standard</Link>
            <Link to={'https://www.spotify.com/in-en/platinum/#ref=spotifycom_footer_platinum'}>Premium Platinum</Link>
            <Link to={'https://www.spotify.com/in-en/student/#ref=spotifycom_footer_premium_student'}>Premium Student</Link>
             <Link to={'https://www.spotify.com/in-en/free/#ref=spotifycom_footer_free'}>Spotify Free</Link>
            
          </div>
          <div className="footer_last">
            <div className="footer_last_icon">
            <Link to={'https://www.instagram.com/spotify'}><FaInstagram className="media_icons" /></Link>
            </div>

            <div className="footer_last_icon">
            <Link to={'https://x.com/spotify'}><FaXTwitter className="media_icons" /></Link>
            </div>

            <div className="footer_last_icon">
            <Link to={'https://www.facebook.com/Spotify'}><CiFacebook className="media_icons" /></Link>
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










      
    </section>
  );
}

export default Top_songs;
