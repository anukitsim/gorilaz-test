"use client";

import Popup from "./Popup";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSectionTitle, setPopupSectionTitle] = useState("");
  const [popupData, setPopupData] = useState([]);
  const [sectionData, setSectionData] = useState([]);

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
    <div>
      <footer className="w-full  2sm:h-[409px] sm:h-[270px] relative flex justify-center items-center ">
        <div className="sm:h-[205px] 2sm:h-[280px] md:h-[200px] sm:w-[85%] md:w-[50%] 2sm:h-[203px] 2sm:w-[69%] sm:w-[313px] sm:h-[105px] relative flex  place-content-around 2sm:pt-[30px] sm:pt-[10px]">
          {/* <Image src="/images/footerFoto.svg" alt="(+-)-foto" width={4.01} height={59.2} className="right-0 z-50" /> */}
          <div className="md:w-[97%]  2sm:w-[98%] sm:w-[95%] md:h-[55%] sm:h-[66%] border-t-2 border-l-2 border-white  absolute -left-1 -top-1"></div>
          <div className="md:w-[97%]  2sm:w-[98%] sm:w-[95%] md:h-[55%] sm:h-[66%] border-b-2 border-r-2 border-white  absolute -right-1 -bottom-1"></div>
          <Image
            src="/images/header-regulator.svg"
            alt="regulator"
            width={5}
            height={146}
            className="absolute -left-1.5 2sm:top-[96px] sm:top-[160px] 2sm:top-[170px] md:top-[90px] 2sm:w-[5] 2sm:h-[146px] sm:w-[5] sm:h-[45px]"
          />
          <Image
            src="/images/header-regulator.svg"
            alt="regulator"
            width={5}
            height={146}
            className="absolute -right-1.5 2sm:bottom-[96px] sm:bottom-[160px] 2sm:bottom-[170px] md:bottom-[90px] 2sm:w-[5] 2sm:h-[146px] sm:w-[5] sm:h-[45px]"
          />
          {/* <div className="flex flex-row gap-20 "> */}

          {/* Block 1 */}
          <div className="flex flex-col 2sm:h-[134px] sm:h-[80px] sm:gap-1.5 2sm:gap-2.5 md:gap-[9px]">
            <h2 className="uppercase font-VcrMono 2sm:text-sm sm:text-[12px] tracking-[1.95px] text-[#73E338]">
              what we do
            </h2>
            <Link
              className="font-VcrMono 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[8px] text-white z-50"
              href="/process"
            >
              process
            </Link>
            <Link
              className=" 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase font-VcrMono 2sm:text-[10px] sm:text-[8px] text-white z-50"
              href="#"
              onClick={() => openPopup("Photography", ["image1.jpg", "image2.jpg", "image3.jpg"], ["text1", "text2", "text3"])}
            >
              photography
            </Link>
            <Link
              className="font-VcrMono  2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[8px] text-white z-50"
              href="#"
              onClick={() => openPopup("Videography", ["video1.mp4", "video2.mp4", "video3.mp4"], ["text1", "text2", "text3"])}
            >
              videography
            </Link>
            <Link
              className="font-VcrMono  2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[8px] text-white z-50"
              href="#"
              onClick={() => openPopup("Location Scouting", ["location1.jpg", "location2.jpg", "location3.jpg"], ["text1", "text2", "text3"])}
            >
              location scouting
            </Link>
            <Link
              className="font-VcrMono  2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[8px] text-white z-50"
              href="#"
              onClick={() => openPopup("Social Media", ["social1.jpg", "social2.jpg", "social3.jpg"], ["text1", "text2", "text3"])}
            >
              social media{" "}
            </Link>

            <ul className="flex flex-col 2sm:h-[134px sm:mt-[10px] sm:h-[80px] gap-1.5 ">
              <h2 className="font-VcrMono tracking-[1.95px] uppercase 2sm:text-sm sm:text-[12px] sm:block 2sm:block md:hidden text-[#73E338]">
                gorillas’
              </h2>
              <Link
                className="font-VcrMono text-[#FFF] 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:block 2sm:block md:hidden sm:text-[8px] z-50"
                href="/gorilas/our-team"
              >
                our team
              </Link>
              <Link
                className="font-VcrMono 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[8px] sm:block 2sm:block md:hidden z-50 text-white 2sm:mb-8 sm:mb-[10px]"
                href="/gorilas/behind-the-scenes"
              >
                behind the scene
              </Link>
            </ul>
          </div>
          {/* Block 2  */}
          <ul className="flex flex-col 2sm:h-[134px] sm:h-[80px] gap-1.5 ">
            <h2 className="font-VcrMono tracking-[1.95px] uppercase 2sm:text-sm sm:text-[12px] sm:hidden 2sm:hidden md:block  text-[#73E338]">
              gorillas’
            </h2>
            <Link
              className="font-VcrMono text-[#FFF] 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:hidden 2sm:hidden md:block  sm:text-[8px] z-50"
              href="/gorilas/our-team"
            >
              our team
            </Link>
            <Link
              className="font-VcrMono 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[8px] z-50  sm:hidden 2sm:hidden md:block text-white 2sm:mb-8 sm:mb-[10px]"
              href="/gorilas/behind-the-scene"
            >
              behind the scene
            </Link>

            <h2 className="font-VcrMono tracking-[1.95px] uppercase 2sm:text-sm sm:text-[12px] text-[#73E338]">
              portfolio
            </h2>
            <Link
              className="font-VcrMono 2sm:tracking-[1.5px] sm:tracking-[0.75px] z-50 uppercase 2sm:text-[10px] sm:text-[8px] text-white"
              href="/portfolio/industries"
            >
              gorillas’insdustries
            </Link>

            <ul className="flex flex-col 2sm:h-[134px] sm:h-[80px] sm:mt-[14px] gap-[4.7px] ">
              <h2 className="font-VcrMono tracking-[1.95px]  uppercase 2sm:text-sm sm:block 2sm:block md:hidden sm:text-[12px] text-[#73E338]">
                connect
              </h2>
              <div className="flex sm:flex flex-row  2sm:flex 2sm:flex-row 2sm:max-w-[100px]  sm:block 2sm:block md:hidden sm:max-w-[70px] gap-1.5">
                <Link href="/portfolio/industries" className="z-50">
                  <Image
                    src="/images/facebook.svg"
                    alt="social-media-icon"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#" className="z-50">
                  <Image
                    src="/images/instagram.svg"
                    alt="social-media-icon"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#" className="z-50">
                  <Image
                    src="/images/whatsup.svg"
                    alt="social-media-icon"
                    width={19}
                    height={19}
                  />
                </Link>
                <Link href="#" className="z-50">
                  <Image
                    src="/images/google.svg"
                    alt="social-media-icon"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>

              <h2 className="font-VcrMono 2sm:text-sm sm:text-[12px] sm:mt-[12px] tracking-[1.95px] sm:block 2sm:block md:hidden uppercase text-[#73E338] ">
                contact
              </h2>
              <Link
                className="font-VcrMono z-50  2sm:tracking-[1.5px] sm:tracking-[0.75px] 2sm:text-[10px] sm:block 2sm:block md:hidden sm:text-[8px] uppercase text-sx text-white"
                href="#"
              >
                +995 557 46 04 06
              </Link>
              <Link
                className="font-VcrMono z-50 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:block 2sm:block md:hidden sm:text-[8px]  text-white"
                href="#"
              >
                +995 593 50 88 48
              </Link>
              <Link
                className="font-VcrMono z-50  2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:block 2sm:block md:hidden sm:text-[8px] text-white"
                href="#"
              >
                info@gorillasproduction.ge
              </Link>
            </ul>
          </ul>
          {/* Block 3 */}
          <ul className="flex flex-col 2sm:h-[134px]  sm:h-[80px] gap-[4.7px] ">
            <h2 className="font-VcrMono tracking-[1.95px]  uppercase 2sm:text-sm sm:text-[8px] sm:hidden 2sm:hidden md:block text-[#73E338]">
              connect
            </h2>
            <div className="flex md:flex flex-row  2sm:max-w-[100px]  sm:hidden 2sm:hidden md:block sm:max-w-[50px] gap-1.5">
              <Link href="https://www.facebook.com/profile.php?id=100087287107008%2F" target="_blank" className="z-50">
                <Image
                  src="/images/facebook.svg"
                  alt="social-media-icon"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.instagram.com/gorillasproduction/" target="_blank" className="z-50">
                <Image
                  src="/images/instagram.svg"
                  alt="social-media-icon"
                  width={20}
                  height={20}
                />
              </Link>
              {/* <Link href="#" className="z-50">
                <Image
                  src="/images/whatsup.svg"
                  alt="social-media-icon"
                  width={19}
                  height={19}
                />
              </Link> */}
                <a className="z-50" href="facetime://+995593508848" >
                <Image
                src='/images/whatsup.svg'
                alt="whatsup"
                width={65}
                height={50}
                className="w-[22px] h-[22px]"
                  />
                </a>
              <Link href="#" className="z-50">
                <Image
                  src="/images/google.svg"
                  alt="social-media-icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>

            <h2 className="font-VcrMono 2sm:text-sm sm:text-[8px] tracking-[1.95px] md:mt-[11px] sm:hidden 2sm:hidden md:block uppercase text-[#73E338] ">
              contact
            </h2>
           
            <a className="z-50" href="whatsapp://send?phone=+995 557460406" >
              <p className="font-VcrMono  2sm:tracking-[1.5px] sm:tracking-[0.75px] sm:hidden 2sm:hidden md:block 2sm:text-[10px] sm:text-[5px] uppercase text-sx text-white">+995 557 46 04 06</p>
            </a> 
            
              <a className="z-50" href="whatsapp://send?phone=+995593508848" >
                <p className="font-VcrMono  2sm:tracking-[1.5px] sm:tracking-[0.75px] sm:hidden 2sm:hidden md:block uppercase 2sm:text-[10px] sm:text-[5px]  text-white">+995 593 50 88 48</p>
              </a>
            <Link
              className="font-VcrMono z-50  2sm:tracking-[1.5px] sm:tracking-[0.75px] sm:hidden 2sm:hidden md:block uppercase 2sm:text-[10px] sm:text-[5px] text-white"
              href="#"
            >
              info@gorillasproduction.ge
            </Link>
          </ul>
          <div className="absolute 2sm:right-11 2sm:top-8 sm:right-[9%] sm:top-20 2sm:right-[10%] 2sm:top-24 md:right-[5%] md:top-10 ">
            <Image
              src="/images/logo.svg"
              alt="footer-logo-foto"
              width={50}
              height={50}
              className="2sm:w-[50px] 2sm:h-[50px] sm:w-[48px] sm:h-[48px] 2sm:w-[98px] 2sm:h-[98px] md:w-[68px] md:h-[68px]"
            />
          </div>
          {/* </div> */}
        </div>
      </footer>

      <div className="flex flex-col  mx-auto justify-center w-80 h-[185.39px] 2sm:mt-[150px] 2sm:mb-[30px] sm:mt-[30px]">
        <div className="flex flex-col items-center  2sm:mb-[20px] sm:mb-[5px]">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="2sm:w-[100px] 2sm:h-[100px] sm:w-[60px] sm:h-[60px]"
          />
          <h1 className="2sm:text-[15px] 2sm:tracking-[2.25px] sm:text-[8px] sm:tracking-[1.2px] text-white uppercase 2sm:mt-[24px] sm:mt-[12px] font-ASSUAN">
            Gorillas’ PRODUCTION
          </h1>
        </div>

        <p className="2sm:text-[10px] sm:text-[5px] text-center text-[#FFF] font-VcrMono">
          WWW.GORILLASPRODACTION.GE <br />
          <Image
            className="inline-block "
            src="/images/footer-Cicon.svg"
            alt="footer-Cicon-foto"
            width={9}
            height={9}
          />{" "}
          All rights reserved 2023
        </p>
      </div>
      {isPopupOpen && <Popup onClose={closePopup} sectionTitle={popupSectionTitle} popupData={popupData} />}
    </div>
  );
};

export default Footer;
