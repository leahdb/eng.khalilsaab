import React from "react";
import K from "../assets/kimage.png";
//import "../styles/Footer.css";

function Hero() {
  return (
    <section
      class="hero d-flex flex-column justify-content-center align-items-center bg-dark"
      id="intro"
    >
      <div class="container p-0">
        <div class="row">
          <div class="d-flex flex-column justify-content-center align-items-center col-lg-6 col-md-6 col-12 text-white">
            <h4>
              Driven by curiosity and fueled by innovation, I, Khalil Saab, an
              electrical engineer, embark on a journey to engineer
              transformative solutions that power progress, inspire connections,
              and shape a brighter tomorrow.
            </h4>
          </div>

          <div class="mx-auto col-lg-6 col-md-6 col-10">
            <img src={K} class="img-fluid" alt="Khalil Saab" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
