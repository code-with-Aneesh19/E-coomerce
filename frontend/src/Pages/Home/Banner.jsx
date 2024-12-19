import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/header.png";

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">UP TO 20% Discount on</h4>
        <h1>Girl`s Fashion</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          corporis at, laudantium modi tempora, asperiores aliquam harum
          cupiditate impedit vero labore nisi iste nam repudiandae hic. Vero
          eius ad aliquid.
        </p>
        <button className="btn">
          <Link to="/shop">Explore Now</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
