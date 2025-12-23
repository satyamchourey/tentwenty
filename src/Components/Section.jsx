import React from "react";
export default function Section() {
  return (
    <section>
        <div>
            <h2>Quality Products</h2>
            <p>
                We provide top-notch agricultural services to ensure the best quality
                produce from our farms to your hands.
            </p>
        </div>
      <div className="Slides">
        <div className="Slide">
          <img src="#" alt="Slide 1" />
        </div>
        <div className="Slide">
          <img src="#" alt="Slide 2" />
        </div>
        <div className="Slide">
          <img src="#" alt="Slide 3" />
        </div>
      </div>
    </section>
  );
}