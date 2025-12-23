import React from "react";
import "./Nav.css";
export default function Nav() {
  return (
    <nav className="nav_container">
      <ul className="nav_links">
        <li><a href="#">About</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Make Enquiry</a></li>
      </ul>
      <div>
        <button>Contact Us</button>
      </div>
    </nav>
  );
}