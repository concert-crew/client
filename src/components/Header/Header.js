import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logout from "../../images/logout-icon.svg";
import viewFriends from "../../images/friends_1.svg";
import userIcon from "../../images/user-icon.svg";
import { SpinLogo } from "../SpinLogo/SpinLogo";

const Header = ({ user, setCurrentUser, findFriends }) => {
  const button = user && (
    <div className="header-login-container">
      <Link className="link-wrapper" to={`/${user.name}`}>
        <div className="icon-and-text">
          <img
            className="dashboard-btn"
            alt="dashboard button"
            src={userIcon}
          />
          <h3 className="nav-bar-text">Back to Dashboard</h3>
        </div>
      </Link>
      <Link className="link-wrapper" to={`/${user.name}/friends`}>
        <div className="icon-and-text" onClick={() => findFriends()}>
          <img
            className="view-friends-btn"
            alt="view friends button"
            src={viewFriends}
          />
          <h3 className="nav-bar-text">View Friends Upcoming Shows</h3>
        </div>
      </Link>
      <Link className="link-wrapper" to="/">
        <div className="icon-and-text" onClick={() => setCurrentUser('')}>
          <img className="logout-btn" alt="logout button" src={logout} />
          <h3 className="nav-bar-text">Logout</h3>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="header">
      <div className="h1-wrapper">
        <SpinLogo />
        <Link to={`/${user.name}`}>
          <h1>CONCERT CREW</h1>
        </Link>
      </div>
      {button}
    </div>
  );
};

export default Header;