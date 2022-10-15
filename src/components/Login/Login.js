import React, { useState } from "react";
import "./Login.css";
import { Link} from "react-router-dom";




const Login = ({ setCurrentUser }) => {


  const [login, setLogin] = useState("");

  const handleClick = (e) => {
    // e.preventDefault();
    setCurrentUser(login);
  };
  // This is where we will make a query
  // as we change state this will trigger a fetch call
  // fetch call will look into the users and pass in the value of the username
  //backend needs a string with 5 diff endpoint with each users' data

  return (
    <div>
      <select
     
        className="login-selection"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      >
        <option disabled >
          Select Your User
        </option>
        <option value="Abby">Abby</option>
        <option value="Chantal">Chantal</option>
        <option value="John">John</option>
        <option value="Mayu">Mayu</option>
        <option value="Shirley">Shirley</option>
      </select>
      <Link to={`/${login}`}>
        <button onClick={(e) => handleClick(e)}>Log in</button>
      </Link>
    </div>
  );
};

export default Login;
