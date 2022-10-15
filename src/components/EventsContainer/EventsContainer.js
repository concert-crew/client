import React from "react";
import EventCard from "../EventCard/EventCard";
import './EventsContainer.css'

const EventsContainer = ({ events }) => {
console.log(events);

  const eventCards = events.map((event) => (
    <EventCard
    key={event.id}
      name={event.name}
      date={event.dates.start.localDate}
      venue={event._embedded.venues[0].name}
      image={event.images[0].url}
      id={event.id}
    />
  ));
  return <div className="events-container">{eventCards}</div>;
};

export default EventsContainer;
