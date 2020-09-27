import React, { Component } from 'react';
import styles from './WeatherPanel.module.css';
import Temperature from './Components/Temperature';
import City from './Components/City';
// import TwitterFeed from './Components/TwitterFeed';
import WeeklyForecast from './Components/WeeklyForecast';
import SwitchCityButton from './Components/SwitchCityButton';


class WeatherPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            weather: [],
            city: "MEL",
            data:
                [
                    ["lat=-37.81&lon=144.96", "MEL"],
                    ["lat=-33.8679&lon=151.2073", "SYD"],
                    ["lat=-27.4679&lon=153.0281", "BNE"]
                ]
        }
    }

    componentDidMount() {
        this.onLocationChange(this.state.data[0][0], this.state.data[0][1])
        // this.onLocationChange("lat=-37.81&lon=144.96", "MEL") //this works
        // this.onLocationChange(this.state.data[0]) //why is this not working
    }

    onLocationChange = (latitudeAndLongtitude, city) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?${latitudeAndLongtitude}&units=metric&exclude=minutely,hourly&appid=80ecd3ecb26dbc2be397ea02494fdd69`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weather: data,
                    isLoading: false,
                    city: city,
                })
            }
            )
            .catch(error => {
                console.log("Error message:", error);
            });
    }

    renderButtons = () => {
        return this.state.data.map(
            (value, index) => {
                return (
                    <SwitchCityButton
                        className={styles.button}
                        type="submit"
                        key={index}
                        onClick={this.onLocationChange}
                        locationValue={value[0]}
                        city={value[1]}
                    >
                        {value[1]}
                    </SwitchCityButton>
                )
            }
        )
    }


    render() {
        const { panel, panelTop, panelBottom, morning, night } = styles;
        const { weather, city, isLoading } = this.state;
        return (
            (isLoading) ?
                <h1> Fetching data... </h1> :
                <div className={panel}>
                    <div className={panelTop}>
                        <Temperature temp={(weather.current.temp)} />
                        <City name={city} />
                    </div>
                    <div className={panelBottom}>
                        {/* <TwitterFeed /> */}
                        <WeeklyForecast daily={weather.daily} />
                    </div>
                    <div className={styles.buttons}>
                        {this.renderButtons()}
                    </div>
                </div>
        );
    }
}

export default WeatherPanel;