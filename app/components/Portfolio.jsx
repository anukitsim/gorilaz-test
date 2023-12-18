"use client"

import Scroll from "./Scroll";
import Image from "next/image";

const Portfolio = () => {
  



  




return (
  <section className="md:w-9/12 sm:w-full flex  mx-auto mt-[209px] h-[675px]">
  
     <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-[120%] z-50"></div>
   
     <Scroll />
 
   
     {/* <div className="scroll-container w-full 2xl:w-10/12 xl:w-10/12 lg:w-10/12 items-center ml-[8%] flex flex-col overflow-x-scroll relative " ref={containerRef}>
      
     
             <div className="flex flex-row w-full mt-[201px]">
             {blocks.map((block, index) => (
            <div key={index} className="scroll-item w-[181px] h-[338.906px]">
              <div
                className="w-[181px] h-[338.906px] rounded-[10px] outline outline-offset-[-8px] outline-white relative bg-cover bg-center"
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
             
            </div> */}
            <div className="absolute top-0 md:left-[443px] sm:left-10">
      <h1 className="text-white md:text-[40px] sm:text-[10px]  uppercase">portfolio</h1>
      <span className="text-white md:text-[20px] sm:text-[7px] uppercase">gorillas’industries</span>
      </div>
            <div className="absolute w-[83%] bottom-0 ml-[8%] ">
              <p className="text-white text-[10px] uppercase absolute bottom-14 left-5">drag for more</p>
           
          
            </div>
          

            {/* Scroll SVG */}
         
               <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-[120%]"></div>
  </section>
)
  
};

export default Portfolio;
