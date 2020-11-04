import React, { Component } from "react";
import "./style.css";

// functional component
const MyComponent = () => {
  return <p>Hello world</p>;
};

// class component
class MyClassComponent extends Component {
  render() {
    return <p>Hello world from a class component</p>;
  }
}

export default function App() {
  return (
    <div>
      <MyComponent />
      <MyClassComponent />
    </div>
  );
}
