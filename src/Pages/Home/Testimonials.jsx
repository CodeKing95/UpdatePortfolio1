import React, { use, useEffect } from "react";
import data from "../../data/index.json";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonial() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading" data-aos="fade-up">Education & Diploma</h2>
          
        </div>
      </div>

      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} 
          className="testimonial--section--card"
          data-aos="fade-up"
          data-aos-delay={index * 200}
          >
            

       <h2 className="sections--heading" data-aos="fade-up">
  {item.heading}
</h2>
<p className="text-md">{item.description}</p>
<div className="testimonial--section--card--author--detail">
  <div>
    <p className="text-md testimonial--author--name">{item.author_name}</p>
    <p className="text-md testimonial--author--designation">{item.author_designation}</p>
  </div>
</div>

          </div>
        ))}
      </div>
    </section>
  );
}
