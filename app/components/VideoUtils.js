
  const getVideoUrl = async (videoId) => {
    try {
      const response = await fetch(`https://gorillasproduction.pro/media/${videoId}`);
    
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

  export default getVideoUrl;