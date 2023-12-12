"use client"

import { useState } from 'react'
import Image from 'next/image'
import Popup from './Modal';

const Services = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleImageClick = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };

return (
    <div className='flex justify-start mt-[126px] items-center flex-col h-[600.881px] '>      
        <div className='flex justify-center relative  w-9/12'>
        {/* Decor lines */}          
        <div className='absolute left-0 top-0 bottom-0 w-2 h-[457.881px] bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
        <div className='absolute right-0 top-0 bottom-0 w-2 h-[457.881px] bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div> 

        {/* SERVICES MAIN BLOCK */}
        <div className='h-[400px] w-[80%] flex flex-col '>
            <h1 className='uppercase font-VcrMono text-white text-[40px] tracking-[6px] text-center mb-[48px]'>what we do</h1>
            <div className='flex justify-between h-[280px] w-full gap-2'>
                {/* Foto 1 block */}
                <div>
                    <Image className='outline outline-offset-[-8px] outline-white rounded-lg' src="/images/services-foto-1.svg" alt='foto-1' width={266.38} height={204.91}/>
                    <p className='uppercase text-white tracking-[2.7px] text-[18px] mb-[28px]'>Photography</p>
                    <p className='uppercase text-white tracking-[1.5px] text-[10px]'>view gallery</p>
                </div>
                {/* Foto 2 block */}
                <div>
                    <Image className='outline outline-offset-[-8px] outline-white rounded-lg' src="/images/services-foto-2.svg" alt='foto-2' width={266.38} height={204.91}/>
                    <p className='uppercase text-white tracking-[2.7px] text-[18px] mb-[28px]'>videography</p>
                    <p className='uppercase text-white tracking-[1.5px] text-[10px]'>view gallery</p>
                </div>
                {/* Foto 3 block */}
                <div>
                    <Image className='outline outline-offset-[-8px] outline-white rounded-lg' src="/images/services-foto-3.svg" alt='foto-3' width={266.38} height={204.91}/>
                    <p className='uppercase text-white tracking-[2.7px] text-[18px] mb-[28px]'>location scouting </p>
                    <p className='uppercase text-white tracking-[1.5px] text-[10px]'>view gallery</p>
                </div>
                {/* Foto 4 block */}
                <div>
                    <Image className='outline outline-offset-[-8px] outline-white rounded-lg' src="/images/services-foto-4.svg" alt='foto-4' width={266.38} height={204.91}/>
                    <p className='uppercase text-white tracking-[2.7px] text-[18px] mb-[28px]'>social media</p>
                    <p className='uppercase text-white tracking-[1.5px] text-[10px]'>view gallery</p>
                </div>
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Services