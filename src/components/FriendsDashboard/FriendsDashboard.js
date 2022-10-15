import React from "react";
import EventsContainer from "../EventsContainer/EventsContainer";

const FriendsDashboard = ({events}) => {
    console.log(events);
    
  return (

      <div>
        <h2>FRIENDS UPCOMING SHOWS</h2>
        <EventsContainer events={events} />
     
      </div>

  );
};

export default FriendsDashboard;
