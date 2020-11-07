import React, { Component } from "react";
import "./style.css";
import { Counter, MyComponent } from "./libs/base";
import { FormComponent } from "./libs/forms";
import { BlogComponent } from "./libs/collections";

export default function App() {
  return (
    <div>
      <BlogComponent />
    </div>
  );
}
