import React, { Component } from "react";

export class BlogComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: ["My first Rect component", "Class component", "Props", "State"]
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const articles = await response.json();
      this.setState({ articles });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(article => (
          <div>
            <p>
              id: {article.id}, userId: {article.userId}
            </p>
            <span>title: {article.title}</span>
          </div>
        ))}
      </div>
    );
  }
}
