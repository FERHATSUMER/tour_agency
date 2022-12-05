import React, { useStates } from "react";
import "./tour.css";

const Tour = ({ item }) => {
  console.log(item);
  return (
    <div className="tour-container">
      <img
        className="img"
        src={item.image}
        alt="resim"
      />
      <div className="info">
        <div className="title-wrapper">
          <h4>{item.name}</h4>
          <div className="price">${item.price}</div>
        </div>
        <div className="desc">
        {item.info}
        </div>
        <div className="btn-wrapper">
          <button className="btn">
          Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
