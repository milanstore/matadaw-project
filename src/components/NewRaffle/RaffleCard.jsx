import React from "react";
import { FaTimes } from "react-icons/fa";

const RaffleCard = ({ details, setShowRaffle }) => {
  return (
    <div className="bg-[#010101]  p-10 w-[90%] md:w-[60%] h-full relative border border-[#e87521] rounded-lg mx-auto z-[999] overflow-y-auto scrollbar-hide">
      <div
        onClick={() => setShowRaffle(false)}
        className="w-12 h-12 p-4 rounded-full absolute top-2 right-2 text-white hover:bg-white hover:text-[#e87521] cursor-pointer z-[80]"
      >
        <FaTimes />
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="mx-auto flex justify-center items-start gap-10 flex-wrap pb-4">
          <img src={details.img} alt="" className="custom-raffle-card" />
          <div className="text-left  min-w-[20rem] flex-1">
            <div className="custom-form-bg py-9 pl-10 px-20 border border-[#EF9C55] rounded-xl flex flex-col gap-8 ">
              <div
                className="text-white font-primary
            "
              >
                <h3 className="text-[1.5rem] ">Raffle End Date/Time</h3>
                <p className="text-[1rem] text-[#ffffffcc]">{details.remain}</p>
              </div>
              <div
                className="text-white font-primary
            "
              >
                <h3 className="text-[1.5rem] ">Ticket Supply</h3>
                <p className="text-[1rem] text-[#ffffffcc]">
                  {details.ticketRemain}
                </p>
              </div>
              <div
                className="text-white font-primary
            "
              >
                <h3 className="text-[1.5rem]">Ticket Cost</h3>
                <p className="text-[1rem] text-[#ffffffcc]">
                  {details.price} per Ticket
                </p>
              </div>
            </div>

            <div
              onClick={() => setShowRaffle(false)}
              className="bg-buttonBg bg-no-repeat bg-full w-[12rem]  h-[3.5rem]  relative mt-8 z-[80] cursor-pointer mb-4 md:mb-0"
            >
              <p className=" font-primary text-[20px]  leading-[30px]  text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
                Create Raffle
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaffleCard;
