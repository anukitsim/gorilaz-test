"use client";

import Scroll from "./Scroll";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="md:w-[72%] sm:w-full flex  mx-auto mt-[134px] h-[580px]">
      <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-[120%] z-50"></div>

      <div className="flex flex-col items-center w-full">
        <h1 className="text-white md:text-[40px] sm:text-[10px]  uppercase">
          portfolio
        </h1>
        <span className="text-white md:text-[20px] sm:text-[7px] pb-[100px] uppercase">
          gorillas’industries
        </span>
        <div className="w-8/12 relative h-[380px]">
        <Scroll/>
        <p className="text-white text-[15px] uppercase  -bottom-7 left-10 absolute">
          drag for more
        </p>
        </div>
       
      </div>

    
     

      {/* Scroll SVG */}

      <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-[120%]"></div>
     
    </section>
  );
};

export default Portfolio;
