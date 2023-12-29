"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

const ProductionPhase = () => {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const [productionData, setProductionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gorillasproduction.pro/wp-json/wp/v2/production-phase?acf_format=standard&_fields=id,title,acf"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched production data:", data);

        const formattedData = await Promise.all(
          data.map(async (phase) => {
            const imageId = phase.acf.image;
            const imageResponse = await fetch(
              `https://gorillasproduction.pro/wp-json/wp/v2/media/${imageId}`
            );

            if (!imageResponse.ok) {
              throw new Error(
                `Failed to fetch image data: ${imageResponse.statusText}`
              );
            }

            const imageData = await imageResponse.json();
            const imageUrl = imageData.source_url;

            return {
              title: phase.title.rendered,
              imageUrl,
            };
          })
        );

        setProductionData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex md:flex-row items-center justify-center sm:flex-col md:gap-[80px] sm:gap-[25px]">
      {productionData.map((phase, index) => (
        <div
          key={index}
          className="flex flex-col items-center md:gap-[40px] sm:gap-[15px]"
        >
          <p className="uppercase text-white text-[20px] sm:pt-[18px] md:pt-0">
            {phase.title}
          </p>
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
                <img
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
