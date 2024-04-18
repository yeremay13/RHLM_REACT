import React, { useState } from 'react';
import musicData from '../data/musicData.json';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import '../assets/styles/Views.css'


function Views() {
    const [songs] = useState(musicData);

    return (
        <div className='views-container'>
            <Header />
            <h1 className='h1'>Most Views Songs</h1>
            <div>
                {songs.map((song, index) => (
                    <div key={index} className='song-card'>
                        <img className='song-image' src={song.image} alt={song.title} />
                        <p className='song-title'>{song.title}</p>
                        <p className='views'>{song.views}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Views;
