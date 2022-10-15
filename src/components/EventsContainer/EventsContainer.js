import React from "react";
import EventCard from "../EventCard/EventCard";

const EventsContainer = ({ events }) => {

  const eventCards = events.map((event) => (
    <EventCard
    key={event.id}
      name={event.name}
      date={event.dates.start.localDate}
      venue={event._embedded.venues[0].name}
      image={event.images[0].url}
    />
  ));
  return <div>{eventCards}</div>;
};

export default EventsContainer;
