import React from "react";
import "./Loader.css";
import poto from '../src/components/css/Image/unnamed.png'

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={poto} alt="loading" className="loader" />
    </div>
  );
};

export default Loader;
