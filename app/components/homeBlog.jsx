"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HomeBlog = () => {
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
      <section className="md:ml-0 md:w-full sm:w-full mt-[30px] overflow-hidden">
        <div className="mx-auto md:w-9/12 relative overflow-x-auto gap-2 flex flex-row">
          {feed &&
            feed.data.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-[300px] h-[270px] flex flex-col justify-start items-center gap-5 rounded-lg border-2 border-white overflow-hidden ${
                  index >= 2 ? "hidden md:flex" : ""
                }`}
              >
                <div
                  className="overflow-auto"
                  style={{ maxHeight: "calc(100% - 30px)" }}
                >
                  {item.media_type === "IMAGE" ? (
                    <img
                      src={item.media_url}
                      alt={item.caption}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <video controls width="100%" height="auto">
                      <source src={item.media_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <Link
                  href="https://www.instagram.com/gorillasproduction/"
                  target="_blank"
                >
                  <img
                    src="/images/instagram.svg"
                    alt="instagram"
                    className="w-[30px] h-[30px]"
                  />
                </Link>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default HomeBlog;