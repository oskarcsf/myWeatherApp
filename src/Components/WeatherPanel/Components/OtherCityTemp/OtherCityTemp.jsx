import React from 'react';
import styles from './OtherCityTemp.module.css';

const OtherCityTemp = (props) => {
    const {temperature, city } = props;
    return (
        <div>
            {city}
            {temperature}
        </div>
    )
}

export default OtherCityTemp;
