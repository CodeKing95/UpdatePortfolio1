import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section
      className="skills--section"
      id="mySkills"
      data-aos="fade-up"
    >
      <div className="portfolio--container">
        <h2
          className="skills--section--heading"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          My Expertise
        </h2>
      </div>

      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className="skills--section--card"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div
              className="skills--section--img"
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 100}
            >
              <img src={item.src} alt={item.title} />
            </div>

            <div
              className="skills--section--card--content"
              data-aos="fade-left"
              data-aos-delay={index * 150 + 200}
            >
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
