import React, { useEffect } from 'react';

const Navbar = ({ setCategory }) => {
  // Toggles the navbar manually
  const toggleNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    } else {
      navbar.classList.add("show");
    }
  };

  // Closes the navbar manually
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  // Handle outside click to close navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navbarSupportedContent");
      const toggler = document.querySelector(".navbar-toggler");

      if (
        navbar &&
        !navbar.contains(event.target) &&
        !toggler.contains(event.target)
      ) {
        closeNavbar();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handles clicking a category
  const handleCategoryClick = (category) => {
    setCategory(category);
    closeNavbar();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top w-100" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Modi's News<span className="badge bg-light text-dark fs-4"></span></a>
        
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("technology")}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("business")}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("health")}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("science")}>Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("sports")}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("entertainment")}>Entertainment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={(e) => {
            e.preventDefault();
            closeNavbar();
          }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
