import { Component } from "react";

export default class Header extends Component {
  render() {
    // this.props
    let { name, age } = this.props;
    return (
      <h1>
        hello, {name}! You are {age} years old!{" "}
      </h1>
    );
  }
}
