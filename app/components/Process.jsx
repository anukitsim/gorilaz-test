"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import getImageUrl from "./ImageUtils";

const Process = () => {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const [productionData, setProductionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${apiUrl}/production-phase`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const data = await res.json();
       

        const formattedData = await Promise.all(
          data.map(async (phase) => {
            const imageId = phase.acf.image;
            const imageUrl = await getImageUrl(imageId, apiUrl);

            return {
              title: phase.title.rendered,
              imageUrl,
            };
          })
        );

        setProductionData(formattedData);
      } catch (error) {
        console.error("Error fetching production data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-start md:mt-[126px] 2sm:mt-[80px] sm:mt-[90px]  items-center flex-col md:h-[1361px] 2sm:h-[1340px] sm:h-[1100px] gap-5">
      <div className="flex justify-center relative flex-row lg:w-[72%] 2md:w-[72%] sm:w-11/12">
        {/* Decor lines */}
        <div className='absolute left-0 top-0 bottom-0 w-2 md:h-[1270px] 2sm:h-[1450px] sm:h-[1120px] bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
        <div className='absolute right-0 top-0 bottom-0 w-2 md:h-[1270px] 2sm:h-[1450px] sm:h-[1120px] bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
        {/* First block */}
        <div className="md:w-[75%] md:h-[299.27px] sm:w-[50%] sm:h-[320px] relative flex md:flex-row sm:flex-col md:mb-[70px] sm:mb-[0px] 2sm:mb-[120px] mt-[30px]">
          <div className="md:min-w-[338.05px] relative md:h-[299.27px] flex flex-col sm:gap-3 md:justify-around sm:justify-center 2sm:min-w-[230.05px] 2sm:max-w-[230.05px] sm:min-w-[170.05px] sm:max-w-[170.05px]">
            <p className="uppercase whitespace-nowrap  text-white md:text-[20px] md:pl-[40px] 2sm:pr-[10px] sm:pr-[20px]  2sm:text-[17px]  sm:text-[13px] tracking-[3px] text-center">
              pre production
            </p>
            <div className="">
              <Image
                src="/images/process-foto-decor.svg"
                alt="decor-foto"
                width={338.05}
                height={244.27}
                className="absolute sm:left-[-13.95px] 2sm:left-[-14.5px] md:left-[19.5px] md:top-[53.8px] sm:top-[3.5px] 2sm:top-[31px] z-10 md:w-[338.5px]
                                   md:h-[244.27px] sm:w-[230.5px] sm:h-[200.27px]"
                                   loading="lazy"
              />
            </div>
            <div
              className="md:w-[241.05px] md:h-[244.27px] sm:w-[122.05px] sm:h-[120.27px] 2sm:w-[162.05px] 2sm:h-[164.27px] relative md:self-center 
                    sm:left-[10px] 2sm:left-[19px] rounded-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${
                  productionData.length > 2 ? productionData[2].imageUrl : ""
                })`,
              }}
            />
          </div>
          <div className="flex flex-col h-[195px] md:gap-[20px] 2sm:gap-[5px] sm:gap-[5px] md:mt-[50px] sm:mt-[20px] 2sm:mt-[20px] sm:ml-[27px] 2sm:ml-[30px] md:ml-[70px] lg:ml-[130px]">
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Video objectives Distribution Channels{" "}
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Type of Video Concept development / Scripting
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              {" "}
              Talent and Crew Acquisition{" "}
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Scheduling{" "}
            </p>
            <p className="uppercase text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              {" "}
              Equipment Acquisition{" "}
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Location scouting
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Budgeting
            </p>
          </div>
        </div>
      </div>

      {/* 2 Block */}
      <div className="flex justify-center relative flex-row lg:w-[72%] 2md:w-[72%] sm:w-11/12">
      <div className="md:w-[75%] md:h-[299.27px] sm:w-[50%] sm:h-[320px] relative flex md:flex-row sm:flex-col md:mb-[70px] sm:mb-[0px] 2sm:mb-[120px] mt-[30px]">
          <div className="md:min-w-[338.05px] relative md:h-[299.27px] flex flex-col sm:gap-3 md:justify-around sm:justify-center 2sm:min-w-[230.05px] 2sm:max-w-[230.05px] sm:min-w-[170.05px] sm:max-w-[170.05px]">
            <p className="uppercase  text-white md:text-[20px] md:pl-[40px] 2sm:pr-[10px] sm:pr-[20px] 2sm:text-[17px] sm:text-[13px] tracking-[3px] text-center whitespace-nowrap">
              production
            </p>
            <div className="">
              <Image
                src="/images/process-foto-decor.svg"
                alt="decor-foto"
                width={338.05}
                height={244.27}
                className="absolute sm:left-[-13.95px] 2sm:left-[-14.5px] md:left-[19.5px] md:top-[51.8px] sm:top-[3.5px] 2sm:top-[31px] z-10 md:w-[338.5px]
                                   md:h-[244.27px] sm:w-[230.5px] sm:h-[200.27px]"
                                   loading="lazy"
              />
            </div>
            <div
              className="md:w-[241.05px] md:h-[244.27px] sm:w-[122.05px] sm:h-[120.27px] 2sm:w-[162.05px] 2sm:h-[164.27px] relative md:self-center 
                    sm:left-[10px] 2sm:left-[19px] rounded-full  bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${
                  productionData.length > 1 ? productionData[1].imageUrl : ""
                })`,
              }}
            />
          </div>
          <div className="flex flex-col h-[195px] md:gap-[20px] 2sm:gap-[5px] sm:gap-[5px] md:mt-[50px] sm:mt-[20px] 2sm:mt-[20px] sm:ml-[27px] 2sm:ml-[30px] md:ml-[70px] lg:ml-[130px]">
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Crew Recruitment{" "}
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Transport and accommodation Management
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              {" "}
              Arts and Props
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              SFX and Stunts{" "}
            </p>
          </div>
        </div>
      </div>

      {/* 3 Block */}
      <div className="flex justify-center relative flex-row lg:w-[72%] 2md:w-[72%] sm:w-11/12">
      <div className="md:w-[75%] md:h-[299.27px] sm:w-[50%] sm:h-[320px] relative flex md:flex-row sm:flex-col md:mb-[70px] sm:mb-[0px] 2sm:mb-[120px] mt-[30px]">
          <div className="md:min-w-[338.05px] relative md:h-[299.27px] flex flex-col sm:gap-3 md:justify-around sm:justify-center 2sm:min-w-[230.05px] 2sm:max-w-[230.05px] sm:min-w-[170.05px] sm:max-w-[170.05px]">
            <p className="uppercase whitespace-nowrap  text-white md:text-[20px] md:pl-[40px] 2sm:pr-[10px] sm:pr-[20px] 2sm:text-[17px] sm:text-[13px] tracking-[3px] text-center">
              post production
            </p>
            <div className="">
              <Image
                src="/images/process-foto-decor.svg"
                alt="decor-foto"
                width={338.05}
                height={244.27}
                className="absolute sm:left-[-13.95px] 2sm:left-[-14.5px] md:left-[19.5px] md:top-[51.8px] sm:top-[3.5px] 2sm:top-[31px] z-10 md:w-[338.5px]
                                   md:h-[244.27px] sm:w-[230.5px] sm:h-[200.27px]"
                                   loading="lazy"
              />
            </div>
            <div
              className="md:w-[241.05px] md:h-[244.27px] sm:w-[122.05px] sm:h-[120.27px] 2sm:w-[162.05px] 2sm:h-[164.27px] relative md:self-center 
                        sm:left-[10px] 2sm:left-[19px] rounded-full  bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${
                  productionData.length > 0 ? productionData[0].imageUrl : ""
                })`,
              }}
            />
          </div>
          <div className="flex flex-col h-[195px] md:gap-[20px] 2sm:gap-[5px] sm:gap-[5px] md:mt-[50px] sm:mt-[20px] 2sm:mt-[20px] sm:ml-[27px] 2sm:ml-[30px] md:ml-[70px] lg:ml-[130px]">
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Receipt of Raw Footage
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Storage and Organization of Raw Footage
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Build the Rough CutReceive Notes and Refine{" "}
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              The Rough Cut Into a Final "Locked"{" "}
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Cut Visual Effects (VFX) / Color management
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Sound Effects / Mixing
            </p>
            <p className="uppercase  text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]">
              Final delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

// noesi