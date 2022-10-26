import React from "react";
import { Link } from "react-router-dom";
import pinkLogo from "../../images/logos/cc-favicon-pink.svg";
import whiteLogo from "../../images/logos/cc-favicon-white.svg";
import mintLogo from "../../images/logos/cc-favicon-mint.svg";
import "./SpinLogo.css";

const SpinLogo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img className="pinkLogo" src={pinkLogo} alt="pink logo" />
      </Link>
    </div>
  );
};

const ProgressSpinner = () => {
  return (
    <div className="progressContainer">
      <div className="progress-wrapper">
        <img className="pinkProgress" src={pinkLogo} alt="pink progress" />
        <img className="mintProgress" src={mintLogo} alt="mint progress" />
        <img className="whiteProgress" src={whiteLogo} alt="white progress" />
      </div>
    </div>
  );
};

export { SpinLogo, ProgressSpinner };
