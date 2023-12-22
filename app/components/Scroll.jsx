"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Popup from "./Popup";


const Scroll = () => {
  const [hoveredItems, setHoveredItems] = useState(Array(12).fill(false));

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSectionTitle, setPopupSectionTitle] = useState("");
  const [activeSection, setActiveSection] = useState(null); 

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const itemWidth = containerRect.width / 3; // Assuming you want 3 items visible at a time
        const activeSection = Math.round((container.scrollLeft + itemWidth / 3) / itemWidth);

        if (activeSection) {
          setActiveSection(1);
        } else if (scrollPosition <= window.innerHeight * 1.5) {
          setActiveSection(2);
        } else if (scrollPosition <= window.innerHeight * 2.5) {
          setActiveSection(3);
        } else if (scrollPosition <= window.innerHeight * 3.5) {
          setActiveSection(4);
        }
      };

      const container = containerRef.current;
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile]);

  const openPopup = (sectionTitle) => {
    setPopupSectionTitle(sectionTitle);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const containerRef = useRef(null);


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const container = containerRef.current;
     

   
  //   };

  //   const container = containerRef.current;
  //   container.addEventListener("scroll", handleScroll);




  //   return () => {
  //     container.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const blocks = [
    "tourism",
    "sports",
    "fashion",
    "educatuion",
    "entertainment",
    "Agriculture",
    "Healthcare",
    "HORECA Sectors",
    "Wine Industry",
    "Automotive Industry",
    "Tele-communications",
  ];

 
  return (
    <>
      <div className="scroll-container md:h-[500px]  overflow-x-scroll overflow-y-hidden " ref={containerRef}>
        <div className="flex md:h-[390px] sm:h-[200px] sm:mt-[11px] md:mt-[26px] relative">
        {blocks.map((block, index) => (
            <div key={index} className="scroll-item w-[181px] mr-[2px] h-[338.906px]"  onClick={() => openPopup(blocks[index])}>
              <div
                className="md:w-[181px] sm:w-[130px] md:h-[338.906px] sm:h-[155px] rounded-[10px] outline outline-offset-[-8px] outline-white relative bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/${block}.svg')`
                }}
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
               
              >
                <p className="text-white md:text-[15px] sm:text-[10px] uppercase p-5">{blocks[index]}</p>
                <div className="flex flex-row gap-3 ">
                  <span className="text-white md:text-[10px] sm:text-[8px] uppercase absolute bottom-4 left-5 cursor-pointer">
                    View Gallery
                  </span>
                  <Image
                    src={
                      hoveredItems[index] || index + 1 === activeSection
                        ? "/images/gallery-errow-green.svg"
                        : "/images/galerry-errow.svg"
                    }
                    alt="arrow"
                    width={11}
                    height={11}
                    className="absolute md:bottom-[18px] sm:bottom-[17px] md:left-24 sm:left-20"
                  />
                </div>
              </div>
              
            </div>
          ))}
         
        </div>
       
      </div>
      {isPopupOpen && (
        <Popup onClose={closePopup}  sectionTitle={popupSectionTitle} />
      )}
    </>
   
  )
}

export default Scroll