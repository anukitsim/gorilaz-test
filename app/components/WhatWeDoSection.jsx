// WhatWeDoSection.jsx
import Popup from "./Popup";
import { useState } from "react";
import ImageWrapper from "./ImageWrapper";

const WhatWeDoSection = ({ hoverStates, handleHoverChange }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSectionTitle, setPopupSectionTitle] = useState("");

  const openPopup = (label) => {
    setPopupSectionTitle(label);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupSectionTitle(""); // Reset the popupSectionTitle when the popup is closed
  };

  return (
    <div className=" mx-auto relative md:w-9/12 sm:w-full md:h-[536px] sm:h-[1270px] flex gap-5 flex-col justify-center">
      <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
      <h1 className="text-white text-[40px] text-center mt-[80px] uppercase">
        what we do
      </h1>

      <div className="flex md:flex-row sm:flex-col items-center justify-center w-10/12 mx-auto">
        {[1, 2, 3, 4].map((index) => (
          <ImageWrapper
            key={index}
            src={`/images/portfolio${index === 1 || index === 3 ? 1 : 2}.svg`}
            alt={`image-${index}`}
            label={index === 1 ? "Photography" : index === 2 ? 'videography'  : index === 3 ? 'location scouting ' : index === 4 ? 'social media' : ''} 
            isHovered={hoverStates[index]}
            onMouseEnter={() => handleHoverChange(index, true)}
            onMouseLeave={() => handleHoverChange(index, false)}
            onClick={() => {
              const label = index === 1 ? "Photography" : index === 2 ? 'Videography' : index === 3 ? 'Location Scouting' : index === 4 ? 'Social Media' : '';
              openPopup(label);
            }}
          />
        ))}
      </div>
      {isPopupOpen && (
        <Popup onClose={closePopup} sectionTitle={popupSectionTitle} />
      )}
         <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
    </div>
  );
};

export default WhatWeDoSection;