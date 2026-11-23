import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setStatus("");

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone)) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus("Please enter at least 10 characters in your message.");
      return;
    }

    setStatus(
      "Your enquiry has passed frontend validation. No message has been sent because backend integration is not connected."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Enquiry",
      message: ""
    });
  }

  return (
    <>
      <section className="page-banner contact-banner">
        <div>
          <span className="eyebrow hero-eyebrow">WE WOULD LOVE TO HEAR FROM YOU</span>
          <h1>Get In Touch</h1>
          <p>Have a question? Let's start a conversation.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="CONTACT SPICE GARDEN"
            title="Let's Connect"
            description="Send us an enquiry using the form below."
          />

          <div className="contact-grid">
            <div className="contact-details">
              <div className="contact-info-card">
                <span>⌖</span>
                <div>
                  <h3>Our Location</h3>
                  <p>Bhimavaram, Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="contact-info-card">
                <span>✉</span>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:harinivas2319@gmail.com">harinivas2319@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <span>☎</span>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+916304382319">+91 63043 82319</a>
                  </p>
                </div>
              </div>

              <div className="contact-note">
                <h3>We value your feedback.</h3>
                <p>
                  Share your questions, suggestions or special
                  occasion enquiries with us.
                </p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send an Enquiry</h2>

              <div className="form-row">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                  />
                </label>

                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Enquiry Type
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option>General Enquiry</option>
                    <option>Food Enquiry</option>
                    <option>Special Occasion</option>
                    <option>Feedback</option>
                  </select>
                </label>
              </div>

              <label>
                Your Message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                ></textarea>
              </label>

              {status && (
                <div
                  className="form-status"
                  role="status"
                  aria-live="polite"
                >
                  {status}
                </div>
              )}

              <button type="submit" className="btn btn-primary">
                Submit Enquiry →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}