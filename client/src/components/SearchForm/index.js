import React from "react";
import "./style.css";

function SearchForm(props) {


  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Book Title</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="  The Secret"
          id="search"
        />
        <button id="search-button" onClick={props.handleFormSubmit} className="btn btn-info">
          Search
        </button>
        <hr></hr>
        <p id="search-results-subheader">Search Results</p>
      </div>
    </form>
  );
}

export default SearchForm;