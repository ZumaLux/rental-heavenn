import React from "react";
import { GoSearch as SearchIcon } from "react-icons/go";
import "./SearchBar.css";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        className="input"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
