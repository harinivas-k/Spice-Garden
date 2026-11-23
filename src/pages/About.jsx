import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <>
      <section className="page-banner about-banner">
        <div>
          <span className="eyebrow hero-eyebrow">OUR JOURNEY</span>
          <h1>Our Story</h1>
          <p>A celebration of India's rich culinary heritage.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container welcome-grid">
          <div className="welcome-image">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000"
              alt="Beautiful restaurant dining interior"
            />
          </div>

          <div className="welcome-content">
            <span className="eyebrow">THE SPICE GARDEN PHILOSOPHY</span>

            <h2>
              Inspired by
              <br />
              Tradition.
            </h2>

            <p>
              Spice Garden is a restaurant website concept inspired
              by India's diverse culinary traditions and the joy
              of sharing memorable meals.
            </p>

            <p>
              We believe food is more than nourishment. It brings
              people together, celebrates culture and creates
              lasting memories.
            </p>

            <Link to="/menu" className="btn btn-dark">
              Discover Our Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="values-section section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE BELIEVE"
            title="Our Core Values"
            description="The principles behind our restaurant concept."
          />

          <div className="values-grid">
            <article className="value-card">
              <span>01</span>
              <h3>Authentic Flavours</h3>
              <p>
                Celebrating the character of traditional Indian cuisine.
              </p>
            </article>

            <article className="value-card">
              <span>02</span>
              <h3>Quality First</h3>
              <p>
                Putting care and attention into every dining experience.
              </p>
            </article>

            <article className="value-card">
              <span>03</span>
              <h3>Warm Hospitality</h3>
              <p>
                Creating an inviting atmosphere for everyone.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-content">
          <span className="eyebrow hero-eyebrow">COME EXPERIENCE IT</span>
          <h2>Good Food. Great Memories.</h2>
          <Link to="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}