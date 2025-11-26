import data from "../../data/index.json";


export default function MyPortfolio() {
    return (
       

        <section
            className="portfolio--section"
            id="MyPortfolio"
            data-aos="fade-up"
        >
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2
                        className="section--heading"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        PROJECTS
                    </h2>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                    <a href="https://github.com/CodeKing95">
                        <button className="btn btn-github">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 33 33"
                                fill="none"
                            >
                                {/* SVG path */}
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.3333 0.166748C7.50028 0.166748..."
                                    fill="currentColor"
                                />   
                            </svg>
                            <img src="./img/github.png" alt="Hero Section" height="50" width="50" />
                        </button>
                        
                    </a>
                </div>
            </div>

            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <div
                        key={index}
                        className="portfolio--section--card"
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        <div
                            className="portfolio--section--img"
                            data-aos="zoom-in"
                            data-aos-delay={index * 150 + 100}
                        >
                            <img src={item.src} alt="Project" />
                        </div>

                        <div
                            className="portfolio--section--card--content"
                            data-aos="fade-left"
                            data-aos-delay={index * 150 + 200}
                        >
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md" dangerouslySetInnerHTML={{ __html: item.description }}></p>

                            </div>

                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm portfolio--link"
                            >
                                Live Demo
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                    <path d="M4.66667 1.66675H18V15.0001..." stroke="currentColor" />
                                </svg>
                            </a>

                            <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm portfolio--link"
                            >
                                GitHub Repo
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                    <path d="M4.66667 1.66675H18V15.0001..." stroke="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    );
}
