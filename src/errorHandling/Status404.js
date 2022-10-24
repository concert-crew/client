import React from "react";
import Status from "./Status";
import logo from "../../src/images/logos/cc-favicon-mint.svg";
import "./Status404.css";
import { Link } from "react-router-dom";

const Status404 = ({ setCurrentUser }) => {
  return (
    <Status code={404}>
      <>
        <div className="error-container">
          <div className="logo-wrapper">
            <Link to="/">
              <img className="logo-404" src={logo} alt="logo404" />
            </Link>
          </div>
          <div className="error-text-wrapper">
            <h2 className="sorry">Sorry,</h2>
            <h2 className="sorry">can't find that.</h2>
            <h3 className="error-404">404</h3>
          </div>
        </div>
      </>
    </Status>
  );
};

export default Status404;
