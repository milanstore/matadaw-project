import React from "react";
import BannerImg from "../assets/Footer/Metadraw_logo.png";
import Img1 from "../assets/Raffle/img-1.png";
import Img10 from "../assets/Raffle/img-10.png";
import Img11 from "../assets/Raffle/img-11.png";
import Img12 from "../assets/Raffle/img-12.png";
import Img2 from "../assets/Raffle/img-2.png";
import Img3 from "../assets/Raffle/img-3.png";
import Img4 from "../assets/Raffle/img-4.png";
import Img5 from "../assets/Raffle/img-5.png";
import Img6 from "../assets/Raffle/img-6.png";
import Img7 from "../assets/Raffle/img-7.png";
import Img8 from "../assets/Raffle/img-8.png";
import Img9 from "../assets/Raffle/img-9.png";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";

const galleryList = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
];

const NewRaffleCard = () => {
  return (
    <div className="bg-homeBg bg-[#010101] bg-cover bg-no-repeat">
      <Navbar />
      <div className="py-20 pb-40">
        <div className="flex justify-center items-center">
          <img src={BannerImg} alt="" className="" />
        </div>
        <div className=" w-[93%] md:w-[80%] lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto pt-36 pb-32">
          {galleryList.map((data, index) => (
            <div className="w-full">
              {index === 0 ? (
                <img src={data} alt="" className="w-full custom-raffle-card" />
              ) : (
                <img src={data} alt="" className="w-full" />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <a href="#!">
            <div className="bg-buttonBg bg-no-repeat bg-full w-[12rem] sm:w-[17rem] h-[3.5rem] sm:h-[5rem] relative mt-8">
              <p className=" font-primary text-[20px] sm:text-[28px] leading-[30px] sm:leading-[34px] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center uppercase">
                Replace all
              </p>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewRaffleCard;
