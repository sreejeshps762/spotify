
import React, { useState, useEffect } from 'react'
import './LIbrary.css'
import { Link } from "react-router-dom"
import { IoMdAdd } from "react-icons/io"
import { MdLanguage } from "react-icons/md"

function Library() {

    const [songs, setSongs] = useState([])

    // Open IndexedDB
    const openDB = () => {
        return new Promise((resolve, reject) => {

            const request = indexedDB.open("SpotifyLocalDB", 1)

            request.onupgradeneeded = (e) => {
                const db = e.target.result

                if (!db.objectStoreNames.contains("songs")) {
                    db.createObjectStore("songs", { keyPath: "id" })
                }
            }

            request.onsuccess = () => {
                resolve(request.result)
            }

            request.onerror = () => {
                reject(request.error)
            }

            request.onblocked = () => {
                reject(new Error("Database is blocked. Close other tabs using this app."))
            }
        })
    }

    // Load saved songs
    const loadSongs = async () => {

        let db

        try {

            db = await openDB()

            if (!db.objectStoreNames.contains("songs")) {
                throw new Error("Songs object store not found")
            }

            const transaction = db.transaction("songs", "readonly")
            const store = transaction.objectStore("songs")
            const request = store.getAll()

            request.onsuccess = () => {
                setSongs(request.result || [])
            }

            request.onerror = () => {
                console.log("Load error:", request.error)
            }

            transaction.oncomplete = () => db.close()

            transaction.onerror = () => {
                console.log("Transaction error:", transaction.error)
                db.close()
            }

        } catch (error) {

            console.log("Loading error:", error)

            if (db) db.close()
        }
    }

    useEffect(() => {
        loadSongs()
    }, [])

    // Upload songs
    const handleUpload = async (e) => {

        const files = Array.from(e.target.files || [])

        // Correct audio file validation
        const audioFiles = files.filter(file => {

            return (
                file.type.startsWith("audio/") ||
                /\.(mp3|wav|m4a|ogg|aac|flac)$/i.test(file.name)
            )

        })

        if (audioFiles.length === 0) {
            alert("Please select valid audio files")
            e.target.value = ""
            return
        }

        let db

        try {

            db = await openDB()

            if (!db.objectStoreNames.contains("songs")) {
                throw new Error("Songs object store not found")
            }

            const transaction = db.transaction("songs", "readwrite")
            const store = transaction.objectStore("songs")

            // Save each audio file
     audioFiles.forEach(file => {

    const id = crypto.randomUUID();

    store.add({
        id: id,
        name: file.name,
        audio: file
    });

});

            transaction.oncomplete = () => {

                db.close()

                loadSongs()

                alert(audioFiles.length + " song(s) added successfully!")

            }

            transaction.onerror = () => {

                console.log("Upload transaction error:", transaction.error)

                db.close()

                alert("Upload failed! Check console for details.")

            }

            transaction.onabort = () => {

                console.log("Upload aborted:", transaction.error)

                db.close()

                alert("Upload cancelled!")

            }

        } catch (error) {

            console.log("Upload error:", error)

            if (db) db.close()

            alert("Something went wrong: " + error.message)

        }

        e.target.value = ""
    }

    return (

        <div className='library'>

            <div className='heading'>

                <h2>Your Library</h2>

                <label htmlFor="songUpload">
                    <IoMdAdd className='add_icon' />
                </label>

                <input
                    type="file"
                    id="songUpload"
                    accept="audio/*,.mp3,.wav,.m4a,.ogg,.aac,.flac"
                    multiple
                    hidden
                    onChange={handleUpload}
                />

            </div>

            <div className='library_content'>

                <div className='create_playlist'>

                    {songs.length === 0 ? (

                        <>
                            <h4>Create Your First Playlist</h4>
                            <p>It's easy, we'll help you</p>
                            <button id='btn'>
                                Create Playlist
                            </button>
                        </>

                    ) : (

                        <Link to="/playlist">

                            <button
                                style={{
                                    margin: "20px",
                                    marginTop: "40px"
                                }}
                                id='btn'
                            >
                                Your Playlist
                            </button>

                        </Link>

                    )}

                </div>

                <div
                    className='create_playlist create_playlist2'
                    style={{ height: "160px" }}
                >

                    <h4 style={{ marginLeft: "-27px" }}>
                        Lets Find Some Prodcast to
                    </h4>

                    <h4 style={{
                        marginLeft: "-182px",
                        marginTop: "-10px"
                    }}>
                        Follow
                    </h4>

                    <p style={{ marginLeft: "-48px" }}>
                        we'll keep you updated on new
                    </p>

                    <p style={{
                        marginTop: "-5px",
                        marginLeft: "-180px"
                    }}>
                        episodes
                    </p>

                    <button>browse prodcast</button>

                </div>

            </div>

            <div className='languge'>

                <nav className='privecy_link'>

                    <a href="https://www.spotify.com/in-en/legal/end-user-agreement/" target="_blank" rel="noreferrer">Legal</a>

                    <a href="https://www.spotify.com/in-en/safetyandprivacy" target="_blank" rel="noreferrer">Safety&PrivacyCenter</a>

                    <a href="https://www.spotify.com/in-en/legal/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>

                    <br />

                    <a href="https://www.spotify.com/in-en/legal/cookies-policy/" target="_blank" rel="noreferrer">Cookies</a>

                    <a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3" target="_blank" rel="noreferrer">AboutAds</a>

                    <a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3" target="_blank" rel="noreferrer">Accessibility</a>

                    <br />

                    <a href="https://www.spotify.com/in-en/legal/cookies-policy/" target="_blank" rel="noreferrer">Cookies</a>

                </nav>

                <button className='lng_btn'>
                    <MdLanguage className='lng_icon' />
                    <p>English</p>
                </button>

            </div>

        </div>
    )
}

export default Library
