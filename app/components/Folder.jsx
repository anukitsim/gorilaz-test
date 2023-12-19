"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Folder = () => {
  const [hoveredFolder, setHoveredFolder] = useState(null);

  useEffect(() => {
    const folders = document.querySelectorAll(".folder");

    folders.forEach((folder, index) => {
      folder.addEventListener("mouseenter", () => {
        console.log(`Mouse entered folder ${index}`);
        setHoveredFolder(index);
        const links = folder.querySelectorAll("a");
        const translateYValue = links.length * 25;

        for (let i = 0; i < index; i++) {
          const sibling = folders[i];

          sibling.style.transform = `translateY(${translateYValue}px)`;
        }
      });

      folder.addEventListener("mouseleave", () => {
        console.log(`Mouse left folder ${index}`);
        folders.forEach((sibling) => {
          sibling.style.transform = "translateY(0)";
        });
        setHoveredFolder(null);
      });
    });
  }, []);

  return (
    <div className="absolute left-8 top-60 ">
      <div className="relative">
        <div className="folder flex-col gap-2 z-50  w-[254px] h-[245px] flex justify-center items-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] relative">
          <div
            className="arrow w-[55px] h-[15px] bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] 
                  rounded-bl-[0] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1"
          >
            <Image
              src={`/images/${
                hoveredFolder === 0 ? "hoverArrow" : "arrow"
              }.svg`}
              alt="logo"
              width={20}
              height={0}
            />
          </div>
          <p className="absolute left-5 top-4 text-[7px] text-white">07</p>
          <Link href="/work-in-progress">
            <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
          </Link>
        </div>
      </div>
      {/* Folder 2 */}

      <div className="folder z-40   w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[30px]">
        {/* Add content for the second folder here */}
        <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
          <Image
            src={`/images/${hoveredFolder === 1 ? "hoverArrow" : "arrow"}.svg`}
            alt="logo"
            width={20}
            height={0}
          />
        </div>
        <p className="absolute left-5 top-4 text-[7px] text-white">06</p>
        <Link
          href="#"
          className="absolute uppercase left-9 top-2.5 tracking-[0.1em] text-[20px] text-[#73E338] font-VcrMono"
        >
          BLOG
        </Link>
      </div>

      {/* Folder 3 */}
      <div className="folder z-30  w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[60px]">
        {/* Add content for the third folder here */}
        <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
          <Image
            src={`/images/${hoveredFolder === 2 ? "hoverArrow" : "arrow"}.svg`}
            alt="logo"
            width={20}
            height={0}
          />
        </div>
        <p className="absolute left-5 top-4 text-[7px] text-white">05</p>
        <Link
          href="/contact"
          className="absolute uppercase left-9 top-2.5 text-[20px] tracking-[0.1em] text-[#73E338] font-VcrMono"
        >
          CONTACT
        </Link>
      </div>
      <div className=" folder z-20  w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[90px]">
        {/* Add content for the third folder here */}
        <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
          <Image
            src={`/images/${hoveredFolder === 3 ? "hoverArrow" : "arrow"}.svg`}
            alt="logo"
            width={20}
            height={0}
          />
        </div>
        <p className="absolute left-5 top-4 text-[7px] text-white">04</p>
        <Link
          href="#"
          className="absolute uppercase left-9 top-2.5 tracking-[0.1em]  text-[20px] flex flex-col  text-[#73E338] font-VcrMono"
          style={{ 'word-spacing': '-0.3em'}}
        >
          WHAT WE DO
        </Link>
        <div className="sublinks uppercase">
          <Link
            href="/process"
            className="absolute left-9 top-[45px] tracking-[0.1em] text-[13px] text-[#D4D4D4] hover:text-white flex flex-col  font-VcrMono "
          >
            process
          </Link>
          <Link
            href="/services"
            className="absolute left-9 top-[65px] tracking-[0.1em] text-[13px] text-[#D4D4D4] hover:text-white flex flex-col  font-VcrMono "
          >
            services
          </Link>
        </div>
      </div>
      <div className="folder z-10 w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[120px]">
        {/* Add content for the third folder here */}
        <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
          <Image
            src={`/images/${hoveredFolder === 4 ? "hoverArrow" : "arrow"}.svg`}
            alt="logo"
            width={20}
            height={0}
          />
        </div>
        <p className="absolute left-5 top-4 text-[7px] text-white">03</p>
        <Link
          href="#"
          className="absolute uppercase left-9 tracking-[0.1em] top-2.5 text-[20px] text-[#73E338] font-VcrMono"
        >
          PORTFOLIO
        </Link>
        <div className="sublinks uppercase">
          <Link
            href="/portfolio/industries"
            className="absolute text-[#D4D4D4] hover:text-white tracking-[0.1em]  left-9 top-[45px] text-[13px]  flex flex-col  font-VcrMono "
          >
            gorillas’industries
          </Link>
        </div>
      </div>
      <div className="folder z-[5]  w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656]  flex-col rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[150px]">
        {/* Add content for the third folder here */}
        <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
          <Image
            src={`/images/${hoveredFolder === 5 ? "hoverArrow" : "arrow"}.svg`}
            alt="logo"
            width={20}
            height={0}
          />
        </div>
        <p className="absolute left-5 top-4 text-[7px] text-white">02</p>
        <Link
          href="#"
          className="absolute uppercase tracking-[0.1em] left-9 top-2.5 text-[20px] text-[#73E338] flex flex-col  font-VcrMono "
        >
          GORILLAS'
        </Link>
        <div className="sublinks uppercase ">
          <Link
            href="/gorilas/our-team"
            className="absolute text-[#D4D4D4] tracking-[0.1em] hover:text-white  left-9 top-[45px] text-[13px]  flex flex-col  font-VcrMono "
          >
            our team
          </Link>
          <Link
            href="/gorilas/behind-the-scene"
            className="absolute left-9 top-[55px] tracking-[0.1em] text-[13px] pt-2.5 text-[#D4D4D4] hover:text-white flex flex-col  font-VcrMono "
          >
            behind the scene
          </Link>
        </div>
      </div>
      <div className="folder z-[1]  w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[180px]">
        {/* Add content for the third folder here */}
        <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
          <Image
            src={`/images/${hoveredFolder === 6 ? "hoverArrow" : "arrow"}.svg`}
            alt="logo"
            width={20}
            height={0}
          />
        </div>
        <p className="absolute left-5 top-4 text-[7px] text-white">01</p>
        <Link
          href="/"
          className="absolute uppercase tracking-[0.1em] left-9 top-2.5 text-[20px] text-[#73E338] font-VcrMono"
        >
          HOME
        </Link>
      </div>
    </div>
  );
};

export default Folder;
