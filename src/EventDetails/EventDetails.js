import React, { useState } from "react";
// import DefaultComponent from "../components/CommentSection/CommentSection"
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

const EventDetails = ({ event, user }) => {
  const [data, setData] = useState(event.comments);

  const attendees = event.attendees.map((attendee) => (
    <div key={attendee.name}>
      <p>{attendee.name}</p>
      <img src={attendee.image} alt={attendee.name} />
    </div>
  ));

  return (
    <div>
      <img src={event.images[0].url} alt={event.name} />
      <h3>{event.name}</h3>
      <a href={event.url} target="_blank">
        Buy Tickets
      </a>
      <p>
        {event.dates.start.localDate}
        <br></br>
        {event.dates.start.localTime}
      </p>
      <p>
        {event._embedded.venues[0].name}
        <br></br>
        {event._embedded.venues[0].address.line1}
        <br></br>
        {event._embedded.venues[0].city.name},
        {event._embedded.venues[0].state.stateCode}
      </p>
      {attendees}

      <p>Leave a comment:</p>
      <CommentSection
        currentUser={{
          currentUserId: user.id,
          currentUserImg: user.image,
          currentUserFullName: user.name,
        }}
        commentData={data}
        onSubmitAction={(newData) => setData([...data, newData])}
      />
    </div>
  );
};

export default EventDetails;
