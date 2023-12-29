"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ScrollPopup  from "./ScrollPopup";


const Scroll = () => {
  const [hoveredItems, setHoveredItems] = useState(Array(12).fill(false));
  const [sectionData, setSectionData] = useState([]);
  const [popupData, setPopupData] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const containerRef = useRef(null);

  const openPopup = async (sectionTitle, isCurrentSection = true) => {
    try {
      let data;
  
      if (isCurrentSection) {
        const response = await fetch(
          'https://gorillasproduction.pro/wp-json/wp/v2/portfolio?acf_format=standard&_fields=id,title,acf'
        );
        data = await response.json();
      } else {
        // Fetch data from the new endpoint for the custom sections
        // Replace 'YOUR_NEW_ENDPOINT' with the actual endpoint
        const response = await fetch('YOUR_NEW_ENDPOINT');
        data = await response.json();
      }
  
      const clickedData = data.find(
        (item) => item.title.rendered === sectionTitle
      );
  
      console.log('Clicked Data:', clickedData);
  
      const galleryImages = Object.keys(clickedData.acf || {})
        .filter((key) => key.startsWith('gallery-image') && clickedData.acf[key])
        .map((key) => clickedData.acf[key]);

        const text = clickedData.acf?.text || '';
  
      setPopupData({
        title: clickedData.title.rendered,
        images: galleryImages,
        text: text, 
      });
      console.log('Clicked Data:', clickedData);
      setIsPopupOpen(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  const closePopup = () => {
    // Close the popup by updating the state
    setIsPopupOpen(false);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gorillasproduction.pro/wp-json/wp/v2/portfolio?acf_format=standard&_fields=id,title,acf');
        const data = await response.json();
        setSectionData(data);
      } catch (error) {
        console.error("Error fetching data from WordPress:", error);
      }
    };

    fetchData();

    const handleScroll = () => {
      const container = containerRef.current;
      // Handle scroll logic here
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []); 


  return (
    <>
      <div className="scroll-container md:h-[500px]  overflow-x-scroll overflow-y-hidden" ref={containerRef}>
        <div className="flex md:h-[390px] sm:h-[200px] sm:mt-[11px] md:mt-[26px] relative">
          {sectionData.map((data, index) => (
            <div
              key={index}
              className="scroll-item w-[181px] mr-[2px] h-[338.906px]"
              onClick={() => openPopup(data.title.rendered)}
            >
              <div
                className="md:w-[181px] sm:w-[130px] md:h-[338.906px] sm:h-[155px] rounded-[10px] outline outline-offset-[-8px] outline-white relative bg-cover bg-center"
                style={{
                  backgroundImage: `url('${data.acf.background}')`,
                }}
                onMouseEnter={() =>
                  setHoveredItems((prev) =>
                    prev.map((_, i) => (i === index ? true : _))
                  )
                }
                onMouseLeave={() =>
                  setHoveredItems((prev) =>
                    prev.map((_, i) => (i === index ? false : _))
                  )
                }
              >
                <p className="text-white md:text-[15px] sm:text-[10px] uppercase p-5">
                  {data.title.rendered}
                </p>
                
                <div className="flex flex-row gap-3">
                  <span className="text-white md:text-[10px] sm:text-[8px] uppercase absolute bottom-4 left-5 cursor-pointer">
                    View Gallery
                  </span>
                  <Image
                    src={
                      hoveredItems[index]
                        ? "/images/gallery-errow-green.svg"
                        : "/images/galerry-errow.svg"
                    }
                    alt="arrow"
                    width={11}
                    height={11}
                    className="absolute md:bottom-[18px] sm:bottom-[17px] md:left-24 sm:left-20"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && <ScrollPopup onClose={closePopup} sectionTitle={popupData.title.rendered} popupData={popupData}  />}
     
    </>
  );
};

export default Scroll;
