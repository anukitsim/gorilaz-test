"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isBlurActive, setIsBlurActive] = useState(true);
  const videoRef = useRef(null);  



useEffect(() => {
  const folders = document.querySelectorAll(".folder");

  folders.forEach((folder, index) => {
    folder.addEventListener("mouseenter", () => {
      if (index > 0) {
        // Calculate total height of sublinks in the current folder
        const sublinks = folder.querySelectorAll("li");
        const totalSublinksHeight = Array.from(sublinks).reduce(
          (acc, sublink) => acc + sublink.clientHeight,
          0
        );

        // Move all previous siblings down by a larger distance (adjust the value as needed)
        for (let i = 0; i < index; i++) {
          const sibling = folders[i];
          sibling.style.transform = `translateY(${totalSublinksHeight + 20}px)`;
        }
      }
    });

    folder.addEventListener("mouseleave", () => {
      // Reset the transform on mouse leave for all folders
      folders.forEach((sibling) => {
        sibling.style.transform = "translateY(0)";
      });
    });
  });
}, []);




  const handleVideoHover = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsBlurActive(false);
    }
  };


  return (
    <div className="w-full h-auto flex  justify-center relative">
      <div className="top-[53px] w-9/12 h-[622.696px] relative overflow-hidden videoContainer">
        <Image
          className="absolute right-0 top-40 "
          src="/images/header-regulator.svg"
          alt="regulator-foto"
          width={14.35}
          height={211.64}
          
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[277.697px] h-[133px] border-t-2 border-l-2 border-white  absolute left-1 top-0"></div>
          <div className="w-[277.697px] h-[133px] border-t-2 border-r-2 border-white  absolute right-1 top-0"></div>
          <div className="w-[487.601px] h-[133px] border-b-2 border-l-2 border-white  absolute left-1 bottom-0"></div>
          <div className="w-[345.09px] h-[133px] border-b-2 border-r-2 border-white  absolute right-1 bottom-0"></div>
        </div>
        <p className=" whitespace-nowrap  absolute top-8 right-9 z-50 font-VcrMono text-6xl text-[#73E338]">
          OUR TEAM
        </p>
        <p className="absolute right-7 bottom-7 font-VcrMono text-sm z-50 text-[#FFFFFF]">
          TWENTY YEARS <br /> OF CRAFTING <br /> VISUAL EPICS
        </p>
        <div className="absolute -bottom-2  left-1/2 transform text-white -translate-x-1/6 z-50 ">
        <Image src='/images/counter.svg' alt="counter" width={120} height={23} className='z-50'/>
</div>
        {/* Folder 1 */}
        <div className="absolute left-10 top-52 ">
          <div className="relative">
              <div
                className="w-[55.19px] h-[16.307px] bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] 
                rounded-bl-[0] z-[100] absolute -top-4 left-[190px] flex items-center justify-end pr-1"
              >
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>

            <div className="folder flex-col gap-2 z-50  w-[246.068px] h-[244.339px] flex justify-center items-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] relative">
              <p className="absolute left-5 top-4 text-[10px] text-white">07</p>
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={100}
                height={100}
              />

              <p className="text-[5px] text-white">GORILAS' PRODUCTION</p>
            </div>
          </div>
          {/* Folder 2 */}

          <div className="folder z-40   w-[246.068px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[27px]">
            {/* Add content for the second folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[189px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] text-white">06</p>
            <Link href='#' className="absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono">
              BLOG
            </Link>
          </div>

          {/* Folder 3 */}
          <div className="folder z-30  w-[246.068px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[54px]">
            {/* Add content for the third folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[190px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] text-white">05</p>
            <Link href='#' className="absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono">
              CONTACT
            </Link>
          </div>
          <div className=" folder z-20  w-[246.068px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[81px]">
            {/* Add content for the third folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[190px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] text-white">04</p>
            <Link href='#' className="absolute left-9 top-3 text-[15px] flex flex-col gap-1 text-[#73E338] font-VcrMono">
              WHAT WE DO
              <li href='#' className="text-white text-[10px] list-none ">process</li>
              <li href='#' className="text-white text-[10px] list-none ">services</li>
              <li href='#' className="text-white text-[10px] list-none ">photography</li>
              <li href='#' className="text-white text-[10px] list-none ">videography</li>
              <li href='#' className="text-white text-[10px] list-none ">location scouting</li>
              <li href='#' className="text-white text-[10px] list-none ">social media service</li>
            </Link>
          </div>
          <div className="folder z-10  w-[246.068px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[108px]">
            {/* Add content for the third folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[190px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] text-white">03</p>
            <Link href='#' className="absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono">
              PORTFOLIO
            </Link>
          </div>
          <div className="folder z-[5]  w-[246.068px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656]  flex-col rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[135px]">
            {/* Add content for the third folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[190px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] text-white">02</p>
            <Link href='#' className="absolute left-9 top-3 text-[15px] text-[#73E338] flex flex-col gap-1 font-VcrMono ">
              GORILAS'
              <li href='#' className="text-white text-[10px] list-none  pt-2">our team</li>
              <li href='#' className="text-white text-[10px] list-none  pt-0.5">behind the scene</li>
            </Link>
           
          </div>
          <div className="folder z-[1]  w-[246.068px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[162px]">
            {/* Add content for the third folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[190.5px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] text-white">01</p>
            <Link href='#' className="absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono">
              HOME
            </Link>
          </div>
        </div>
        <div className="absolute inset-2 right-5 z-0 flex items-end justify-end videoBackdrop">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className='object-cover w-9/12 max-h-[500px] video'
          onMouseOver={handleVideoHover}
        >
          <source src="/video/test.mp4" type="video/mp4" />
        </video>
        </div>
        {/* Backdrop layer */}
      </div>
    </div>
  );
};

export default Header;