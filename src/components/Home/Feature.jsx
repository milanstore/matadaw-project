import React, { useRef } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Slider1 from "../../assets/home/slider-1.png";
import Slider2 from "../../assets/home/slider-2.png";
import Title from "../Shared/Title";
import SliderArrow from "./SliderArrow";
const Feature = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="my-20">
      <Title normalText="Featured" colorText="ending Soon" />

      <div className="max-w-[78rem] w-full pt-[1rem] pb-[2.8rem] mx-auto px-[0.5rem] sm:px-[5rem] xl:px-[3rem] relative">
        <SliderArrow prevRef={prevRef} nextRef={nextRef} />
        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="featureSwiper"
          modules={[Navigation, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            950: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
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
                  <AiFillHeart className="text-white text-[1.5rem] sm:text-[2.3rem]" />
                </div>
                <div className="flex flex-col gap-4 sm:gap-8 my-8">
                  <p className="font-primary text-xl text-white">
                    Sphynx Underground Society
                  </p>
                  <p className="font-primary text-2xl text-white">
                    Sphynx #5762
                  </p>
                  <div className="flex justify-center items-center gap-4 mt-4">
                    <div className="font-primary text-lg sm:text-xl text-white text-left">
                      <p>Tickets Remaining</p>
                      <p>186/300</p>
                    </div>
                    <div className="font-primary text-lg sm:text-xl text-white text-left">
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
          {/* <div class="swiper-button-next hidden"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Feature;
