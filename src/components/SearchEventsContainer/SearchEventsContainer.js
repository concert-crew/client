import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
// import { Link } from 'react-router-dom'
import "./SearchEventsContainer.css"

const SearchEventsContainer = ({setSearchInput}) => {

console.log(`@@@@@`, {setSearchInput})
  return (
    <div className='search-events-container'>
       <SearchForm setSearchInput={setSearchInput}/>
    </div>
  )
}

export default SearchEventsContainer