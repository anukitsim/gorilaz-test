"use client"

import Image from "next/image";
import { useState } from "react";

const ScrollableContent = ({ blocks, setHoveredItems, hoveredItems }) => {
  return (
    <div className="flex flex-row w-full">
      {blocks.map((block, index) => (
        <div key={index} className={`scroll-item w-${block.width} h-${block.height}`}>
          <div
            className={`w-${block.width} h-${block.height} rounded-[10px] outline outline-offset-[-8px] outline-white relative bg-cover bg-center`}
            style={{
              backgroundImage: `url('/images/${block.name}.svg')`,
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
            <p className="text-white text-[15px] uppercase p-5">{block.name}</p>
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
  );
};

const Popup = ({ onClose, sectionTitle }) => {
  const blocks = [
    { name: "tourism", width: "181px", height: "338.906px" },
    { name: "sports", width: "250px", height: "400px" },
    // Add more blocks with different sizes
  ];

  const [hoveredItems, setHoveredItems] = useState(Array(blocks.length).fill(false));

  return (
    <div className="popup-overlay fixed top-0 left-0 flex flex-col items-center justify-center bg-transparent w-full">
      <div className="w-9/12 bg-opacity-2 backdrop-filter backdrop-blur-[47px] shadow-md h-[970px] relative ">
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full z-50"></div>
        <p className="text-[#FFF] text-4xl tracking-wide uppercase absolute top-32 left-11">{sectionTitle}</p>
        <Image
          src="/images/cross.svg"
          alt="close"
          width={27}
          height={27}
          onClick={onClose}
          className="cursor-pointer absolute top-20 right-11"
        />

        <ScrollableContent blocks={blocks} setHoveredItems={setHoveredItems} hoveredItems={hoveredItems} />

        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
      </div>
    </div>
  );
};

export default Popup;
