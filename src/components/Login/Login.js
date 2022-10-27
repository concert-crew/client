import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");

  return (
    <div className="login-form">
      <h2>WELCOME! Please login</h2>
      <select
        className="login-selection"
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <option value="">Select Your User</option>
        <option value="Abby">Abby</option>
        <option value="Chantal">Chantal</option>
        <option value="John">John</option>
        <option value="Mayu">Mayu</option>
        <option value="Shirley">Shirley</option>
        <option value="Josh">Josh</option>
        <option value="Rue">Rue</option>
      </select>
      <Link to={`/${name}`}>
        <button className="login-button">LOG IN</button>
      </Link>
    </div>
  );
}

export default Login;
