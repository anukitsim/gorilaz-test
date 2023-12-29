// Video1.jsx
import { useRef, useState, useEffect } from "react";

const Video1 = () => {
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    console.log("Video1 component mounted or updated");
    const fetchVideo1 = async () => {
      try {
        const apiUrl = 'https://gorillasproduction.ge/wp-json/wp/v2/video1?acf_format=standard&_fields=id,title,acf';
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const video1Url = data[0].acf.video1;

          if (video1Url) {
            setVideoUrl(video1Url);
            console.log("Video1 URL:", video1Url);
          } else {
            console.error("Video1 URL not found or invalid:", video1Url);
          }
        } else {
          console.error("No videos found in the response:", data);
        }
      } catch (error) {
        console.error("Error fetching video1:", error);
      }
    };

    fetchVideo1();
  }, []);

  useEffect(() => {
    // Set the video source after the component has mounted
    if (videoRef.current && videoUrl) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
    }
  }, [videoUrl]);

  return (
    <video
      ref={videoRef}
      className="z-10 mt-[93px] outline outline-white outline-offset-[-5px] rounded-lg sm:w-9/12 md:w-[390px] md:h-[445px]"
      autoPlay
      muted
      loop
      preload="auto"
    />
  );
};

export default Video1;
