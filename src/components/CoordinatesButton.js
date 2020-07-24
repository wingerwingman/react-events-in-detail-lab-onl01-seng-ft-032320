import React, { Component } from 'react';

class CoordinatesButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    callback = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        this.props.onReceiveCoordinates([x,y]);
    }

    render() {
        return (
        <div className="coordinates-button">
            <button button onClick={this.callback}>Button</button>
        </div>
        );
    }
}

export default CoordinatesButton;