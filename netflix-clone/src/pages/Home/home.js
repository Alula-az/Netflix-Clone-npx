import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/banner";
import BannerSlide from "../../components/Banner/BannerSlide";

const Home = () => {
  return (
    <>
      <Header />
      <BannerSlide />
      <Footer />
    </>
  );
};

export default Home;
