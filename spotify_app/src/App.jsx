import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Navbar from './page/Navbar'
import Library from './page/Library'
import Installapp from './page/Installapp'
import Login from './page/Login'
import Signup from './page/Signup'
import Trendingsongs_all from './page/Trendingsongs_all'
import All_albums from './page/All_albums'
import All_artist from './page/All_artist'
import All_radio from './page/All_radio'
import Play_song from './page/Play_song'
import Pezamale_play_song from './page/Pezamale_play_song'
import Your_playlist from './page/Your_playlist'
import Ajith_songs from './page/Ajith_songs'
import Aniruth_songs from './page/Aniruth_songs'
import Ashiqui_songs from  './page/Ashiqui_songs'
import Chithra_songs from './page/Chithra_songs'
import Jamwemet_song from './page/Jamwemet_song'
import Jotum_song from './page/Jotum_song'
import Memoris_song from './page/Memoris_song'
import MG_songs from './page/MG_songs'
import Sammimeri_song from './page/Sammimeri_song'
import Ultimate_songs from './page/Ultimate_songs'
import Veenith_songs from './page/Veenith_songs'
import Rathinamo_song from './page/Rathinamo_song'
import Radhima_play_song from './page/Radhima_play_song'
import Ajithsing_radio from './page/Ajithsing_radio'
import Kkradio from './page/Kkradio'
import Shreyaradio from './page/shreyaradio'
import AR from './page/AR'
import Ilayaraja from './page/Ilayaraja'
import LogeduserRoute from './page/LogeduserRoute'



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
                              <Route path='/playsongs' element={<Play_song/>} />
                              <Route path='/pezamale' element={<Pezamale_play_song/>} />
                              <Route path='/playlist' element={<Your_playlist/>} />


                                 <Route path='/ajithsongs' element={<Ajith_songs/>} />
        <Route path='/anirudh' element={<Aniruth_songs/>} />
          <Route path='/Ashiquisongs' element={<Ashiqui_songs/>} />
          <Route path='/Chithrasongs' element={<Chithra_songs/>} />
              <Route path='/jamsongs' element={<Jamwemet_song/>} />
                     <Route path='/jotumsongs' element={<Jotum_song/>} />
                            <Route path='/memorissong' element={<Memoris_song/>} />
                              <Route path='/mgsongs' element={<MG_songs/>} />
                              <Route path='/sammimerisongs' element={<Sammimeri_song/>} />
                                 <Route path='/ultimatesongs' element={<Ultimate_songs/>} />
                              <Route path='/veenithsongs' element={<Veenith_songs/>} />
                                 <Route path='/rathinamosongs' element={<Rathinamo_song/>} />
                                         <Route path='/rathimasong' element={<Radhima_play_song/>} />

                                         <Route path='/ajithradio' element={<Ajithsing_radio/>} />
                            <Route path='/kk' element={<Kkradio/>} />
                            <Route path='/shreya' element={<Shreyaradio/>} />
                            <Route path='/ar' element={<AR/>} />
                            <Route path='/ilayaraja' element={<Ilayaraja/>} />
                            
                            
                            
                             
        
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
