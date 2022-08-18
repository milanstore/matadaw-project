import React from "react";
import Img1 from "../assets/common/myRaffle.png";
import DropDown from "../components/NewRaffle/DropDown";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import Title from "../components/Shared/Title";

const dataList = [
  { data: ["Sort Your Bought", "Active Raffle", "Past Raffle"] },
];

const userData = [
  {
    img: Img1,
    id: "#1270",
    name: "Suteki",
    time: "Ended",
    ticketR: "0/3000",
    sushi: 2,
    ticketB: 10,
  },
];

const MyRaffle = () => {
  return (
    <div className="bg-myRaffleBg bg-full">
      <Navbar />
      <div className="py-20 pb-40">
        <Title normalText="My" colorText="Raffles" />
        <div className="w-[93%] md:w-[80%] mx-auto flex flex-col items-end">
          <div className="w-[16rem] sm:w-[20rem] mx-auto sm:mx-0">
            <DropDown data={dataList?.[0]} />
          </div>
        </div>
        <div className="w-[93%] md:w-[80%] mx-auto border border-[#e45d01] rounded-xl p-12 mt-6 custom-form-bg">
          {userData.map((data, index) => (
            <div
              key={index}
              className="font-primary text-white flex justify-center custom1352:justify-between items-center flex-wrap gap-10 md:gap-20"
            >
              <div className="flex items-center gap-6">
                <img src={data.img} alt="" />
                <p className="text-[1.4rem]">
                  {data.name} <br /> <span>{data.id}</span>
                </p>
              </div>
              <div className="flex justify-center items-start gap-10 md:gap-20 custom1352:pr-8 flex-wrap">
                <div>
                  <h6 className="text-xl">Time Remaining</h6>
                  <p className="text-[1rem] mt-2">{data.time}</p>
                </div>
                <div>
                  <h6 className="text-xl">Tickets Remaining</h6>
                  <p className="text-[1rem] mt-2">{data.ticketR}</p>
                  <p className="text-[1rem] mt-1 uppercase">
                    {data.sushi} sushi
                  </p>
                </div>
                <div>
                  <h6 className="text-xl">Tickets Bought</h6>
                  <p className="text-[1rem] mt-2">{data.ticketB}</p>
                  <p className="text-[1rem] mt-1">
                    {((data.ticketB / 3000) * 100).toFixed(2)}% Chance
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyRaffle;
