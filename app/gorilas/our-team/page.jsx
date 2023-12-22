"use client"

import { useState, useEffect } from 'react';
import OurTeam from '@app/components/OurTeam'
import Header from '@app/components/Header'
import GetInTouch from '@app/components/GetInTouch'
import Footer from '@app/components/Footer'
import StickyComponent from '@app/components/StickyComponent'
import ScrollToTop from '@app/components/ScrollToTop'



export default function OurTeamPage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);


  return (
    <main className="">
      <Header />
     <OurTeam />
     <GetInTouch />
        <Footer />
        <div className='md:block sm:hidden'><StickyComponent /></div>
      <ScrollToTop />
      
    </main>
  )
}
