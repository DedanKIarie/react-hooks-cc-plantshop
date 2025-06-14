import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (onAddPlant) onAddPlant(data);
      });
    setFormData({ name: "", image: "", price: "" });
  }

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Plant name"
        value={formData.name}
        onChange={handleChange}
        className="new-plant-form input"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className="new-plant-form input"
      />
      <input
        type="number"
        name="price"
        step="0.01"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="new-plant-form input"
      />
      <button type="submit" on className="new-plant-form button">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;