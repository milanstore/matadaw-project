import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Img1 from "../../assets/home/filterImg/img-1.png";
import Img10 from "../../assets/home/filterImg/img-10.png";
import Img11 from "../../assets/home/filterImg/img-11.png";
import Img12 from "../../assets/home/filterImg/img-12.png";
import Img13 from "../../assets/home/filterImg/img-13.png";
import Img14 from "../../assets/home/filterImg/img-14.png";
import Img15 from "../../assets/home/filterImg/img-15.png";
import Img16 from "../../assets/home/filterImg/img-16.png";
import Img17 from "../../assets/home/filterImg/img-17.png";
import Img18 from "../../assets/home/filterImg/img-18.png";
import Img19 from "../../assets/home/filterImg/img-19.png";
import Img2 from "../../assets/home/filterImg/img-2.png";
import Img3 from "../../assets/home/filterImg/img-3.png";
import Img4 from "../../assets/home/filterImg/img-4.png";
import Img5 from "../../assets/home/filterImg/img-5.png";
import Img6 from "../../assets/home/filterImg/img-6.png";
import Img7 from "../../assets/home/filterImg/img-7.png";
import Img8 from "../../assets/home/filterImg/img-8.png";
import Img9 from "../../assets/home/filterImg/img-9.png";
import HoverText from "./HoverText";

const FilterGallery = () => {
  const [menu, setMenu] = useState("featured");
  const [hover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState("");
  const menuList = [
    { name: "Featured", query: "featured" },
    { name: "All Raffles", query: "all-raffles" },
    { name: "Past Raffles", query: "past-raffles" },
  ];

  const imgList = [
    {
      id: 1,
      img: Img1,
      name: "Infected Mob #2973",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 2,
      img: Img7,
      name: "LabMonke #4052",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 3,
      img: Img2,
      name: "Yaku X #1108",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 4,
      img: Img3,
      name: "Sphynx #4031",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 5,
      img: Img4,
      name: "Tamaki Apes #1903",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 6,
      img: Img5,
      name: "Art of Mob #643",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 7,
      img: Img6,
      name: "Ape #3376",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 8,
      img: Img7,
      name: "Great Goats #1577",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 9,
      img: Img8,
      name: "Fox #6320",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 10,
      img: Img9,
      name: "Primate #787",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 11,
      img: Img10,
      name: "GhostKid #2626",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 12,
      img: Img11,
      name: "Mongomons #3015",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 13,
      img: Img12,
      name: "Capsule X #6066",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 14,
      img: Img13,
      name: "Dinodawgs D #3186",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 15,
      img: Img14,
      name: "Vandal #5318",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 16,
      img: Img15,
      name: "MekaGorillaz #1692",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 17,
      img: Img16,
      name: "Infected Mob #2973",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 18,
      img: Img17,
      name: "Quantum Trader #1870",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 19,
      img: Img18,
      name: "Infected Mob #2973",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
    {
      id: 20,
      img: Img19,
      name: "Love Letter #2174",
      ticketRemain: "101/130",
      price: "0.5 DUST",
      remain: " 1hrs 14mins 6s",
      link: "#!",
    },
  ];

  return (
    <div className="w-[93%] md:w-[80%] pb-24 mx-auto">
      {/* filter Menu */}
      <div className="flex justify-center custom1380:justify-between items-center gap-6 flex-wrap mb-20">
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {menuList.map((data, index) => (
            <div
              key={index}
              onClick={() => setMenu(data.query)}
              className={`${
                data.query === menu ? "bg-buttonBg" : "bg-buttonTrBg"
              } bg-no-repeat bg-full w-[12rem] h-[4rem] relative cursor-pointer`}
            >
              <p className=" font-primary text-[28px] leading-[34px] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                {data.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <div className="relative w-[15rem] overflow-hidden">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Raffl"
              className="pl-[1.9rem] py-4 bg-[#2a2a2a] rounded-xl w-full placeholder:font-primary placeholder:text-[1rem] shadow appearance-none outline-none focus:text-white"
            />
            <BsSearch className="text-white text-xl absolute right-0 top-[50%] translate-y-[-50%] bg-[#4c4c4c] h-full rounded-xl w-[3.5rem] px-[1.2rem]" />
          </div>
          <div
            className={`bg-buttonTrBg
               bg-no-repeat bg-full w-[12rem] h-[4rem] relative cursor-pointer`}
          >
            <p className=" font-primary text-[28px] leading-[34px] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
              Filters/Sort
            </p>
          </div>
        </div>
      </div>

      {/* filter gellary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {imgList.map((data, index) => (
          <div
            onMouseEnter={() => {
              setHoverItem(data.id);
              setHover(true);
            }}
            onMouseLeave={() => setHover(false)}
            key={index}
            className="bg-[#1f1f1f] rounded-xl cursor-pointer overflow-hidden"
          >
            {hover && hoverItem === data.id ? (
              <HoverText details={data} />
            ) : (
              <div className="p-2">
                <img src={data.img} alt="" className="w-full" />
                <div className="text-white font-primary my-5">
                  <p className="text-2xl">{data.name}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterGallery;
