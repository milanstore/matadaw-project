import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { raffleList } from "../../Data/raffleList";

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

  return (
    <div className="w-[93%] md:w-[80%] pb-24 mx-auto">
      {/* filter Menu */}
      <div className="flex justify-center xl:justify-between items-center gap-6 flex-wrap mb-20">
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {menuList.map((data, index) => (
            <div
              key={index}
              onClick={() => setMenu(data.query)}
              className={`${
                data.query === menu ? "bg-buttonBg" : "bg-buttonTrBg"
              } bg-no-repeat bg-full w-[10rem] h-[3.3rem] relative cursor-pointer`}
            >
              <p className=" font-primary text-[22px] leading-[30px] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
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
               bg-no-repeat bg-full w-[10rem] h-[3.3rem] relative cursor-pointer`}
          >
            <p className=" font-primary text-[22px] leading-[30px] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
              Filters/Sort
            </p>
          </div>
        </div>
      </div>

      {/* filter gellary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {raffleList.map((data, index) => (
          <div
            onMouseEnter={() => {
              setHoverItem(data.id);
              setHover(true);
            }}
            onMouseLeave={() => setHover(false)}
            key={index}
            className="bg-[#1f1f1f] rounded-xl cursor-pointer overflow-hidden h-[22rem]"
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
