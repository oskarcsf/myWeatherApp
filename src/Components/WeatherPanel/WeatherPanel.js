import React, { Component } from 'react';
import styles from './WeatherPanel.module.css';
import Temperature from './Components/Temperature';
import City from './Components/City';
// import TwitterFeed from './Components/TwitterFeed';
import WeeklyForecast from './Components/WeeklyForecast';


class WeatherPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            weather: [],
            city: "MEL",
        }
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=-37.81&lon=144.96&units=metric&exclude=minutely,hourly&appid=80ecd3ecb26dbc2be397ea02494fdd69')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weather: data,
                    loading: false,
                })
            }
            )
            .catch(error => {
                console.log("Error fetching and parsing error", error);
            });
    }


    onLocationChange(latitudeAndLongtitude, city) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?${latitudeAndLongtitude}&units=metric&exclude=minutely,hourly&appid=80ecd3ecb26dbc2be397ea02494fdd69`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weather: data,
                    loading: false,
                    city: city,
                })
            }
            )
            .catch(error => {
                console.log("Error fetching and parsing error", error);
            });
    }



render() {
    const { panel, panelTop, panelBottom } = styles;
    return (
        (this.state.loading) ?
            <h1> Loading... </h1> :
            <div className={panel}>
                <div className={panelTop}>
                    <Temperature temp={(this.state.weather.current.temp)} />
                    <City name={this.state.city} />
                </div>
                <div className={panelBottom}>
                    {/* <TwitterFeed /> */}
                    <WeeklyForecast daily={this.state.weather.daily} />
                </div>
                <div className = {styles.buttons}>
                        <button className = {styles.button} type="submit" onClick = {() => this.onLocationChange("lat=-37.81&lon=144.96", "MEL")}>Melbourne</button>
                        <button className = {styles.button} type="submit" onClick = {() => this.onLocationChange("lat=-33.8679&lon=151.2073", "SYD")}>Sydney</button>
                        <button className = {styles.button} type="submit" onClick = {() => this.onLocationChange("lat=-27.4679&lon=153.0281", "BNE")}>Brisbane</button>
                </div>
            </div>
    );
}
}

export default WeatherPanel;