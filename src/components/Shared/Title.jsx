import React from "react";

const Title = ({ normalText, colorText }) => {
  return (
    <h2 className="text-white font-primary text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[3rem] sm:leading-[6.5rem] capitalize sm:pt-16 sm:pb-6 py-2 sm:px-0 px-4">
      {normalText} <span className="text-[#e7711d]">{colorText}</span>
    </h2>
  );
};

export default Title;
