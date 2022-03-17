import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { fetchGiphy } = props;
    fetchGiphy(event.currentTarget.value);
  };
  return (
    <input
      type="text"
      className="form-search form-control"
      placeholder="Search for a gif"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
