import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="div">
      <div>
        <div className="h1">
          <h1>Контакты</h1>
          <br />
          <br />
          <h4>Записаться в салон</h4>
          <br />
          <h4 className="text">Call-центр</h4>
          <br />
          <h4 className="text">
            +996 222 333 444 (круглосуточно), +996 777 222 555
          </h4>
          <br />
          <br />
          <h4>Главной офис</h4>
          <br />
          <h4 className="text">Бишкек, 216 ул. Токтогула</h4>
          <br />
          <h4 className="text">info@nails.com</h4>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
