import React, { Component } from 'react';
import styles from './DailyForecast.module.css';

class DailyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={styles.daily}>
                <strong>{this.props.day}</strong>
                <br/>
                {Math.round(this.props.temp)} &deg;
                <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png`} alt=""/>
            </div>
        );
    }
}

export default DailyForecast;