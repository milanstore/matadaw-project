import React from "react";
import DropDown from "./DropDown";

const dataList = [
  {
    data: [
      "Foxy",
      "44TH",
      "AIR",
      "ALL",
      "AMMO",
      "ART",
      "ARTE",
      "ASH",
      "AURY",
      "BAM",
    ],
  },
];

const Form = () => {
  return (
    <div>
      <form className="">
        <div className="flex justify-center items-end gap-5 flex-wrap lg:flex-nowrap">
          {/* date */}
          <div className="mb-4 w-[100%] lg:w-[33%]">
            <label
              className="block text-[#ffffffb3] text-xl font-bold mb-2 font-primary text-left ml-4"
              for="date"
            >
              Raffle End Date
            </label>
            <input
              className="shadow text-[#ffffffb3] appearance-none rounded-2xl  py-4 px-10 bg-[#1a1a1a] border border-[#e45d01] leading-tight focus:outline-none focus:shadow-outline text-[1rem] w-full"
              id="date"
              type="date"
              placeholder=""
            />
          </div>
          {/* ticket */}
          <div className="mb-4 w-[100%] lg:w-[22%]">
            <label
              className="block text-[#ffffffb3] text-xl font-bold mb-2 font-primary text-left ml-4"
              for="ticket"
            >
              Ticket Supply
            </label>
            <input
              className="shadow text-[#ffffffb3] appearance-none rounded-2xl  py-4 px-10 bg-[#1a1a1a] border border-[#e45d01] leading-tight focus:outline-none focus:shadow-outline text-[1rem] w-full"
              id="ticket"
              type="text"
              placeholder=""
            />
          </div>
          {/* dropdown */}
          <div className=" w-[100%] lg:w-[40%] ">
            <DropDown data={dataList?.[0]} className="mb-4" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* checkbox  */}
          <div class="flex items-center justify-between">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-[#e87521] bg-gray-100 rounded border-gray-300 focus:ring-[#e87521]"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-[1rem] text-[#ffffffcc] font-primary"
            >
              I accept the terms & conditions below.
            </label>
          </div>
          <a href="#!">
            <div className="bg-buttonBg bg-no-repeat bg-full w-[10rem]  h-[2.8rem]  relative mt-8">
              <p className=" font-primary text-[20px]  leading-[30px]  text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
                Create Raffle
              </p>
            </div>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
