import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Hero.css";

export default function Hero() {
  const totalSlides = 4;
  const duration = 5000;
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
      setIsTransitioning(false);
    }, 800); // Match the CSS transition duration
  };

  const nextSlideNumber = currentSlide === totalSlides ? 1 : currentSlide + 1;

  useEffect(() => {
    const interval = setInterval(nextSlide, duration);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section 
      className={`slide slide_${currentSlide} h-screen w-screen bg-cover bg-center p-5 box-border relative text-[#EEF4F9] ${
        isTransitioning ? 'fade-out' : 'fade-in'
      }`}
    >
      <Nav />
      <div key={currentSlide} className="hero_content absolute w-full max-w-[756px] opacity-100 top-[38.8%] left-[9.3%] hero_enter px-4 md:px-0">
        <p className="font-normal text-base leading-[150%]">Welcome to TenTwenty Farms</p>
        <p className="font-normal text-[46px] md:text-[64px] leading-[110%] md:leading-[100%] capitalize mt-2">
          From Our Farms <br />To Your Hands
        </p>
      </div>
      
      <div className="hero_slide_cta absolute bottom-8 md:top-[78.8%] left-4 md:left-[9.3%] w-[323px] md:w-[345px] flex items-center justify-between">
        <button 
          aria-label="Go to next slide"
          className={`slide_${nextSlideNumber} relative w-[115px] h-[115px] md:w-[138px] md:h-[138px] bg-cover border-none text-white cursor-pointer rounded-sm`}
          onClick={nextSlide}
        >
          <svg key={currentSlide} className="progress_ring absolute inset-0 -rotate-90" viewBox="0 0 100 100">
            <rect x="5" y="5" width="90" height="90" rx="6" />
          </svg>
          Next
        </button>

        <p className="flex items-center gap-4">
          {currentSlide} <span className="w-[103px] h-px bg-white opacity-100 inline-block"></span> {nextSlideNumber}
        </p>
      </div>
    </section>
  );
}