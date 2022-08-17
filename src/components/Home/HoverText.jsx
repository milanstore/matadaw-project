import React from "react";

const HoverText = ({ details }) => {
  return (
    <div className="flex flex-col justify-between gap-[27px]">
      <div className="pt-7 ">
        <div className="text-white font-primary mb-6">
          <p className="text-[1rem]">Infected Mob</p>
          <p className="text-2xl mt-2">{details.name}</p>
        </div>
        <div className="text-white font-primary mb-6">
          <p className="text-[1rem]">Tickets Remaining</p>
          <p className="text-2xl mt-2">{details.ticketRemain}</p>
        </div>
        <div className="text-white font-primary mb-6">
          <p className="text-[1rem]">Price/Ticket</p>
          <p className="text-2xl mt-2">{details.price}</p>
        </div>
      </div>
      <a href={details.link}>
        <div className="bg-[#e87521] pt-[.9rem] pb-4 rounded-b-xl">
          <p className="text-white font-primary text-2xl mb-2">View Raffle</p>
          <p className="text-white font-primary text-[1rem]">
            Ends in {details.remain}
          </p>
        </div>
      </a>
    </div>
  );
};

export default HoverText;
