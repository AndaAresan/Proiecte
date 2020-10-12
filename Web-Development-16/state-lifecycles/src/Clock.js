// This is made using lifecycles

import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    tick = () => {
        this.setState({
            date: new Date(),
        });
    };

// Lifecycles:

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    
    render() {
        return(
            <div>
                <h1>Hello!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}