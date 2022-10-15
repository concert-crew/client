import React from "react";
import './EventCard.css'

const EventCard = ({name, date, venue, image}) => {
    console.log({ name, date, venue, image });
    
  return (
    <div className="event-card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "300px 190px"}}>
      <p className="card-text">
        <h3>{name.toUpperCase()}</h3>
        {date}<br></br>
        {venue}
      </p>
      <button className="view-details-button">VIEW DETAILS</button>
    </div>
  );
};

export default EventCard;
