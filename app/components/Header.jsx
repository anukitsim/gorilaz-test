  "use client";

  import React, { useEffect, useRef, useState } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import { usePathname } from 'next/navigation'
  
  

  const Header = () => {
  
    const pathname = usePathname();
    const [isBlurActive, setIsBlurActive] = useState(true);
    const [hoveredFolder, setHoveredFolder] = useState(null);
  
    const videoRef = useRef(null);

    useEffect(() => {
      const folders = document.querySelectorAll(".folder");
    

      folders.forEach((folder, index) => {
        folder.addEventListener("mouseenter", () => {
          setHoveredFolder(index);
          const links = folder.querySelectorAll("a");
          const translateYValue = links.length * 25;

          for (let i = 0; i < index; i++) {
            const sibling = folders[i];
            
            sibling.style.transform = `translateY(${translateYValue}px)`;
          
          }
        
        });

        folder.addEventListener("mouseleave", () => {
          folders.forEach((sibling) => {
          
            sibling.style.transform = "translateY(0)";
            
          });
          setHoveredFolder(null);
        });
      });
    }, []);




    const handleVideoHover = () => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsBlurActive(false);
      }
    };

    const titles = {
      '/': 'HOME',
      '/blog': 'BLOG',
      '/contact': 'CONTACT',
      '/gorilas/our-team': 'OUR TEAM',
      '/gorilas/behind-the-scene': 'BEHIND THE SCENE',
      '/process': "PROCESS",
      '/services': 'SERVICES',
      '/portfolio/industries': 'PORTFOLIO',
      // Add more entries for other pages as needed
    };
  
    // Get the current pathname from the window location
    
    const title = titles[pathname] || '';
    

    return (
      <div className="w-full h-[790px] flex  justify-center ">
        <div className="top-28 w-9/12 h-[680px] relative overflow-hidden videoContainer">
          <Image
            className="absolute right-0 top-1/3 "
            src="/images/header-regulator.svg"
            alt="regulator-foto"
            width={14.35}
            height={211.64}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/4 h-[133px] border-t-2 border-l-2 border-white  absolute left-1 top-0"></div>
            <div className="w-1/4 h-[133px] border-t-2 border-r-2 border-white  absolute right-1 top-0"></div>
            <div className="w-2/6 h-[133.391px] border-b-2 border-l-2 border-white  absolute left-1 bottom-3"></div>
            <div className="w-2/6 h-[133px] border-b-2 border-r-2 border-white  absolute right-1 bottom-3"></div>
          </div>
          <p className="whitespace-nowrap tracking-wide absolute top-8 right-[32px] z-50 font-VcrMono text-6xl text-[#73E338]">
       {title}
      </p>
     

          <div className="absolute -bottom-2  left-1/2 transform text-white -translate-x-1/2 z-50 ">
            <Image
              src="/images/counter.svg"
              alt="counter"
              width={120}
              height={23}
              className="z-50"
            />
          </div>
          {/* Folder 1 */}
          <div className="absolute left-8 top-60 ">
            <div className="relative">
              

              <div className="folder flex-col gap-2 z-50  w-[254px] h-[245px] flex justify-center items-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] relative">
              <div
                className="arrow w-[55px] h-[15px] bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] 
                  rounded-bl-[0] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1"
              >
              <Image
                  src={`/images/${hoveredFolder === 0 ? 'hoverArrow' : 'arrow'}.svg`}
                  alt="logo"
                  width={20}
                  height={0}
                />
              </div>
                <p className="absolute left-5 top-4 text-[7px] text-white">07</p>
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />

              
              </div>
            </div>
            {/* Folder 2 */}

            <div className="folder z-40   w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[30px]">
              {/* Add content for the second folder here */}
              <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
              <Image
                  src={`/images/${hoveredFolder === 1 ? 'hoverArrow' : 'arrow'}.svg`}
                  alt="logo"
                  width={20}
                  height={0}
                />
              </div>
              <p className="absolute left-5 top-4 text-[7px] text-white">06</p>
              <Link
                href="#"
                className="absolute uppercase left-9 top-2.5 text-[20px] text-[#73E338] font-VcrMono"
              >
                BLOG
              </Link>
            </div>

            {/* Folder 3 */}
            <div className="folder z-30  w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[60px]">
              {/* Add content for the third folder here */}
              <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
              <Image
                  src={`/images/${hoveredFolder === 2 ? 'hoverArrow' : 'arrow'}.svg`}
                  alt="logo"
                  width={20}
                  height={0}
                />
              </div>
              <p className="absolute left-5 top-4 text-[7px] text-white">05</p>
              <Link
                href="/contact"
                className="absolute uppercase left-9 top-2.5 text-[20px] text-[#73E338] font-VcrMono"
              >
                CONTACT
              </Link>
            </div>
            <div className=" folder z-20  w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[90px]">
              {/* Add content for the third folder here */}
              <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
              <Image
                  src={`/images/${hoveredFolder === 3 ? 'hoverArrow' : 'arrow'}.svg`}
                  alt="logo"
                  width={20}
                  height={0}
                />
              </div>
              <p className="absolute left-5 top-4 text-[7px] text-white">04</p>
              <Link
                href='#'                
                className="absolute uppercase left-9 top-2.5 text-[20px] flex flex-col  text-[#73E338] font-VcrMono"
              >
                WHAT WE DO
              </Link>
              <div className="sublinks uppercase">
                <Link
                  href="/process"
                  className="absolute left-9 top-[55px] text-[13px] text-[#D4D4D4] hover:text-white flex flex-col  font-VcrMono "
                >
                  process
                </Link>
                <Link
                  href="/services"
                  className="absolute left-9 top-[75px] text-[13px] text-[#D4D4D4] hover:text-white flex flex-col  font-VcrMono "
                >
                services
                </Link>
                <Link
                  href="#"
                  className="absolute left-9 top-[95px] text-[13px] text-[#D4D4D4] hover:text-white flex flex-col  font-VcrMono "
                >
                photography
                </Link>
                <Link
                  href="#"
                  className="absolute left-9 top-[115px] text-[13px] text-[#D4D4D4] hover:text-white flex flex-col  font-VcrMono "
                >
                videography
                </Link>
                <Link
                  href="#"
                  className="absolute left-9 top-[135px] text-[13px] text-[#D4D4D4] hover:text-white flex flex-col  font-VcrMono "
                >
                location scouting
                </Link>
                <Link
                  href="#"
                  className="absolute left-9 top-[155px] text-[13px] text-[#D4D4D4] hover:text-white flex flex-col  font-VcrMono "
                >
                social media service
                </Link>
              </div>
            </div>
            <div className="folder z-10 w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[120px]">
              {/* Add content for the third folder here */}
              <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
              <Image
                  src={`/images/${hoveredFolder === 4 ? 'hoverArrow' : 'arrow'}.svg`}
                  alt="logo"
                  width={20}
                  height={0}
                />
              </div>
              <p className="absolute left-5 top-4 text-[7px] text-white">03</p>
              <Link
                href="#"
                className="absolute uppercase left-9 top-2.5 text-[20px] text-[#73E338] font-VcrMono"
              >
                PORTFOLIO
              </Link>
              <div className="sublinks uppercase">
              <Link
                  href="/portfolio/industries"
                  className="absolute text-[#D4D4D4] hover:text-white  left-9 top-[45px] text-[13px]  flex flex-col  font-VcrMono "
                >
                  gorillas’industries
                </Link>
              </div>
            </div>
            <div className="folder z-[5]  w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656]  flex-col rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[150px]">
              {/* Add content for the third folder here */}
              <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
              <Image
                  src={`/images/${hoveredFolder === 5 ? 'hoverArrow' : 'arrow'}.svg`}
                  alt="logo"
                  width={20}
                  height={0}
                />
              </div>
              <p className="absolute left-5 top-4 text-[7px] text-white">02</p>
              <Link href='#'
                
                className="absolute uppercase left-9 top-2.5 text-[20px] text-[#73E338] flex flex-col  font-VcrMono "
              >
                GORILLAS'
              </Link>
              <div className="sublinks uppercase ">
                <Link
                  href="/gorilas/our-team"
                  className="absolute text-[#D4D4D4] hover:text-white  left-9 top-[45px] text-[13px]  flex flex-col  font-VcrMono "
                >
                  our team
                </Link>
                <Link
                  href="/gorilas/behind-the-scene"
                  className="absolute left-9 top-[55px] text-[13px] pt-2.5 text-[#D4D4D4] hover:text-white flex flex-col  font-VcrMono "
                >
                behind the scene
                </Link>
              </div>
            </div>
            <div className="folder z-[1]  w-[254px] h-[245px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[180px]">
              {/* Add content for the third folder here */}
              <div className="arrow w-[55px] h-[15px]  bg-[#565656] rounded-tl-[15px] z-[999] absolute -top-4 -right-[1px] flex items-center justify-end pr-1">
              <Image
                  src={`/images/${hoveredFolder === 6 ? 'hoverArrow' : 'arrow'}.svg`}
                  alt="logo"
                  width={20}
                  height={0}
                />
              </div>
              <p className="absolute left-5 top-4 text-[7px] text-white">01</p>
              <Link
                href="/"
                className="absolute uppercase left-9 top-2.5 text-[20px] text-[#73E338] font-VcrMono"
              >
                HOME
              </Link>
            </div>
          </div>
          <div className="absolute inset-2 right-7 z-0 flex items-center justify-end videoBackdrop">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              className="object-cover w-8/12 h-[415px] video"
              onMouseOver={handleVideoHover}
            >
              <source src="/video/test.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Backdrop layer */}
        </div>
      </div>
    );
  };

  export default Header;