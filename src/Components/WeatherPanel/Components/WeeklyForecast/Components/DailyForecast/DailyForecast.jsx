import React from 'react';
import styles from './DailyForecast.module.css';

const DailyForecast = (props) => {
    const { day, maxTemp, minTemp, icon } = props;
    return (
        <div className={styles.daily}>
            <strong>{day}</strong>
            <br />
            {Math.round(maxTemp)} &deg;
            <br />{Math.round(minTemp)} &deg;
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
        </div>
    )
}

export default DailyForecast;