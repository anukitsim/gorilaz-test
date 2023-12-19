"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 850);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed md:bottom-10 md:right-[49px] sm:bottom-0 right-[40%] z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <Image src="/images/top.svg" alt="top" width={80} height={66}  className='cursor-pointer'/>
    </div>
  );
};

export default ScrollToTop;
