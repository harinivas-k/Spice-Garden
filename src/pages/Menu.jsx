import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import MenuCard from "../components/MenuCard";
import { menuItems, categories } from "../data/menuData";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <>
      <section className="page-banner menu-banner">
        <div>
          <span className="eyebrow hero-eyebrow">DISCOVER OUR FLAVOURS</span>
          <h1>Our Menu</h1>
          <p>Every dish has a story. Every flavour has a purpose.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="SOMETHING FOR EVERY CRAVING"
            title="Explore Our Kitchen"
            description="Discover our selection of delicious Indian favourites."
          />

          <div className="menu-controls">
            <input
              type="search"
              placeholder="Search dishes..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search menu items"
            />

            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              Clear
            </button>
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "filter-btn selected"
                    : "filter-btn"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="empty-state">
              <h3>No dishes found</h3>
              <p>Try another search or select a different category.</p>
              <button
                className="btn btn-dark"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}