import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import { Link} from "react-router-dom";
import { Abby } from "../../sampleUser";
// import { useQuery, gql } from "@apollo/client";

// const GET_USER = gql`
//   query {
//     users {
//       id
//       name
//       image
//       events {
//         id
//         artistName
//         venueName
//         venueLocation
//         date
//       }
//     }
//   }`


const Login = ({ setCurrentUser }) => {
 
  const [login, setLogin] = useState("");
  // const { error, data, loading } = useQuery(GET_USER)
  
  // console.log(error, data, loading)
  // if (loading) return <div>Loading...</div>
  // if (error) return <div>Something went wrong...</div>


  const handleClick = (e) => {
    // e.preventDefault();
    setCurrentUser(Abby);
  };

  // This is where we will make a query
  // as we change state this will trigger a fetch call
  // fetch call will look into the users and pass in the value of the username
  //backend needs a string with 5 diff endpoint with each users' data

  return (
    <div className="login-form">
      <h2>WELCOME! Please login</h2>
      <select
     
        className="login-selection"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
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
      <Link to={`/${login}`}>
        <button className="login-button" onClick={(e) => handleClick(e)}>LOG IN</button>
      </Link>
    </div>
  );

};

export default Login;
