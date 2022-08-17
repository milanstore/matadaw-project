import React from "react";
import FooterImg from "../../assets/Footer/Metadraw_logo.png";
import FooterLeftImg from "../../assets/Footer/powerby.png";
import FooterRightImg from "../../assets/Footer/ticket.png";
import DiscordSvg from "../../assets/SVG/DiscordSvg.jsx";
import InstaSvg from "../../assets/SVG/InstaSvg";

import TwitterSvg from "../../assets/SVG/TwitterSvg";

const Footer = () => {
  return (
    <div className="mt-8 relative">
      <div className="flex justify-center items-center">
        <img src={FooterImg} alt="footer-img" />
      </div>
      <div>
        <div className="flex justify-center items-center py-12 gap-6">
          <a href="#!">
            <TwitterSvg className="transform transition-all duration-700 ease-in-out hover:scale-125" />
          </a>
          <a href="#!">
            <InstaSvg className="transform transition-all duration-700 ease-in-out hover:scale-125" />
          </a>
          <a href="#!">
            <DiscordSvg className="transform transition-all duration-700 ease-in-out hover:scale-125" />
          </a>
        </div>
        <hr className="bg-red-700" />
        <p className="font-primary text-customWhite opacity-70 text-lg tracking-wider py-8">
          Copyright@MetaCognixion.com
        </p>
      </div>

      <div className="absolute left-0 bottom-0  md:flex  justify-start hidden">
        <img
          src={FooterLeftImg}
          alt=""
          className="w-[30%]  md:w-[55%] lg:w-[70%] xl:w-full sm:flex hidden"
        />
      </div>
      <div className="absolute right-0 bottom-0 justify-end md:flex hidden">
        <img
          src={FooterRightImg}
          alt=""
          className="w-[30%] md:w-[55%] lg:w-[70%] xl:w-full"
        />
      </div>
    </div>
  );
};

export default Footer;
