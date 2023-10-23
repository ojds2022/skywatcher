import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import { LogoAnimation } from '../components/logoAnimation';

import SunnyLoop from '../assets/sunny-sky.mp4';
import CloudyLoop from '../assets/cloudy-sky.mp4';
import OvercastLoop from '../assets/overcast-sky.mp4';
import RainyLoop from '../assets/rainy-sky.mp4';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Brightness4SharpIcon from '@mui/icons-material/Brightness4Sharp';

import '../styles/home.css';
import '../styles/footer.css';

const AstroInfo = () => {
    const [showAstroInfo, setShowAstroInfo] = useState(false);
    
    const [backgroundBanner, setBackgroundBanner] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');

    const [location, setLocation] = useState('');

    const [currentCond, setCurrentCond] = useState('');
    const [nextDayCond, setNextDayCond] = useState('');
    const [thirdDayCond, setThridDayCond] = useState('');

    const [currentCondIcon, setCurrentCondIcon] = useState('');
    const [nextDayCondIcon, setNextDayCondIcon] = useState('');
    const [thirdDayCondIcon, setThirdDayCondIcon] = useState('');

    const [tempF, setTempF] = useState('');
    const [highTempF, setHighTempF] = useState('');
    const [lowTempF, setLowTempF] = useState('');
    const [highTempF2, setHighTempF2] = useState('');
    const [lowTempF2, setLowTempF2] = useState('');
    const [highTempF3, setHighTempF3] = useState('');
    const [lowTempF3, setLowTempF3] = useState('');
    
    const [weekday, setWeekday] = useState('');
    const [nextWeekday, setNextWeekday] = useState('');

    const [cloudScore, setCloudScore] = useState('');
    const [humidity, setHumidity] = useState('');

    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');
    const [moonrise, setMoonrise] = useState('');
    const [moonset, setMoonset] = useState('');
    const [lunarPhase, setLunarPhase] = useState('');

    function fetchAstronomyInfo() {
        const userInput = document.querySelector('#inputField');
        const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${userInput.value}&days=3`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '48cbe57e99msh59bbaa3d2989b86p1dd679jsn22273669dbf3',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(response => postAstroInfo(response))
            .catch(err => console.error(err));
    }

    const postAstroInfo = (data) => {
        //console.log(data.forecast.forecastday[0].day.maxtemp_f);
        if (data.current.condition.text === 'Sunny') {
            setBackgroundBanner(SunnyLoop);
            setBackgroundColor('rgb(153, 153, 255, 0.5)');
        } else if (data.current.condition.text === 'Mist') {
            setBackgroundBanner(CloudyLoop);
            setBackgroundColor('rgb(153, 153, 255, 0.7)');
        } else if (data.current.condition.text === 'Partly cloudy') {
            setBackgroundBanner(CloudyLoop);
            setBackgroundColor('LightSteelBlue');
        } else if (data.current.condition.text === 'Cloudy') {
            setBackgroundBanner(CloudyLoop);
            setBackgroundColor('SteelBlue');
        } else if (data.current.condition.text === 'Overcast') {
            setBackgroundBanner(OvercastLoop);
            setBackgroundColor('LightSlateGray');
        } else if (data.current.condition.text === 'Rain' || data.current.condition.text === 'Light rain' || data.current.condition.text === 'Heavy rain') {
            setBackgroundBanner(RainyLoop);
            setBackgroundColor('SteelBlue');
        }

        const dateString = data.forecast.forecastday[0].date;

        function getDayOfWeek(dateString) {
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
            
            const date = new Date(dateString);
            const dayIndex = date.getDay(); // 0 for Sunday, 1 for Monday, and so on
            
            if (dayIndex <= 4) {
                setWeekday(daysOfWeek[dayIndex + 2]);
            } else if (dayIndex >= 5) {
                setWeekday(daysOfWeek[dayIndex - 5]);
            } 

            if (dayIndex <= 3) {
                setNextWeekday(daysOfWeek[dayIndex + 3]);
            } else if (dayIndex >= 4) {
                setNextWeekday(daysOfWeek[dayIndex - 4]);
            }
        }

        getDayOfWeek(dateString);

        setLocation(data.location.name);
        setCurrentCond(data.current.condition.text);
        setNextDayCond(data.forecast.forecastday[1].day.condition.text);
        setThridDayCond(data.forecast.forecastday[2].day.condition.text);
        setCurrentCondIcon(data.current.condition.icon);
        setNextDayCondIcon(data.forecast.forecastday[1].day.condition.icon);
        setThirdDayCondIcon(data.forecast.forecastday[2].day.condition.icon);
        setCloudScore(data.current.cloud);
        setTempF(Math.round(data.current.temp_f));

        if (Math.round(data.current.temp_f) > Math.round(data.forecast.forecastday[0].day.maxtemp_f)) {
            setHighTempF(Math.round(data.current.temp_f))
        } else {
            setHighTempF(Math.round(data.forecast.forecastday[0].day.maxtemp_f));
        }
        
        setLowTempF(Math.round(data.forecast.forecastday[0].day.mintemp_f));
        setHighTempF2(Math.round(data.forecast.forecastday[1].day.maxtemp_f));
        setLowTempF2(Math.round(data.forecast.forecastday[1].day.mintemp_f));
        setHighTempF3(Math.round(data.forecast.forecastday[2].day.maxtemp_f));
        setLowTempF3(Math.round(data.forecast.forecastday[2].day.mintemp_f));
        setHumidity(data.current.humidity);

        setShowAstroInfo(true);
        {/*
        setSunrise(data.astronomy.astro.sunrise);
        setSunset(data.astronomy.astro.sunset);
        setMoonrise(data.astronomy.astro.moonrise);
        setMoonset(data.astronomy.astro.moonset);
        setLunarPhase(data.astronomy.astro.moon_phase);
        setMoonIll(data.astronomy.astro.moon_illumination);
    */}
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
                <div className="grid h-screen grid-rows-3">
                    <div id="banner-img" className="z-10 grid content-end row-span-1" style={{ backgroundImage: `url(${backgroundBanner}`}}>
                        <div className='py-2 mx-auto'>
                            <h1 className='text-5xl font-bold text-white xl:text-4xl 3xl:text-7xl'>{location}</h1>
                        </div>
                    </div>
                    <div className='row-span-2' style={{backgroundColor: `${backgroundColor}`}}>
                        <div className='w-11/12 mx-auto mt-2 text-white bg-turquoise bg-opacity-40 rounded-xl'>
                            <div>
                                <div className='text-4xl'>{tempF}&deg;</div>
                                <div>{currentCond}</div>
                                <div>High: {highTempF}&deg;</div>
                                <div>Low: {lowTempF}&deg;</div>
                            </div>
                        </div>
                        <div className='w-11/12 mx-auto mt-1.5 text-white bg-turquoise bg-opacity-40 rounded-xl'>
                            <div className='flex flex-row justify-center'>
                                <span className='my-auto'>Today</span> 
                                <img className='mx-0' src={`${currentCondIcon}`} alt='' />
                                <span className='my-auto'>{lowTempF}&deg; - {highTempF}&deg;</span>
                            </div>   
                            <div className='flex flex-row justify-center'>
                                <span className='my-auto w-11'>{weekday}</span> 
                                <img className='mx-0' src={`${nextDayCondIcon}`} alt='' />
                                <span className='my-auto'>{lowTempF2}&deg; - {highTempF2}&deg;</span>
                            </div>
                        <div className='flex flex-row justify-center'><span className='my-auto w-11'>{nextWeekday}</span> <img className='mx-0' src={`${thirdDayCondIcon}`} alt='' /><span className='my-auto'>{lowTempF3}&deg; - {highTempF3}&deg;</span></div>
                        </div>
                    </div>
                    <div>
                        <div className="fixed bottom-0 left-0 z-20 flex flex-row w-full navbar h-14 xl:h-20 3xl:h-32 bg-turquoise bg-opacity-40">
                            <div className="flex items-center justify-between px-6 grow">
                                <div>
                                    <button id="navbarLogo" className='pt-1 text-white cursor-pointer hover:text-pale-green' onClick={() => setShowAstroInfo(false)}>
                                        <ArrowBackIcon fontSize='large' />
                                    </button>
                                </div>
                                <div className=''>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                :
                <div className='h-screen p-3 bg-sunny-background'>
                    <div className="grid h-full grid-rows-3 px-2 text-center bg-opacity-40 bg-turquoise rounded-xl">
                        <div className='mt-10'>
                            <LogoAnimation />
                        </div>
                        <div id='sun-logo' className='text-white'>
                            <Brightness4SharpIcon />
                        </div>
                        <div>
                            <h2 className='pb-5 text-xl font-bold text-white md:text-2xl xl:text-4xl xl:mb-12 3xl:text-6xl'>Enter a city or zip-code</h2>
                            <input id="inputField" className='w-1/2 py-1 rounded focus:outline-none md:w-44 md:h-7 xl:w-60 xl:h-10 xl:text-lg 3xl:w-80 3xl:h-16 3xl:text-3xl' type="text" placeholder="Enter here..."/>
                            <button id="searchButton" type='submit' className='px-2 py-1 ml-2 text-white rounded hover:bg-pale-green bg-light-purple hover:text-black md:h-7 md:w-16 xl:h-10 xl:w-20 xl:text-lg xl:ml-5 3xl:h-16 3xl:w-32 3xl:rounded-xl' onClick={fetchAstronomyInfo}>Search</button>
                        </div>
                    </div>
                </div>
                
            }
        </div>
    );
}

export {AstroInfo};