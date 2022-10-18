import React from "react";
import EventsContainer from "../EventsContainer/EventsContainer";
// import FriendsDashboard from "../FriendsDashboard/FriendsDashboard";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
import { useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";



const UserDashboard = () => {
  // const [animate, setAnimate] = useState(false)
  const { user } = useParams();
  console.log(user);

  const { data, error, loading } = useUser(user);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>User not found.</div>;
  console.log(data, error, loading);

  return (
    <div className="user-dash">
      {/* <div className="upcoming-shows-title-wrapper">
      <h2 className="upcoming-shows-title">YOUR UPCOMING SHOWS</h2>
      </div>
      <EventsContainer className ="events-container" events={data.events} />/
      <Link to="/search" >
        <button className="dash-btn">ADD AN UPCOMING SHOW</button>
      </Link> */}
    </div>
  );
};

export default UserDashboard;
