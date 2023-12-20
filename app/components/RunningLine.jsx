import React from 'react';
import Image from 'next/image';

const RunningLine = () => {
  // Define an array of image URLs
  const logoImages = [
    '/images/freeuni.svg',
    '/images/shedishi.svg',
    '/images/mtebi.svg',
    '/images/worldrun.svg',
    '/images/hh.svg',
    '/images/highlander.svg',
    '/images/national-geography.svg',
    '/images/world-record.svg',
    '/images/redbull.svg',
    '/images/zara.svg',
    '/images/f1.svg',
    '/images/husky.svg',
    '/images/izzipizzi.svg',
    '/images/althut.svg',
    '/images/mta.svg',
    '/images/snap.svg',
    '/images/white-powder.svg',
    
  ];

  const logoImages2 = [
    '/images/tabla.svg',
    '/images/usaid.svg',
    '/images/bakhmaro.svg',
    '/images/adrenalin.svg',
    '/images/hm.svg',
    '/images/case.svg',
    '/images/nutella.svg',
    '/images/white-rabbit.svg',
    '/images/gulf.svg',
    '/images/m-plus.svg',
    '/images/nabeghlavi.svg',
    '/images/rustavi2.svg',
    '/images/keburia.svg',
    '/images/botasi.svg',
    '/images/ICR.svg',
    '/images/peakgeorgia.svg',
    
  ]

  const duplicatedImages = [...logoImages, ...logoImages, ...logoImages];
  const duplicatedImages2 = [...logoImages2, ...logoImages2, ...logoImages2];

  return (
    <section className='md:mt-[100px] sm:mt-0'>
      <div className=" w-full  md:pt-10 sm:pt-10">
        <div className="animated-container">
          <div className="logo-container">
            {/* Render logos in a continuous loop */}
            {duplicatedImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Logo ${index + 1}`}
                width={95}
                height={95}
                className="logo md:w-[95px] md:h-[95px] sm:w-[60px] sm:h-[60px]"
              />
            ))}
            
          </div>
          <div className="logo-container reverse">
            {/* Render logos in a continuous loop */}
            {duplicatedImages2.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Logo ${index + 1}`}
                width={95}
                height={95}
                className="logo md:w-[95px] md:h-[95px] sm:w-[60px] sm:h-[60px]"
              />
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningLine;
