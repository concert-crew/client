import React from "react";
import EventsContainer from "../EventsContainer/EventsContainer";
import './UserDashboard.css'

const UserDashboard = ({user}) => {

  return <div>
    <h2 className="upcoming-shows-title">YOUR UPCOMING SHOWS</h2>
    <EventsContainer events={user.events}/>
    <button>ADD AN UPCOMING SHOW</button>

  </div>;
};

export default UserDashboard;
