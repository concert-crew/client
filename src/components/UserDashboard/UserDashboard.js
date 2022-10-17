import React from "react";
import EventsContainer from "../EventsContainer/EventsContainer";
import FriendsDashboard from "../FriendsDashboard/FriendsDashboard";
import "./UserDashboard.css";


const UserDashboard = ({ user }) => {
  // const [animate, setAnimate] = useState(false)
  

  return (
    <div className="user-dash">
      <div className="upcoming-shows-title-wrapper">
      <h2 className="upcoming-shows-title">YOUR UPCOMING SHOWS</h2>
      </div>
      <EventsContainer className ="events-container" events={user.events} />
      <button className="dash-btn">ADD AN UPCOMING SHOW</button>
    </div>
  );
};

export default UserDashboard;
