import React from "react";
import RaffleCard from "../NewRaffle/RaffleCard";

const RaffleModal = ({ setShowRaffle, details }) => {
  return (
    <>
      <div className="w-full h-full fixed bg-transparent  overflow-y-auto scrollbar-hide z-[999] inset-0">
        <RaffleCard details={details} setShowRaffle={setShowRaffle} />
      </div>
    </>
  );
};

export default RaffleModal;
