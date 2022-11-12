import React, { useEffect, useRef } from "react";
import Status from "./Status";
import logo from "../../src/images/logos/cc-favicon-mint.svg";
import "./Status404.css";
import { gsap } from "gsap/gsap-core";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

const Status404 = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".error-404",
      { rotation: 1 },
      {
        rotation: 360,
        transformOrigin: "50% 60%",
        repeat: 0,
        ease: "none",
        motionPath: {
          path: [
            { x: -500, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
          ],
          type: "cubic",
        },
      }
    );
  }, []);

  return (
    <Status code={404}>
      <>
      <Header
      className="four-oh-four-header" />
        <div className="error-container">
          <div className="logo-wrapper">
            <Link to="/">
              <img className="logo-404" src={logo} alt="logo404" />
            </Link>
          </div>
          <div className="error-text-wrapper">
            <h2 className="sorry">There's</h2>
            <h2 className="sorry">a scratch in the record.</h2>
            <h3 ref={boxRef} className="error-404">
              404
            </h3>
          </div>
        </div>
      </>
    </Status>
  );
};

export default Status404;