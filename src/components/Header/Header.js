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
      <h1>CONCERT CREW</h1>
      </div>
      {button}
    </div>
  );
};

export default Header;
