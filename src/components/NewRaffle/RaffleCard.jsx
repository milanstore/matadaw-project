import React from "react";
import Img from "../../assets/common/raffle_card.png";

const cardData = [
  { title: "Raffle End Date/Time", value: "16 Jun 18:89" },
  { title: "Ticket Supply", value: "1000" },
  { title: "Ticket Cost", value: "1 FOXY per Ticket" },
];

const RaffleCard = () => {
  return (
    <div className="bg-[#010101] py-28">
      <div className="w-[93%] lg:w-[80%] xl:w-[70%] mx-auto flex justify-center items-start gap-10 lg:gap-24 flex-wrap">
        <img src={Img} alt="" className="custom-raffle-card" />
        <div className="text-left  min-w-[20rem] flex-1">
          <div className="custom-form-bg py-9 pl-10 px-20 border border-[#EF9C55] rounded-xl flex flex-col gap-8 ">
            {cardData.map((data, index) => (
              <div
                key={index}
                className="text-white font-primary
            "
              >
                <h3 className="text-[1.5rem] sm:text-[2rem]">{data.title}</h3>
                <p className="text-[1rem] sm:text-[1.4rem] text-[#ffffffcc]">
                  {data.value}
                </p>
              </div>
            ))}
          </div>
          <a href="#!">
            <div className="bg-buttonBg bg-no-repeat bg-full w-[14.5rem] sm:w-[17rem] h-[6rem] relative mt-10 lg:mt-12">
              <p className=" font-primary text-[22px] sm:text-[28px] leading-[34px] text-white absolute translate-x-[-50%] translate-y-[-50%] left-[75%] top-[35%] w-full">
                Create Raffle
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RaffleCard;
