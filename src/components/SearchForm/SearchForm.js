import React, { useState } from "react";
import "./SearchForm.css";
import EventsContainer from "../EventsContainer/EventsContainer";

const SearchForm = ({ setSearchedEvents }) => {
  const [artistName, setArtistName] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("Search for an upcoming show!");

  const handleChange = (e) => {
    setArtistName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    artistName
      ? fetch(
          `https://concert-crew-be-v2.herokuapp.com/api/v1/events?keyword=${artistName}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(`data.data.events`, data.errors);
            if (!data.errors) {
              setResults(data.data.events);
              setSearchedEvents(data.data.events);
              setMessage("");
            } else {
              setMessage("No events found . . .");
            }
          })
      : setMessage("Please type in an artist");
    setArtistName("");
  };

  const result = results.length ? <EventsContainer events={results} /> : null;

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Artist Name"
          name="artist-name"
          value={artistName}
          onChange={(e) => handleChange(e)}
        />
        <button className="search-btn" onClick={(e) => handleClick(e)}>
          {" "}
          SEARCH{" "}
        </button>
      </form>
      <div className="search-results-container">
        {message}
        {result}
      </div>
    </div>
  );
};

export default SearchForm;
