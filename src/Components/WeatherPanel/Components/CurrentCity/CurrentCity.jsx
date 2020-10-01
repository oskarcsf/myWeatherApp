import React, { Component } from 'react';
import styles from './CurrentCity.module.css';

const CurrentCity = props => {
  const { windDegree, name, temp, windSpeed, feels_Like, description } = props;

  const renderWindDirection = (degree) => {
    switch (true) {
      case (windDegree > 316 || windDegree <= 45):
        return "North"
        break;
      case (windDegree > 46 && windDegree <= 135):
        return "East"
        break;
      case (windDegree > 136 && windDegree <= 225):
        return "South"
        break;
      case (windDegree > 226 && windDegree <= 315):
        return "West"
        break;
      default:
        return "Default"
        break;
    }
  }

  return (
    <div>
      <p className={styles.city}>{name}</p>
      <p>{description}</p>
      <p className={styles.temp}>{Math.round(temp)}&deg;</p>
      <div className={styles.otherInfo}>
        <p>Wind Speed: {windSpeed} km/h</p>
        <p>Wind Direction: {renderWindDirection()}
        </p>
        <p>Feels Like: {(Math.round((feels_Like) * 10) / 10)}&deg;</p>
      </div>
    </div>
  );
}

export default CurrentCity;