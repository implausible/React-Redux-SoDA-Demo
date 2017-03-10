import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      timer: null
    };
  }

  componentWillMount() {
    const timer = setInterval(
      () => this.setState({ time: this.state.time + 1 }),
      1000
    );

    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>A simple timer</h1>
        <div>The time: {time}</div>
      </div>
    );
  }
}


export default Timer;
