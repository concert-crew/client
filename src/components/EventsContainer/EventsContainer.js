import React from "react";
import EventCard from "../EventCard/EventCard";
import './EventsContainer.css'

const EventsContainer = ({ events }) => {
console.log(events);

  const eventCards = events.map((event) => (
    <EventCard
    key={event.ticketmasterId}
      name={event.name}
      date={event.date}
      venue={event.venueName}
      image={event.image}
      city={event.city}
      state={event.state}
      id={event.ticketmasterId}
    />
  ));
  return <div className="events-container">{eventCards}</div>;
};

export default EventsContainer;
