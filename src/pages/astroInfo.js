import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import SunnyLoop from '../assets/sunny-sky.mp4';
import CloudyLoop from '../assets/cloudy-sky.mp4';
import OvercastLoop from '../assets/overcast-sky.mp4';
import RainyLoop from '../assets/rainy-sky.mp4';
import '../styles/home.css';

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
    const [cloudScore, setCloudScore] = useState('');
    const [tempF, setTempF] = useState('');
    const [humidity, setHumidity] = useState('');

    const [weekday, setWeekday] = useState('');
    const [nextWeekday, setNextWeekday] = useState('');

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
        console.log(data);
        if (data.current.condition.text === 'Sunny') {
            setBackgroundBanner(SunnyLoop);
            setBackgroundColor('rgb(153, 153, 255, 0.5)');
        } else if (data.current.condition.text === 'Partly cloudy') {
            setBackgroundBanner(CloudyLoop);
            setBackgroundColor('LightSteelBlue');
        } else if (data.current.condition.text === 'Cloudy') {
            setBackgroundBanner(CloudyLoop);
            setBackgroundColor('SteelBlue');
        } else if (data.current.condition.text === 'Overcast') {
            setBackgroundBanner(OvercastLoop);
            setBackgroundColor('LightSlateGray');
        } else if (data.current.condition.text === 'Rain' || data.current.condition.text === 'Light rain') {
            setBackgroundBanner(RainyLoop);
            setBackgroundColor('SteelBlue');
        }

        const dateString = data.forecast.forecastday[0].date;

        function getDayOfWeek(dateString) {
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
            
            const date = new Date(dateString);
            const dayIndex = date.getDay(); // 0 for Sunday, 1 for Monday, and so on
            
            setWeekday(daysOfWeek[dayIndex + 2]);
            setNextWeekday(daysOfWeek[dayIndex + 3]);
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
        setTempF(data.current.temp_f);
        setHumidity(data.current.humidity);
        setShowAstroInfo(!showAstroInfo);
        {/*
        setSunrise(data.astronomy.astro.sunrise);
        setSunset(data.astronomy.astro.sunset);
        setMoonrise(data.astronomy.astro.moonrise);
        setMoonset(data.astronomy.astro.moonset);
        setLunarPhase(data.astronomy.astro.moon_phase);
        setMoonIll(data.astronomy.astro.moon_illumination);
    */}
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
                                <div>Cloud Score: {cloudScore}</div>
                                <div>Humidity: {humidity}</div>
                            </div>
                            {/*<ul className='text-lg lg:text-xl xl:text-3xl 3xl:text-6xl'>
                                <li className='flex flex-row justify-between mb-4 ml-2 font-bold xl:pb-3 3xl:pb-20'>Sunrise: <span className='mr-10 text-pale-green'>{sunrise}</span></li>
                                <li className='flex flex-row justify-between mb-4 ml-2 font-bold xl:pb-3 3xl:pb-20'>Sunset: <span className='mr-10 text-pale-green'>{sunset}</span></li>
                                <li className='flex flex-row justify-between mb-4 ml-2 font-bold xl:pb-3 3xl:pb-20'>Moonrise: <span className='mr-10 text-pale-green'>{moonrise}</span></li>
                                <li className='flex flex-row justify-between mb-4 ml-2 font-bold xl:pb-3 3xl:pb-20'>Moonset: <span className='mr-10 text-pale-green'>{moonset}</span></li>
                                <li className='flex flex-row justify-between mb-4 ml-2 font-bold text-left xl:pb-3 3xl:pb-20'>Lunar phase: <span className='px-2 text-sm font-thin text-left xl:font-normal xl:text-base 2xl:font-semibold 2xl:text-xl'>click to<br /> learn more &#8594;</span><Link to='/lunar'><button className='p-1 mr-10 rounded-lg bg-light-yellow hover:bg-yellow-300 text-navy xl:p-3 3xl:p-6 3xl:rounded-xl'>{lunarPhase}</button></Link></li>
                                <li className='flex flex-row justify-between ml-2 font-bold xl:pb-3 3xl:pb-20'>Moon illumination: <span className='mr-10 text-yellow-200'>{moonIll}</span></li>
                            </ul>*/}
                        </div>
                        <div className='w-11/12 mx-auto mt-2 text-white bg-turquoise bg-opacity-40 rounded-xl'>
                            <div className='flex flex-row justify-center'><span className='my-auto'>Today</span> <img className='mx-0' src={`${currentCondIcon}`} alt='' /></div>   
                            <div className='flex flex-row justify-center'><span className='my-auto w-11'>{weekday}</span> <img className='mx-0' src={`${nextDayCondIcon}`} alt='' /></div>
                            <div className='flex flex-row justify-center'><span className='my-auto w-11'>{nextWeekday}</span> <img className='mx-0' src={`${thirdDayCondIcon}`} alt='' /></div>
                        </div>
                    </div>
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