import React from "react";

const GetInTouch = () => {
  return (
    <>
       <div className="2sm:h-[80px] w-full bg-[#73E338] sm:h-[32px] flex justify-center md:mt-[237px] sm:mt-[100px] items-center">
          <p className="text-black text-xl font-bold uppercase sm:text-[10px] 2sm:text-xl">get in touch</p>
        </div>
      <section className="2sm:h-[574px] sm:h-[187px] justify-center flex flex-col ">
       <h2 className="uppercase text-white  text-center 2sm:text-[15px] sm:text-[8px] sm:mt-[60px] ">WE WILL GET YOU BACK</h2>
        <form
          action="post"
          className="flex  items-center 2sm:pt-[10px] sm:pt-[10px] gap-1 flex-col"
        >
          <div className="flex  flex-row 2sm:w-6/12 sm:w-[219px] gap-1">
            <input
              type="text"
              required
              placeholder="FULL NAME*"
              className="2sm:w-2/4 sm:w-[108.5px] 2sm:h-[50px] sm:h-[16px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
            <input
              type="email"
              required
              placeholder="EMAIL*"
              className="2sm:w-2/4 sm:w-[108.5px] 2sm:h-[50px] sm:h-[16px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
          </div>
          <input
            type="text"
            required
            placeholder="SUBJECT*"
            className="2sm:w-2/4 sm:w-[219px] 2sm:h-[50px] sm:h-[16px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
          />
          <textarea
            placeholder="MESSAGE*"
            className="2sm:w-2/4 sm:w-[219px] 2sm:h-[185px] sm:h-[56px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
          />
          <button
            type="submit"
            className="2sm:w-2/4 sm:w-[219px] 2sm:h-[45px] sm:h-[18px] text-black text-[15px] sm:mb-[85px] sm:text-[8px] rounded-[3px] 2sm:rounded-md sm:bg-[#73E338]"
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
