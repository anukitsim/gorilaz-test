// WhatWeDoSection.jsx
import Popup from "./Popup";
import { useState, useEffect } from "react";
import ImageWrapper from "./ImageWrapper";

const WhatWeDoSection = ({ hoverStates, handleHoverChange }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSectionTitle, setPopupSectionTitle] = useState("");
  const [activeSection, setActiveSection] = useState(1); 
  const isMobile = window.innerWidth <= 768;
  

  const openPopup = (label) => {
    setPopupSectionTitle(label);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupSectionTitle(""); 
  };


  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        // Adjust these values based on your layout and requirements
        if (scrollPosition <= window.innerHeight / 2) {
          setActiveSection(1);
        } else if (scrollPosition <= window.innerHeight * 1.5) {
          setActiveSection(2);
        } else if (scrollPosition <= window.innerHeight * 2.5) {
          setActiveSection(3);
        } else if (scrollPosition <= window.innerHeight * 3.5) {
          setActiveSection(4);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile]);

  

  return (
    <div className=" mx-auto relative md:w-9/12 sm:w-full md:h-[536px] sm:h-[1270px] justify-center flex gap-[30px] flex-col sm:mb-[24px] md:mb-0">
      <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-5 bg-repeat-y w-2 h-full"></div>
      <h1 className="text-white text-[40px] text-center md:mt-[-80px] sm:mt-0  uppercase">
        what we do
      </h1>

      <div className="flex md:flex-row sm:flex-col gap-[24px]  items-center justify-center w-10/12 mx-auto">
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
            isArrowGreen={isMobile && activeSection === index}
          />
        ))}
      </div>
      {isPopupOpen && (
        <Popup onClose={closePopup} sectionTitle={popupSectionTitle} />
      )}
         <div className="bg-[url('/images/sideLayer.svg')] absolute left-5  bg-repeat-y w-2 h-full"></div>
    </div>
  );
};

export default WhatWeDoSection;