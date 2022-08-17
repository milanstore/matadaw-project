import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropDown = ({ data }) => {
  const optionList = data.data;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(optionList[0]);
  return (
    <div className="min-w-[12rem] relative">
      <div
        onClick={() => setOpen(!open)}
        className="px-5 py-4 mb-2 box-border bg-[#1a1a1a] rounded-2xl flex justify-between items-center w-full border border-[#e45d01] transform transition-all ease-out duration-500 "
      >
        <p className="text-white font-primary text-[1.4rem]">{selected}</p>
        {open ? (
          <IoIosArrowUp className="text-xl text-[#e45d01] font-bold" />
        ) : (
          <IoIosArrowDown className="text-xl text-[#e45d01] font-bold" />
        )}
      </div>

      {open && (
        <ul className="w-full bg-[#010101] rounded-lg overflow-hidden px-4 pt-3 transform transition-all ease-out duration-500 absolute top-18">
          {optionList.map((data, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(data);
                setOpen(false);
              }}
              className={`w-full p-2 list-none cursor-pointer box-border border border-[#161616] text-white font-primary text-[1rem] mb-[10px] hover:bg-[#171717] ${
                data === selected ? "bg-[#171717]" : ""
              }`}
            >
              {data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
