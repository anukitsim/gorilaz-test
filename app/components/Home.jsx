"use client";


import { useState } from "react";
import Image from "next/image";
import RunningLine from "./RunningLine";
import Popup from "./Popup";
import Scroll from "./Scroll";
import WhatWeDoSection from "./WhatWeDoSection";
import ProductionPhase from "./ProductionPhase";
import Video1 from "./video1";
import Video2 from "./Video2";

const Home = ({
  isPopupOpen,
  closePopup,
  openPopup,
  blocks = [],
  index = 0,
  popupSectionTitle,
  
}) => {
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
      <section className="border-t md:ml-0  md:w-full sm:w-full mt-[130px] border-t-white  overflow-hidden">
        <div className=" mx-auto md:w-9/12 sm:w-full md:h-[1357px] relative  flex md:flex-row sm:flex-col-reverse">
          <div className="bg-[url('/images/sideLayer.svg')] absolute left-5 bg-repeat-y w-2 h-full"></div>
          <div
            className="mx-auto sm:h-[580px] relative sm:w-9/12 sm:mt-[106px] md:hidden sm:block "
            onClick={() => {
              if (blocks && index !== undefined && index < blocks.length) {
                openPopup(blocks[index]);
              } else {
                console.error("blocks, index, or blocks[index] is undefined");
              }
            }}
          >
            <p className="text-white   uppercase tracking-[0.1em] text-[10px] md:mt-[65px] sm:mt-[-15%] text-center">
              gorillas’industries
            </p>
            <Scroll />

            <p className="sm:text-white  text-[10px] uppercase absolute sm:bottom-[70%] sm:left-[35px]">
              drag for more
            </p>
          </div>
          {isPopupOpen && (
            <Popup onClose={closePopup} sectionTitle={popupSectionTitle} />
          )}
          <div className="text-white md:w-1/2 sm:hidden md:block border-r h-[90%] border-r-white">
            <p className="mt-[70px] text-[18px] uppercase pl-16 text-white">
              <span className="text-[#73E338]">Gorillas' Production</span>{" "}
              Gorillas' Production embodies a thrilling convergence of artistry,
              adventure and everyday lifestyle through a different angle.
            </p>
            <p className=" text-[18px] uppercase pl-16 pt-[12px] text-white">
              For over two decades, Gorilla’s have been pioneers in the realm of
              extreme photo and videography and the creation of evocative
              portraits.
            </p>
            <p className="text-white pt-[95px]  uppercase tracking-[0.1em] text-[20px] text-center">
              gorillas’industries
            </p>

            <div className="relative sm:w-full  flex ml-10  md:w-11/12 ">
              <Scroll />
              <p className="text-white text-[15px] uppercase absolute bottom-20 left-24 transform -translate-x-1/2">
                drag for more
              </p>
            </div>

            <p className="text-white pl-10 mt-[120px] uppercase">blog here</p>
          </div>
          <div className="flex flex-col  gap-[28px] justify-start sm:h-[426px] md:mt-20 sm:mt-10 items-center md:w-1/2 sm:w-full">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={355}
              height={234}
              className="md:w-[355px] md:h-[234px] sm:w-[142px] sm:h-[90px]"
            />
          <Video1 />

            <div className="absolute md:top-[504px] sm:top-[200px] md:left-1/2 sm:left-0 w-full border-b border-b-white"></div>
            <div className="absolute md:top-[722px] sm:top-[308px] md:left-1/2 sm:left-0 w-full border-b border-b-white"></div>
            <div className="absolute md:top-[940px] sm:top-[416px] md:left-1/2 sm:left-0 w-full border-b border-b-white"></div>
            <div className="absolute md:top-[722px] sm:top-[200px]  md:right-[12vw] sm:right-56  h-[34vw] w-[0.2px] bg-white"></div>
            <Image
              src="/images/counter.svg"
              alt="homepage"
              width={119}
              height={22}
              className="absolute top-[1060px] sm:hidden md:block"
            />
            <div className="absolute md:top-[722px] sm:top-[380px] md:right-[25vw] sm:right-56  h-[34vw] w-[0.2px] bg-white"></div>
          </div>

          <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-5 bg-repeat-y w-2 h-full"></div>
        </div>

        <div className="border-t border-t-white overflow-hidden  sm:w-full"></div>
        <div className="mx-auto relative sm:w-full sm:h-[1270px] md:h-[536px]  md:w-full">
          <WhatWeDoSection
            hoverStates={hoverStates}
            handleHoverChange={handleHoverChange}
            openPopup={openPopup}
          />
        </div>  
        <div className="border-t border-t-white overflow-hidden  sm:w-full"></div>
        <div className=" mx-auto relative sm:w-full sm:h-[200px]  md:w-9/12 md:h-[800px] flex flex-col justify-center  items-center">
          <div className="bg-[url('/images/sideLayer.svg')] absolute left-5 bg-repeat-y w-2 h-full"></div>
         
          
          <Video2 />
          <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-5 bg-repeat-y w-2 h-full"></div>
        </div>
        <div className="border-t border-t-white overflow-hidden"></div>

        <div className="md:w-9/12 md:h-[500px] sm:h-[900px] relative flex flex-row justify-center mx-auto">
          <div className="bg-[url('/images/sideLayer.svg')] absolute left-5 bg-repeat-y w-2 h-full"></div>
          <div className="flex md:flex-row  items-center justify-center sm:flex-col md:mt-[100px]   md:gap-[80px] sm:gap-[25px]">
          <ProductionPhase />
          </div>
          <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-5 bg-repeat-y w-2 h-full"></div>
        </div>

        <RunningLine />
      </section>
    </>
  );
};

export default Home;
