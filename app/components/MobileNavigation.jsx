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
  
    const handleGorillasSubMenuToggle = (e) => {
      e.stopPropagation();
      setIsGorillasSubMenuOpen(!isGorillasSubMenuOpen);
    };
  
    const handlePortfolioSubMenuToggle = (e) => {
      e.stopPropagation();
      setIsPortfolioSubMenuOpen(!isPortfolioSubMenuOpen);
    };
  
    const handleWhatWeDoSubMenuToggle = (e) => {
      e.stopPropagation();
      setIsWhatWeDoSubMenuOpen(!isWhatWeDoSubMenuOpen);
    };
  


  return (
    <div
    className='w-[89px] h-[90px] absolute top-5 left-5 z-50 border border-solid border-[#565656] rounded-tl-[5px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] flex justify-center'
    onClick={handleToggle}
  >
    <Image src="/images/logo.svg" alt="logo" width={31} height={31} />

    {/* Taller folder */}
    {isOpened && (
      <div className="taller-folder flex flex-row absolute w-[220px] h-[180px] top-0 left-[24px] right-[125px] bg-[#181818] border border-solid border-[#565656]  rounded-br-[5px] z-[99]">
        
        <div className="arrow w-[220px] h-[8px] bg-[#565656] rounded-tl-[15px]  absolute -top-2 -left-[1px] z-20 flex items-center justify-end pr-1">
          <Image
            src='/images/arrow.svg'
            alt="logo"
            width={11}
            height={11}
          />
        </div>
        <ul className='text-[#73E338] text-[12px] uppercase flex flex-col whitespace-nowrap gap-[3px] p-[7px]'>
          <Link href='/'>home</Link>
          <li onClick={handleGorillasSubMenuToggle}>
            <span style={{ cursor: 'pointer' }}>gorillas’</span>
            {isGorillasSubMenuOpen && (
              <ul className="submenu text-white text-[10px] gap-[4px] flex flex-col">
                <Link href='/gorilas/our-team' className=' uppercase'>Our Team</Link>
                <Link href='/gorilas/behind-the-scene' className=' uppercase'>Behind the Scenes</Link>
              </ul>
            )}
          </li>
          <li onClick={handlePortfolioSubMenuToggle} >
            <span style={{ cursor: 'pointer' }}>portfolio</span>
            {isPortfolioSubMenuOpen && (
              <ul className="submenu text-white text-[10px] flex flex-col">
                <Link  href="/portfolio/industries" className='mt-[4px] uppercase'>gorillas’industries</Link>
              </ul>
            )}
          </li>
          <li onClick={handleWhatWeDoSubMenuToggle} >
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
        
       <div className='w-full justify-center flex items-center'>
       <Link href='/work-in-progress'>
        <Image src="/images/logo.svg" alt="logo" width={66} height={67} priority />
        </Link>
       </div>
      </div>
    )}

    {/* Arrow */}
    <div className={`arrow w-[35px] h-[6px] bg-[#565656] rounded-tl-[15px] z-[101] absolute -top-1.5 -right-[1px] flex items-center justify-end pr-1 ${isOpened ? 'hidden': 'block'}`}>
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