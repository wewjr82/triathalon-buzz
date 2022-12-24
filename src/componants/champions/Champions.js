import React from "react";
import "./Champions.css";
import martha from "../../../src/static/champpics/girl-people-landscape-sun-38554.jpeg";
import rob from "../../../src/static/champpics/pexels-photo-1222271.jpeg";
import lisa from "../../../src/static/champpics/pexels-photo-61100.jpeg";
import max from "../../../src/static/champpics/pexels-photo-736716.jpeg";

const Champions = () => {
  return (
    <div className="champion-section">
      <h2 className="champ-title">OUR CHAMPIONS</h2>

      <span className="dots"></span>
      <span className="dots"></span>
      <span className="dots"></span>

      <div className="champ-pics">
        <div className="champ-profile">
          <img src={martha} alt="martha" className="circle-pics" />
          <h4 className="name">Martha Bertnston</h4>
          <span className="title">The 1st place in swimming</span>
          <p className="story">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse
            veritatis aspernatur suscipit soluta.
          </p>
          <span className="dot"></span>
        </div>
        <div className="champ-profile">
          <img src={rob} alt="robert" className="circle-pics" />
          <h4 className="name">Robert Adams</h4>
          <span className="title">World champions</span>
          <p className="story">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            fuga debitis magnam saepe!
          </p>
          <span className="dot"></span>
        </div>
        <div className="champ-profile">
          <img src={lisa} alt="lisa" className="circle-pics" />
          <h4 className="name">Lisa Smith</h4>
          <span className="title">The 1st place in running</span>
          <p className="story">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ab
            ullam?
          </p>
          <span className="dot"></span>
        </div>
        <div className="champ-profile">
          <img src={max} alt="max" className="circle-pics" />
          <h4 className="name">Max Fernston</h4>
          <span className="title">The 1st place in biking</span>
          <p className="story">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quos qui quae!
          </p>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Champions;
