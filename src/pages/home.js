import React from 'react';
import { LogoAnimation } from '../components/logoAnimation';
import { AstroInfo } from './astroInfo';
import BannerImage from '../assets/nightSky.jpg';
import '../styles/home.css';



const Home = () => {
  return (
    <div className="home h-screen bg-center bg-cover grid grid-rows-4" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div>
        <h1 id="title">
            <LogoAnimation />
        </h1>
      </div>
      <div id='appear' className='row-start-1 row-span-3'>
          <AstroInfo />
      </div>
      <div></div>
    </div>
  );
}

export default Home;
