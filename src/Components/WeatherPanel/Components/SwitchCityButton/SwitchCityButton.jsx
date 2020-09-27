import React, { Component } from 'react';
// import styles from './SwitchCityButton.module.css';

class SwitchCityButton extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.onClick(this.props.locationValue, this.props.city)
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.children}
            </button>
        )
    }
}

export default SwitchCityButton;