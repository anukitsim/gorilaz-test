"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const PopupGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const gallery = galleryRef.current;
      const scrollPosition = gallery.scrollLeft;
      const totalWidth = gallery.scrollWidth - gallery.clientWidth;
      const percentageScrolled = (scrollPosition / totalWidth) * 100;

      // Calculate the number of divs to show based on scroll position
      const numDivsToShow = Math.min(
        Math.ceil((percentageScrolled + 10) / 10),
        10
      );

      // Set the visibility of each div based on the calculated number
      for (let i = 1; i <= 10; i++) {
        const div = gallery.querySelector(`.gallery-item:nth-child(${i})`);
       
      }
    };

    const gallery = galleryRef.current;
    if (gallery) {
      gallery.addEventListener("scroll", handleScroll);

      

      // Remove the event listener when the component is unmounted
      return () => {
        gallery.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Define dimensions for each div
  const divDimensions = [
    { width: 400, height: 480 },
    { width: 400, height: 369.9 },
    { width: 300.34, height: 480 },
    { width: 400, height: 480 },
    { width: 400, height: 369.9 },
    { width: 300.34, height: 480 },
    { width: 400, height: 480 },
    { width: 400, height: 369.9 },
    { width: 300, height: 480 },
    { width: 400, height: 369.9 },
  ];

  const text = [
    "Portrait",
    "Landscape",
    "Urban",
    "real estate",
    "documentary",
    "advertising",
    "events",
    "photojournalism",
    "aerial",
    "film"
  ];

  const handleHover = (event, index) => {
    const div = event.currentTarget;

    const isMobile = window.innerWidth <= 768; 

    if (isMobile) {
      div.style.width = "100%"; // Set to the size of the container on mobile
      div.style.height = "auto"; // Adjust as needed
    } else {
      div.style.width = "480px";
      div.style.height = "480px";
    }
  };

  const handleLeave = (event, index) => {
    const div = event.currentTarget;
    div.style.width = `${divDimensions[index].width}px`;
    div.style.height = `${divDimensions[index].height}px`;
  };

  return (
    <div
      ref={galleryRef}
      className="flex overflow-x-scroll  popup-scroll md:w-11/12 sm:w-full overflow-y-hidden gap-0.5 mt-[200px] sm:pl-5 sm:pr-5 md:pl-0 md:pr-0 md:ml-10 h-full"
      style={{ scrollSnapType: "x mandatory" }}
    >
      <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 -top-[200px] bg-repeat-y w-2 h-[165%] z-50"></div>
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className="gallery-item text-white flex-shrink-0 sm:w-[150px] bg-[#181818] outline outline-white outline-offset-[-10px] rounded-lg transition-all duration-300"
          style={{
            width: `${divDimensions[index].width}px`,
            height: `${divDimensions[index].height}px`,
            backgroundImage: `url("/images/popgroup.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onMouseEnter={(event) => handleHover(event, index)}
          onMouseLeave={(event) => handleLeave(event, index)}
        >
          {/* Add your content for each div here */}
          <p className="p-[20px] text-[20px] tracking-wide uppercase">{text[index]}</p>
        </div>
      ))}
      <p className="text-white z-50 absolute bottom-36 uppercase text-[10px]">drag for more</p>
    
    </div>
  );
};


const Popup = ({ onClose, sectionTitle }) => {
  useEffect(() => {
    // Add a class to the body to disable vertical scrolling
    document.body.classList.add("overflow-y-hidden");

    // Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  return (
    <div className="popup-overlay fixed top-0 left-0 flex flex-col items-center justify-center w-full bg-transparent overflow-hidden">
      <div className="md:w-9/12 sm:w-full bg-opacity-2 backdrop-filter backdrop-blur-[47px] shadow-md relative  max-h-full overflow-y-auto">
   
        <div className="relative">
          <p className="text-[#FFF] text-4xl tracking-wide uppercase absolute -top-28 left-11">
            {sectionTitle}
          </p>
          <PopupGallery />
          <Image
            src="/images/cross.svg"
            alt="close"
            width={27}
            height={27}
            onClick={onClose}
            className="cursor-pointer absolute md:-top-32 md:right-11 sm:-top-44 sm:right-11"
          />
        </div>
        <div className=" absolute  right-0 bg-repeat-y w-2 h-[110%]"></div>
        <div className="w-full  z-100 mt-[247px] ">
        <div className="2sm:h-[80px] w-full bg-[#73E338] sm:h-[32px] flex justify-center md:mt-[237px]  sm:mt-[100px] items-center">
          <p className="text-black text-xl font-bold uppercase sm:text-[10px] 2sm:text-xl">get in touch</p>
        </div>
        <section className="justify-center flex flex-col sm:pl-5 sm:pr-5 md:pl-0 md:pr-0">
        
       
       <h2 className="uppercase text-white  text-center 2sm:text-[15px] sm:text-[8px] sm:mt-[60px] ">WE WILL GET YOU BACK</h2>
        <form
          action="post"
          className="flex  items-center 2sm:pt-[10px] sm:pt-[10px] gap-1 flex-col"
        >
          <div className="flex  flex-row 2sm:w-6/12 sm:w-full gap-1">
            <input
              type="text"
              required
              placeholder="FULL NAME*"
              className="2sm:w-2/4 sm:w-6/12 2sm:h-[50px] sm:h-[20px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-black border 2sm:rounded-md sm:rounded-[3px]"
            />
            <input
              type="email"
              required
              placeholder="EMAIL*"
              className="2sm:w-2/4 sm:w-6/12 2sm:h-[50px] sm:h-[20px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-black border 2sm:rounded-md sm:rounded-[3px]"
            />
          </div>
          <input
            type="text"
            required
            placeholder="SUBJECT*"
            className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[20px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-black border 2sm:rounded-md sm:rounded-[3px]"
          />
          <textarea
            placeholder="MESSAGE*"
            className="2sm:w-2/4 sm:w-full 2sm:h-[185px] sm:h-[60px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-black border 2sm:rounded-md sm:rounded-[3px]"
          />
          <button
            type="submit"
            className="2sm:w-2/4 sm:w-full 2sm:h-[45px] sm:h-[20px] text-black text-[15px] sm:mb-[85px] sm:text-[8px] rounded-[3px] 2sm:rounded-md sm:bg-[#73E338]"
          >
            SUBMIT NOW
          </button>
        </form>
   
      </section>
        </div>
        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute -top-[200px] z-0 right-0 bg-repeat-y w-2 h-[165%]"></div>
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 top-0  bg-repeat-y w-2 h-[165%] z-0"></div>
     
      </div>
    </div>
  );
};

export default Popup;