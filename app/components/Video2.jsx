"use client"

import { useRef, useState, useEffect } from "react";

const Video2 = () => {
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isVideo2Loaded, setIsVideo2Loaded] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  useEffect(() => {
    const fetchVideo2 = async () => {
      try {
        const videoUrl = `${apiUrl}/video2?acf_format=standard&_fields=id,title,acf`;
        const response = await fetch(videoUrl);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const video2Url = data[0].acf.video2;

          if (video2Url) {
            setVideoUrl(video2Url);
            setIsVideo2Loaded(true);
          } else {
            console.error("Video2 URL not found or invalid:", video2Url);
          }
        } else {
          console.error("No videos found in the response:", data);
        }
      } catch (error) {
        console.error("Error fetching video2:", error);
      }
    };

    fetchVideo2();
  }, []);

  useEffect(() => {
    // Set the video source after the component has mounted
    if (videoRef.current && videoUrl) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
    }
  }, [videoUrl]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      // Check if the browser is Safari
      const isSafari =
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        /iPad|iPhone|iPod/.test(navigator.userAgent);

      if (isSafari) {
        // For Safari, use playsinline and autoplay
        videoRef.current.setAttribute("playsinline", "");
        videoRef.current.play();
      } else {
        // For other browsers, handle play/pause as before
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
  };

  return isVideo2Loaded ? (
    <div className="md:w-11/12 md:h-[560px] sm:w-[255.11px] sm:h-[172.83px] object-cover text-white text-4xl flex justify-center items-center relative">
      <div className="absolute md:h-[540px] top-[10px] bottom-[10px] left-[10px] right-[10px] z-50 rounded-md border border-white" onClick={handleVideoClick}></div>
      <video
        ref={videoRef}
        className="rounded-md z-0"
        autoPlay
        muted
        loop
        preload="metadata"
        
      />
    </div>
  ) : (
    <div className="outline md:w-11/12 md:h-[520px] sm:w-[255.11px] sm:h-[172.83px] object-cover outline-white md:outline-offset-[-10px] sm:outline-offset-[-4px] md:rounded-[15px] sm:rounded-md text-white text-4xl flex justify-center items-center">
      Loading..
    </div>
  );
};

export default Video2;
