import React, {useState, useEffect} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AstroInfo = (props) => {

    const sunriseValue = props.sunrise;
    const sunsetValue = props.sunset;
    const moonriseValue = props.moonrise;
    const moonsetValue = props.moonset;
    const lunarPhaseValue = props.lunarPhase;

    const setShowAstroInfo = props.showAstroInfo;
    const setShowWeatherInfo = props.showWeatherInfo;

    return (
        <div className='h-screen p-3 bg-sunny-background'>
            <div className="h-full px-2 text-center bg-opacity-40 bg-turquoise rounded-xl">
                <div>Sunrise: {sunriseValue}</div>
                <div>Sunset: {sunsetValue}</div>
                <div>Moonrise: {moonriseValue}</div>
                <div>Moonset: {moonsetValue}</div>
                <div>Lunar Phase: {lunarPhaseValue}</div>
                <div>
                    <button onClick={() => {setShowAstroInfo(false); setShowWeatherInfo(true);}}>
                        <ArrowBackIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export {AstroInfo};