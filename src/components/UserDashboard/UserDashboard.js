import React from "react";
import EventsContainer from "../EventsContainer/EventsContainer";
// import FriendsDashboard from "../FriendsDashboard/FriendsDashboard";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";



const UserDashboard = ({setCurrentUser}) => {
  // const [animate, setAnimate] = useState(false)
  const { user } = useParams();

  const { data, error, loading } = useUser(user);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>User not found.</div>;
  setCurrentUser(data.user)

  return (
    <div className="user-dash">
      <div className="upcoming-shows-title-wrapper">
      <h2 className="upcoming-shows-title">{data.user.name.toUpperCase()}'S UPCOMING SHOWS</h2>
      </div>
      <EventsContainer className ="events-container" events={data.user.events} />
      <Link to="/search" >
        <button className="dash-btn">ADD AN UPCOMING SHOW</button>
      </Link>
    </div>
  );
};

export default UserDashboard;
