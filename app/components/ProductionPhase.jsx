"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import getImageUrl from "./ImageUtils"; 

const ProductionPhase = () => {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const [productionData, setProductionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apiUrl}/production-phase`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Fetched production data:", data);

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
    <div className="flex md:flex-row  items-center justify-center sm:flex-col 
       md:gap-[80px] sm:gap-[25px]">
      {productionData.map((phase, index) => (
        <div key={index} className="flex flex-col items-center md:gap-[40px] sm:gap-[15px]">
          <p className="uppercase text-white text-[20px] sm:pt-[18px] md:pt-0">{phase.title}</p>
          {phase.imageUrl && (
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={phase.imageUrl}
                  alt={phase.title}
                  width={174}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <div className="relative z-50">
                <Image
                  src={`/images/process-foto-decor.svg`}
                  alt={phase.title}
                  width={250}
                  height={214}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductionPhase;
