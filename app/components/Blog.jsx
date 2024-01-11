  "use client";

  import { useEffect, useState } from "react";
  import Link from "next/link";

  import useSWR from 'swr';

  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  

  const Blog = () => {
    const wordpressApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const instagramToken = process.env.NEXT_PUBLIC_INSTAGRAM_KEY;
  const [feed, setFeed] = useState(null);

  const { data: wordpressData, error: wordpressError } = useSWR(
    `${wordpressApiUrl}/posts`,
    fetcher
  );

  // Fetch data from Instagram using SWR
  const { data: instagramData, error: instagramError } = useSWR(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&limit=100&access_token=${instagramToken}`,
    fetcher
  );

    useEffect(() => {
      // Combine and set feed data if both WordPress and Instagram data are available
      if (wordpressData && instagramData) {
        const combinedData = {
          wordpressPosts: wordpressData,
          instagramPosts: instagramData.data.slice(0, 5),
        };
        setFeed(combinedData);
      }
  
      // Handle errors
      if (wordpressError) {
        console.error('WordPress error:', wordpressError);
        setFeed(null);
      }
      if (instagramError) {
        console.error('Instagram error:', instagramError);
        setFeed(null);
      }
    }, [wordpressData, instagramData, wordpressError, instagramError]);
  

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
