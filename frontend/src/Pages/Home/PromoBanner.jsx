import React from "react";

const PromoBanner = () => {
  return (
    <section className="section__container banner__container">
      <div className="banner__card">
        <span>
          <i className="ri-truck-line"></i>
        </span>
        <h4>Free Delevery </h4>
        <p>Offers Convenience and the ablity to shop from anywher</p>
      </div>
      <div className="banner__card">
        <span>
          <i className="ri-money-dollar-circle-line"></i>
        </span>
        <h4>100% Money Back Guaranty</h4>
        <p>
          E-commerce hav a review system where customers can share feedback.
        </p>
      </div>
      <div className="banner__card">
        <span>
          <i className="ri-user-voice-fill"></i>
        </span>
        <h4>Strong Support </h4>
        <p>
          Offer customers support services to assist customers with queries and
          issues.
        </p>
      </div>
    </section>
  );
};

export default PromoBanner;
