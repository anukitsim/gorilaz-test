// WhatWeDoSection.jsx
import Popup from "./Popup";
import { useState, useEffect, useRef } from "react";
import ImageWrapper from "./ImageWrapper";




const WhatWeDoSection = ({ hoverStates, handleHoverChange }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSectionTitle, setPopupSectionTitle] = useState("");
  const [activeSection, setActiveSection] = useState(null); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value of isMobile after component mounts
    setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
  }, []);

  console.log("Is Mobile:", isMobile);

  const whatWeDoSectionRef = useRef(null);

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        // Check if the ref is not null before accessing getBoundingClientRect
        if (whatWeDoSectionRef.current) {
          const sectionRect = whatWeDoSectionRef.current.getBoundingClientRect();
          const scrollPosition = window.scrollY || window.pageYOffset;

          // Calculate the center of the section
          const sectionCenter = sectionRect.top + sectionRect.height / 2;

          // Adjust these values based on your layout and requirements
          const threshold = sectionRect.height * 0.3;

          // Check if the center of the section is within the threshold
          if (Math.abs(sectionCenter - scrollPosition) < threshold) {
            // Set the active section based on the index
            const index = Math.floor((sectionCenter - scrollPosition) / threshold) + 1;
            setActiveSection(index);
          } else {
            setActiveSection(null);
          }
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

      <div className="flex md:flex-row sm:flex-col gap-[5px]  items-center justify-center  mx-auto">
        {[1, 2, 3, 4].map((index) => (
           
          <ImageWrapper
            key={index}
            src={`/images/portfolio${index}.svg`}
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