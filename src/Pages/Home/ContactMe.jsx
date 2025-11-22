import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactMe() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation happens only once
    });
  }, []);

  return (
    <section id="Contact" className="contact--section">
      <div data-aos="fade-down">
        <p className="sub--title">Get In Touch</p>
        <h2 data-aos="fade-up">Contact Me</h2>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>

      <form className="contact--form--container" data-aos="fade-up" data-aos-delay="400">
        <div className="container">
          <label htmlFor="first-name" className="contact--label" data-aos="fade-right">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label" data-aos="fade-left">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label" data-aos="fade-right">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label" data-aos="fade-left">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label" data-aos-delay="200">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label" data-aos="fade-up" data-aos-delay="300">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label"  data-aos="fade-up" data-aos-delay="400">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div  data-aos="zoom-in" data-aos-delay="500">
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
