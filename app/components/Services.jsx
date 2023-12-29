"use client"

import { useState } from 'react'
import WhatWeDoSection from './WhatWeDoSection';


const Services = ({  openPopup, blocks }) => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const [hoverStates, setHoverStates] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        
      });
  
      const handleHoverChange = (index, isHovered) => {
        setHoverStates((prevStates) => ({
          ...prevStates,
          [index]: isHovered,
        }));
      };

    const handleImageClick = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };

return (
    <div className='w-full mx-auto mt-[144px]'>
<WhatWeDoSection 
   hoverStates={hoverStates}
    handleHoverChange={handleHoverChange}
    openPopup={openPopup}
    blocks={blocks}
   />
    </div>
   
  )
}

export default Services