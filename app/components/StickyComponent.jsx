"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const StickyComponent = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isGorillasSubMenuOpen, setIsGorillasSubMenuOpen] = useState(false);
  const [isPortfolioSubMenuOpen, setIsPortfolioSubMenuOpen] = useState(false);
  const [isWhatWeDoSubMenuOpen, setIsWhatWeDoSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 850);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
  };

  const handleGorillasSubMenuToggle = () => {
    setIsGorillasSubMenuOpen(!isGorillasSubMenuOpen);
  };

  const handlePortfolioSubMenuToggle = () => {
    setIsPortfolioSubMenuOpen(!isPortfolioSubMenuOpen);
  };

  const handleWhatWeDoSubMenuToggle = () => {
    setIsWhatWeDoSubMenuOpen(!isWhatWeDoSubMenuOpen);
  };

  return (
    <div
      className={` ${
        isSticky ? 'fixed top-10 left-[25px]' : 'relative'
      } w-[125px] h-[136px] border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] flex justify-center`}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Image src="/images/logo.svg" alt="logo" width={48} height={41} />

      {/* Taller folder */}
      {isHovered && (
        <div className="taller-folder absolute w-[250px] h-[310px] -top-1 left-[24px] right-[125px] bg-[#181818] border border-solid border-[#565656]  rounded-br-[5px] z-[99]">
          <div className="arrow w-[250px] h-[10px] bg-[#565656] rounded-tl-[15px] z-[101] absolute -top-2 -left-[1px] flex items-center justify-end pr-1">
            <Image
              src={`/images/${isHovered ? 'hoverArrow' : 'arrow'}.svg`}
              alt="logo"
              width={15}
              height={0}
            />
          </div>
          <ul className='text-[#73E338] text-[16px] uppercase flex flex-col gap-[3px] p-[7px]'>
            <Link href='#'>home</Link>
            <li onMouseEnter={handleGorillasSubMenuToggle} onMouseLeave={handleGorillasSubMenuToggle}>
              <span style={{ cursor: 'pointer' }}>gorillas’</span>
              {isGorillasSubMenuOpen && (
                <ul className="submenu text-white text-[10px] gap-[4px] flex flex-col">
                  <Link href='#' className=' uppercase'>Our Team</Link>
                  <Link href='#' className=' uppercase'>Behind the Scenes</Link>
                </ul>
              )}
            </li>
            <li onMouseEnter={handlePortfolioSubMenuToggle} onMouseLeave={handlePortfolioSubMenuToggle}>
              <span style={{ cursor: 'pointer' }}>portfolio</span>
              {isPortfolioSubMenuOpen && (
                <ul className="submenu text-white text-[10px] flex flex-col">
                  <Link  href="/portfolio/industries" className='mt-[4px] uppercase'>gorillas’industries</Link>
                </ul>
              )}
            </li>
            <li onMouseEnter={handleWhatWeDoSubMenuToggle} onMouseLeave={handleWhatWeDoSubMenuToggle}>
              <span style={{ cursor: 'pointer' }}>what we do</span>
              {isWhatWeDoSubMenuOpen && (
                <ul className="submenu text-white text-[10px] gap-[4px] flex flex-col">
                  <Link  href="/process" className=' uppercase'>process</Link>
                  <Link href="/services" className=' uppercase'>services</Link>
                </ul>
              )}
            </li>
            <Link href='/contact'>contact</Link>
            <Link href='/blog'>blog</Link>
          </ul>
          <Link href='/work-in-progress'>
          <Image src="/images/logo.svg" alt="logo" width={68} height={61} className='mx-auto' />
          </Link>
         
        </div>
      )}

      {/* Arrow */}
      <div className={`arrow w-[40px] h-[10px] bg-[#565656] rounded-tl-[15px] z-[101] absolute -top-2.5 -right-[1px] flex items-center justify-end pr-1 ${isHovered ? 'hidden' : 'block'}`}>
        <Image
          src={`/images/${isHovered ? 'hoverArrow' : 'arrow'}.svg`}
          alt="logo"
          width={15}
          height={0}
        />
      </div>
    </div>
  );
};

export default StickyComponent;
