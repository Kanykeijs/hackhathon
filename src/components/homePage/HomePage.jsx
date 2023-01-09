import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="div">
      <div>
        <div className="div-text">
          <h2 className="h2">
            Общие телефоны для записи в бишкекские салоны +996 777 888 999
          </h2>
          <br />
          <h1>Manicure</h1>
        </div>
        <div className="img-div">
          <img src={require("./nail.jpeg")} alt="" />
          <img src={require("./australia.jpeg")} alt="" />
          <img src={require("./spa.jpeg")} alt="" />
        </div>
        <div className="img-div">
          <img src={require("./set.jpeg")} alt="" />
          <img src={require("./mate.jpeg")} alt="" />
          <img src={require("./saloon.jpeg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
