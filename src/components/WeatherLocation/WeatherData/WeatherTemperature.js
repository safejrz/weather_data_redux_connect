import React from 'react';
//TODO:FIX
//import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
// import { CLOUD, 
//     CLOUDY, 
//     SUN,
//     RAIN,
//     SNOW, 
//     WINDY, 
//     THUNDER, 
//     DRIZZLE } from './../../../constants/weathers';
// import './styles.css';

// const stateToIconName = weatherState => {
//     switch (weatherState) {
//         case CLOUD:
//             return "cloud";
//         case CLOUDY:
//             return "cloudy";
//         case SUN:
//             return "day-sunny";
//         case RAIN:
//             return "rain";
//         case SNOW:
//             return "snow";
//         case WINDY:
//             return "windy";
//         case THUNDER:
//             return "day-thunderstorm";
//         case DRIZZLE:
//             return "day-showers";
//         default:
//             return "day-sunny";
//     }
// };

const getWeatherIcon = weatherState => {
    return (        
        <div>ICON</div>
    // TODO:FIX
    // <WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />    
);
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont' >
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;