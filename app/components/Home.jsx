"use client"

import { useState } from "react";
import Image from "next/image";
import RunningLine from "./RunningLine";

const Home = () => {

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);


  return (
    <>
    <section className="border-t mt-[130px] border-t-white  overflow-hidden">
      <div className=" mx-auto w-9/12 h-[1317px] relative  flex flex-row">
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
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
          <p className="text-white pt-[95px] text-[20px] text-center">
            gorillas’industries
          </p>

          <div className="flex flex-row justify-center gap-3 p-10">
            <div className="bg-[#181818] border  border-white w-[181px] h-[339px] rounded-md">
              <p className="text-white text-[15px] uppercase p-5">tourism</p>
            </div>
            <div className="bg-[#181818] border border-white w-[181px] h-[339px] rounded-md">
              <p className="text-white text-[15px] uppercase p-5">sports</p>
            </div>
            <div className="bg-[#181818] border border-white w-[181px] h-[339px] rounded-md">
              <p className="text-white text-[15px] uppercase p-5">fashion</p>
            </div>
          </div>
          <p className="text-white pl-10 mt-[120px] uppercase">
            Our forte lies in crafting gripping documentary films that capture
            the essence of every story we tell, especially within the realms of
            action and adventure.
          </p>
          <p className="text-white pl-10 pt-5 uppercase">With an eye for the extraordinary, Gorillas’ Production specializes in dynamic drone shots that elevate visual storytelling to new heights.
</p>
        </div>
        <div className="flex flex-col gap-[28px] justify-start mt-20 items-center w-1/2">
          <Image src="/images/logo.svg" alt="logo" width={180} height={180} />
          <p className="text-white text-[25px] font-ASSUAN">
            Gorilla’s pRODUCTION
          </p>
          <Image
            src="/images/home.svg"
            alt="homepage"
            width={370}
            height={433}
            className="z-10 mt-[93px]"
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
        <h1 className="text-white text-[40px] text-center mt-[80px] uppercase">what we do</h1>
        <div className="flex flex-row pl-10 pr-10">
            <div className="flex flex-col gap-2">
            <div className="image-wrapper  border border-white">
            <Image src="/images/portfolio1.svg" alt="image" width={266} height={204} />
            
          </div>
          <p className="text-white tracking-wider uppercase">Photography</p>
           <div
          className="flex flex-row gap-3"
          // Use onMouseEnter and onMouseLeave to handle hover events
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <span className="text-white text-[10px]  cursor-pointer">view gallery</span>
          {/* Use conditional rendering to switch between arrow images based on hover state */}
          <Image
            src={isHovered1 ? '/images/gallery-errow-green.svg' : '/images/galerry-errow.svg'}
            alt="arrow"
            width={11}
            height={11}
          />
        </div>
          
            </div>
        
          
            <div className="flex flex-col gap-2">
            <div className="image-wrapper  border border-white">
            <Image src="/images/portfolio2.svg" alt="image" width={266} height={204} />
            
          </div>
          <p className="text-white tracking-wider uppercase">videography</p>
          <div
          className="flex flex-row gap-3"
          // Use onMouseEnter and onMouseLeave to handle hover events
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <span className="text-white text-[10px] cursor-pointer">view gallery</span>
          {/* Use conditional rendering to switch between arrow images based on hover state */}
          <Image
            src={isHovered2 ? '/images/gallery-errow-green.svg' : '/images/galerry-errow.svg'}
            alt="arrow"
            width={11}
            height={11}
          />
        </div>
            </div>
            <div className="flex flex-col gap-2">
            <div className="image-wrapper  border border-white">
            <Image src="/images/portfolio1.svg" alt="image" width={266} height={204} />
            
          </div>
          <p className="text-white tracking-wider uppercase  cursor-pointer">location scouting </p>
          <div
          className="flex flex-row gap-3"
          // Use onMouseEnter and onMouseLeave to handle hover events
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <span className="text-white text-[10px]  cursor-pointer">view gallery</span>
          {/* Use conditional rendering to switch between arrow images based on hover state */}
          <Image
            src={isHovered3 ? '/images/gallery-errow-green.svg' : '/images/galerry-errow.svg'}
            alt="arrow"
            width={11}
            height={11}
          />
        </div>
            </div>
            
            <div className="flex flex-col gap-2">
            <div className="image-wrapper  border border-white">
            <Image src="/images/portfolio2.svg" alt="image" width={266} height={204} />
            
          </div>
          <p className="text-white tracking-wider uppercase">social media</p>
          <div
          className="flex flex-row gap-3"
          // Use onMouseEnter and onMouseLeave to handle hover events
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          <span className="text-white text-[10px]  cursor-pointer">view gallery</span>
          {/* Use conditional rendering to switch between arrow images based on hover state */}
          <Image
            src={isHovered4 ? '/images/gallery-errow-green.svg' : '/images/galerry-errow.svg'}
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
        <div className=" mx-auto relative  w-9/12 h-[1210px] flex flex-col  items-center">
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
        <Image
            src='/images/home-production.svg'
            alt="production"
            width={1000}
            height={520}
            className='w-[87%] mt-[155px]'
            
          />
          <div className="flex flex-row mt-[180px] justify-center gap-[80px]">
          <Image
            src='/images/oval.svg'
            alt="production"
            width={250}
            height={214}
            
            
          />
           <Image
            src='/images/oval.svg'
            alt="production"
            width={250}
            height={214}
            
          />
           <Image
            src='/images/oval.svg'
            alt="production"
            width={250}
            height={214}
           
          />
          </div>
        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
        </div>
        <RunningLine/>
    
    </>
    
  );
};

export default Home;
