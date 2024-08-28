import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ onChange, value }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="input-container"
        value={value}
        onChange={onChange}
      />
      <div className="icon-container">
        <button className="btn-container">
          <MdSearch className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
