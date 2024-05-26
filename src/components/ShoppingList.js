import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('All') 
  // console.log(items)

  function handleChange(event){
  setSelectedCategory(event.target.value)
  }
  
  const filter = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory)
  console.log(selectedCategory)
  console.log(filter)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
