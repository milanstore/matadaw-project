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
          <div className=" w-[100%] lg:w-[40%]">
            <DropDown data={dataList?.[0]} className="mb-4" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* checkbox  */}
          <div class="flex items-center justify-between mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-[1rem] text-[#ffffffcc] font-primary"
            >
              I accept the terms & conditions below.
            </label>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
