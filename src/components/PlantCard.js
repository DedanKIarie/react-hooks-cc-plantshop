import React, { useState } from "react";

function PlantCard({key, plant, name, image, price }) {
  const [inStock, setInStock] = useState(true);

  return (
    <li key={key} className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      <button onClick={() => setInStock(!inStock)} className={inStock ? "primary" : ""}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;