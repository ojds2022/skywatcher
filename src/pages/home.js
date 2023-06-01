import React from 'react';
import { LogoAnimation } from '../components/logoAnimation';
import { AstroInfo } from './astroInfo';
import BannerImage from '../assets/nightSky.jpg';
import '../styles/home.css';



const Home = () => {
  return (
    <div id="home-container" className="grid h-screen grid-rows-3" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div>
        <h1 id="title">
            <LogoAnimation />
        </h1>
      </div>
      <div id='appear' className='mx-auto place-self-center md:w-1/2'>
          <AstroInfo />
      </div>
    </div>
  );
}

export default Home;
