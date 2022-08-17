import arrow from "../../assets/home/arrow.png";

const SliderArrow = ({ prevRef, nextRef }) => {
  return (
    <>
      <div className="hidden sm:block w-full h-full">
        <button
          className="py-3 px-6  absolute left-10 xl:left-0 top-[50%] cursor-pointer translate-x-[-50%] translate-y-[-50%]"
          ref={prevRef}
        >
          <img
            src={arrow}
            alt=""
            className=" sliderArrow transform rotate-180 flex-shrink-0 w-[50%] sm:w-full"
          />
        </button>
        <button
          className="py-3 px-6 absolute right-[-100px] sm:right-[-70px] xl:right-[-110px] top-[50%] cursor-pointer translate-x-[-50%] translate-y-[-50%]"
          ref={nextRef}
        >
          <img
            src={arrow}
            alt=""
            className=" sliderArrow flex-shrink-0 w-[50%] sm:w-full"
          />
        </button>
      </div>
    </>
  );
};

export default SliderArrow;
