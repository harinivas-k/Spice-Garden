import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { galleryImages } from "../data/menuData";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <section className="page-banner gallery-banner">
        <div>
          <span className="eyebrow hero-eyebrow">A FEAST FOR THE EYES</span>
          <h1>Our Gallery</h1>
          <p>Discover food, flavours and beautiful moments.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="VISUAL STORIES"
            title="A Glimpse of Spice Garden"
            description="Explore our food and dining inspiration."
          />

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <button
                className="gallery-item"
                key={image.src}
                onClick={() => setActiveImage(image)}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
                <span>↗</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="lightbox"
          onClick={() => setActiveImage(null)}
          role="presentation"
        >
          <button
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image"
          >
            ✕
          </button>

          <img
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}