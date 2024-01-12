  "use client";

  import { useEffect, useState } from "react";
  import Link from "next/link";
  

  const Blog = () => {
const [feed, setFeed] = useState(null);

  const fetchData = async () => {
    try {
      const url =
        `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      // Assuming data is an array, slice the last 5 posts
      const lastFivePosts = data.data.slice(0, 5);

      setFeed({ data: lastFivePosts });
    } catch (error) {
      console.error(error);
      setFeed(null);
    }
  };

  useEffect(() => {
    // Fetch data on component mount
    fetchData();

    // Set up an interval to fetch data every day (24 hours)
    const interval = setInterval(fetchData, 24 * 60 * 60 * 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to ensure the effect runs only once on mount

    
    return (
      <>
        <section className="md:ml-0 md:w-full sm:w-full mt-[130px] overflow-hidden">
          <div className="mx-auto md:w-9/12 justify-center items-center gap-20 relative flex flex-col">
            <div className="bg-[url('/images/sideLayer.svg')] absolute left-5 bg-repeat-y w-2 h-full"></div>
            {feed &&
              feed.data.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center w-6/12 gap-5"
                >
                  {item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM" ? (
                    <img
                      src={item.media_url}
                      alt={item.caption}
                      style={{ maxWidth: "100%" }}
                    />
                  ) : (
                    <video controls width="100%" height="auto">
                      <source src={item.media_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <Link href='https://www.instagram.com/gorillasproduction/' target="_blank">
                  <img
                    src="/images/instagram.svg"
                    alt="instagram"
                    className="w-[30px] h-[30px]"
                  />
                  </Link>
                
                  <p className="text-white">{item.caption}</p>
                </div>
              ))}
            <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-5 bg-repeat-y w-2 h-full"></div>
          </div>
        </section>
      </>
    );
  };

  export default Blog;
