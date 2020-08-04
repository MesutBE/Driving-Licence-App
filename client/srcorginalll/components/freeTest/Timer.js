import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    minutes: 25,
    seconds: 0,
  };
  constructor(props){
    super(props);
    this.state.minutes = this.props.minutes;
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        {minutes === 0 && seconds === 0 ? (
          <h3>Busted!</h3>
        ) : (
          <h4>
            Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h4>
        )}
      </div>
    );
  }
}
