import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";


export default function ContactMe() {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v00t57m",
        "template_iikw6rc",
        form.current,
        "TE6ML0VVudtdFWMVS"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message!");
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="Contact" className="contact--section">
      <div data-aos="fade-down">
        <p className="sub--title">Get In Touch</p>
        <h2 data-aos="fade-up">Contact Me</h2>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
          PS: You can email me directly by using the form below :)
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="container">

          <label className="contact--label">
            <span className="text-md">First Name...</span>
            <input type="text" className="contact--input text-md" name="first_name" required />
          </label>

          <label className="contact--label">
            <span className="text-md">Last Name...</span>
            <input type="text" className="contact--input text-md" name="last_name" required />
          </label>

          <label className="contact--label">
            <span className="text-md">Email...</span>
            <input type="email" className="contact--input text-md" name="email" required />
          </label>

          <label className="contact--label">
            <span className="text-md">Phone Number...</span>
            <input type="text" className="contact--input text-md" name="phone" required />
          </label>
        </div>

        <label className="contact--label">
          <span className="text-md">Message...</span>
          <textarea name="message" className="contact--input text-md" rows="8" required />
        </label>

        <label className="checkbox--label">
          <input type="checkbox" required />
          <span>I accept the terms</span>
        </label>

        <button className="btn btn-primary contact--form--btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}


