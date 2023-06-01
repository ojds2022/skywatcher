import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import BannerImage from '../assets/nightSky.jpg';
import FullMoon from '../assets/fullMoon.png';
import NewMoon from '../assets/newMoon.png';
import ThirdQuarterMoon from '../assets/thirdQuarterMoon.png';
import WaningCresMoon from '../assets/waningCresMoon.png';
import WaxingCresMoon from '../assets/waxingCresMoon.png';
import WaningGibMoon from '../assets/waningGibMoon.png';
import WaxingGibMoon from '../assets/waxingGibMoon.png';
import FirstQuarterMoon from '../assets/firstQuarterMoon.png';
import '../styles/home.css';

const LunarPhase = () => {
    const [lunarImage, setLunarImage] = useState(null);
    function fetchAstronomyInfo() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '48cbe57e99msh59bbaa3d2989b86p1dd679jsn22273669dbf3',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
    
        fetch(`https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Seattle`, options)
            .then(response => response.json())
            .then(response => postLunarImg(response))
            .catch(err => console.error(err));
    }

    const postLunarImg = (data) => {
        setLunarImage(data.astronomy.astro.moon_phase);
    }

    useEffect(() => {
        fetchAstronomyInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    

  return (
    <div id="home-container" className="grid h-screen grid-rows-3" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='z-50 grid w-3/4 row-start-2 px-4 pt-1 m-auto lg:w-1/2 md:row-start-1 md:mt-24 lg:mt-32 xl:mt-40 3xl:mt-80 md:px-8 xl:pt-3 3xl:pl-20 3xl:pt-10 rounded-3xl bg-turquoise bg-opacity-70'>
            <div className='flex justify-end'>
                <Link to='/'>
                    <CloseIcon  className='hover:text-red-500' fontSize="large" />
                </Link>
            </div>
            {lunarImage === 'Full Moon' ? <img className='rounded-3xl opacity-90' src={FullMoon} alt='' />
            : lunarImage === 'New Moon' ? <img className='rounded-3xl opacity-90' src={NewMoon} alt='' />
            : lunarImage === 'Third Quarter' ? <img className='rounded-3xl opacity-90' src={ThirdQuarterMoon} alt='' />
            : lunarImage === 'Waning Cresent' ? <img className='rounded-3xl opacity-90' src={WaningCresMoon} alt='' />
            : lunarImage === 'Waxing Cresent' ? <img className='rounded-3xl opacity-90' src={WaxingCresMoon} alt='' />
            : lunarImage === 'Waning Gibbous' ? <img className='rounded-3xl opacity-90' src={WaningGibMoon} alt='' />
            : lunarImage === 'Waxing Gibbous' ? <img className='rounded-3xl opacity-90' src={WaxingGibMoon} alt='' />
            : lunarImage === 'First Quarter' ? <img className='rounded-3xl opacity-90' src={FirstQuarterMoon} alt='' />
            : <div></div>
            }
            <span className='py-1 text-2xl font-bold text-center xl:text-4xl 3xl:text-7xl'>{lunarImage}</span>
        </div>
    </div>
  );
}

export {LunarPhase};