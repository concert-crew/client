import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './EventCard.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(PixiPlugin, MotionPathPlugin );

const EventCard = ({name, date, venue, city, state, image, id}) => {
    
  const boxRef = useRef(null)

  const [year, month, day] = date.split("-");
  const dateDisplay = month && day && year ? `${month}/${day}/${year}` : `Multi-day Event`
  

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
        backgroundSize: "325px 190px",
        backgroundAttachment: "fixed",
      }}
    >
      <p className="card-text">
        <b>{name.toUpperCase()}</b>
        <br></br>
        <br></br>
        {dateDisplay}
        <br></br>
        {venue}
        <br></br>
        {city}, {state}
      </p>
      <Link to={`/event/${id}`}>
        <button className="view-details-button">VIEW DETAILS</button>
        {/* May need to add an onClick fxn that querys event details with a event id param */}
      </Link>
    </div>
  );
};

export default EventCard;
