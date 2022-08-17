import React from "react";

const Title = ({ normalText, colorText }) => {
  return (
    <h2 className="text-white font-primary text-[5rem] leading-[6.5rem] capitalize pt-16 pb-6 ">
      {normalText} <span className="text-[#e7711d]">{colorText}</span>
    </h2>
  );
};

export default Title;
