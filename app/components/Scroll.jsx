"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Popup from "./Popup";


const Scroll = () => {
  const [hoveredItems, setHoveredItems] = useState(Array(12).fill(false));

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSectionTitle, setPopupSectionTitle] = useState("");

  


  const openPopup = (sectionTitle) => {
    setPopupSectionTitle(sectionTitle);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const containerRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
     

   
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);




    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const blocks = [
    "tourism",
    "sports",
    "fashion",
    "educatuion",
    "entertainment",
    "Food and Beverages",
    "Agriculture",
    "Healthcare",
    "HORECA Sectors",
    "Wine Industry",
    "Automotive Industry",
    "Tele-communications",
  ];

 
  return (
    <>
      <div className="scroll-container overflow-x-scroll" ref={containerRef}>
        <div className="flex h-[420px] relative">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="scroll-item">
              <div className="flex flex-row justify-center gap-[2px]">
                <div
                  className="bg-[#181818] w-[181px] h-[339px] rounded-lg outline outline-offset-[-5px] outline-white relative"
                  onMouseEnter={() =>
                    setHoveredItems((prev) =>
                      prev.map((_, i) => (i === index ? true : _))
                    )
                  }
                  onMouseLeave={() =>
                    setHoveredItems((prev) =>
                      prev.map((_, i) => (i === index ? false : _))
                    )
                  }
                  onClick={() => openPopup(blocks[index])}
                >
                  <p className="text-white text-[15px] uppercase p-5">
                    {blocks[index]}
                  </p>
                  <div className="flex flex-row gap-3 absolute bottom-[15px] left-[38px]">
                    <span
                      className="text-white text-[10px] uppercase cursor-pointer"
                      onClick={() => openPopup(blocks[index])}
                    >
                      View Gallery
                    </span>
                    <Image
                      src={
                        hoveredItems[index]
                          ? "/images/gallery-errow-green.svg"
                          : "/images/galerry-errow.svg"
                      }
                      alt="arrow"
                      width={11}
                      height={11}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && (
        <Popup onClose={closePopup} sectionTitle={popupSectionTitle} />
      )}
    </>
   
  )
}

export default Scroll
