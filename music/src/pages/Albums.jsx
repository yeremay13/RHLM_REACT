import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import '../assets/styles/Albums.css';

function Albums() {
  return (
    <div>
      <Header />
      <div className="albums">
        <h2 className='h2'>Albums</h2>
        <div className="album-container">
          <div className="album">
            <a href="https://open.spotify.com/intl-es/album/5pQwQRnQOuKrbVUVnGMEN4" target="_blank" rel="noopener noreferrer">
              <img src="rhlm.jpg" alt="Album 1" />
            </a>
            <p>Real Hasta La Muerte</p>
          </div>
          <div className="album">
            <a href="https://open.spotify.com/intl-es/album/7JtT7OyWM8BnIS5FXXPMKg" target="_blank" rel="noopener noreferrer">
              <img src="emma.jpg" alt="Album 2" />
            </a>
            <p>Emmanuel</p>
          </div>
          <div className="album">
            <a href="https://open.spotify.com/intl-es/album/4MTtBjQEt7i752hISXjKqA" target="_blank" rel="noopener noreferrer">
              <img src="llnm.jpg" alt="Album 3" />
            </a>
            <p>Las Leyendas Nunca Mueren</p>
          </div>
          <div className="album">
            <a href="https://open.spotify.com/intl-es/album/6DJslQtfD7mGFGZpfiyrVf" target="_blank" rel="noopener noreferrer">
              <img src="llnm2.png" alt="Album 4" />
            </a>
            <p>Las Leyendas Nunca Mueren 2</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Albums;

            