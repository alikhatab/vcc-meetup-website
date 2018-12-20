import React from "react";
import "./style.css";

const Section = props => {
  const { children } = props;

  return (
    <section>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;
