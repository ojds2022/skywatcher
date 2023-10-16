import React from 'react';
import { LogoAnimation } from '../components/logoAnimation';
import { AstroInfo } from './astroInfo';
import BannerImage from '../assets/cloudy-sky.mp4';
import '../styles/home.css';



const Home = () => {
  return (
    <div>
      <div>
        <h1 id="title">
            {/*<LogoAnimation />*/}
        </h1>
      </div>
      <div id='' className='mx-auto place-self-center md:w-1/2'>
          <AstroInfo />
      </div>
    </div>
  );
}

export default Home;
