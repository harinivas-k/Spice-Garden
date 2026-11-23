export default function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} loading="lazy" />

        {item.tag && <span className="food-tag">{item.tag}</span>}
      </div>

      <div className="menu-card-content">
        <div className="menu-card-title">
          <h3>{item.name}</h3>
          <strong>₹{item.price}</strong>
        </div>

        <p>{item.description}</p>

        <span className="food-category">{item.category}</span>
      </div>
    </article>
  );
}