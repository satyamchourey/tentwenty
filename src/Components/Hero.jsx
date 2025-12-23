import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Hero.css";
export default function Hero() {
  const totalSlides = 4;
  const duration = 5000;

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };
  const nextSlideNumber = currentSlide === totalSlides ? 1 : currentSlide + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`hero_container slide slide_${currentSlide}`}>
      <Nav />
      <div className="hero_content hero_enter">
        <p>Welcome to TenTwenty Farms</p>
        <p>From Our Farms <br />To Your Hands</p>
      </div>
      <div className="hero_slide_cta">
        <button className={`slide_${nextSlideNumber}`} onClick={nextSlide}>
          <svg className="progress_ring" viewBox="0 0 100 100">
            <rect
              x="5"
              y="5"
              width="90"
              height="90"
              rx="6"
            />
          </svg>
          Next
        </button>

        <p>
          {currentSlide} <span className="separator"></span> {nextSlideNumber}
        </p>
      </div>
    </section>
  );
}