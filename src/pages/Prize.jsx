import React from "react";
import Img1 from "../assets/prize/img-1.png";
import Img2 from "../assets/prize/img-2.png";
import Img3 from "../assets/prize/img-3.png";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import Title from "../components/Shared/Title";

const prizeData = [
  { name: "Cyber #307", img: Img1 },
  { name: "Pharmac#1651", img: Img2 },
  { name: "Cyber Pharmacies", img: Img3 },
];

const Prize = () => {
  return (
    <div className="bg-[#010101] pb-8">
      <Navbar />
      <div className="py-20 pb-40">
        {" "}
        <Title normalText="Choose NFT for" colorText="Raffle Prize" />
        <p className="text-white text-xl font-primary">
          <span className="text-[#EF9D57]">Contact us</span> to get your NFT
          verified
        </p>
        <div className="flex justify-center items-center gap-6 mt-20 flex-wrap">
          {prizeData.map((data, index) => (
            <div key={index} className="rounded-xl bg-[#ffffff1f] p-3">
              <img
                src={data.img}
                alt=""
                className="rounded-lg border border-[#EF9C55]"
              />
              <h3 className="font-primary text-3xl text-white mt-5 mb-2">
                {data.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prize;
