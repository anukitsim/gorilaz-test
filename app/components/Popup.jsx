"use client"

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const PopupGallery = ({ sectionData }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const gallery = galleryRef.current;
      const scrollPosition = gallery.scrollLeft;
      const totalWidth = gallery.scrollWidth - gallery.clientWidth;
      const percentageScrolled = (scrollPosition / totalWidth) * 100;

      

      // Calculate the number of divs to show based on scroll position
      const numDivsToShow = Math.min(
        Math.ceil((percentageScrolled + 10) / 10),
        10
      );

      // Set the visibility of each div based on the calculated number
      for (let i = 1; i <= 10; i++) {
        const div = gallery.querySelector(`.gallery-item:nth-child(${i})`);
      }
    };

    const gallery = galleryRef.current;
    if (gallery) {
      gallery.addEventListener("scroll", handleScroll);

      // Remove the event listener when the component is unmounted
      return () => {
        gallery.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const divDimensions = Array.from(
    { length: sectionData.images ? sectionData.images.length : 0 },
    (_, index) => ({
      width: 300 + Math.random() * 100,
      height: 400 + Math.random() * 80,
    })
  );

    
  const handleHover = (event, index) => {
    const div = event.currentTarget;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      div.style.width = "100%";
      div.style.height = "auto";
    } else {
      div.style.width = "480px";
      div.style.height = "480px";
    }
  };

  const handleLeave = (event, index) => {
    const div = event.currentTarget;
    div.style.width = `${divDimensions[index].width}px`;
    div.style.height = `${divDimensions[index].height}px`;
  };

  return (
    <div
    ref={galleryRef}
    className="flex overflow-x-scroll popup-scroll md:w-11/12 sm:w-full overflow-y-hidden gap-0.5 mt-[200px] sm:pl-5 sm:pr-5 md:pl-0 md:pr-0 md:ml-10 h-full"
    style={{ scrollSnapType: "x mandatory" }}
  >
    <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 -top-[200px] bg-repeat-y w-2 h-[165%] z-50"></div>
     {/* Check if sectionData is available before mapping over it */}
     {sectionData && sectionData.images && sectionData.images.map((image, index) => {
        let text;

        // Check if the data corresponds to the "What We Do" section
        if (sectionData.label) {
          text = sectionData.text[index];
        }

        // Check if the data corresponds to the "Scroll" component
        if (sectionData.title && sectionData.acf && sectionData.acf.background) {
          text = sectionData.text[index];
        }

        // Render div only if the text is defined and not empty
        if (text && text.trim() !== "") {
          return (
            <div
              key={index}
              className="gallery-item text-white flex-shrink-0 sm:w-[150px] bg-[#181818] outline outline-white outline-offset-[-10px] rounded-lg transition-all duration-300"
              style={{
                width: `${divDimensions[index].width}px`,
                height: `${divDimensions[index].height}px`,
                backgroundImage: `url("${image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={(event) => handleHover(event, index)}
              onMouseLeave={(event) => handleLeave(event, index)}
            >
              <p className="p-[20px] text-[20px] tracking-wide uppercase">{text}</p>
            </div>
          );
        }

        return null;
      })}





    <p className="text-white z-50 absolute bottom-36 uppercase text-[10px]">
      drag for more
    </p>
  </div>
  );
};


const Popup = ({ onClose, sectionTitle, popupData }) => {
  useEffect(() => {
    // Add a class to the body to disable vertical scrolling
    document.body.classList.add("overflow-y-hidden");

    // Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const formData = new FormData(form);
    const selectedSubject = document.querySelector('select[name="text"]').value;
    console.log('Selected Subject:', selectedSubject);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait...";

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const jsonResponse = await response.json();

      if (response.status === 200) {
        // Show success message
        result.innerHTML = jsonResponse.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        // Show error message
        console.log(response);
        result.innerHTML = jsonResponse.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
      
      // Show the result element
      result.style.display = "block";

      
      // Hide the result element after 3 seconds
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
      
    } catch (error) {
      console.log(error);
      result.innerHTML = "Something went wrong!";
      // Show alert instead of refreshing the page
      window.alert('An error occurred. Please try again later.');
    } finally {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    }
  };

  const popupTexts = popupData.text || [];

  return (
    <div className="popup-overlay fixed top-0 left-0 flex flex-col items-center justify-center w-full bg-transparent overflow-hidden">
      <div className="md:w-9/12 sm:w-full bg-opacity-2 backdrop-filter backdrop-blur-[47px] shadow-md relative  max-h-full overflow-y-auto">
   
        <div className="relative">
          <p className="text-[#FFF] text-4xl tracking-wide uppercase absolute -top-28 left-11">
            {sectionTitle}
          </p>
          <PopupGallery sectionData={popupData} />

          <Image
            src="/images/cross.svg"
            alt="close"
            width={27}
            height={27}
            onClick={onClose}
            className="cursor-pointer absolute md:-top-32 md:right-11 sm:-top-44 sm:right-11"
          />
        </div>
        <div className=" absolute  right-0 bg-repeat-y w-2 h-[110%]"></div>
        <div className="w-full  z-100 mt-[247px] ">
        <div className="2sm:h-[80px] w-full bg-[#73E338] sm:h-[32px] flex justify-center md:mt-[237px]  sm:mt-[100px] items-center">
          <p className="text-black text-xl font-bold uppercase sm:text-[10px] 2sm:text-xl">get in touch</p>
        </div>
        <section className="justify-center flex flex-col sm:pl-5 sm:pr-5 md:pl-0 md:pr-0">
        
       
       <h2 className="uppercase text-white  text-center 2sm:text-[15px] sm:text-[8px] sm:mt-[60px] ">WE WILL GET YOU BACK</h2>
       <form
          action="https://api.web3forms.com/submit" 
          method="POST"
          id="form"
          className="flex  items-center 2sm:pt-[10px] sm:pt-[10px] gap-1 flex-col"
          onSubmit={handleSubmit} 
        >
          <input type="hidden" name="access_key" value="cec0113c-df12-4ce4-ba12-6e32cd6edab3"></input>
          <input type="hidden" name="subject" value="New Submission from your Website" />
          <input type="checkbox" name="botcheck" id="" className="hidden" />


          <div className="flex  flex-row 2sm:w-6/12 sm:w-full gap-1">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="FULL NAME*"
              className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[25px] 2sm:p-5 sm:p-1 text-[#A9A9A9]  sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="EMAIL*"
              className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[25px] 2sm:p-5 sm:p-1 text-[#A9A9A9]  sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
          </div>
          
          <select required type="subject"  name="text" className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[25px] 2sm:p-4 sm:p-1 text-[#A9A9A9] 
                            sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]">
            <option className="font-VcrMono text-gray selected disabled hidden" selected>SUBJECT*</option>
           {popupTexts.map((text, index) => (
            <option key={index} value={text}>
              {text}
            </option>
          ))}
          </select>

          <textarea
            name="message"
            id="message"
            placeholder="MESSAGE*"
            className="2sm:w-2/4 sm:w-full 2sm:h-[185px] sm:h-[70px] 2sm:p-5 sm:p-1 text-[#A9A9A9] sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
          />
          <button
            type="submit"
            className="2sm:w-2/4 sm:w-full 2sm:h-[45px] sm:h-[18px] text-black md:text-[15px] sm:mb-[85px] sm:text-[10px] rounded-[3px] 2sm:rounded-md sm:bg-[#73E338]"
          >
            SUBMIT NOW
          </button>
          <p className="text-base text-center text-gray-500 absolute bottom-5" id="result"></p>
        </form>
      </section>
        </div>
        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute -top-[200px] z-0 right-0 bg-repeat-y w-2 h-[165%]"></div>
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 top-0  bg-repeat-y w-2 h-[165%] z-0"></div>
     
      </div>
    </div>
  );
};

export default Popup;