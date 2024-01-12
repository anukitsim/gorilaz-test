// Video2.jsx
import { useRef, useState, useEffect } from "react";

const Video2 = () => {
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isVideo1Loaded, setIsVideo1Loaded] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

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
            setIsVideo1Loaded(true);
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

  return isVideo1Loaded ? (
    <video
      ref={videoRef}
      className="outline md:w-11/12 md:h-[520px] sm:w-[255.11px] sm:h-[172.83px] object-cover outline-white md:outline-offset-[-10px] sm:outline-offset-[-4px] md:rounded-[15px] sm:rounded-md "
      autoPlay
      muted
      loop
      preload="metadata"
    />
  ) : (
    <div  className="outline md:w-11/12 md:h-[520px] sm:w-[255.11px] sm:h-[172.83px] object-cover outline-white md:outline-offset-[-10px] sm:outline-offset-[-4px] md:rounded-[15px] sm:rounded-md text-white text-4xl flex justify-center items-center">Loading..</div>
  );
};

export default Video2;
