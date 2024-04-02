import React, { useEffect, useState } from "react";
import Dish from "./Dish";
import axios from "axios";

function Menu() {
  const [allDishes, setAllDishes] = useState([]);
  const [category, setCategory] = useState("all");

  const filterCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/allDishes")
      .then((res) => setAllDishes(res.data));
  }, []);

  return (
    <div className="menu-container">
      <div className="left-panel">
        <button onClick={() => filterCategory("all")}>All</button>
        <button onClick={() => filterCategory("breakfast")}>Breakfast</button>
        <button onClick={() => filterCategory("dinner")}>Dinner</button>
        <button onClick={() => filterCategory("shakes")}>Shakes</button>
        <button onClick={() => filterCategory("lunch")}>Lunch</button>
      </div>
      <div className="dish-container">
        {allDishes &&
          allDishes.map(
            (dish) =>
              (category === "all" || category === dish.category) && (
                <Dish
                  key={dish.id}
                  imgURL={dish.img}
                  title={dish.title}
                  price={dish.price}
                  desc={dish.desc}
                />
              )
          )}
      </div>
    </div>
  );
}

export default Menu;
