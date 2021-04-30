import React, { useState } from "react";
import "./Typeahead.css";

const Typeahead = ({ fruitProps }) => {
  const [favoriteFruit, setFavoriteFruit] = useState("");
  const [autocomplete, setAutocomplete] = useState([]);
  const [resfound, setResfound] = useState(true);
  const handleChange = (event) => {
    let fruitName = event.target.value;
    let suggestion = [];
    if (fruitName.length > 0) {
      suggestion = fruitProps
        .sort()
        .filter((e) => e.toLowerCase().includes(fruitName.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }
    setAutocomplete(suggestion);
    setFavoriteFruit(fruitName);
  };

  const suggestedFruit = (value) => {
    setFavoriteFruit(value);
    setAutocomplete([]);
  };

  const getSuggestions = () => {
    if (autocomplete.length === 0 && favoriteFruit !== "" && !resfound) {
      return <p>Sorry, your favorite fruit was not found</p>;
    }

    return (
      <ul>
        {autocomplete.map((item, index) => {
          return (
            <div key={index}>
              <li onClick={() => suggestedFruit(item)}>{item}</li>
              {index !== autocomplete.length - 1}
            </div>
          );
        })}
      </ul>
    );
  };
  return (
    <>
      <div>
        <h1 className="title">Sesame FrontEnd Challenge</h1>
      </div>
      <div className="wrapper">
        <input
          className="search"
          type="text"
          placeholder="Enter your favorite fruit here"
          value={favoriteFruit}
          onChange={handleChange}
        />

        {favoriteFruit && (
          <div className="searchcontainer">{getSuggestions()}</div>
        )}
      </div>
    </>
  );
};
export default Typeahead;
