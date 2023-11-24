"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";


const Header = () => {
  useEffect(() => {
    const folders = document.querySelectorAll(".folder");

    folders.forEach((folder, index) => {
      folder.addEventListener("mouseenter", () => {
        if (index > 0) {
          // Move all previous siblings down
          for (let i = 0; i < index; i++) {
            const sibling = folders[i];
            sibling.style.transform = "translateY(30px)";
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

  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-52 bg-[#73E338] flex  justify-center relative">
      <div
        className={`top-[53px] w-9/12 h-[520px] absolute flex justify-end items-end ${
          hovered ? "" : "backdrop-blur-3xl"
        } transition-backdrop-filter duration-2000 ease-in`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transition: "backdrop-filter 2s cubic-bezier(0.25, 0.1, 0.25, 1)", // You can adjust the duration and timing function
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/6 h-[133px] border-t-2 border-l-2 border-white  absolute -left-1 -top-1"></div>
          <div className="w-1/6 h-[133px] border-t-2 border-r-2 border-white  absolute -right-1 -top-1"></div>
          <div className="w-3/6 h-[133px] border-b-2 border-l-2 border-white  absolute -left-1 -bottom-1"></div>
          <div className="w-1/6 h-[133px] border-b-2 border-r-2 border-white  absolute -right-1 -bottom-1"></div>
        </div>
        <p className=" whitespace-nowrap z-10 absolute top-8 right-9 font-VcrMono text-6xl text-[#0C0C0C]">
          OUR TEAM
        </p>
        <p className="absolute right-7 bottom-7 font-VcrMono text-sm text-[#FFFFFF]">
          TWENTY YEARS <br /> OF CRAFTING <br /> VISUAL EPICS
        </p>
        <div className="absolute -bottom-3 left-1/2 w-2/6">
          <p className="text-center">3...2...1...0...1...2...3</p>
        </div>
        {/* Folder 1 */}
        <div className="absolute left-10 top-52 ">
          <div className="relative">
            <div
              className="w-[55.19px] h-[16.307px] bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] 
              rounded-bl-[0] z-[100] absolute -top-4 left-[200px] flex items-center justify-end pr-1"
            >
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>

            <div className="folder flex-col gap-2 z-50 w-[255.423px] h-[244.339px] flex justify-center items-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] relative">
              <p className="absolute left-5 top-4 text-[10px] ">07</p>
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={100}
                height={100}
              />

              <p className="text-[5px]">GORILAS' PRODUCTION</p>
            </div>
          </div>
          {/* Folder 2 */}

          <div className="folder z-40   w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-7">
            {/* Add content for the second folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[199px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] ">06</p>
            <p className="absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono">
              BLOG
            </p>
          </div>

          {/* Folder 3 */}
          <div className="folder z-30  w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-14">
            {/* Add content for the third folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[199px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] ">05</p>
            <p className="absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono">
              CONTACT
            </p>
          </div>
          <div className=" folder z-20  w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-20">
            {/* Add content for the third folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[199px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] ">04</p>
            <p className="absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono">
              WHAT WE DO
            </p>
          </div>
          <div className="folder z-10  w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-28">
            {/* Add content for the third folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[199px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] ">03</p>
            <p className="absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono">
              PORTFOLIO
            </p>
          </div>
          <div className="folder z-[5]  w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-36">
            {/* Add content for the third folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[199px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px] ">02</p>
            <p className="absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono">
              GORILAS'
            </p>
          </div>
          <div className="folder z-[1]  w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-44">
            {/* Add content for the third folder here */}
            <div className="w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[15px] z-[100] absolute -top-4 left-[199.5px] flex items-center justify-end pr-1">
              <Image src="/images/arrow.svg" alt="logo" width={20} height={0} />
            </div>
            <p className="absolute left-5 top-4 text-[10px]">01</p>
            <p className="absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono">
              HOME
            </p>
          </div>
        </div>
        
        <video
          autoPlay
          muted
          loop
          className="self-end object-cover w-[800px] h-[350px] transition-opacity duration-2000 ease-in"
          style={{
            opacity: hovered ? 1 : 0.1,
            transitionDelay: hovered ? "1s" : "0s", // Adjust the delay time
          }}
          id="backgroundVideo"
        >
          <source src="/video/test.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Header;
