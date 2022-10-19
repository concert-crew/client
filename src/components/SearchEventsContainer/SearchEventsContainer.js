import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import "./SearchEventsContainer.css";

const SearchEventsContainer = ({ setSearchedEvents}) => {


  return (
    <div className='search-events-container'>
       <SearchForm setSearchedEvents={setSearchedEvents}/>
    </div>
  )
}

export default SearchEventsContainer;