import React from "react";
import "./style.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__title">Dazzling Demo</div>
        <div className="navbar__container__items">
          <ul className="navbar__container__items__list">
            <li>Home</li>
            <li>Gallery</li>
            <li>Shortcodes</li>
            <li>About</li>
            <li>Language</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
