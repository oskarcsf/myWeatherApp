import React, { Component } from 'react';
import styles from './WeatherPanel.module.css';
import CurrentCity from './Components/CurrentCity';
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
          { id: 1, city: "Melbourne", locationValue: "lat=-37.81&lon=144.96" },
          { id: 2, city: "Sydney", locationValue: "lat=-33.8679&lon=151.2073" },
          { id: 3, city: "Brisbane", locationValue: "lat=-27.4679&lon=153.0281" },
          { id: 4, city: "Hong Kong", locationValue: "lat=22.25&lon=114.1667" }
        ]
    }
  }

  componentDidMount() {
    this.onLocationChange(this.state.data[0].locationValue, this.state.data[0].city);
    const msPerMinute = 60000;
    setInterval( ()=> {
      for (let i = 0; i < this.state.data.length; i++) {
        if ( this.state.city === this.state.data[i].city){
          this.onLocationChange(this.state.data[i].locationValue, this.state.data[i].city)
        }
      }
      console.log(this.state.city)
    }, msPerMinute)
  }

  onLocationChange = (latitudeAndLongtitude, city) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?${latitudeAndLongtitude}&units=metric&exclude=minutely,hourly&lang=zh_cn&appid=80ecd3ecb26dbc2be397ea02494fdd69`)
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
      (data) => {
        return (
          <SwitchCityButton
            className={styles.button}
            type="submit"
            key={data.id}
            onClick={this.onLocationChange}
            locationValue={data.locationValue}
            city={data.city}
          >
            {data.city}
          </SwitchCityButton>
        )
      }
    )
  }

  render() {
    const { weather, city, isLoading } = this.state;
    return (
      (isLoading) ?
        <h1> Fetching data... </h1> :
        <div className={styles.panel} >
          <div className={styles.panelTop}>
            <CurrentCity
              name={city}
              temp={weather.current.temp}
              windSpeed={weather.current.wind_speed}
              description={weather.current.weather[0].description}
              feels_Like={weather.current.feels_like}
              windDegree={weather.current.wind_deg}
            />
          </div>
          <div className={styles.panelBottom}>
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