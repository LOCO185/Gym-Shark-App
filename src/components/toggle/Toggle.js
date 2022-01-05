import React from "react";
import "./toggle.css";

const Toggle = ({ handleGenderSelection, genderToggle }) => {
  return (
    <div className="toggle-container">
      <button
        id="mens"
        className={genderToggle === "mens" ? "selected" : null}
        onClick={handleGenderSelection}
      >
        Mens
      </button>
      <button
        id="womens"
        className={genderToggle === "womens" ? "selected" : null}
        onClick={handleGenderSelection}
      >
        Womens
      </button>
    </div>
  );
};

export default Toggle;
