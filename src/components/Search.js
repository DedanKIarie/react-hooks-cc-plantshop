import React from "react";

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="searchbar">
      <label htmlFor="search" className="label">Search Plants:</label>
      <input
      className="searchbar"
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;