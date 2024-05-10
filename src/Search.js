import React, { useState } from 'react';

export default function Search({ getTracks }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search === "") {
      alert("Nothing to search!");
      return;
    }
    getTracks(search);
  };

  return (
    <>
      <input
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        className="form-control me-2 w-50"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button onClick={handleSearch} className="btn btn-outline-success" type="submit">
        Search
      </button>
    </>
  );
}
