import React, { Component } from 'react';
import DailyForecast from './Components/DailyForecast';
import Styles from './WeeklyForecast.module.css';

class FiveDayForeCast extends Component {

    renderDaily = () => {
        const fiveDay = this.props.daily.slice(1,6);
        return fiveDay.map((daily, index) => {
            const unixTime = daily.dt;
            const unixWithOffset = unixTime + 36000;
            const unixInMS = unixWithOffset * 1000;
            const getDay = new Date(unixInMS).getDay();
            const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];    
            return (
                <DailyForecast
                    key={index}
                    temp={daily.temp.day}
                    day={weekdays[getDay]}
                    icon={daily.weather[0].icon}
                />
            )
        })
    }

    render() {
        return (
            <div className={Styles.weeklyForecast}>
                {this.renderDaily()}
            </div>
        )
    }
}
export default FiveDayForeCast;