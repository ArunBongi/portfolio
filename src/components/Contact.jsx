// src/components/Contact.js
import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out via the form below or connect with me on
        LinkedIn.
      </p>
      <form action="https://formspree.io/f/{your-id}" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
