import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>{this.props.name}</h1>
            </div>
         );
    }
}
 
export default City;