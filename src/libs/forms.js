import React, { Component } from "react";

export class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  updateState = ({ target }) => {
    const { value } = target;
    const type = target.getAttribute("type");

    this.setState({ [type]: value });
  };

  submit = ev => {
    console.log(this.state);
    ev.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.updateState}
        />
        <input
          type="password"
          placeholder="****"
          value={this.state.password}
          onChange={this.updateState}
        />
        <div>
          <input type="submit" value="Sign in" />
        </div>
      </form>
    );
  }
}
