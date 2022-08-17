import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../assets/home/slider-1.png";
import Slider2 from "../../assets/home/slider-2.png";
import Title from "../Shared/Title";
const Feature = () => {
  const [gridNumber, setGridnumber] = useState(3);
  const [width, setWidth] = useState(0);

  console.log(window.pageXOffset);

  useEffect(() => {
    if (window.innerWidth > 1400) {
      setGridnumber(3);
    }
    if (window.innerWidth > 768) {
      setGridnumber(2);
    } else {
      setGridnumber(1);
    }
  }, [window.innerWidth]);

  return (
    <div>
      <Title normalText="Featured" colorText="ending Soon" />
      {() => setWidth(window.innerWidth)}
      <div className="mx-[8rem] mb-16 z-10">
        <Swiper
          slidesPerView={gridNumber}
          spaceBetween={30}
          data-aos="fade-left"
          navigation={true}
          // autoplay={{
          //   delay: 6000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="featureSwiper"
        >
          <SwiperSlide>
            <div className="h-[26.4rem] rounded-lg custom-shadow">
              <img src={Slider1} alt="" className="h-full rounded-lg w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#EF9C55] h-[26.4rem] rounded-lg flex flex-col justify-between">
              <div className=" p-5 pb-0">
                <div className="flex justify-end">
                  <AiFillHeart className="text-white text-[2.3rem]" />
                </div>
                <div className="flex flex-col gap-8 my-8">
                  <p className="font-primary text-xl text-white">
                    Sphynx Underground Society
                  </p>
                  <p className="font-primary text-2xl text-white">
                    Sphynx #5762
                  </p>
                  <div className="flex justify-center items-center gap-4">
                    <div className="font-primary text-xl text-white text-left">
                      <p>Tickets Remaining</p>
                      <p>186/300</p>
                    </div>
                    <div className="font-primary text-xl text-white text-left">
                      <p>Price/Ticket</p>
                      <p>0.2 DUST</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-gradiant pt-4 pb-5 rounded-b-lg">
                <h5 className="font-primary text-[2rem] text-white">
                  View Raffle
                </h5>
                <p className="font-primary text-[1rem] text-white">
                  Ends in 36mins 57s
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[26.4rem] rounded-lg custom-shadow">
              <img src={Slider2} alt="" className="h-full rounded-lg w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[26.4rem] rounded-lg">
              <img src={Slider1} alt="" className="h-full rounded-lg w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feature;
