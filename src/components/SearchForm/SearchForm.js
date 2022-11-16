import React, { useState } from "react";
import "./SearchForm.css";
import EventsContainer from "../EventsContainer/EventsContainer";
import { fetchEvent } from "../../utilities/fetchEvent";
import Switch from "@mui/material/Switch";

const SearchForm = ({ setSearchedEvents }) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("Search for an upcoming show!");
  const [query, setQuery] = useState("artist");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    input
      ? fetchEvent(query, input).then((data) => {
          if (!data.errors) {
            setResults(data.data.events);
            setSearchedEvents(data.data.events);
            setMessage("");
          } else {
            setMessage("No events found . . .");
            setResults([]);
          }
        })
      : setMessage("Please type in an artist");
    setInput("");
  };

  const handleToggle = () => {
    query === "artist" ? setQuery("city") : setQuery("artist");
  };

  const result = results.length ? <EventsContainer events={results} /> : null;

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder={`Search by ${query}...`}
            name="artist-name"
            value={input}
            onChange={(e) => handleChange(e)}
          />
          <button className="search-btn" onClick={(e) => handleClick(e)}>
            {" "}
            SEARCH{" "}
          </button>
        </div>
        <div className="switch">
          <p>Artist</p>
          <Switch onClick={handleToggle} />
          <p>City</p>
        </div>
      </form>
      <div className="search-results-container">
        {message}
        {result}
      </div>
    </div>
  );
};

export default SearchForm;
