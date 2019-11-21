import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} >
        <input type="text" placeholder="Enter a Location" name="searchInput" onChange={props.handleChange} value={props.searchInput} />
        <button type="submit" >Search Stays</button>
      </form>
    </div>
  )
}

export default SearchBar;
