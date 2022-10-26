import React, { useState } from "react";
import "./SearchForm.css";
import EventsContainer from "../EventsContainer/EventsContainer";
import { fetchEvent } from "../../utilities/fetchEvent";
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
      ? fetchEvent(artistName).then((data) => {
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
