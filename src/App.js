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
class MyClassComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return <p>Hello world from a class component</p>;
  }
}

export default function App() {
  const name = "Jonathan";

  return (
    <div>
      <MyClassComponent />
      <MyComponent name={name}>
        <p>Someone</p>
      </MyComponent>
    </div>
  );
}
