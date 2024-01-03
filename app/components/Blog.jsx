"use client";

import { useEffect, useState } from 'react';

const Blog = () => {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
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

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <>
      <div>
        {feed &&
          feed.data.map((item) => (
            <div key={item.id}>
              {item.media_type === 'IMAGE' ? (
                <img src={item.media_url} alt={item.caption} style={{ maxWidth: '100%' }} />
              ) : (
                <video controls width="100%" height="auto">
                  <source src={item.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p>{item.caption}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Blog;
