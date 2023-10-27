import React, {useState, useEffect} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AstroInfo = (props) => {

    const sunriseValue = props.sunrise;
    const sunsetValue = props.sunset;
    const moonriseValue = props.moonrise;
    const moonsetValue = props.moonset;
    const lunarPhaseValue = props.lunarPhase;
    const lunarImageValue = props.lunarImage;

    const setShowAstroInfo = props.showAstroInfo;
    const setShowWeatherInfo = props.showWeatherInfo;

    return (
        <div className='h-screen p-3 bg-sunny-background'>
            <div className="grid content-between h-full px-2 text-lg text-center text-white bg-opacity-40 bg-turquoise rounded-xl">
                <div className='mt-8'>Sunrise: <span className='font-bold text-pale-green'>{sunriseValue}</span></div>
                <div className='mt-8'>Sunset: <span className='font-bold text-pale-green'>{sunsetValue}</span></div>
                <div className='mt-8'>Moonrise: <span className='font-bold text-pale-green'>{moonriseValue}</span></div>
                <div className='mt-8'>Moonset: <span className='font-bold text-pale-green'>{moonsetValue}</span></div>
                <div className='mt-8'>
                    <div>Lunar Phase: <span className='font-bold text-pale-green'>{lunarPhaseValue}</span></div>
                    <div className='w-20 mx-auto mt-3 hover:w-3/4'>{lunarImageValue}</div>
                </div>
                <div className='p-1 place-self-start'>
                    <button className='text-white cursor-pointer hover:text-pale-green' onClick={() => {setShowAstroInfo(false); setShowWeatherInfo(true);}}>
                        <ArrowBackIcon fontSize='large' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export {AstroInfo};