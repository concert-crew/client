import React from "react";
import EventsContainer from "../EventsContainer/EventsContainer";
import "./FriendsDashboard.css";




const FriendsDashboard = ({ currentUser, setHasError404, friends }) => {
 
console.log(friends)


  return (
    <div className="friends-dash">
      <div className="friends-shows-title-wrapper">
        <h2 className="friends-shows-title">FRIENDS UPCOMING SHOWS</h2>
      </div>
      <EventsContainer events={currentUser.friendEvents} />
    </div>
  );
};

export default FriendsDashboard;
