import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ name, date, venue, city, state, image, id }) => {
  const [year, month, day] = date.split("-");
  const dateDisplay =
    month && day && year ? `${month}/${day}/${year}` : `Multi-day Event`;
  return (
    <div className="event-card"
      style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "360px 230px",
      backgroundAttachment: "absolute",
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
      </Link>
    </div>
  );
};

export default EventCard;
