"use client"

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const MobileNavigation = () => {

    const [isOpened, setIsOpened] = useState(false);
    const [isGorillasSubMenuOpen, setIsGorillasSubMenuOpen] = useState(false);
    const [isPortfolioSubMenuOpen, setIsPortfolioSubMenuOpen] = useState(false);
    const [isWhatWeDoSubMenuOpen, setIsWhatWeDoSubMenuOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpened(!isOpened);
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
    className='w-[39px] h-[40px] absolute top-7 left-5 z-50 border border-solid border-[#565656] rounded-tl-[5px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] flex justify-center'
    onClick={handleToggle}
  >
    <Image src="/images/logo.svg" alt="logo" width={11} height={11} />

    {/* Taller folder */}
    {isOpened && (
      <div className="taller-folder absolute w-[100px] h-[120px] top-0 left-[24px] right-[125px] bg-[#181818] border border-solid border-[#565656] rounded-tr-[5px] rounded-br-[5px] z-[99]">
        <div className="arrow w-[100px] h-[10px] bg-[#565656] rounded-tl-[15px]  absolute -top-2 -left-[1px] z-20 flex items-center justify-end pr-1">
          <Image
            src='/images/arrow.svg'
            alt="logo"
            width={11}
            height={11}
          />
        </div>
        <ul className='text-[#73E338] text-[7px] uppercase flex flex-col gap-[3px] p-[7px]'>
          <Link href='#'>home</Link>
          <li onMouseEnter={handleGorillasSubMenuToggle} onMouseLeave={handleGorillasSubMenuToggle}>
            <span style={{ cursor: 'pointer' }}>gorillas’</span>
            {isGorillasSubMenuOpen && (
              <ul className="submenu text-white text-[7px] gap-[4px] flex flex-col">
                <Link href='#' className=' uppercase'>Our Team</Link>
                <Link href='#' className=' uppercase'>Behind the Scenes</Link>
              </ul>
            )}
          </li>
          <li onMouseEnter={handlePortfolioSubMenuToggle} onMouseLeave={handlePortfolioSubMenuToggle}>
            <span style={{ cursor: 'pointer' }}>portfolio</span>
            {isPortfolioSubMenuOpen && (
              <ul className="submenu text-white text-[6px] flex flex-col">
                <Link  href="/portfolio/industries" className='mt-[4px] uppercase'>gorillas’industries</Link>
              </ul>
            )}
          </li>
          <li onMouseEnter={handleWhatWeDoSubMenuToggle} onMouseLeave={handleWhatWeDoSubMenuToggle}>
            <span style={{ cursor: 'pointer' }}>what we do</span>
            {isWhatWeDoSubMenuOpen && (
              <ul className="submenu text-white text-[7px] gap-[4px] flex flex-col">
                <Link  href="/process" className=' uppercase'>process</Link>
                <Link href="/services" className=' uppercase'>services</Link>
              </ul>
            )}
          </li>
          <Link href='/contact'>contact</Link>
          <Link href='/blog'>blog</Link>
        </ul>
        <Link href='/work-in-progress'>
        <Image src="/images/logo.svg" alt="logo" width={26} height={27} className='mx-auto' />
        </Link>
       
      </div>
    )}

    {/* Arrow */}
    <div className="arrow w-[15px] h-[4px] bg-[#565656] rounded-tl-[15px] z-[101] absolute -top-1 -right-[1px] flex items-center justify-end pr-1">
      <Image
        src='/images/arrow.svg'
        alt="logo"
        width={5}
        height={0}
      />
    </div>
  </div>
  )
}

export default MobileNavigation
