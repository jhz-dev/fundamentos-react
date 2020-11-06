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
 */

// functional component
const MyComponent = props => {
  const { name } = props;
  return <p>{name} says hello world</p>;
};

// class component
class MyClassComponent extends Component {
  render() {
    return <p>Hello world from a class component</p>;
  }
}

export default function App() {
  const name = "Jonathan";

  return (
    <div>
      <MyComponent name={name} />
      <MyClassComponent />
    </div>
  );
}
