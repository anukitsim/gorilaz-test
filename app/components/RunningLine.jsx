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
    '/images/izzypizzy.svg',
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
    <section className='mt-[127px]'>
      <div className=" w-full  pt-10">
        <div className="animated-container">
          <div className="logo-container">
            {/* Render logos in a continuous loop */}
            {duplicatedImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Logo ${index + 1}`}
                width={133}
                height={133}
                className="logo"
              />
            ))}
            
          </div>
          <div className="logo-container">
            {/* Render logos in a continuous loop */}
            {duplicatedImages2.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Logo ${index + 1}`}
                width={133}
                height={133}
                className="logo"
              />
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningLine;
