import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import "./EventDetails.css";

const CREATE_EVENT = gql`
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      event {
        name
        ticketmasterId
        buyTicketsUrl
        image
        date
        time
        venueName
        city
        state
        address
        longitude
        latitude
        userId
      }
    }
  }
`;

const EventDetails = ({ event, user, setCurrentUser }) => {
  const [add, setAdd] = useState(false);

  const [createEvent] = useMutation(CREATE_EVENT);
  const [year, month, day] = event.date.split("-");
  const attendees = event.attendees ? (
    event.attendees.map((attendee) => (
      <div className="friend" key={attendee.name}>
        <img
          src={attendee.image}
          alt={attendee.name}
          className="friend-image"
        />
        <p>{attendee.name}</p>
      </div>
    ))
  ) : (
    <p>Looks like no friends are attending yet.</p>
  );

  const time =
    !year && !month && !day
      ? "Multi Day Event"
      : new Date("1970-01-01T" + event.time + "Z").toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        });

  const handleButtonClick = (e) => {
    e.preventDefault();
    setAdd(true);
    setCurrentUser({
      ...user,
      events: [...user.events, event],
    });
    createEvent({
      variables: {
        input: { ...event, userId: parseInt(user.id) },
      },
    });
  };

  // const displayButton = () => {
  //   event.attendees && event.attendees.forEach((attendee) => {
  //     if (attendee.name !== user.name) {
  //       return (
  //         <button
  //           className="postBtn"
  //           onClick={(e) => {
  //             handleButtonClick(e);
  //           }}
  //           disabled={add}
  //         >
  //           ADD SHOW TO YOUR EVENTS
  //         </button>
  //       );
  //     }
  //   });
  // };

  return (
    <div className="details-page">
      <div className="event-details-container">
        <img className="details-photo" src={event.image} alt={event.name} />
        <div className="details-text">
          <h3>{event.name.toUpperCase()}</h3>
          <br></br>
          <p>
            {new Date(event.date).toDateString()}
            <br></br>
            {time}
          </p>
          <br></br>
          <p>
            <b>{event.venueName}</b>
            <br></br>
            {event.address}
            <br></br>
            {event.city}, {event.state}
          </p>
          <br></br>

          <iframe
            src={`https://embed.waze.com/iframe?zoom=10&lat=${event.latitude}&lon=${event.longitude}&pin=1`}
            width="100%"
            height="250"
            title="waze"
            className="mapid"
          ></iframe>
          <br></br>
          <br></br>
          <a href={event.buyTicketsUrl} target="_blank" rel="noreferrer">
            <u>Buy Tickets</u>
          </a>
        </div>
        <div className="friends-attending-details">
          <h3>ATTENDING:</h3>
          <br></br>
          {attendees}
        </div>
      </div>
      {add && <p>This event has been added!</p>}
      <button
        className="postBtn"
        onClick={(e) => {
          handleButtonClick(e);
        }}
        disabled={add}
      >
        ADD SHOW TO YOUR EVENTS
      </button>
    </div>
  );
};

export default EventDetails;
