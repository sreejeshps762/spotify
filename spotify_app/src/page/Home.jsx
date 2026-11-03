import React from 'react'
import './Home.css'
import { AiOutlineSpotify } from "react-icons/ai";
import {Link} from "react-router-dom"
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

import Library from './Library';
import Top_songs from './Top_songs';
import Preview_section from './Preview_section';
import Example from './Off_canvas'
import Off_canvas from './Off_canvas';
import Serchbar from './Serchbar';

function Home() {
  return (
    <div className='dom'>
        
        <Serchbar/>
        
        <section className='music_section'>
          <Library/>
          <Top_songs/>
          <Off_canvas/>

        </section>
        <Preview_section/>
         
    </div>
  )
}

export default Home