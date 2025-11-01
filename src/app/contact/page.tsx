"use client";

import React, { useState } from "react";
import Header from "../component/Header"; // Adjust path
import Image from "next/image";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hspqqgl",
      "template_hhbknbj",
      e.currentTarget,
      "E-1ClrE7o0Ok4hDFoRpz5"
    ).then(() => {
      alert(`Thank you, ${formData.name}! Your message has been sent.`);
      setFormData({ name: "", email: "", message: "" });
    }).catch((error) => {
      alert("Oops! Something went wrong, try again.");
      console.error(error.text);
    });
  };

  return (
    <div className="contact-section">
      <Header />
      <h2>CONTACT ME</h2>
      <p>Have a project in mind? Feel free to reach out!</p>

      <div className="social-links">
        <a href="https://www.instagram.com/ubaid_ur_rehman123?igsh=MWM5a3p6N3U5bGlwYg==" target="_blank" rel="noopener noreferrer">
          <Image src="/insta.jpg" alt="Instagram" width={50} height={50} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/ubaid-ur-rehman-5851b22b4/" target="_blank" rel="noopener noreferrer">
          <Image src="/linkdin.jpg" alt="LinkedIn" width={50} height={50} className="social-icon" />
        </a>
        <a href="https://wa.me/923354273216?text=Hello%20Ubaid,%20I%20want%20to%20discuss%20a%20project%20with%20you!" target="_blank" rel="noopener noreferrer">
          <Image src="/whatsapp.jpg" alt="WhatsApp" width={50} height={50} className="social-icon" />
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
