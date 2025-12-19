import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
          <p className="section--title"></p>

          <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            My name is Nadir Ahmed.
          </p>

          <h1
            className="hero--section--title"
            data-aos="fade-up"
          >
            <span className="hero--section-title--color">
              Software Developer
            </span>
            <br />
          </h1>

          <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A warm welcome to my portfolio website.
          </p>

          <div className="button-row">
            {/* GitHub Button */}
            <div data-aos="fade-up" data-aos-delay="200">
              <a href="https://github.com/CodeKing95">
                <button className="btn btn-github">
                  <img
                    src="./img/github.png"
                    alt="GitHub"
                    height="50"
                    width="50"
                  />
                </button>
              </a>
            </div>

            {/* LinkedIn Button */}
            <div data-aos="fade-up" data-aos-delay="200">
              <a href="https://www.linkedin.com/in/nadir-ahmed-7958681a2/">
                <button className="btn btn-github">
                  <img
                    src="./img/linkedin.png"
                    alt="LinkedIn"
                    height="50"
                    width="50"
                  />
                </button>
              </a>
            </div>

            {/* Resume Button */}
            <div data-aos="fade-up" data-aos-delay="200">
              <a href="https://pdflink.to/dbe63b44/">
                <button className="btn btn-github">
                  <img
                    src="./img/resume.png"
                    alt="Resume"
                    height="50"
                    width="90"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero--section--img" data-aos="fade-left">
        <img src="./img/techs.png" alt="Hero Section" />
      </div>
    </section>
  );
}
