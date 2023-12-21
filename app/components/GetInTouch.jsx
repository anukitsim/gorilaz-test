import React from "react";

const GetInTouch = () => {
  return (
    <>
       <div className="2sm:h-[80px] w-full bg-[#73E338] sm:h-[40px] flex justify-center md:mt-[237px] sm:mt-[80px] items-center">
          <p className="text-black md:text-[25px]  uppercase sm:text-[10px] 2sm:text-xl font-bold touch-text">get in touch</p>
        </div>
      <section className="2sm:h-[574px] sm:mr-5 sm:mb-5 md:mb-0 sm:ml-5 md:mr-0 md:ml-0 sm:h-[320px] justify-center flex flex-col">
       <h2 className="uppercase text-white  text-center 2sm:text-[15px] sm:text-[8px] md:pb-5 sm:pb-2 sm:mt-[90px] ">WE WILL GET YOU BACK</h2>
        <form
          action="post"
          className="flex  items-center 2sm:pt-[10px] sm:pt-[10px] gap-1 flex-col"
        >
          <div className="flex  md:flex-row sm:flex-col 2sm:w-6/12 sm:w-full gap-1 ">
            <input
              type="text"
              required
              placeholder="FULL NAME*"
              className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[30px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
            <input
              type="email"
              required
              placeholder="EMAIL*"
              className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[30px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
          </div>
          <input
            type="text"
            required
            placeholder="SUBJECT*"
            className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[30px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
          />
          <textarea
            placeholder="MESSAGE*"
            className="2sm:w-2/4 sm:w-full 2sm:h-[185px] sm:h-[70px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
          />
          <button
            type="submit"
            className="submit-text font-bold 2sm:w-2/4 sm:w-full text-center 2sm:h-[45px] sm:h-[27px] text-black md:text-[18px] sm:text-[8px] sm:mb-[85px] sm:font-bold rounded-[3px] 2sm:rounded-md sm:bg-[#73E338]"
          >
            SUBMIT NOW
          </button>
        </form>
      </section>
    </>
  );
};

export default GetInTouch;

{
  /*
   */
}
