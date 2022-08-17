import React from "react";
import BannerImg from "../../assets/Footer/Metadraw_logo.png";
import BannerLogo from "../../assets/home/MCL_Logo.png";

const Banner = () => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[60%] xl:w-[40%] mx-auto mt-[7.5rem]">
      <div className="flex flex-col justify-center items-center gap-6">
        <img src={BannerImg} alt="" className="w-full" />

        <p className="text-white text-2xl font-primary py-6">
          <span className="text-[#EF9D57]">Dictumst scelerisque</span> mi
          interdum commodo viverra ac at tellus facilisis. Tellus ut in semper
          pulvinar malesuada adipiscing sed.
        </p>
        <div className="bg-buttonBg bg-no-repeat bg-full w-[12rem] sm:w-[17rem] h-[3.5rem] sm:h-[5rem] relative">
          <p className=" font-primary text-[20px] sm:text-[28px] leading-[30px] sm:leading-[34px] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
            Buy On Opensea
          </p>
        </div>
        <div className="flex justify-center items-center my-8 md:my-12 w-full">
          <h6 className="text-white font-primary text-[2rem] sm:text-[3.6rem] leading-[2.5rem] sm:leading-[4.5rem]">
            Powered By :
          </h6>
          <img src={BannerLogo} alt="" className="w-[40%] " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
