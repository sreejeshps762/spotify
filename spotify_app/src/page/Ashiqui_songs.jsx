
import React, { useRef, useState, useEffect } from 'react'
import './Trendingsongs_all.css'
import { Link } from "react-router-dom"

import Library from './Library'
import Serchbar from './Serchbar'
import Off_canvas from './Off_canvas'
import Preview_section from './Preview_section'

import './Play_song.css'

import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { CiFacebook } from "react-icons/ci"
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5"

function Ashiqui_songs
() {

    const audioRef = useRef(null)

    const [currentSong, setCurrentSong] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    // Songs List
    const songs = [
        {
            id: 1,
            name: "Pesamale",
            
            src: "/songs/pesamale.mp3"
        },
      
    ]

    // Play / Pause Song
    const playSong = async (song) => {

        const audio = audioRef.current
        if (!audio) return

        // Same Song: Play / Pause
        if (currentSong?.id === song.id) {

            if (audio.paused) {
                try {
                    await audio.play()
                } catch (error) {
                    console.error("Playback failed:", error)
                }
            } else {
                audio.pause()
            }

            return
        }

        // New Song
        setCurrentSong(song)
        setCurrentTime(0)
        setDuration(0)

        audio.src = song.src
        audio.load()

        try {
            await audio.play()
        } catch (error) {
            setIsPlaying(false)
            console.error("Playback failed:", error)
        }
    }

    // Audio Events
    useEffect(() => {

        const audio = audioRef.current
        if (!audio) return

        const updateTime = () => {
            setCurrentTime(audio.currentTime)
        }

        const updateDuration = () => {
            if (Number.isFinite(audio.duration)) {
                setDuration(audio.duration)
            }
        }

        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)
        const handleEnded = () => setIsPlaying(false)

        audio.addEventListener('timeupdate', updateTime)
        audio.addEventListener('loadedmetadata', updateDuration)
        audio.addEventListener('durationchange', updateDuration)
        audio.addEventListener('play', handlePlay)
        audio.addEventListener('pause', handlePause)
        audio.addEventListener('ended', handleEnded)

        return () => {
            audio.removeEventListener('timeupdate', updateTime)
            audio.removeEventListener('loadedmetadata', updateDuration)
            audio.removeEventListener('durationchange', updateDuration)
            audio.removeEventListener('play', handlePlay)
            audio.removeEventListener('pause', handlePause)
            audio.removeEventListener('ended', handleEnded)
        }

    }, [])

    // Format Time
    const formatTime = (time) => {

        if (!Number.isFinite(time)) return "0:00"

        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)

        return `${minutes}:${String(seconds).padStart(2, '0')}`
    }

    return (
        <div>
            <div className="dom">

                <Serchbar />

                <section className="music_section">

                    <Library />

                    <div className="song_section">

                        {/* Album Header */}
                        <div className="play_page">

                            <div>
                                <img
                                    src="/Ashiqui.jpg"
                                    alt="Jailer 2 Album"
                                />
                            </div>

                            <div className="playsong_content">
                                
                                <h2>Ashiqui 2</h2>
                                <p>song</p>
                            </div>

                        </div>

                        {/* Divider */}
                        <div className="playsong_line">
                            <hr />
                        </div>

                        {/* Song List */}
                        <div className="playsong_section">

                            <h3 className="song_heading">
                                
                            </h3>

                            <audio
                                ref={audioRef}
                                preload="metadata"
                            />

                            {songs.map((song, index) => (

                                <div
                                    key={song.id}
                                    className={`song_item ${
                                        currentSong?.id === song.id
                                            ? 'active_song'
                                            : ''
                                    }`}
                                    onClick={() => playSong(song)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (
                                            e.key === 'Enter' ||
                                            e.key === ' '
                                        ) {
                                            e.preventDefault()
                                            playSong(song)
                                        }
                                    }}
                                >

                                    {/* Song Number / Play Icon */}
                                    <div className="song_number">

                                        {currentSong?.id === song.id &&
                                        isPlaying ? (
                                            <IoPauseSharp />
                                        ) : (
                                            <IoPlaySharp />
                                        )}

                                    </div>

                                    {/* Song Details */}
                                    <div className="song_details">

                                        <h4>{song.name}</h4>

                                    

                                    </div>

                                    {/* Selected Status */}
                                    <div className="song_status">

                                        {currentSong?.id === song.id
                                            ? isPlaying
                                                ? "Playing"
                                                : "Selected"
                                            : ""}

                                    </div>

                                </div>

                            ))}


                               {currentSong && (
                            
                                                        <div className="current_song_player">
                            
                                                            <div className="current_song_info">
                            
                                                                <h4 className='currentsong_name'>{currentSong.name}</h4>
                            
                                                             
                            
                                                            </div>
                            
                                                            <div className="custom_player">
                            
                                                                <button
                                                                    className="custom_play_btn"
                                                                    onClick={() =>
                                                                        playSong(currentSong)
                                                                    }
                                                                    aria-label={
                                                                        isPlaying ? "Pause" : "Play"
                                                                    }
                                                                >
                                                                    {isPlaying
                                                                        ? <IoPauseSharp />
                                                                        : <IoPlaySharp />}
                                                                </button>
                            
                                                                <div className="song_progress">
                            
                                                                    <span>
                                                                        {formatTime(currentTime)}
                                                                    </span>
                            
                                                                    <input
                                                                        type="range"
                                                                        min="0"
                                                                        max={duration || 0}
                                                                        step="0.1"
                                                                        value={Math.min(
                                                                            currentTime,
                                                                            duration || 0
                                                                        )}
                                                                        onChange={(e) => {
                                                                            if (audioRef.current) {
                                                                                audioRef.current.currentTime =
                                                                                    Number(e.target.value)
                                                                            }
                                                                        }}
                                                                        aria-label="Song progress"
                                                                    />
                            
                                                                    <span>
                                                                        {formatTime(duration)}
                                                                    </span>
                            
                                                                </div>
                            
                                                            </div>
                            
                                                        </div>
                            
                                                    )}

                        </div>

                        {/* Current Song Player */}
                        

                        {/* Footer */}
                        <div style={{ marginTop: "60px" }}>

                            <div className="line">
                                <hr />
                            </div>

                            <div className="footer">

                                <div className="sub_footer">

                                    <div className="footer_one">
                                        <h6>Company</h6>
                                        <Link to="/">About</Link>
                                        <Link to="/">Jobs</Link>
                                        <Link to="/">For The Record</Link>
                                    </div>

                                    <div className="footer_one">
                                        <h6>Communities</h6>
                                        <Link to="/">For Artists</Link>
                                        <Link to="/">For Creators</Link>
                                        <Link to="/">For Authors</Link>
                                        <Link to="/">Developers</Link>
                                        <Link to="/">Advertising</Link>
                                        <Link to="/">Investors</Link>
                                        <Link to="/">Vendors</Link>
                                    </div>

                                    <div className="footer_one">
                                        <h6>Useful links</h6>
                                        <Link to="/">Support</Link>
                                        <Link to="/">Free Mobile App</Link>
                                        <Link to="/">Popular by Country</Link>
                                        <Link to="/">Top Song Lyrics</Link>
                                        <Link to="/">Import your music</Link>
                                    </div>

                                    <div className="footer_one">
                                        <h6>Spotify Plans</h6>
                                        <Link to="/">Premium Standard</Link>
                                        <Link to="/">Premium Platinum</Link>
                                        <Link to="/">Premium Student</Link>
                                        <Link to="/">Spotify Free</Link>
                                    </div>

                                    <div className="footer_last">

                                        <div className="footer_last_icon">
                                            <Link to="/">
                                                <FaInstagram className="media_icons" />
                                            </Link>
                                        </div>

                                        <div className="footer_last_icon">
                                            <Link to="/">
                                                <FaXTwitter className="media_icons" />
                                            </Link>
                                        </div>

                                        <div className="footer_last_icon">
                                            <Link to="/">
                                                <CiFacebook className="media_icons" />
                                            </Link>
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

export default Ashiqui_songs
