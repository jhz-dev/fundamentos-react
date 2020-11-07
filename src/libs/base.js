import React, { Component } from "react";

// functional component
export const MyComponent = props => {
  const { name, children } = props;
  return (
    <div>
      <p>{name} says hello world</p>
      {children}
    </div>
  );
};

// class component
export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increase = () => {
    //for updating the state
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrease = () => {
    const counter = this.state.counter > 0 ? this.state.counter - 1 : 0;

    this.setState({ counter });
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <p>{counter}</p>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Declease</button>
      </div>
    );
  }
}
