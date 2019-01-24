import React from "react";
import "./style.css";

function SearchResults(props) {
  console.log(props);


  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          <div className="button-div">
            <a href={result.link} target="blank">
              <button type="button" id="info-link" onClick={props.handleViewBook} className="button-more">
              Read More
              </button>
            </a>
            <button type="button" id={result.id} onClick={props.handleSaveBook} className="button-save">
            Save
            </button>
          </div>

          <p id="title">{result.title}</p>
          <p id="authors">Authors: {result.authors}</p>

          <div id="image-left">
            <img alt="BookImage" src={result.image} className="img-fluid" />
          </div>

          <div id="text-block">
            <p id="description">{result.description}</p>
          </div>
        </li>

      ))}
    </ul>
  );
}

    export default SearchResults;