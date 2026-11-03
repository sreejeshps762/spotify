import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Navbar from './page/Navbar'
import Library from './page/Library'
import Installapp from './page/Installapp'
import Login from './page/Login'
import Signup from './page/Signup'
import Trendingsongs_all from './page/Trendingsongs_all'
import All_albums from './page/all_albums'
import All_artist from './page/All_artist'
import All_radio from './page/All_radio'

function App() {
 

  return (
    <>
    
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/install' element={<Installapp/>} />
        <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/trendingsongs_all' element={<Trendingsongs_all/>} />
              <Route path='/allartist' element={<All_artist/>} />
                     <Route path='/allalbums' element={<All_albums/>} />
                            <Route path='/allradio' element={<All_radio/>} />
        
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
