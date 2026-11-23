import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import MenuCard from "../components/MenuCard";
import { menuItems } from "../data/menuData";

export default function Home() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <span className="eyebrow hero-eyebrow">
            WELCOME TO SPICE GARDEN
          </span>

          <h1>
            Where Every
            <br />
            <span>Flavour Tells</span>
            <br />
            A Story.
          </h1>

          <p>
            Discover the magic of authentic Indian cuisine,
            crafted with passion and served with love.
          </p>

          <div className="hero-actions">
            <Link to="/menu" className="btn btn-primary">
              Explore Our Menu
            </Link>

            <Link to="/about" className="btn btn-outline">
              Discover Our Story
            </Link>
          </div>

          <div className="hero-location">
            <span>✦</span> BHIMAVARAM, ANDHRA PRADESH
          </div>
        </div>
      </section>

      <section className="welcome-section section-padding">
        <div className="container welcome-grid">
          <div className="welcome-image">
            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1000"
              alt="Indian traditional food"
              loading="lazy"
            />
            <div className="image-label">
              <span>THE ART OF</span>
              <strong>Indian Cooking</strong>
            </div>
          </div>

          <div className="welcome-content">
            <span className="eyebrow">A CULINARY EXPERIENCE</span>

            <h2>
              Tradition on
              <br />
              Every Plate.
            </h2>

            <p>
              At Spice Garden, we celebrate the beautiful diversity
              of Indian cuisine. From aromatic spices to comforting
              classics, every dish represents our love for food.
            </p>

            <p>
              Our concept brings together traditional flavours,
              thoughtful presentation and a welcoming atmosphere.
            </p>

            <Link to="/about" className="text-link">
              Discover Our Story →
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-section section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="A TASTE TO REMEMBER"
            title="Our Signature Selection"
            description="Explore a selection of Indian favourites prepared with flavour and care."
          />

          <div className="menu-grid">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="center-action">
            <Link to="/menu" className="btn btn-dark">
              Explore Full Menu →
            </Link>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-content">
          <span className="eyebrow hero-eyebrow">
            MORE THAN JUST FOOD
          </span>

          <h2>Made with Passion. Served with Love.</h2>

          <p>
            A celebration of flavour, culture and the joy of
            sharing good food.
          </p>

          <Link to="/gallery" className="btn btn-primary">
            Explore Our Gallery
          </Link>
        </div>
      </section>

      <section className="visit-section section-padding">
        <div className="container visit-box">
          <div>
            <span className="eyebrow">YOUR TABLE AWAITS</span>
            <h2>Let's Make Every Meal Special.</h2>
            <p>
              Have an enquiry or planning a special occasion?
              Get in touch with us.
            </p>
          </div>

          <Link to="/contact" className="btn btn-primary">
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}