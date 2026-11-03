
import './Serchbar.css'
import React from 'react'
import './Home.css'
import { AiOutlineSpotify } from "react-icons/ai";
import {Link} from "react-router-dom"
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import Navbar from './Navbar';
import Library from './Library';
import Top_songs from './Top_songs';
import Preview_section from './Preview_section';
import Example from './Off_canvas'
import Off_canvas from './Off_canvas';


function Serchbar() {
  return (
    <div >
   <section className='top_section'>
               <div className='spotify'>
                   <AiOutlineSpotify size={40} className='spotify_icon'/>
                   <Link to={'/'}><div className='home_icon'>< GoHome className='GoHome' size={40} /></div></Link>
                   
                    <div className='serch_bar'><CiSearch className='serch_icon' />
                    <input  type="text" placeholder='What do you want to play?' />
                    
                    </div>  
                    
                 
             
                   
               </div>
               <Navbar/>
               
           </section>
           
           </div>
  )
}

export default Serchbar