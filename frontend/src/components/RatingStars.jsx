import React from "react";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`ri-star $(i <= rating ? '-fill' : '-line'}`}>
        <i className="ri-star-fill"></i>
      </span>
    );
  }
  return <div className="product__rating">{stars}</div>;
};

export default RatingStars;
