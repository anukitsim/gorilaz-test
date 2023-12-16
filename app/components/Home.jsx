"use client";

import { useState } from "react";
import Image from "next/image";
import RunningLine from "./RunningLine";
import Popup from "./Popup";
import Scroll from "./Scroll";
import WhatWeDoSection from "./WhatWeDoSection";
import ProductionPhase from "./ProductionPhase";


const Home = ({ isPopupOpen, closePopup, openPopup, blocks }) => {
  const [hoverStates, setHoverStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleHoverChange = (index, isHovered) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [index]: isHovered,
    }));
  };

  return (
    <>
      <section className="border-t mt-[130px] border-t-white  overflow-hidden">
        <div className=" mx-auto w-9/12 h-[1357px] relative  flex flex-row">
          <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full z-50"></div>
          <div className="text-white w-1/2 border-r border-r-white">
            <p className="mt-[70px] text-[18px] uppercase pl-10 text-white">
              <span className="text-[#73E338]">Gorillas' Production</span>{" "}
              embodies a thrilling convergence of artistry and adventure.
            </p>
            <p className=" text-[18px] uppercase pl-10 pt-[12px] text-white">
              For over two decades, Gorilla’s have been pioneers in the realm of
              extreme photo and videography and the creation of evocative
              portraits.
            </p>
            <p className="text-white pt-[95px] pb-[26px] uppercase text-[20px] text-center">
              gorillas’industries
            </p>
            <p className="text-white  text-[10px] uppercase absolute top-[750px] left-[20px] mb-[10px]">
              drag for more
            </p>

            <Scroll />

            {isPopupOpen && (
              <Popup onClose={closePopup} sectionTitle={popupSectionTitle} />
            )}

            <p className="text-white pl-10 mt-[120px] uppercase">
              Our forte lies in crafting gripping documentary films that capture
              the essence of every story we tell, especially within the realms
              of action and adventure.
            </p>
            <p className="text-white pl-10 pt-5 uppercase">
              With an eye for the extraordinary, Gorillas’ Production
              specializes in dynamic drone shots that elevate visual
              storytelling to new heights.
            </p>
          </div>
          <div className="flex flex-col gap-[28px] justify-start mt-20 items-center w-1/2">
            <Image src="/images/logo.svg" alt="logo" width={180} height={180} />
            <p className="text-white text-[25px] font-ASSUAN uppercase">
              Gorilla’s pRODUCTION
            </p>
            <Image
              src="/images/home.svg"
              alt="homepage"
              width={370}
              height={433}
              className="z-10 mt-[93px] outline outline-white outline-offset-[-5px] rounded-lg"
              priority
            />
            <div className="absolute top-[504px] left-1/2 w-full border-b border-b-white"></div>
            <div className="absolute top-[722px] left-1/2 w-full border-b border-b-white"></div>
            <div className="absolute top-[940px] left-1/2 w-full border-b border-b-white"></div>
            <div className="absolute top-[722px] right-[12vw] h-[24vw] w-[0.2px] bg-white"></div>
            <Image
              src="/images/counter.svg"
              alt="homepage"
              width={119}
              height={22}
              className="absolute top-[1060px]"
            />
            <div className="absolute top-[722px] right-[25vw] h-[24vw] w-[0.2px] bg-white"></div>
          </div>
          <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
        </div>
      </section>
      <div className="border-t border-t-white overflow-hidden"></div>

      <WhatWeDoSection
        hoverStates={hoverStates}
        handleHoverChange={handleHoverChange}
        openPopup={openPopup}
        blocks={blocks}
      />
      <div className="border-t border-t-white overflow-hidden"></div>
      <div className=" mx-auto relative  w-9/12 h-[1300px] flex flex-col  items-center">
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
        <Image
          src="/images/home-production.svg"
          alt="production"
          width={1000}
          height={520}
          className="w-[87%] mt-[155px]"
        />
        <div className="flex flex-row mt-[180px] justify-center gap-[80px]">
          <ProductionPhase title="pre production" />
          <ProductionPhase title="production" />
          <ProductionPhase title="post production" />
        </div>
        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
      </div>
      <RunningLine />
    </>
  );
};

export default Home;
