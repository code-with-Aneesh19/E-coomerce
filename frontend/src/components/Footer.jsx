import React from "react";
import instaImg1 from "../assets/instagram-1.jpg";
import instaImg2 from "../assets/instagram-2.jpg";
import instaImg3 from "../assets/instagram-3.jpg";
import instaImg4 from "../assets/instagram-4.jpg";
import instaImg5 from "../assets/instagram-5.jpg";
import instaImg6 from "../assets/instagram-6.jpg";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            123, Shankar ward, Narsinghpur
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            aneeshsarawgi2001@gmail.com
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
              +91 9584452592
            </span>
          </p>
        </div>

        <div className="footer__col pl-5">
          <h4>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Work With Us</a>
          <a href="/">Our Blogs</a>
          <a href="/">Terms & Condition</a>
        </div>

        <div className="footer__col">
          <h4>USEFUL LINK</h4>
          <a href="./">Help</a>
          <a href="./">Tract Your Order</a>
          <a href="./">Men</a>
          <a href="./">Woman</a>
          <a href="./">Dresses</a>
        </div>

        <div className="footer__col">
          <h4>Instagram</h4>
          <div className="instagram__grid">
            <img src={instaImg1} alt="" />
            <img src={instaImg2} alt="" />
            <img src={instaImg3} alt="" />
            <img src={instaImg4} alt="" />
            <img src={instaImg5} alt="" />
            <img src={instaImg6} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
