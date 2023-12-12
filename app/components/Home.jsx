"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import RunningLine from "./RunningLine";
import Popup from "./Popup";

const Home = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);


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
  const whiteLineRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const whiteLine = whiteLineRef.current;
     

      if (container && whiteLine) {
        const maxScroll = container.scrollWidth;
        const scrollPercentage = (container.scrollLeft / maxScroll) * 100;

        // Set the width of the white line based on scroll position
        whiteLine.style.width = `${scrollPercentage}%`;

      
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
    <>
      <section className="border-t mt-[130px] border-t-white  overflow-hidden">
        <div className=" mx-auto w-9/12 h-[1357px] relative  flex flex-row">
          <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full z-50"></div>
          <div className="text-white w-1/2 border-r border-r-white">
            <p className="mt-[70px] text-[18px] uppercase pl-10 text-white">
              <span className="text-[#73E338]">Gorillas' Production</span>{" "}
              embodies a thrilling convergence of artistry and adventure.
            </p>
            <p className=" text-[18px] uppercase pl-10 pt-[12px] text-white">
              For over two decades, Gorilla’s have been pioneers in the realm of
              extreme photo and videography and the creation of evocative
              portraits.
            </p>
            <p className="text-white pt-[95px] pb-[26px] uppercase text-[20px] text-center">
              gorillas’industries
            </p>
            <p className="text-white  text-[10px] uppercase absolute top-[750px] left-[20px] mb-[10px]">
              drag for more
            </p>
            <div className="scroll-container w-[100%] flex overflow-x-scroll whitespace-normal h-[420px] relative" ref={containerRef}>
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
                        <span className="text-white text-[10px] uppercase  cursor-pointer"  onClick={() => openPopup(blocks[index])}>
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
            {isPopupOpen && (
        <Popup onClose={closePopup} sectionTitle={popupSectionTitle} />
      )}

            <Image
              src="/images/scroll-line.svg"
              alt="homepage"
              width={200}
              height={200}
              className="w-full pl-[13px] mt-[-20px]"
            />
            <div
              className="bg-[#E9E8EF] h-[5px] w-full pl-[13px] mt-[-8px] z-10 white-line"
              ref={whiteLineRef}
            ></div>

            {/* Scroll SVG */}
            {/* <Image
              src="/images/scroll.svg"
              alt="scroll"
              width={38}
              height={38}
              className="absolute top-[780px] left-[20px]"
              ref={scrollSvgRef}
            /> */}

            <p className="text-white pl-10 mt-[120px] uppercase">
              Our forte lies in crafting gripping documentary films that capture
              the essence of every story we tell, especially within the realms
              of action and adventure.
            </p>
            <p className="text-white pl-10 pt-5 uppercase">
              With an eye for the extraordinary, Gorillas’ Production
              specializes in dynamic drone shots that elevate visual
              storytelling to new heights.
            </p>
          </div>
          <div className="flex flex-col gap-[28px] justify-start mt-20 items-center w-1/2">
            <Image src="/images/logo.svg" alt="logo" width={180} height={180} />
            <p className="text-white text-[25px] font-ASSUAN uppercase">
              Gorilla’s pRODUCTION
            </p>
            <Image
              src="/images/home.svg"
              alt="homepage"
              width={370}
              height={433}
              className="z-10 mt-[93px] outline outline-white outline-offset-[-5px] rounded-lg"
            />
            <div className="absolute top-[504px] left-1/2 w-full border-b border-b-white"></div>
            <div className="absolute top-[722px] left-1/2 w-full border-b border-b-white"></div>
            <div className="absolute top-[940px] left-1/2 w-full border-b border-b-white"></div>
            <div className="absolute top-[722px] right-[12vw] h-[24vw] w-[0.2px] bg-white"></div>
            <Image
              src="/images/counter.svg"
              alt="homepage"
              width={119}
              height={22}
              className="absolute top-[1060px]"
            />
            <div className="absolute top-[722px] right-[25vw] h-[24vw] w-[0.2px] bg-white"></div>
          </div>
          <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
        </div>
      </section>
      <div className="border-t border-t-white overflow-hidden"></div>

      <div className=" mx-auto relative  w-9/12 h-[536px] flex gap-5 flex-col justify-center">
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
        <h1 className="text-white text-[40px] text-center mt-[80px] uppercase">
          what we do
        </h1>
        <div className="flex flex-row items-center justify-center w-10/12 mx-auto">
          <div className="flex flex-col gap-2">
            <div className="image-wrapper  border border-white">
              <Image
                src="/images/portfolio1.svg"
                alt="image"
                width={266}
                height={204}
              />
            </div>
            <p className="text-white tracking-wider uppercase">Photography</p>
            <div
              className="flex flex-row gap-3"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <span className="text-white text-[10px] uppercase cursor-pointer">
                view gallery
              </span>

              <Image
                src={
                  isHovered1
                    ? "/images/gallery-errow-green.svg"
                    : "/images/galerry-errow.svg"
                }
                alt="arrow"
                width={11}
                height={11}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="image-wrapper  border border-white">
              <Image
                src="/images/portfolio2.svg"
                alt="image"
                width={266}
                height={204}
              />
            </div>
            <p className="text-white tracking-wider uppercase">videography</p>
            <div
              className="flex flex-row gap-3"
              // Use onMouseEnter and onMouseLeave to handle hover events
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <span className="text-white text-[10px] uppercase cursor-pointer">
                view gallery
              </span>
              {/* Use conditional rendering to switch between arrow images based on hover state */}
              <Image
                src={
                  isHovered2
                    ? "/images/gallery-errow-green.svg"
                    : "/images/galerry-errow.svg"
                }
                alt="arrow"
                width={11}
                height={11}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="image-wrapper  border border-white">
              <Image
                src="/images/portfolio1.svg"
                alt="image"
                width={266}
                height={204}
              />
            </div>
            <p className="text-white tracking-wider uppercase whitespace-nowrap cursor-pointer">
              location scouting
            </p>
            <div
              className="flex flex-row gap-3"
              // Use onMouseEnter and onMouseLeave to handle hover events
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <span className="text-white text-[10px] uppercase cursor-pointer" onClick={() => openPopup(blocks[index])}>
                view gallery
              </span>
              {/* Use conditional rendering to switch between arrow images based on hover state */}
              <Image
                src={
                  isHovered3
                    ? "/images/gallery-errow-green.svg"
                    : "/images/galerry-errow.svg"
                }
                alt="arrow"
                width={11}
                height={11}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="image-wrapper  border border-white">
              <Image
                src="/images/portfolio2.svg"
                alt="image"
                width={266}
                height={204}
              />
            </div>
            <p className="text-white tracking-wider uppercase">social media</p>
            <div
              className="flex flex-row gap-3"
              // Use onMouseEnter and onMouseLeave to handle hover events
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
              onClick={() => openPopup(blocks[index])}
            >
              <span className="text-white text-[10px]  cursor-pointer" >
                view gallery
              </span>
              {/* Use conditional rendering to switch between arrow images based on hover state */}
              <Image
                src={
                  isHovered4
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
        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
      </div>
      <div className="border-t border-t-white overflow-hidden"></div>
      <div className=" mx-auto relative  w-9/12 h-[1300px] flex flex-col  items-center">
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
        <Image
          src="/images/home-production.svg"
          alt="production"
          width={1000}
          height={520}
          className="w-[87%] mt-[155px]"
        />
        <div className="flex flex-row mt-[180px] justify-center gap-[80px]">
          <div className="flex flex-col items-center gap-[40px]">
            <p className="uppercase text-white text-[20px]">pre production</p>
            <div className="relative">
  <div className="absolute inset-0 flex items-center justify-center">
    <Image
      src='/images/process-foto-1.svg'
      alt="rounded"
      width={174}
      height={120}
      className='rounded-full'
    />
  </div>
  <div className="relative z-50">
    <Image
      src="/images/process-foto-decor.svg"
      alt="production"
      width={250}
      height={214}
    />
  </div>
</div>
          </div>

          <div className="flex flex-col items-center gap-[40px]">
            <p className="uppercase text-white text-[20px]">production</p>
            <div className="relative">
  <div className="absolute inset-0 flex items-center justify-center">
    <Image
      src='/images/process-foto-1.svg'
      alt="rounded"
      width={174}
      height={120}
      className='rounded-full'
    />
  </div>
  <div className="relative z-50">
    <Image
      src="/images/process-foto-decor.svg"
      alt="production"
      width={250}
      height={214}
    />
  </div>
</div>
          </div>
          <div className="flex flex-col items-center gap-[40px]">
            <p className="uppercase text-white text-[20px]">post production</p>
            <div className="relative">
  <div className="absolute inset-0 flex items-center justify-center">
    <Image
      src='/images/process-foto-1.svg'
      alt="rounded"
      width={174}
      height={120}
      className='rounded-full'
    />
  </div>
  <div className="relative z-50">
    <Image
      src="/images/process-foto-decor.svg"
      alt="production"
      width={250}
      height={214}
    />
  </div>
</div>
          </div>
          {isPopupOpen && (
        <Popup onClose={closePopup} sectionTitle={popupSectionTitle} />
      )}
        </div>
        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
      </div>
      <RunningLine />
    </>
  );
};

export default Home;