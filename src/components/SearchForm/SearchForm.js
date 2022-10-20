import React, { useState } from 'react'
import "./SearchForm.css"
import EventsContainer from "../EventsContainer/EventsContainer"
import { events } from "../../sampleEvents"
import { createEvent } from '@testing-library/react'

const SearchForm = ({setSearchedEvents}) => {
const [artistName, setArtistName] = useState("");
const [results, setResults] = useState([])

const handleChange = (e) => {
  setArtistName(e.target.value)

}

// useEffect(()=>{

// })

const handleClick = (e) => {
  e.preventDefault()

  fetch(`https://concert-crew-be.herokuapp.com/api/v1/events?keyword=${artistName}`)
  .then(response => response.json())
  .then(data => {
    setResults(data.data.events)
    setSearchedEvents(data.data.events)
  })
  setArtistName('')
}



// mutation {
//   createEvent(record: {
//         id: ,
//         name:,
//         ticketmasterId:,
//         buyTicketsUrl:,
//         image:,
//         date:,
//         time:,
//         venueName:,
//         city:,
//         state:,
//         address:,
//         longitude
//         latitude
//   }){
//     record {

//     }
//   }
// }


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