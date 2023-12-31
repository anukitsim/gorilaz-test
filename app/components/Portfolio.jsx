"use client";

import Scroll from "./Scroll";

import React, { useState, useEffect } from "react";
import StickyComponent from "@app/components/StickyComponent";
import ScrollToTop from "@app/components/ScrollToTop";

const Portfolio = () => {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL


  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/portfolio?acf_format=standard&_fields=id,title,acf`
        );
        const data = await response.json();
        setSectionData(data);
      } catch (error) {
        console.error("Error fetching data from WordPress:", error);
      }
    };
    

    fetchData();
  }, []);

  const generateOptions = (sectionData) => {
    return sectionData.map((data, index) => (
      <option key={index} value={data.title.rendered}>
        {data.title.rendered}
      </option>
    ));
  };
  
  return (
    <>
      <section className="md:w-[72%] sm:w-full flex  mx-auto mt-[134px] lg:h-[580px] sm:h-[580px]">
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-[120%] z-50"></div>

        <div className="flex flex-col items-center w-full">
          <h1 className="text-white md:text-[40px] sm:text-[10px]  uppercase">
            portfolio
          </h1>
          <span className="text-white md:text-[20px] sm:text-[7px] pb-[100px] uppercase">
            gorillas’industries
          </span>
          <div className="w-8/12 relative h-[380px]">
            <Scroll />

            <p className="text-white text-[15px] uppercase  -bottom-7 left-10 absolute">
              drag for more
            </p>
          </div>
        </div>

        {/* Scroll SVG */}

        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-[120%]"></div>
      </section>

     
       
          <div className="2sm:h-[80px] w-full bg-[#73E338] sm:h-[32px] flex justify-center  2sm:mt-[0px] md:mt-[250px] sm:mt-[150px] items-center">
            <p className="text-black text-xl font-bold uppercase sm:text-[10px] 2sm:text-xl">
              get in touch
            </p>
          </div>
          <section className="2sm:h-[574px] sm:mr-5 sm:mb-5 md:mb-0 sm:ml-5 md:mr-0 md:ml-0 sm:h-[320px] justify-center flex flex-col">
            <h2 className="uppercase text-white pb-[10px] text-center 2sm:text-[15px] sm:text-[8px] sm:mt-[90px] ">
              WE WILL GET YOU BACK
            </h2>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
              className="flex  items-center pt-[10px] gap-1 flex-col"
            >
              <input
                type="hidden"
                name="access_key"
                value="cec0113c-df12-4ce4-ba12-6e32cd6edab3"
              ></input>
              <input
                type="hidden"
                name="subject"
                value="New Submission from your Website"
              />
              <input type="checkbox" name="botcheck" id="" className="hidden" />

              <div className="flex  md:flex-row sm:flex-col 2sm:w-6/12 sm:w-full gap-1 ">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="FULL NAME*"
                  className="2sm:w-full sm:w-full 2sm:h-[50px] sm:h-[30px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="EMAIL*"
                  className="2sm:w-full sm:w-full 2sm:h-[50px] sm:h-[30px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
                />
              </div>

              <select
                required
                type="subject"
                name="text"
                className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[30px] 2sm:p-4 sm:p-1 text-[#A9A9A9] sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
              >
                  <option className="font-VcrMono text-gray" disabled hidden selected>
                SUBJECT*
              </option>
              {generateOptions(sectionData)}
            </select>

              <textarea
                name="message"
                id="message"
                placeholder="MESSAGE*"
                className="2sm:w-2/4 sm:w-full 2sm:h-[185px] sm:h-[70px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
              />
              <button
                type="submit"
                className="submit-text font-bold 2sm:w-2/4 sm:w-full text-center 2sm:h-[45px] sm:h-[27px] text-black md:text-[18px] sm:text-[10px] sm:mb-[85px] sm:font-bold rounded-[3px] 2sm:rounded-md sm:bg-[#73E338]"
              >
                SUBMIT NOW
              </button>
              <p class="text-base text-center text-gray-500" id="result"></p>
            </form>
          </section>
     
      

      <div className="md:block sm:hidden">
        <StickyComponent />
      </div>
      <ScrollToTop />
    </>
  );
};

export default Portfolio;
