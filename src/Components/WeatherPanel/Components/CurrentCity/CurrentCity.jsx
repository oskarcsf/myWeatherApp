import React from 'react';
import styles from './CurrentCity.module.css';

const CurrentCity = props => {
  const { windDegree, name, temp, windSpeed, feels_Like, description, unixTime, timeZoneOffset } = props;
  const renderDirectionNew = () => {
    const directionTable = [
      { min: 316, max: 360, direction: "North" },
      { min: 0, max: 45, direction: "North" },
      { min: 46, max: 135, direction: "East" },
      { min: 136, max: 225, direction: "South" },
      { min: 226, max: 315, direction: "West" },
    ]
    for (let i = 0; i < directionTable.length; i++) {
      if (windDegree >= directionTable[i].min && windDegree <= directionTable[i].max) {
        return (
          directionTable[i].direction
        )
      }
    }
  }

  return (
    <div>
      <p className={styles.city}>{name}</p>
      <p>{description}</p>
      <p className={styles.temp}>{Math.round(temp)}&deg;</p>
      <div className={styles.otherInfo}>
        <p>Wind Speed: {windSpeed} km/h</p>
        <p>Wind Direction: {renderDirectionNew()}</p>
        <p>Feels Like: {(Math.round((feels_Like) * 10) / 10)}&deg;</p>
      </div>
    </div>
  );
}

export default CurrentCity;