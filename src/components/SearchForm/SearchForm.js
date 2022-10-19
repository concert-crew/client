import React, { useState } from 'react'
import "./SearchForm.css"
import EventsContainer from "../EventsContainer/EventsContainer"
import { events } from "../../sampleEvents"

const SearchForm = ({setSearchedEvents}) => {
const [artistName, setArtistName] = useState("");
const [results, setResults] = useState([])

const handleChange = (e) => {
  setArtistName(e.target.value)

}

// const clearInputs = () => {
//     this.setState({ title: '', description: '' });
//   }
// useEffect(()=>{

// })

const handleClick = (e) => {
  e.preventDefault()
  setSearchedEvents(events)
  setResults(events)

    // fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&countryCode=US&apikey=1d6CHVXa7noU5jONo66IsHnTFFeBC0AC`)
    // .then(promise => promise.json())
    // .then(data=> console.log(data))
    // .throw(error => console.log(error))
}

const toBeDisplayed = results.length ?  
<EventsContainer events={results}/> 
: <p>Search for an upcoming show!</p>

  return (
    <div>
    <form>
       <input 
       type='text'
       placeholder='Artist Name'
       name='artist-name'
       value={artistName}
       onChange= {e=>handleChange(e)}
       />
    <button className="search-btn" onClick={e=>handleClick(e)}> SEARCH </button>
    </form>
      <div className="search-results-container">
        {toBeDisplayed}
      </div>
    </div>
  )
}

export default SearchForm