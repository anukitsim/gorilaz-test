"use client"


import Popup from "./Popup";
import { useState, useEffect } from "react";
import ImageWrapper from "./ImageWrapper";

const WhatWeDoSection = ({ hoverStates, handleHoverChange }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSectionTitle, setPopupSectionTitle] = useState("");
  const [popupData, setPopupData] = useState([]);
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    // Fetch data from WordPress API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://gorillaz.local/wp-json/wp/v2/section?acf_format=standard&_fields=id,title,acf"
        );
        const data = await response.json();
        setSectionData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Run the effect only once on component mount

  const openPopup = (label, images, text) => {
    setIsPopupOpen(true);
    setPopupSectionTitle(label);
   
    setPopupData({
      label: [label],
      text: Array.isArray(text) ? text : [text],
      images: images, 
    });
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupSectionTitle("");
    setPopupData([]);
  };


  return (
    <div className=" mx-auto relative md:w-9/12 sm:w-full md:h-[536px] sm:h-[1270px] justify-center flex gap-[30px] flex-col sm:mb-[24px] md:mb-0">
      <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-5 bg-repeat-y w-2 h-full"></div>
      <h1 className="text-white text-[40px] text-center md:mt-[-80px] sm:mt-0  uppercase">
        what we do
      </h1>

      <div className="flex md:flex-row sm:flex-col gap-[5px]  items-center justify-center  mx-auto">
        {sectionData.map((data, index) => (
          <ImageWrapper
            key={index}
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
      {isPopupOpen && (
        <Popup onClose={closePopup} sectionTitle={popupSectionTitle} popupData={popupData} />
      )}
      <div className="bg-[url('/images/sideLayer.svg')] absolute left-5  bg-repeat-y w-2 h-full"></div>
    </div>
  );
};

export default WhatWeDoSection;
