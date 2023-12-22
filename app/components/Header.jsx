// header.jsx

"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import MobileNavigation from "./MobileNavigation";
import { usePathname } from "next/navigation";
import Folder from "./Folder";

const Header = () => {
  const pathname = usePathname();
  const [isBlurActive, setIsBlurActive] = useState(true);
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const getVideoUrl = async (videoId) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media/${videoId}`);
      console.log('API Response:', response);
      if (!response.ok) {
        if (response.status === 404) {
          console.warn(`Video with ID ${videoId} not found.`);
          return null;
        }
        throw new Error(`Failed to fetch video data: ${response.statusText}`);
      }

      const videoData = await response.json();
      return videoData.source_url || null;
    } catch (error) {
      console.error("Error fetching video data:", error.message);
      return null;
    }
  };

  useEffect(() => {
    console.log("Header component mounted or updated");
    const fetchHeaderVideo = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/header?acf_format=standard&_fields=id,title,acf`;
        console.log("API URL:", apiUrl);

        const response = await fetch(apiUrl);
        console.log('API Response:', response);

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const headerVideoUrl = data[0].acf.header_video;

          if (headerVideoUrl) {
            setVideoUrl(headerVideoUrl);
            console.log("Video URL:", headerVideoUrl);
          } else {
            console.error("Header video URL not found or invalid:", headerVideoUrl);
          }
        } else {
          console.error("No headers found in the response:", data);
        }
      } catch (error) {
        console.error("Error fetching header video:", error);
      }
    };

    fetchHeaderVideo();
  }, []);

  const handleVideoHover = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsBlurActive(false);
    }
  };

  const titles = {
    "/": "HOME",
    "/blog": "BLOG",
    "/contact": "CONTACT",
    "/gorilas/our-team": "OUR TEAM",
    "/gorilas/behind-the-scene": "BEHIND THE SCENE",
    "/process": "PROCESS",
    "/services": "SERVICES",
    "/portfolio/industries": "gorillas’industries",
    // Add more entries for other pages as needed
  };

  // Get the current pathname from the window location
  const title = titles[pathname] || "";

  return (
    <div
      className="md:w-full sm:w-11/12 sm:ml-5 md:ml-0  md:h-[790px] sm:h-[266px] flex  justify-center"
      id="header"
    >
      <div
        className="top-28 md:w-[72%] sm:w-full  md:h-[680px] sm:h-[214px] relative overflow-hidden videoContainer"
      >
        <Image
          className="absolute right-0 top-1/3 md:w-[14.35px] md:h-[211.64px] sm:w-[8.403px] sm:h-[80px]"
          src="/images/header-regulator.svg"
          alt="regulator-foto"
          width={3}
          height={50}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="md:w-1/4 md:h-[133px] sm:w-[65.861px] sm:h-[31.808px] border-t-2 border-l-2 border-white  absolute left-1 top-0"></div>
          <div className="md:w-1/4 md:h-[133px] sm:w-[65.861px] sm:h-[31.808px] border-t-2 border-r-2 border-white  absolute right-1 top-0"></div>
          <div className="md:w-2/6 md:h-[133.391px] sm:w-[81px] sm:h-[31px] border-b-2 border-l-2 border-white  absolute left-1 md:bottom-3 sm:bottom-0"></div>
          <div className="md:w-2/6 md:h-[133px] sm:w-[81px] sm:h-[31px] border-b-2 border-r-2 border-white  absolute right-1 md:bottom-3 sm:bottom-0"></div>
        </div>
        <p className="whitespace-nowrap uppercase absolute top-8 right-[32px] md:block sm:hidden z-50 font-VcrMono text-6xl text-[#73E338]">
          {title}
        </p>

        <div className="absolute -bottom-2 md:block sm:hidden  left-1/2 transform text-white -translate-x-1/2 z-50 ">
          <Image
            src="/images/counter.svg"
            alt="counter"
            width={120}
            height={23}
            className="z-50"
          />
        </div>
        <div className="md:block sm:hidden">
          <Folder />
        </div>
        <div className="md:hidden sm:block">
          <MobileNavigation />
        </div>

        <div className="absolute inset-2 right-7 z-0 flex md:items-center sm:items-end md:justify-end sm:justify-end videoBackdrop">
          {videoUrl && (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              className="object-cover md:w-8/12 sm:w-11/12 md:h-[415px] sm:h-[190px] video"
              onMouseOver={handleVideoHover}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
