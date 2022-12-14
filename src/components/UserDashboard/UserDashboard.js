import React from "react";
import EventsContainer from "../EventsContainer/EventsContainer";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
import { useParams } from "react-router-dom";
import { useUser } from "../../utilities/hooks/useUser"
import Status404 from "../../errorHandling/Status404";
import { ProgressSpinner } from "../SpinLogo/SpinLogo";

const UserDashboard = ({ setCurrentUser, setHasError404, currentUser }) => {
  const { user } = useParams();
  const { data, error, loading } = useUser(user);

  if (loading) return <ProgressSpinner />;
  if (error) return <Status404 setHasError404={setHasError404} />;

  const toBeRendered = () => {
    if (currentUser) {
      return currentUser.events;
    } else if (!loading && !error) {
      setCurrentUser(data.user);
      return data.user.events;
    }
  }

  return (
    <div className="user-dash">
      <div className="upcoming-shows-title-wrapper">
        <h2 className="upcoming-shows-title">
          {data.user.name.toUpperCase()}'S UPCOMING SHOWS
        </h2>
      </div>
      <EventsContainer className="events-container" events={toBeRendered()} />
      <Link to="/search">
        <button className="dash-btn">ADD AN UPCOMING SHOW</button>
      </Link>
    </div>
  );
};

export default UserDashboard;