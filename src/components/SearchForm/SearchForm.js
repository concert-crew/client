import React, { useState } from 'react'
import "./SearchForm"


const SearchForm = ({setSearchInput}) => {
const [artistName, setArtistName] = useState("");

console.log(122334,{setSearchInput})
const handleChange = (e) => {
  setSearchInput('word')
  setArtistName(e.target.value)
    console.log('e.target.value',e.target.value)
}

// const clearInputs = () => {
//     this.setState({ title: '', description: '' });
//   }
// useEffect(()=>{

// })

const handleClick = (e) => {
    e.preventDefault()
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&countryCode=US&apikey=1d6CHVXa7noU5jONo66IsHnTFFeBC0AC`)
    .then(promise => promise.json())
    .then(data=> console.log(data))
    // .throw(error => console.log(error))
}

  return (
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
  )
}

export default SearchForm