import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function useMyEffect() {
  useEffect(() => {
    console.log("Logic here");
  }, []);
}

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="heroSection" className="hero--section">

      <div 
        className="hero--section--content--box"
        data-aos="fade-right"
      >
        <div className="hero--section--content">
          <h1 
            className="hero--section--title"
            data-aos="fade-up"
          >
            <span className="hero--section-title--color">Software</span>
            <br />
            Developer
          </h1>

          <p 
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A warm welcome to my portfolio website.
          </p>
        </div>

      
      </div>

      <div 
        className="hero--section--img"
        data-aos="fade-left"
      >
        <img src="./img/techs.png" alt="Hero Section" />
      </div>

    </section>
  );
}