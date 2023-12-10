"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Portfolio = () => {
  const [hoveredItems, setHoveredItems] = useState(Array(12).fill(false));

  const containerRef = useRef(null);
  const whiteLineRef = useRef(null);
  const scrollSvgRef = useRef(null);

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
  <section className="w-9/12 flex  mx-auto mt-[209px] h-[682px]">
  
     <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full z-50"></div>
    
     <div className="scroll-container w-10/12 2xl:w-10/12 xl:w-10/12 lg:w-10/12 items-center ml-[8%] flex flex-col overflow-x-scroll relative whitespace-normal" ref={containerRef}>
      <div>
      <h1 className="text-white text-[40px] uppercase">portfolio</h1>
      <span className="text-white text-[20px] uppercase">gorillas’industries</span>
      </div>
     
             <div className="flex flex-row w-full mt-[101px]">
             {blocks.map((block, index) => (
            <div key={index} className="scroll-item w-[181px] h-[338.906px]">
              <div
                className="w-[181px] h-[338.906px] rounded-[10px] outline outline-offset-[-8px] outline-white relative bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/${block}.svg')`, // Adjust the file extension based on your image format
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
                <p className="text-white text-[15px] uppercase p-5">{blocks[index]}</p>
                <div className="flex flex-row gap-3 ">
                  <span className="text-white text-[10px] uppercase absolute bottom-4 left-8 cursor-pointer">
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
                    className="absolute bottom-[18px] left-28"
                  />
                </div>
              </div>
            </div>
          ))}
             </div>
             
            </div>
            <div className="absolute w-[83%] bottom-0 ml-[8%] ">
              <p className="text-white text-[10px] uppercase absolute bottom-14 left-5">drag for more</p>
            <Image
              src="/images/scroll-line.svg"
              alt="homepage"
              width={200}
              height={200}
              className="w-full z-50"
            />
            <div
              className="bg-[#E9E8EF] h-[7px] absolute bottom-1 z-10 white-line"
              ref={whiteLineRef}
            ></div>
            </div>
          

            {/* Scroll SVG */}
            <Image
              src="/images/scroll.svg"
              alt="scroll"
              width={38}
              height={38}
              className="absolute -bottom-1 z-50 ml-[8%]"
              ref={scrollSvgRef}
            />
               <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
  </section>
)
  
};

export default Portfolio;
