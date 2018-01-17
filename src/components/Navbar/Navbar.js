import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>{
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="center brand-logo">Clicky Game</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li> {props.status}</li>
          <li> Score: {props.score}</li>
          <li>Top Score: {props.topScore}</li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;
