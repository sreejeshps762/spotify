
import React, { useState, useEffect, useRef } from 'react'
import './Your_playlist.css'
import Library from './Library'
import Serchbar from './Serchbar'
import Off_canvas from './Off_canvas'
import Preview_section from './Preview_section'

import { IoPlaySharp, IoPauseSharp } from "react-icons/io5"

function Your_playlist() {

    const [songs, setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const audioRef = useRef(null)
    const audioURLRef = useRef(null)
    const currentSongRef = useRef(null)

    // Format song time
    const formatTime = (time) => {
        if (!Number.isFinite(time)) return "0:00"

        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)

        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    // Load songs from IndexedDB
    useEffect(() => {

        const request = indexedDB.open("SpotifyLocalDB", 1)

        request.onsuccess = () => {

            const db = request.result

            if (!db.objectStoreNames.contains("songs")) {
                console.error("Songs object store not found")
                db.close()
                return
            }

            const transaction = db.transaction("songs", "readonly")
            const store = transaction.objectStore("songs")
            const getRequest = store.getAll()

            getRequest.onsuccess = () => {
                setSongs(getRequest.result)
            }

            transaction.oncomplete = () => db.close()
            transaction.onerror = () => db.close()
        }

        request.onerror = () => {
            console.log("Database error:", request.error)
        }

    }, [])

    // Play selected song
    const playSong = async (song) => {

        const audio = audioRef.current

        if (!audio || !song || !song.audio) return

        // Same song - Play / Pause
        if (currentSongRef.current?.id === song.id) {

            if (audio.paused) {
                try {
                    await audio.play()
                } catch (error) {
                    console.log("Playback error:", error)
                }
            } else {
                audio.pause()
            }

            return
        }

        // Stop previous song
        audio.pause()
        audio.removeAttribute("src")
        audio.load()

        // Remove old URL
        if (audioURLRef.current) {
            URL.revokeObjectURL(audioURLRef.current)
            audioURLRef.current = null
        }

        // Create new audio URL
        const newURL = URL.createObjectURL(song.audio)

        audioURLRef.current = newURL

        currentSongRef.current = song
        setCurrentSong(song)
        setIsPlaying(false)
        setCurrentTime(0)
        setDuration(0)

        audio.src = newURL
        audio.load()

        try {
            await audio.play()
        } catch (error) {
            console.log("Audio playback error:", error)
            setIsPlaying(false)
        }
    }

    // Play / Pause
    const togglePlay = async () => {

        const audio = audioRef.current

        if (!audio || !currentSongRef.current) return

        try {
            if (audio.paused) {
                await audio.play()
            } else {
                audio.pause()
            }
        } catch (error) {
            console.log("Playback error:", error)
        }
    }

    // Next song
    const nextSong = () => {

        const current = currentSongRef.current

        if (!current || songs.length === 0) return

        const index = songs.findIndex(
            song => song.id === current.id
        )

        if (index === -1) return

        const nextIndex = (index + 1) % songs.length

        playSong(songs[nextIndex])
    }

    // Previous song
    const previousSong = () => {

        const current = currentSongRef.current

        if (!current || songs.length === 0) return

        const index = songs.findIndex(
            song => song.id === current.id
        )

        if (index === -1) return

        const previousIndex =
            (index - 1 + songs.length) % songs.length

        playSong(songs[previousIndex])
    }

    // Cleanup
    useEffect(() => {

        return () => {

            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.removeAttribute("src")
            }

            if (audioURLRef.current) {
                URL.revokeObjectURL(audioURLRef.current)
                audioURLRef.current = null
            }

        }

    }, [])

    return (

       <div
    style={{
        background: "linear-gradient(to bottom, skyblue, white)",
        minHeight: "100vh"
    }}
>
            <div className="dom">

                <Serchbar />

                <section className="music_section">

                    <Library />

                    <div className="song_section playlist">

                        <div className="all_trendingsong_heder playlist_heder">
                            Your playlist
                        </div>

                        <div className="line">
                            <hr />
                        </div>

                        {/* Single Audio Player */}

                        <audio
                            ref={audioRef}

                            onPlay={() => setIsPlaying(true)}

                            onPause={() => setIsPlaying(false)}

                            onEnded={nextSong}

                            onTimeUpdate={() => {
                                if (audioRef.current) {
                                    setCurrentTime(
                                        audioRef.current.currentTime
                                    )
                                }
                            }}

                            onLoadedMetadata={() => {
                                if (audioRef.current) {
                                    setDuration(
                                        audioRef.current.duration
                                    )
                                }
                            }}

                        />

                        {/* Song List */}

                        <div className="playsong_section">

                            {songs.length === 0 ? (

                                <p className="empty_playlist">
                                    No songs found in your playlist.
                                </p>

                            ) : (

                                songs.map((song, index) => (

                                    <div
                                        className="song_item"
                                        key={song.id}
                                        onClick={() => playSong(song)}
                                        style={{
                                            cursor: "pointer",
                                            background:
                                                currentSong?.id === song.id
                                                    ? "#282828"
                                                    : "transparent"
                                        }}
                                    >

                                        <div className="song_number">
                                            {index + 1}
                                        </div>

                                        <div className="song_details">
                                            <h4>{song.name}</h4>
                                        </div>

                                        <div className="song_status">

                                            {currentSong?.id === song.id && isPlaying
                                                ? "Playing"
                                                : ""}

                                        </div>

                                    </div>

                                ))

                            )}

                        </div>

                        <div style={{ marginTop: "20px" }}>

                            <div className="line">
                                <hr />
                            </div>

                        </div>

                        {/* Custom Music Player */}

                        {currentSong && (

                            <div className="current_song_player">

                                <div className="current_song_info">

                                    <h4>{currentSong.name}</h4>

                                </div>

                                <div className="custom_player">

                                    {/* Previous */}

                                   

                                    {/* Play / Pause */}

                                    <button
                                        className="custom_play_btn"
                                        onClick={togglePlay}
                                        aria-label={
                                            isPlaying ? "Pause" : "Play"
                                        }
                                    >

                                        {isPlaying
                                            ? <IoPauseSharp />
                                            : <IoPlaySharp />}

                                    </button>

                                    {/* Next */}

                                

                                    {/* Song Progress */}

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

                                                const time = Number(
                                                    e.target.value
                                                )

                                                if (audioRef.current) {
                                                    audioRef.current.currentTime = time
                                                    setCurrentTime(time)
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

                    <Off_canvas />

                </section>

                <Preview_section />

            </div>

        </div>

    )
}

export default Your_playlist
