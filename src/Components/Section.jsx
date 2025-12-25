import React, { useEffect, useRef } from "react";
import img5 from "../../Assets/5.jpg";
import img6 from "../../Assets/6.jpg";
import img7 from "../../Assets/7.jpg";
import img8 from "../../Assets/8.jpg";
import "./Section.css";

const images = [img5, img6, img7, img8];

export default function Section() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const slides = [...track.children];

    const updateCurve = () => {
      const trackRect = track.getBoundingClientRect();
      const centerX = trackRect.left + trackRect.width / 2;

      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2;
        const distance = slideCenter - centerX;
        const normalized = distance / trackRect.width;

        const curveDepth = Math.min(Math.abs(normalized) * 220, 220);
        const scale = 1 - Math.abs(normalized) * 0.25;
        const rotate = normalized * 12;

        slide.style.transform = `translateY(${curveDepth}px) scale(${scale}) rotateZ(${rotate}deg)`;
        slide.style.opacity = 1 - Math.abs(normalized) * 0.4;
      });
    };

    updateCurve();
    track.addEventListener("scroll", updateCurve);
    window.addEventListener("resize", updateCurve);

    return () => {
      track.removeEventListener("scroll", updateCurve);
      window.removeEventListener("resize", updateCurve);
    };
  }, []);

  return (
    <section className="text-center my-20 md:my-[153px] mx-auto flex flex-col items-center px-4">
      <div className="text-section max-w-[749px]">
        <h1 className="font-normal text-[30px] md:text-[56px] leading-[120%] md:leading-[72px] text-black">
          Quality Products
        </h1>
        <p className="font-normal text-base md:text-2xl leading-[140%] md:leading-[100%] text-[#7A7777] mt-4 md:mt-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="curve-wrapper mt-[60px] md:mt-[120px] w-full overflow-hidden">
        <div 
          className="curve-track flex gap-10 md:gap-20 overflow-x-scroll h-screen snap-x snap-mandatory scrollbar-hide smooth-scroll"
          ref={trackRef}
        >
          {images.map((img, i) => (
            <div className="curve-slide flex-shrink-0 w-[232.67px] h-[331.27px] md:w-[435px] md:h-[620px] snap-center transition-all duration-[250ms] ease-out" key={i}>
              <img src={img} alt="" className="w-full h-full object-cover rounded-xl md:rounded-[14px]" />
              <h3 className="mt-4 text-lg font-medium">Client {i + 1}</h3>
              <p className="text-sm text-gray-600">Dubai, United Arab Emirates</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}