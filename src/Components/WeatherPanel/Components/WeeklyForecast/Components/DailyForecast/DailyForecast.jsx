import React from 'react';
import styles from './DailyForecast.module.css';

const DailyForecast = (props) => {
    const { day, maxTemp, minTemp, icon } = props;
    return (
        <div className={styles.daily}>
            <p><strong>{day}</strong></p>
            <p>{Math.round(maxTemp)} &deg;</p>
            <p>{Math.round(minTemp)} &deg;</p>
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
        </div>
    )
}

export default DailyForecast;