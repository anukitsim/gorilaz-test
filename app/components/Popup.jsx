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
    div.style.width = "480px";
    div.style.height = "480px";
  };

  const handleLeave = (event, index) => {
    const div = event.currentTarget;
    div.style.width = `${divDimensions[index].width}px`;
    div.style.height = `${divDimensions[index].height}px`;
  };

  return (
    <div
      ref={galleryRef}
      className="flex overflow-x-scroll popup-scroll w-10/12 gap-0.5 mt-[200px] mx-auto h-full"
      style={{ scrollSnapType: "x mandatory" }}
    >
      <div className="bg-[url('/images/sideLayer.svg')] absolute left-4 bg-repeat-y w-2 h-[120%] z-50"></div>
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className="gallery-item flex-shrink-0 bg-[#181818] outline outline-white outline-offset-[-5px] rounded-lg transition-all duration-300"
          style={{
            width: `${divDimensions[index].width}px`,
            height: `${divDimensions[index].height}px`,
          }}
          onMouseEnter={(event) => handleHover(event, index)}
          onMouseLeave={(event) => handleLeave(event, index)}
        >
          {/* Add your content for each div here */}
          <p className="p-[20px] text-[20px] tracking-wide uppercase">{text[index]}</p>
        </div>
      ))}
      <p className="text-white z-50 absolute bottom-36 uppercase text-[10px]">drag for more</p>
      <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-4 bg-repeat-y w-2 h-[120%]"></div>
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
      <div className="w-9/12 bg-opacity-2 backdrop-filter backdrop-blur-[47px] shadow-md relative  max-h-full overflow-y-auto">
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
            className="cursor-pointer absolute -top-32 right-11"
          />
        </div>
        <div className=" absolute  right-0 bg-repeat-y w-2 h-[110%]"></div>
        <div className="w-full  z-100 mt-[247px] bg-black">
          <div className="h-[80px] w-full bg-[#73E338] flex justify-center mt-[237px] items-center">
            <p className="text-black text-xl font-bold uppercase">
              get in touch
            </p>
          </div>
          <section className="h-[574px] justify-center flex flex-col ">
            <h2 className="uppercase text-white  text-center text-[15px]">
              WE WILL GET YOU BACK
            </h2>
            <form
              action="post"
              className="flex  items-center pt-[60px] gap-1 flex-col"
            >
              <div className="flex  flex-row w-6/12">
                <input
                  type="text"
                  required
                  placeholder="FULL NAME*"
                  className="w-1/2 h-[50px] p-5 text-white bg-transparent border rounded-md"
                />
                <input
                  type="email"
                  required
                  placeholder="EMAIL*"
                  className="w-1/2 h-[50px] p-5 text-white bg-transparent border rounded-md"
                />
              </div>
              <input
                type="text"
                required
                placeholder="SUBJECT*"
                className="w-2/4 h-[50px] p-5 text-white bg-transparent border rounded-md"
              />
              <textarea
                placeholder="MESSAGE*"
                className="w-2/4 h-[185px] p-5 text-white bg-transparent border rounded-md"
              />
              <button
                type="submit"
                className="w-2/4 h-[45px] text-black text-[15px] rounded-md bg-[#73E338]"
              >
                SUBMIT NOW
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Popup;
