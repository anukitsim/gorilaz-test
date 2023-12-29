const getImageUrl = async (imageId, apiUrl) => {
  try {
    const res = await fetch(`https://gorillasproduction.pro/wp-json/wp/v2/media/${imageId}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch image data: ${res.statusText}`);
    }

    const imageData = await res.json();
    return imageData.source_url;
  } catch (error) {
    console.error("Error fetching image data:", error.message);
    return ""; // Default to an empty string if there's an error
  }
};

export default getImageUrl;