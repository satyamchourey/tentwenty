// import React from "react";
// import img5 from "../../Assets/5.jpg";
// import img6 from "../../Assets/6.jpg";
// import img7 from "../../Assets/7.jpg";
// import img8 from "../../Assets/8.jpg";
// import "./Section.css";

// const images = [img5, img6, img7, img8];

// export default function Section() {
//   return (
//     <section className="container">
//       <div className="TextSection">
//         <h1>Quality Products</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>

//       <div className="curve-slider">
//         <div className="curve-track">
//           {[...images, ...images].map((img, i) => (
//             <div className="curve-slide" key={i}>
//               <img src={img} alt="" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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

        /* 🔵 CIRCULAR ARC MATH */
        const curveDepth = Math.min(Math.abs(normalized) * 220, 220);
        const scale = 1 - Math.abs(normalized) * 0.25;
        const rotate = normalized * 12;

        slide.style.transform = `
          translateY(${curveDepth}px)
          scale(${scale})
          rotateZ(${rotate}deg)
        `;
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
    <section className="container">
      <div className="TextSection">
        <h1>Quality Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="curve-wrapper">
        <div className="curve-track" ref={trackRef}>
          {images.map((img, i) => (
            <div className="curve-slide" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
