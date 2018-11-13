import React, { Component } from "react";
import "./style.css";

class Section extends Component {
  render() {
    const { children } = this.props;

    return (
      <section>
        <div className="section-content">{children}</div>
      </section>
    );
  }
}

export default Section;
