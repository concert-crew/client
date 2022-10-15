import React from "react";
import { Link } from "react-router-dom";
import './EventCard.css'

const EventCard = ({name, date, venue, image, id}) => {
    
  return (
    <div
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
      </Link>
    </div>
  );
};

export default EventCard;
