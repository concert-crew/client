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

const handleClick = () => {
    fetch()
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
    <button className="search-btn" onClick={handleClick}> SEARCH </button>
    </form>
  )
}

export default SearchForm