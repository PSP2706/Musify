import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ handleSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const onSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const onSubmitSearch = () => {
    handleSearch(searchInput);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-success rubik-doodle-shadow-regular" href="#">
          <h1><i>Musify</i></h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link menus" href="https://psp2706.github.io/Sword-Game/" target="_blank">
                Other Project
              </a>
            </li>
            <li className="nav-item">
  <a className="nav-link menus" href="https://www.linkedin.com/in/partha-sarathi-panda-8991592b4" target="_blank">
    LinkedIn
  </a>
</li>

            <li className="nav-item">
              <a className="nav-link menus" href="https://github.com/PSP2706" target="_blank">
                Github
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchInput}
              onChange={onSearchInputChange}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={onSubmitSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
