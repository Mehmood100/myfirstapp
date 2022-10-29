import React from "react";
import "./style.css";
import Menu from "./menuApi.js";
const Resturant = () => {
  return (
    <>
      <div className="card-contaienr">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title">Maggi</h2>
            <span className="card-description subtle">
              apsum loriem is a best way to find the data where you can find
              dome data. apsum loriem is a best way to find the data where you
              can find dome data. apsum loriem is a best way to find the data
              where you can find dome data. apsum loriem is a best way to find
              the data where you can find dome data.
            </span>
            <div className="card-read">Read</div>
          </div>
          <img src="{images}" alt="this is images" className="card-media">
          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
    </>
  );
};

export default Resturant;
