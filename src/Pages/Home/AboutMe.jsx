export default function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="about--section"
      data-aos="fade-up"
    >
      <div
        className="about--section--img"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <img src="./img/sunny.jpg" alt="About Me" />
      </div>

      <div
        className="hero--section--content--box about--section--box"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="hero--section--content">
          <h2
            className="skills-section--heading"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            About Me
          </h2>

          <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            abcdefg
          </p>

          <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p>
        </div>
      </div>
    </section>
  );
}
