"use client"

import React, { useEffect, useState } from "react";
import Portfolio from "@app/components/Portfolio";
import Header from "@app/components/Header";
import Footer from "@app/components/Footer";
import StickyComponent from "@app/components/StickyComponent";
import ScrollToTop from "@app/components/ScrollToTop";
import GetInTouchSubjectPortolio from "@app/components/GetInTouchSubjectPortfolio";

export default function Home() {
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/portfolio?acf_format=standard&_fields=id,title,acf`
        );
        const data = await response.json();
        setSectionData(data);
      } catch (error) {
        console.error("Error fetching data from WordPress:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="w-full">
      <Header />
      <Portfolio />
      {sectionData.length > 0 && (
        <GetInTouchSubjectPortolio sectionData={sectionData} />
      )}
      <Footer />
      <div className="md:block sm:hidden">
        <StickyComponent />
      </div>
      <ScrollToTop />
    </main>
  );
}
