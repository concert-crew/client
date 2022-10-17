import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logout from "../../images/logout-icon.svg"
import viewFriends from "../../images/friends_1.svg"


const Header = ({ user, signOut }) => {



    
  const button = user && (
    <div className="header-login-container">
      <Link to={`${user.name}/friends`}>
        <img className="view-friends-btn" src={viewFriends}/>
        <h3 className="nav-bar-text">View Friends Upcoming Shows</h3>
      </Link>
      {/* fxn that querys all other events that aren't related to the current user */}
      <Link to="/">
        <img className="logout-btn" src={logout} onClick={() => signOut("")}/>
      </Link>
    </div>
  );

  return (
    <div className="header">
      <div className="h1-wrapper">
      <Link to={`/${user.name}`}>
        <h1>CONCERT CREW</h1>
      </Link>
      </div>
      {button}
    </div>
  );
};

export default Header;
