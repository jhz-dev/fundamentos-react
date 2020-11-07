import React, { Component } from "react";
import "./style.css";
import { Counter, MyComponent } from "./libs/base";
import { FormComponent } from "./libs/forms";
import { BlogComponent } from "./libs/colections";

export default function App() {
  return (
    <div>
      <BlogComponent />
    </div>
  );
}
