import React, { Component } from "react";
import "./style.css";

class Button extends Component {
  render() {
    const { children } = this.props;
    return <button className="button">{children}</button>;
  }
}

export default Button;
