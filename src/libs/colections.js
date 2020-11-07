import React, { Component } from "react";

export class BlogComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: ["My first Rect component", "Class component", "Props", "State"]
    };
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(title => (
          <p>{title}</p>
        ))}
      </div>
    );
  }
}
