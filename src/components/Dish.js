import React from "react";

function Dish({ imgURL, title, price, desc }) {
  return (
    <div className="dish" style={{ width: "40%", marginBottom: "50px" }}>
      <img src={imgURL} alt="Dish Image" className="dishImage" />
      <div className="dishData">
        <div className="headingPriceWrapper">
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
        <hr />
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Dish;
