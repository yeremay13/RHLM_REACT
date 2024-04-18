import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import '../assets/styles/Home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home-content">
          <img src="anuel.avif" alt="Foto de Anuel AA" className="person-image" />
          <div className="person-info">
            <h2>Anuel AA</h2>
            <p>Emmanuel Gazmey Santiago​, más conocido por su nombre artístico Anuel AA, es un cantante y compositor puertorriqueño de reguetón y trap latino.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
