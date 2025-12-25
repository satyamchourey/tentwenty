import React, { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav  aria-label="Main navigation" className="bg-white flex items-center justify-between px-6 h-16 relative">
      <ul className="hidden md:flex gap-5 list-none">
        <li><a href="#" className="no-underline text-black hover:opacity-70 transition-opacity">About</a></li>
        <li><a href="#" className="no-underline text-black hover:opacity-70 transition-opacity">News</a></li>
        <li><a href="#" className="no-underline text-black hover:opacity-70 transition-opacity">Services</a></li>
        <li><a href="#" className="no-underline text-black hover:opacity-70 transition-opacity">Our Team</a></li>
        <li><a href="#" className="no-underline text-black hover:opacity-70 transition-opacity">Make Enquiry</a></li>
      </ul>

      <button className=" md:block border border-black bg-transparent py-2.5 px-4 cursor-pointer text-black hover:bg-black hover:text-white transition-colors">
        Contact Us
      </button>

      <button
        className={`md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-black transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`w-6 h-0.5 bg-black transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      <div className={`absolute top-16 left-0 w-full bg-white flex flex-col gap-5 p-6 transition-all duration-300 ${
        open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2.5"
      }`}>
        <a href="#" className="text-black no-underline hover:opacity-70">About</a>
        <a href="#" className="text-black no-underline hover:opacity-70">News</a>
        <a href="#" className="text-black no-underline hover:opacity-70">Services</a>
        <a href="#" className="text-black no-underline hover:opacity-70">Our Team</a>
        <a href="#" className="text-black no-underline hover:opacity-70">Make Enquiry</a>
        {/* <button className="border border-black bg-transparent py-2.5 px-4 text-black hover:bg-black hover:text-white transition-colors">Contact Us</button> */}
      </div>
    </nav>
  );
}