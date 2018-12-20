import React from "react";
import "./style.css";

const Button = props => {
  const { secondary, children } = props;

  return (
    <button className={secondary ? "buttonSecondary" : "button"}>
      {children}
    </button>
  );
};

export default Button;
