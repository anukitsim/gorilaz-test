// ProductionPhase.jsx
import React from "react";
import Image from "next/image";

const ProductionPhase = ({ title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center md:gap-[40px] sm:gap-[15px]">
      <p className="uppercase text-white text-[20px] sm:pt-[18px] md:pt-0">{title}</p>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt="rounded"
            width={174}
            height={120}
            className="rounded-full"
          />
        </div>
        <div className="relative z-50">
          <Image
            src={`/images/process-foto-decor.svg`}
            alt={title}
            width={250}
            height={214}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductionPhase;
