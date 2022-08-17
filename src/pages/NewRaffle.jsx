import React from "react";
import Img from "../assets/Footer/new_raffle.png";
import Form from "../components/NewRaffle/Form";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import Title from "../components/Shared/Title";

const conditionData = [
  "A quisque accumsan, porta convallis.",
  "Pretium ac varius mattis leo metus, ipsum orci risus maecenas.",
  "Donec velit blandit pharetra dui velit. Pellentesque at ultricies ac eu rutrum.Tristique pretium in dictum mauris, sed cursus morbi libero nulla. Id justo eget.",
  "Ut urna, massa nisl faucibus tristique mauris blandit nibh.",
  "Facilisi tristique quisque risus fringilla mi risus. Interdum gravida morbi pretium.",
  "Ut pulvinar sollicitudin sit diam odio. Nisi blandit arcu, ultricies sed turpis. Viverra.",
  "Et eget varius neque ipsum elit nulla aliquam vitae.",
  "Elit risus feugiat mauris, in bibendum. Id integer arcu, fames nibh.",
];

const NewRaffle = () => {
  return (
    <div className="bg-homeBg bg-[#010101] bg-cover bg-no-repeat">
      <Navbar />
      <Title normalText="Create New" colorText="Raffle" />
      <div className="flex justify-center items-center gap-20 lg:w-[90%] xl:w-[80%] mx-auto py-28 flex-wrap">
        <div className="w-full sm:w-[80%] lg:w-[28%] mx-auto flex flex-col justify-center items-center">
          <div>
            <img src={Img} alt="" />
            <div className="font-primary text-white text-left ml-10">
              <p className="text-xl">Great Goats</p>
              <p className="text-2xl">Great Goats #8106</p>
            </div>
          </div>
        </div>

        <div className="border border-[#e45d01] px-4 sm:px-11 py-9 rounded-xl custom-form-bg flex-1 mx-5 sm:mx-10 lg:mx-0 lg:w-[60%]">
          {/* form */}
          <Form />
          {/* Terms & Conditions */}
          <div className="text-left rounded-xl custom-form-bg px-5 pt-5 pb-12 mt-[3.875rem]">
            <h3 className="text-white font-primary text-[2rem]">
              Terms & Conditions
            </h3>
            <div>
              {conditionData.map((data, index) => (
                <div
                  key={index}
                  className="text-[#ffffffcc] font-primary text-[1rem] flex justify-start items-start gap-2"
                >
                  <p>{index + 1}.</p>
                  <p>{data}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewRaffle;
