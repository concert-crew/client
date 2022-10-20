import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Abby } from "../../sampleUser";

const Login = () => {
  const [name, setName] = useState("");



  // const handleClick = (e) => {
  //   setCurrentUser(Abby);
  // };

  return (
    <div className="login-form">
      <h2>WELCOME! Please login</h2>
      <select
        className="login-selection"
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <option value="" disabled selected>
          Select Your User
        </option>
        <option value="Abby">Abby</option>
        <option value="Chantal">Chantal</option>
        <option value="John">John</option>
        <option value="Mayu">Mayu</option>
        <option value="Shirley">Shirley</option>
      </select>
      <Link to={`/${name}`}>
        <button className="login-button" 
        // onClick={(e) => handleClick(e)}
        >
          LOG IN
        </button>
      </Link>
    </div>
  );
};

export default Login;
