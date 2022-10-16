import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './EventCard.css'
// import { gsap } from "gsap"
import UserDashboard from "../UserDashboard/UserDashboard";
import {gsap, Power0, Power1, Power2, TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
// import {TimelineMax} from "gsap/TimelineMax.js"


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(PixiPlugin, MotionPathPlugin );
gsap.registerPlugin(TimelineMax);

const EventCard = ({name, date, venue, image, id}) => {
    
  const boxRef = useRef(null)

  // gsap.set('.event-card', {
  //   xPercent: 0,
  //   yPercent: 0,
  //   autoAlpha: 1,
  //   transformOrigin: "50% 50%"
  // });


  useEffect(() => {
    gsap.to(".event-card", {
    duration: 3,
    motionPath: {
      path: [{x:-500, y:0}, {x:0, y:0}, {x:0, y:0}, {x:0, y:0}],
      type: "cubic"
    }
    })
  }, [])

  return (
    <div
      ref={boxRef}
      className="event-card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "300px 190px",
      }}
    >
     
      <p className="card-text">
        <b>{name.toUpperCase()}</b>
        {date}
        <br></br>
        {venue}
      </p>
      <Link to={`/event/${id}`}>
        <button className="view-details-button">VIEW DETAILS</button>
        {/* May need to add an onClick fxn that querys event details with a event id param */}
      </Link>
    </div>
  );
};

export default EventCard;
