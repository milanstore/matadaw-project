import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/home/simg.png";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import Title from "../components/Shared/Title";
const userData = [
  { title: "Twitter Username", name: "Link twitter" },
  { title: "Wallet", name: "GLpU...6miR" },
  { title: "No. of Raffles Created", name: "0" },
  { title: "FFF Holder", name: "X" },
];

const Profile = () => {
  return (
    <div className="bg-homeBg bg-[#010101] bg-cover bg-no-repeat ">
      <Navbar />
      <div className="py-20 pb-40">
        <Title normalText="User" colorText="Profile" />

        <div className="border border-[#EF9C55] rounded-xl w-[85%] lg:w-[75%] xl:w-[65%] mx-auto custom-user-bg ">
          <div className="flex justify-center items-center gap-4 mt-6 flex-wrap-reverse">
            <h6 className="font-primary text-white text-[12px] sm:text-xl">
              GLpUniJsWQAp5f5fHuCwxTaZbddmgG274YN6ViaV6miR
            </h6>
            <img src={Img} alt="" />
          </div>

          <div className="flex justify-center items-center gap-16 py-8 flex-wrap">
            {userData.map((data, index) => (
              <div key={index} className="font-primary text-white">
                <h6 className="text-xl">{data.title}</h6>
                <p className="text-[1rem] mt-2">{data.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/my-raffle">
            <div className="bg-buttonBg bg-no-repeat bg-full w-[12rem]  h-[3.5rem]  relative mt-8 z-[80] cursor-pointer mb-4 md:mb-0">
              <p className=" font-primary text-[20px]  leading-[30px]  text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
                My Raffle
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
