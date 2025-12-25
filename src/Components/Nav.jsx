import React, { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav_container">
      <ul className="nav_links">
        <li><a href="#">About</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Make Enquiry</a></li>
      </ul>

      <button className="nav_cta">Contact Us</button>

      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile_menu ${open ? "show" : ""}`}>
        <a href="#">About</a>
        <a href="#">News</a>
        <a href="#">Services</a>
        <a href="#">Our Team</a>
        <a href="#">Make Enquiry</a>
        <button>Contact Us</button>
      </div>
    </nav>
  );
}
