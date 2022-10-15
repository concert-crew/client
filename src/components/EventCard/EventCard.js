import React from "react";

const EventCard = ({name, date, venue, image}) => {
    console.log({ name, date, venue, image });
    
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name}/>
      <p>
        {date}<br></br>
        {venue}
      </p>
    </div>
  );
};

export default EventCard;
