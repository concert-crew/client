import React, { useState } from "react";
import "./SearchForm.css";
import EventsContainer from "../EventsContainer/EventsContainer";
import { fetchEvent } from "../../utilities/fetchEvent";


const SearchForm = ({ setSearchedEvents }) => {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("Search for an upcoming show!");


  const handleChange = (e) => {
     const {name, value} = e.target 
     name === "artist" ? setKeyword(value) : setCity(value)
  };

  const handleClick = (e) => {
    e.preventDefault();
    keyword || city
      ? fetchEvent(keyword, city).then((data) => {
          if (!data.errors) {
            setResults(data.data.events);
            setSearchedEvents(data.data.events);
            setMessage("");
          } else {
            setMessage("No events found . . .");
            setResults([]);
          }
        })
      : setMessage("Please type in an artist or city");
    setKeyword("");
    setCity("");

  };


  const result = results.length ? <EventsContainer events={results} /> : null;

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder={`artist...`}
            name="artist"
            value={keyword}
            onChange={(e) => handleChange(e)}
          />
           <input
            type="text"
            placeholder={`city...`}
            name="city"
            value={city}
            onChange={(e) => handleChange(e)}
          />
          <button className="search-btn" onClick={(e) => handleClick(e)}>
            {" "}
            SEARCH{" "}
          </button>
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
