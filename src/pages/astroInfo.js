import React, {useState} from 'react';
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

    return (
        <div>
            {showAstroInfo === true ? 
                <div className='text-white w-11/12 bg-turquoise bg-opacity-40 mx-auto mt-20 rounded-xl pl-2 pb-8'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-2xl font-bold py-2 mx-auto'>{location}</h1>
                        <button className='pr-4 hover:text-red-500 text-xl' onClick={closeAstroInfo}><CloseIcon fontSize='medium' /></button>
                    </div>
                    <ul className='text-left text-lg'>
                        <li className='mb-4 font-bold'>Sunrise: <span className='text-pale-green'>{sunrise}</span></li>
                        <li className='mb-4 font-bold'>Sunset: <span className='text-pale-green'>{sunset}</span></li>
                        <li className='mb-4 font-bold'>Moonrise: <span className='text-pale-green'>{moonrise}</span></li>
                        <li className='mb-4 font-bold'>Moonset: <span className='text-pale-green'>{moonset}</span></li>
                        <li className='flex flex-row mb-4 font-bold'>Lunar phase: <Link to='/lunar'><button className='bg-light-yellow hover:bg-yellow-300 text-navy p-1 rounded-lg ml-3'>{lunarPhase}</button></Link></li>
                        <li className='font-bold'>Moon illumination: <span className='text-yellow-200'>{moonIll}</span></li>
                    </ul>
                </div>
                :
                <div className="w-full h-40 mt-44">
                      <h2 className='text-white text-xl font-bold'>Enter your city or zip-code:</h2>
                      <input id="inputField" className='focus:outline-none' type="text" placeholder="Enter here..."/>
                      <button className='hover:bg-pale-green bg-green-600 rounded m-1 px-1' type="submit" onClick={fetchAstronomyInfo}>Search</button>
                </div>
            }
        </div>
    );
}

export {AstroInfo};