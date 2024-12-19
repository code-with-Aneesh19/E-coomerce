import React from "react";
import Banner from "./Banner";
import Categories from "./categories";
import HeroSection from "./HeroSection";
import TrendingProducts from "../Shop/TrendingProducts";
import DealsSection from "./DealsSection";
import PromoBanner from "./PromoBanner";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HeroSection />
      <TrendingProducts />
      <DealsSection />
      <PromoBanner />
      <Blogs />
    </div>
  );
};

export default Home;
