"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Scroll = () => {
    const containerRef = useRef(null);
    const whiteLineRef = useRef(null);
    const scrollSvgRef = useRef(null);

    const [hoveredItems, setHoveredItems] = useState(Array(12).fill(false));

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

    useEffect(() => {
        const handleScroll = () => {
          const container = containerRef.current;
          const whiteLine = whiteLineRef.current;
          const scrollSvg = scrollSvgRef.current;
    
          if (container && whiteLine && scrollSvg) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            const scrollPercentage = (container.scrollLeft / maxScroll) * 100;
    
            // Set the width of the white line based on scroll position
            whiteLine.style.width = `${scrollPercentage}%`;
    
            // Set the position of the scroll SVG based on scroll position
            const scrollSvgPosition =
              (scrollPercentage / 100) *
              (container.clientWidth - scrollSvg.clientWidth);
            scrollSvg.style.left = `${scrollSvgPosition}px`;
          }
        };
    
        const container = containerRef.current;
        container.addEventListener("scroll", handleScroll);
    
        // Initialize the white line width to 0
        whiteLineRef.current.style.width = "0%";
    
        return () => {
          container.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <>
     <div className="scroll-container" ref={containerRef}>
    {[...Array(12)].map((_, index) => (
      <div key={index} className="scroll-item">
        <div className="flex flex-row justify-center gap-[2px]">
          <div className="bg-[#181818] w-[181px] h-[339px] rounded-lg outline outline-offset-[-5px] outline-white relative">
            <p className="text-white text-[15px] uppercase p-5">
              {blocks[index]}
            </p>
            <div
              className="flex flex-row gap-3 absolute bottom-[15px] left-[38px]"
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
              <span className="text-white text-[10px] uppercase  cursor-pointer">
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
 
    </>
   
  )
}

export default Scroll
