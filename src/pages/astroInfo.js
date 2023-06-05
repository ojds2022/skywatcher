import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/home.css';

const AstroInfo = () => {
    const [showAstroInfo, setShowAstroInfo] = useState(false);

    const [location, setLocation] = useState('');
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');
    const [moonrise, setMoonrise] = useState('');
    const [moonset, setMoonset] = useState('');
    const [lunarPhase, setLunarPhase] = useState('');
    const [moonIll, setMoonIll] = useState('');

    function fetchAstronomyInfo() {
        const userInput = document.querySelector('#inputField');
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '48cbe57e99msh59bbaa3d2989b86p1dd679jsn22273669dbf3',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
    
        fetch(`https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${userInput.value}`, options)
            .then(response => response.json())
            .then(response => postAstroInfo(response))
            .catch(err => console.error(err));
    }

    const postAstroInfo = (data) => {
        setLocation(data.location.name);
        setSunrise(data.astronomy.astro.sunrise);
        setSunset(data.astronomy.astro.sunset);
        setMoonrise(data.astronomy.astro.moonrise);
        setMoonset(data.astronomy.astro.moonset);
        setLunarPhase(data.astronomy.astro.moon_phase);
        setMoonIll(data.astronomy.astro.moon_illumination);
        setShowAstroInfo(!showAstroInfo);
    }

    const closeAstroInfo = () => {
        setShowAstroInfo(!showAstroInfo);
    }

    useEffect(() => {
        const inputField = document.getElementById('inputField');
        if (inputField) {
          inputField.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              document.getElementById('searchButton').click();
            }
          });
        }
      },[]);

    return (
        <div>
            {showAstroInfo === true ? 
                <div className='w-11/12 pb-8 pl-2 mx-auto text-white bg-turquoise bg-opacity-40 rounded-xl'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='py-2 mx-auto text-2xl font-bold xl:text-4xl 3xl:text-7xl'>{location}</h1>
                        <button className='pr-4 text-xl hover:text-red-500' onClick={closeAstroInfo}><CloseIcon fontSize='large' /></button>
                    </div>
                    <ul className='text-lg lg:text-xl xl:text-3xl 3xl:text-6xl'>
                        <li className='flex flex-row justify-between mb-4 ml-2 font-bold xl:pb-3 3xl:pb-20'>Sunrise: <span className='mr-10 text-pale-green'>{sunrise}</span></li>
                        <li className='flex flex-row justify-between mb-4 ml-2 font-bold xl:pb-3 3xl:pb-20'>Sunset: <span className='mr-10 text-pale-green'>{sunset}</span></li>
                        <li className='flex flex-row justify-between mb-4 ml-2 font-bold xl:pb-3 3xl:pb-20'>Moonrise: <span className='mr-10 text-pale-green'>{moonrise}</span></li>
                        <li className='flex flex-row justify-between mb-4 ml-2 font-bold xl:pb-3 3xl:pb-20'>Moonset: <span className='mr-10 text-pale-green'>{moonset}</span></li>
                        <li className='flex flex-row justify-between mb-4 ml-2 font-bold xl:pb-3 3xl:pb-20'>Lunar phase: <Link to='/lunar'><button className='p-1 mr-10 rounded-lg bg-light-yellow hover:bg-yellow-300 text-navy xl:p-3 3xl:p-6 3xl:rounded-xl'>{lunarPhase}</button></Link></li>
                        <li className='flex flex-row justify-between ml-2 font-bold xl:pb-3 3xl:pb-20'>Moon illumination: <span className='mr-10 text-yellow-200'>{moonIll}</span></li>
                    </ul>
                </div>
                :
                <div className="px-2 pb-4 text-center bg-turquoise bg-opacity-40 rounded-xl 3xl:rounded-2xl xl:py-3 3xl:py-8">
                      <h2 className='mb-5 text-xl font-bold text-white md:text-2xl xl:text-4xl xl:mb-12 3xl:text-6xl'>Enter your city or zip-code:</h2>
                      <input id="inputField" className='focus:outline-none md:w-44 md:h-7 xl:w-60 xl:h-10 xl:text-lg 3xl:w-80 3xl:h-16 3xl:text-3xl' type="text" placeholder="Enter here..."/>
                      <button id="searchButton" className='px-1 ml-2 text-white rounded hover:bg-pale-green bg-light-purple hover:text-black md:h-7 md:w-16 xl:h-10 xl:w-20 xl:text-lg xl:ml-5 3xl:h-16 3xl:w-32 3xl:rounded-xl' type="submit" onClick={fetchAstronomyInfo}>Search</button>
                </div>
            }
        </div>
    );
}

export {AstroInfo};