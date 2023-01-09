import React from "react";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="div">
      <div>
        <div className="h3">
          <h3>Онлайн-магазин Nail Sunny Beauty</h3>
          <br />
          <p>
            приобрести продукцию можно по телефонам +996 222 333 555, +996 444
            666 888 или в салонах
          </p>
        </div>
        <div className="img-img">
          <img src={require("./coy.jpg")} alt="" />
          <img src={require("./delicate.jpg")} alt="" />
          <img src={require("./pure.jpg")} alt="" />
        </div>
        {/* <div className="img-img">
          <img src={require("./")} alt="" />
          <img src={require("./")} alt="" />
          <img src={require("./")} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Shop;
