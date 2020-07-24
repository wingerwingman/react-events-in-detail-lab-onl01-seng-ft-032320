import React, { Component } from 'react';

class DelayedButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    callback = (event) => {
        event.persist();
        setTimeout(() => {
          this.props.onDelayedClick(event);
        }, this.props.delay);
      };
      
    render() {
        return (
          <div className="delayed-button">
            <button onClick={this.callback}>Delayed Button</button>
          </div>
        );
    }
}

export default DelayedButton;