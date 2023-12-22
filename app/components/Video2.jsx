// Video2.jsx
import { useRef, useState, useEffect } from "react";

const Video2 = () => {
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    console.log("Video2 component mounted or updated");
    const fetchVideo2 = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/video2?acf_format=standard&_fields=id,title,acf`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const video2Url = data[0].acf.video2;

          if (video2Url) {
            setVideoUrl(video2Url);
            console.log("Video2 URL:", video2Url);
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

  return (
    <video
      ref={videoRef}
      className="outline md:w-[1000px] md:h-[520px] sm:w-[255.11px] sm:h-[172.83px] object-cover outline-white md:outline-offset-[-10px] sm:outline-offset-[-4px] md:rounded-[15px] sm:rounded-md "
      autoPlay
      muted
      loop
    />
  );
};

export default Video2;
