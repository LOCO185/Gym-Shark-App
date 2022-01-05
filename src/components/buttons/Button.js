import React from "react";
import "./button.css";

const Button = ({ children }) => {
  return (
    <a className="button" href="/gymshark-workouts/#featured">
      {children}
    </a>
  );
};

export default Button;
