import React from 'react'
import './Preview_section.css'
import { Link } from 'react-router-dom'

function Preview_section() {
  return (
    <div>
      <Link to={'/signup'}>
    <div className='priview_section'>
      <div>
      <p>Privew of Spotify</p>
      <h6>Sign up to get ullimited songs and prodcast with occational ads.no credit card needed</h6>
      </div>
      <button className='privew_signup'>Sign up free</button>


     
    </div> </Link>
    </div>
  )
}

export default Preview_section