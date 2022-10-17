import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";
// import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
// gsap.registerPlugin(TimelineMax);

const EventCard = ({ name, date, venue, image, id }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(".event-card", {
      duration: 3,
      motionPath: {
        path: [
          { x: -500, y: 0 },
          { x: 0, y: 0 },
          { x: 0, y: 0 },
          { x: 0, y: 0 },
        ],
        type: "cubic",
      },
    });
  }, []);

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
