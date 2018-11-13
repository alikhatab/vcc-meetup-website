import React, { Component } from "react";
import "./style.css";

class Button extends Component {
  render() {
    const { secondary, children } = this.props;
    return (
      <button className={secondary ? "buttonSecondary" : "button"}>
        {children}
      </button>
    );
  }
}

export default Button;
