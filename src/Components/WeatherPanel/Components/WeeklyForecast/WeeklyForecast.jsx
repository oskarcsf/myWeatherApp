import React from 'react';
import DailyForecast from './Components/DailyForecast';
import Styles from './WeeklyForecast.module.css';

const FiveDayForeCast = props => {
    const renderDaily = () => {
        const fiveDay = props.daily.slice(1, 6);
        return fiveDay.map((daily, index) => {
            const unixTime = daily.dt;
            const timeZoneOffset = 36000;
            const unixTimeWithOffset = unixTime + timeZoneOffset;
            const secondToMiliSecond = 1000;
            const unixInMS = unixTimeWithOffset * secondToMiliSecond;
            const getDay = new Date(unixInMS).getDay();
            const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
            return (
                <DailyForecast
                    key={index}
                    minTemp={daily.temp.min}
                    maxTemp={daily.temp.max}
                    day={weekdays[getDay]}
                    icon={daily.weather[0].icon}
                />
            )
        })
    }

    return (
        <div className={Styles.weeklyForecast}>
            {renderDaily()}
        </div>
    )
}
export default FiveDayForeCast;