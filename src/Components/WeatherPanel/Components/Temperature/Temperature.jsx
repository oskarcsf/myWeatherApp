import React, { Component } from 'react';

class Temperature extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h3>NOW: <br/>
                {Math.round(this.props.temp)} &deg;
                </h3>
            </div>
        );
    }
}

export default Temperature;