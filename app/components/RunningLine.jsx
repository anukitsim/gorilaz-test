"use client";
// Import necessary React hooks
import React, { useState, useEffect } from "react";

// Define the RunningLine component
const RunningLine = () => {
  // Set the API URL
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  // Initialize state variables for logo data
  const [logoData, setLogoData] = useState([]);
  const [logoData2, setLogoData2] = useState([]);

  // Fetch logo data for the first set of logos
  useEffect(() => {
    const fetchLogoData = async () => {
      try {
        const res = await fetch(
          'https://gorillasproduction.ge/wp-json/wp/v2/logo1?acf_format=standard&_fields=id,title,acf'
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch logo data: ${res.statusText}`);
        }

        const logoData = await res.json();
        setLogoData(logoData);
      } catch (error) {
        console.error("Error fetching logo data:", error.message);
      }
    };

    fetchLogoData();
  }, [apiUrl]);

  // Fetch logo data for the second set of logos
  useEffect(() => {
    const fetchLogoData = async () => {
      try {
        const res = await fetch(
       'https://gorillasproduction.ge/wp-json/wp/v2/logo2?acf_format=standard&_fields=id,title,acf'
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch logo data: ${res.statusText}`);
        }

        const logoData2 = await res.json();
        setLogoData2(logoData2);
      } catch (error) {
        console.error("Error fetching logo data:", error.message);
      }
    };

    fetchLogoData();
  }, [apiUrl]);

  // Duplicate the images to create a loop
  const duplicatedImages = [...logoData, ...logoData, ...logoData];
  const duplicatedImages2 = [...logoData2, ...logoData2, ...logoData2];

  // Render the component
  return (
    <section className="md:mt-[100px] sm:mt-0">
      <div className="w-full md:pt-10 sm:pt-10">
        <div className="animated-container">
          <div className="logo-container">
            {/* Render logos in a continuous loop */}
            {duplicatedImages.map(({ id, title, acf }, index) =>
              acf.logo1 && (
                <img
                  key={id}
                  src={acf.logo1}
                  alt={title.rendered}
                  width={95}
                  height={95}
                  className="logo md:w-[95px] md:h-[95px] sm:w-[60px] sm:h-[60px]"
                />
              )
            )}
          </div>
          <div className="logo-container reverse">
            {/* Render logos in a continuous loop */}
            {duplicatedImages2.map(({ id, title, acf }, index) =>
              acf.logo2 && (
                <img
                  key={id}
                  src={acf.logo2}
                  alt={title.rendered}
                  width={95}
                  height={95}
                  className="logo md:w-[95px] md:h-[95px] sm:w-[60px] sm:h-[60px]"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the component
export default RunningLine;
