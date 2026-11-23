import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand footer-logo">
            <span className="brand-icon">S</span>
            <span>
              <strong>SPICE GARDEN</strong>
              <small>A TASTE OF TRADITION</small>
            </span>
          </Link>

          <p>
            Celebrating the richness of Indian flavours through
            memorable food experiences.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div>
          <h4>Visit Us</h4>
          <p>Bhimavaram, Andhra Pradesh, India</p>
          <p>Contact details to be added</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Spice Garden. All rights reserved.
        </p>
        <span>Crafted with care by NEXORA</span>
      </div>
    </footer>
  );
}