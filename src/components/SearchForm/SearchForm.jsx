// src/components/SearchForm.js
import React from "react";
import "./SearchForm.css";

const SearchForm = ({ query, setQuery, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        placeholder="Busca tus películas preferidas"
        type="text"
        value={query}
        className="input"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
