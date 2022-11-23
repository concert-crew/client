import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./EventDetails.css";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

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

  const data = [
    {
      userId: "02b",
      comId: "017",
      fullName: "Chantal",
      text: "Pre game at my house! Let's say 6:00 pm?",
      avatarUrl: `https://user-images.githubusercontent.com/102189342/197836185-9b2f1f66-98a7-4d77-8b6e-53895b551950.jpg`,
      replies: [],
    },
  ];



  const [add, setAdd] = useState(false);
  const [createEvent] = useMutation(CREATE_EVENT);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2YatgVbP7Kowv1buKPoKE-m4o4A3_Uow",
  });

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

  if (!isLoaded) return <div>LOADING....</div>;

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
          <GoogleMap
            zoom={15}
            center={{
              lat: parseFloat(event.latitude),
              lng: parseFloat(event.longitude),
            }}
            mapContainerClassName="map-container"
          >
            <Marker
              position={{
                lat: parseFloat(event.latitude),
                lng: parseFloat(event.longitude),
              }}
            />
          </GoogleMap>
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
        <CommentSection
          currentUser={{
            currentUserId: user.id,
            currentUserImg: user.image,
            currentUserFullName: user.name,
          }}
          commentData={data}
          // onSubmitAction={(newData) => setData([...data, newData])}
        />
    </div>
  );
};

export default EventDetails;
