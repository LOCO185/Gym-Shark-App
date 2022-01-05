import React from "react";
import Toggle from "../toggle/Toggle";
import "./feature.css";
// import Search from "../Search";

const FeatureBar = ({ handleGenderSelection, genderToggle }) => {
  return (
    <div className="feature-container" id="featured">
      <h2>Personalise your experience</h2>
      <Toggle
        handleGenderSelection={handleGenderSelection}
        genderToggle={genderToggle}
      />
      {/* <Search /> */}
    </div>
  );
};

export default FeatureBar;
