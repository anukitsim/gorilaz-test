"use client"

import Popup from "./Popup";
import { useState, useEffect } from "react";
import ImageWrapper from "./ImageWrapper";

const WhatWeDoSection = ({ hoverStates, handleHoverChange }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSectionTitle, setPopupSectionTitle] = useState("");
  const [popupData, setPopupData] = useState([]);
  const [sectionData, setSectionData] = useState([]);

  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/section?acf_format=standard&_fields=id,title,acf`
        );
        const data = await response.json();
        setSectionData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openPopup = (label, images, text) => {
    setIsPopupOpen(true);
    setPopupSectionTitle(label);

    setPopupData({
      label: [label],
      text: Array.isArray(text) ? text : [text],
      images: images,
    });
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupSectionTitle("");
    setPopupData([]);
  };

  return (
    <div className="mx-auto relative lg:w-9/12 md:w-9/12 sm:w-full lg:h-[536px] 2md:h-[536px] max-[1400px]:h-[1270px] sm:h-[1270px] justify-center flex gap-[30px] flex-col sm:mb-[24px] md:mb-0">
      <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-5 bg-repeat-y w-2 h-full"></div>
      <h1 className="text-white text-[40px] text-center md:mt-[-80px] sm:mt-0 uppercase">
        what we do
      </h1>

      <div className="flex lg:flex-row 2md:flex-row md:flex-col sm:flex-col gap-[5px] items-center justify-center mx-auto">
        {sectionData.map((data, index) => (
          <ImageWrapper
            key={index}
            videoSrc={data.acf.video}
            src={data.acf.main}
            alt={`image-${index}`}
            label={data.title.rendered}
            isHovered={hoverStates[index]}
            onMouseEnter={() => handleHoverChange(index, true)}
            onMouseLeave={() => handleHoverChange(index, false)}
            onClick={() => openPopup(data.title.rendered, [data.acf.image1, data.acf.image2, data.acf.image3], [data.acf.text1, data.acf.text2, data.acf.text3])}
          />
        ))}
      </div>
      {isPopupOpen && <Popup onClose={closePopup} sectionTitle={popupSectionTitle} popupData={popupData} />}
      <div className="bg-[url('/images/sideLayer.svg')] absolute left-5 bg-repeat-y w-2 h-full"></div>
    </div>
  );
};

export default WhatWeDoSection;
