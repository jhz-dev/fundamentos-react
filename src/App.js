import React, { Component } from "react";
import "./style.css";

/**
 * Notes:
 * props => are read only.
 *
 * functional components:
 * * Just receive as a paremeter the props object
 * * To set the props to a funtional component with set each attribute
 * <MyComponent name={name}/>
 *
 * JSX
 * Similar syntax to html
 * for using/calling a component <ComponentName/>
 *
 *
 * STATE
 * save some data/ is every thing that a component needs to work properly
 */

// functional component
const MyComponent = props => {
  const { name, children } = props;
  return (
    <div>
      <p>{name} says hello world</p>
      {children}
    </div>
  );
};

// class component
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increase = () => {
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

export default function App() {
  const name = "Jonathan";

  return (
    <div>
      <Counter />
      <MyComponent name={name}>
        <p>Someone</p>
      </MyComponent>
    </div>
  );
}
