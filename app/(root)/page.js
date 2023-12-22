"use client"

import { useState, useEffect } from 'react';
import Header from '@app/components/Header';
import GetInTouch from '@app/components/GetInTouch';
import Footer from '@app/components/Footer';
import Home from '@app/components/Home';
import StickyComponent from '@app/components/StickyComponent';
import ScrollToTop from '@app/components/ScrollToTop';
import Loading from '@app/components/Loading';

export default function Root() {
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
    <main>
      {loading && <Loading />}
      <Header />
      <Home />
      <GetInTouch />
      <Footer />
      <ScrollToTop />
      <div className='md:block sm:hidden'>
        <StickyComponent />
      </div>
    </main>
  );
}
