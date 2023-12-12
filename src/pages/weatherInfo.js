import React, {useState, useEffect} from 'react';

import { AstroInfo } from './astroInfo';
import Footer from '../components/footer';
import { LogoAnimation } from '../components/logoAnimation';
import SunAndCloudLogo from '../assets/sun-cloud.png';

import SunnyLoop from '../assets/sunny-sky.mp4';
import ClearSkyLoop from '../assets/clear-sky.mp4';
import PartlyCloudyLoop from '../assets/partly-cloudy.mp4';
import CloudyLoop from '../assets/cloudy-sky.mp4';
import OvercastLoop from '../assets/overcast-sky.mp4';
import RainyLoop from '../assets/rainy-sky.mp4';

import FullMoon from '../assets/fullMoon.png';
import NewMoon from '../assets/newMoon.png';
import ThirdQuarterMoon from '../assets/thirdQuarterMoon.png';
import WaningCresMoon from '../assets/waningCresMoon.png';
import WaxingCresMoon from '../assets/waxingCresMoon.png';
import WaningGibMoon from '../assets/waningGibMoon.png';
import WaxingGibMoon from '../assets/waxingGibMoon.png';
import FirstQuarterMoon from '../assets/firstQuarterMoon.png';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Brightness4SharpIcon from '@mui/icons-material/Brightness4Sharp';

import '../styles/home.css';
import '../styles/footer.css';

const WeatherInfo = () => {
    const [showWeatherInfo, setShowWeatherInfo] = useState(false);
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
    const [lunarImage, setLunarImage] = useState(null);

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
        console.log(data.current.is_day);
        if (data.current.condition.text === 'Sunny') {
            setBackgroundBanner(SunnyLoop);
        } else if (data.current.condition.text === 'Clear') {
            setBackgroundBanner(ClearSkyLoop);
        } else if (data.current.condition.text === 'Mist') {
            setBackgroundBanner(CloudyLoop);
        } else if (data.current.condition.text === 'Fog') {
            setBackgroundBanner(CloudyLoop);
        } else if (data.current.condition.text === 'Partly cloudy') {
            setBackgroundBanner(PartlyCloudyLoop);
        } else if (data.current.condition.text === 'Cloudy') {
            setBackgroundBanner(CloudyLoop);
        } else if (data.current.condition.text === 'Overcast') {
            setBackgroundBanner(OvercastLoop);
        } else if (data.current.condition.text === 'Rain' || data.current.condition.text === 'Light rain' || data.current.condition.text === 'Heavy rain') {
            setBackgroundBanner(RainyLoop);
        }

        if (data.current.is_day === 1) {
            setBackgroundColor('rgb(153, 153, 255, 0.5)')
        } else {
            setBackgroundColor('rgb(20, 20, 255, 0.5)')
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

        setSunrise(data.forecast.forecastday[0].astro.sunrise);
        setSunset(data.forecast.forecastday[0].astro.sunset);
        setMoonrise(data.forecast.forecastday[0].astro.moonrise);
        setMoonset(data.forecast.forecastday[0].astro.moonset);
        setLunarPhase(data.forecast.forecastday[0].astro.moon_phase);

        data.forecast.forecastday[0].astro.moon_phase === 'Full Moon' ? setLunarImage(<img className='opacity-75 hover:opacity-100 rounded-3xl' src={FullMoon} alt='' />)
            : data.forecast.forecastday[0].astro.moon_phase === 'New Moon' ? setLunarImage(<img className='opacity-75 hover:opacity-100 rounded-3xl' src={NewMoon} alt='' />)
            : data.forecast.forecastday[0].astro.moon_phase === 'Third Quarter' ? setLunarImage(<img className='opacity-75 hover:opacity-100 rounded-3xl' src={ThirdQuarterMoon} alt='' />)
            : data.forecast.forecastday[0].astro.moon_phase === 'Waning Cresent' ? setLunarImage(<img className='opacity-75 hover:opacity-100 rounded-3xl' src={WaningCresMoon} alt='' />)
            : data.forecast.forecastday[0].astro.moon_phase === 'Waxing Cresent' ? setLunarImage(<img className='opacity-75 hover:opacity-100 rounded-3xl' src={WaxingCresMoon} alt='' />)
            : data.forecast.forecastday[0].astro.moon_phase === 'Waning Gibbous' ? setLunarImage(<img className='opacity-75 hover:opacity-100 rounded-3xl' src={WaningGibMoon} alt='' />)
            : data.forecast.forecastday[0].astro.moon_phase === 'Waxing Gibbous' ? setLunarImage(<img className='opacity-75 hover:opacity-100 rounded-3xl' src={WaxingGibMoon} alt='' />)
            : data.forecast.forecastday[0].astro.moon_phase === 'First Quarter' ? setLunarImage(<img className='opacity-75 hover:opacity-100 rounded-3xl' src={FirstQuarterMoon} alt='' />)
            : <div></div>

        setShowWeatherInfo(true);
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
            {showWeatherInfo === true ?
                <div className="grid h-screen grid-rows-3">
                    <div id="banner-img" className="z-10 grid content-end row-span-1" style={{ backgroundImage: `url(${backgroundBanner}` }}>
                        <div className='py-2 mx-auto'>
                            <h1 className='text-5xl font-bold text-white xxs:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>{location}</h1>
                        </div>
                    </div>
                    <div className='row-span-2 pt-1 xs:pt-2 2xl:pt-4' style={{backgroundColor: `${backgroundColor}`}}>
                        <div className='w-11/12 mx-auto text-white md:w-3/5 2xl:w-2/5 bg-turquoise bg-opacity-40 rounded-xl'>
                            <div>
                                <div className='text-4xl xxs:text-6xl xs:text-7xl md:text-6xl lg:text-8xl 2xl:text-9xl'>{tempF}&deg;</div>
                                <div className='lg:pb-1 xxs:text-xl xs:text-2xl md:text-xl lg:text-3xl 2xl:text-4xl'>{currentCond}</div>
                                <div className='lg:pb-1 xxs:text-xl xs:text-2xl md:text-xl lg:text-3xl 2xl:text-4xl'>High: {highTempF}&deg;</div>
                                <div className='lg:pb-1 xxs:text-xl xs:text-2xl md:text-xl lg:text-3xl 2xl:text-4xl'>Low: {lowTempF}&deg;</div>
                            </div>
                        </div>
                        <div className='xxs:text-2xl md:text-xl xl:text-3xl 2xl:text-4xl xxs:py-4 xs:py-6 md:py-0 xl:py-3 w-11/12 md:w-3/5 2xl:w-2/5 mx-auto mt-1.5 text-white bg-turquoise bg-opacity-40 rounded-xl'>
                            <div className='flex flex-row justify-center md:h-14 2xl:h-24'>
                                <span className='my-auto lg:mr-5'>Today</span> 
                                <img className='mx-0' src={`${currentCondIcon}`} alt='' />
                                <span className='my-auto'>{lowTempF}&deg; - {highTempF}&deg;</span>
                            </div>   
                            <div className='flex flex-row justify-center md:h-14 2xl:h-24'>
                                <span className='my-auto w-11 lg:mr-10'>{weekday}</span> 
                                <img className='mx-0' src={`${nextDayCondIcon}`} alt='' />
                                <span className='my-auto'>{lowTempF2}&deg; - {highTempF2}&deg;</span>
                            </div>
                            <div className='flex flex-row justify-center md:h-14 2xl:h-24'>
                                <span className='my-auto w-11 lg:mr-10'>{nextWeekday}</span> <img className='mx-0' src={`${thirdDayCondIcon}`} alt='' /><span className='my-auto'>{lowTempF3}&deg; - {highTempF3}&deg;</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="fixed bottom-0 left-0 z-20 flex flex-row w-full navbar h-14 lg:h-20 2xl:h-28 3xl:h-32 bg-turquoise bg-opacity-40">
                            <div className="flex items-center justify-between px-6 grow">
                                <div>
                                    <button id="navbarLogo" className='pt-1 text-white cursor-pointer hover:text-pale-green' onClick={() => setShowWeatherInfo(false)}>
                                        <ArrowBackIcon fontSize='large' />
                                    </button>
                                </div>
                                <div className=''>
                                    <Footer showAstroInfo={setShowAstroInfo} showWeatherInfo={setShowWeatherInfo} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : showAstroInfo === true ? 
                <div>
                    <AstroInfo 
                        backgroundColor={backgroundColor}
                        sunrise={sunrise} 
                        sunset={sunset} 
                        moonrise={moonrise} 
                        moonset={moonset} 
                        lunarPhase={lunarPhase}
                        lunarImage={lunarImage}
                        showWeatherInfo={setShowWeatherInfo}
                        showAstroInfo={setShowAstroInfo} 
                    />
                </div> 
                :
                <div className='h-screen p-3 bg-violet-purple'>
                    <div className="grid h-full grid-rows-3 px-2 text-center bg-opacity-40 bg-turquoise rounded-xl">
                        <div className='mt-20 2xl:mt-40'>
                            <LogoAnimation />
                        </div>
                        <div>
                            <img src={SunAndCloudLogo} id='sun-logo' className='w-3/5 mx-auto md:w-1/4 xl:w-1/5' alt='' />
                        </div>
                        <div className='xl:pt-10'>
                            <h2 className='pb-5 text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-5xl xl:pb-8 3xl:text-6xl'>Enter a city or zip-code</h2>
                            <input id="inputField" className='w-1/2 py-1 rounded focus:outline-none md:w-44 md:h-7 lg:h-8 xl:w-60 xl:h-10 lg:w-60 lg:text-xl 3xl:w-80 3xl:h-16 3xl:text-3xl' type="text" placeholder="Enter here..."/>
                            <button id="searchButton" type='submit' className='px-2 py-1 ml-2 text-white rounded hover:bg-pale-green bg-light-purple hover:text-black md:h-7 md:w-16 lg:h-8 lg:w-24 xl:h-10 xl:text-lg xl:ml-5 3xl:h-16 3xl:w-32 3xl:rounded-xl' onClick={fetchAstronomyInfo}>Search</button>
                        </div>
                    </div>
                </div>
                
            }
            <div className='hidden'></div>
        </div>
    );
}

export {WeatherInfo};