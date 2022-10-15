import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ user, signOut }) => {



    
  const button = user && (
    <div>
      <Link to={`${user.name}/friends`}>
        <button> See Friend's Upcoming Shows</button>
      </Link>
      {/* fxn that querys all other events that aren't related to the current user */}
      <Link to="/">
        <button onClick={() => signOut("")}> Sign out</button>
      </Link>
    </div>
  );

  return (
    <div className="header">
      <h1>CONCERT CREW</h1>
      {button}
    </div>
  );
};

export default Header;
