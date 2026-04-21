import { Component } from "react";
import Helping from "./Helping";

export default class Header extends Component {
  render() {
    // this.props
    let { name, age } = this.props;
    return (
      <div>
        <h1>
          hello, {name}! You are {age} years old!{" "}
        </h1>
        <Helping />
      </div>
    );
  }
}
