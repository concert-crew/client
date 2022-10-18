import React, { useState } from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import './EventDetails.css'

const EventDetails = ({ event, user }) => {
  const [data, setData] = useState(event.comments);
  console.log(event)
  // const attendees = event.attendees.map((attendee) => (
  //   <div className="friend" key={attendee.name}>
  //     <img src={attendee.image} alt={attendee.name} className="friend-image"/>
  //     <p>{attendee.name}</p>
  //   </div>
  // ));

  const [year, month, day] = event.date.split("-");

  const timeString12hr = new Date(
    "1970-01-01T" + event.time + "Z"
  ).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="details-page">
    <div className="event-details-container">
      <img className="details-photo" src={event.image} alt={event.name} />
      <div className="details-text">
      <h3>{event.name.toUpperCase()}</h3>
      <br></br>
      <p>
        {`${month}/${day}/${year}`}
        <br></br>
        {timeString12hr}
      </p>
      <br></br>
      <p>
        <b>{event.venueName}</b>
        <br></br>
        {event.address}
        <br></br>
        {event.city},
        {event.state}
      </p>
      <br></br>
      <iframe
        src={`https://embed.waze.com/iframe?zoom=10&lat=${event.latitude}&lon=${event.longitude}&pin=1`}
        width="100%"
        height="250"
      ></iframe>
      <br></br>
      <br></br>
      <a href={event.buyTicketsUrl} target="_blank">
        <u>Buy Tickets</u>
      </a>
      </div>
      <div className="friends-attending-details">
        <h3>FRIENDS ATTENDING:</h3>
        <br></br>
        {/* {attendees} */}
      </div>
      </div>
      <div className="comments-section">
    
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
    </div>
  );
};

export default EventDetails;
