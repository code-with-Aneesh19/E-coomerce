import React, { useState } from "react";
import ProductCards from "./ProductCards";
import products from "../../data/products.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMorePorducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };
  return (
    <section className="section__container product_container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader mb-12">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat velit
        libero praesentium adipisci exercitationem quas necessitatibus
        perferendis. Praesentium voluptate, dolor voluptatum nesciunt nostrum id
      </p>

      {/* product card */}
      <div className="mt-12">
        <ProductCards products={products.slice(0, visibleProducts)} />
      </div>

      {/* load more product btn  */}
      <div className="product__btn">
        {visibleProducts < products.length && (
          <button className="btn" onClick={loadMorePorducts}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
