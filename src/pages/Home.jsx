import React from "react";
import Banner from "../components/Home/Banner";
import FilterGallery from "../components/Home/FilterGallery";
import ImageGallery from "../components/Home/ImageGallery/ImageGallery";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";

const Home = () => {
  return (
    <div className="bg-homeBg bg-[#010101] bg-cover bg-no-repeat">
      <Navbar />
      <Banner />
      <ImageGallery />
      {/* <Feature /> */}
      <FilterGallery />
      <Footer />
    </div>
  );
};

export default Home;
