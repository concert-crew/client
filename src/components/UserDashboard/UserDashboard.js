import React from "react";
import EventsContainer from "../EventsContainer/EventsContainer";

const UserDashboard = ({user}) => {

  return <div>
<h2>Hello, {user.name}</h2>
<EventsContainer events={user.events}/>


  </div>;
};

export default UserDashboard;
