import React, { useState } from "react";
import RaffleModal from "./RaffleModal";

const HoverText = ({ details }) => {
  const [showRaffle, setShowRaffle] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowRaffle(true)}
        className="flex flex-col justify-between gap-[16px]"
      >
        <div className="pt-7 ">
          <div className="text-white font-primary mb-3">
            <p className="text-[1rem]">Infected Mob</p>
            <p className="text-2xl mt-1">{details.name}</p>
          </div>
          <div className="text-white font-primary mb-3">
            <p className="text-[1rem]">Tickets Remaining</p>
            <p className="text-2xl mt-1">{details.ticketRemain}</p>
          </div>
          <div className="text-white font-primary mb-3">
            <p className="text-[1rem]">Price/Ticket</p>
            <p className="text-2xl mt-1">{details.price}</p>
          </div>
        </div>

        <div className="bg-[#e87521] pt-[.9rem] pb-4 rounded-b-xl cursor-pointer">
          <p className="text-white font-primary text-2xl mb-2">View Raffle</p>
          <p className="text-white font-primary text-[1rem]">
            Ends in {details.remain}
          </p>
        </div>
      </div>
      {showRaffle && (
        <RaffleModal setShowRaffle={setShowRaffle} details={details} />
      )}
    </>
  );
};

export default HoverText;
