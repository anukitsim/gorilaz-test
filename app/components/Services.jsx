"use client"

import { useState } from 'react'
import Image from 'next/image'
import Popup from './Popup';

const Services = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleImageClick = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };

  return (
    <section className='flex flex-col items-center mt-[112.45px]'>
    
        <div className='w-[100%] h-[1px] bg-[#E9E8EF]' />
        <div className='flex h-[336px] w-9/12 items-center relative place-content-between'>
        <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>   
        <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>   
            <Image src="/images/REC-FOTO.svg" alt='REC_FOTO' width={60} height={18.04} className='self-start mt-[32px] ml-8'/>
            
            <div className='flex flex-row gap-8 mr-[105px]'>
                <div className='flex w-[325px] h-[250px] justify-center'>
                    <p className='uppercase absolute text-white font-VcrMono tracking-[5.25px] text-4xl  self-center '>Photography</p>
                    <Image src="/images/servicesBlockFoto-1.svg" alt='FOTO' width={325} height={250} />
                </div>
                <div className='flex flex-col  justify-around'>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Portrait</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Landscape </p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Urban</p> 
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Real estate</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Documentary</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Advertising</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Events</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Photojournalism</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Aerial</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Film</p>
                </div>
            </div>
            <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='self-start mt-[32px] cursor-pointer mr-8' onClick={handleImageClick}/>
            {isPopupOpen && <Popup onClose={closePopup} />}
        </div>

        <div className='w-[100%] h-[1px] bg-[#E9E8EF]' />

        <div className='flex h-[336px] w-9/12 items-center relative place-content-between'>
        <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>  
        <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>    
            <Image src="/images/REC-FOTO.svg" alt='REC_FOTO' width={60} height={18.04} className='self-start mt-[32px] ml-8'/>
            
            <div className='flex flex-row gap-8 mr-[32px]'>
                <div className='flex w-[325px] h-[250px] justify-center'>
                    <p className='uppercase absolute text-white font-VcrMono tracking-[5.25px] text-4xl  self-center '>videography</p>
                    <Image src="/images/servicesBlockFoto-1.svg" alt='FOTO' width={325} height={250} />
                </div>
                <div className='flex flex-col  justify-around'>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>ACTION & ADVENTURE</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>DOCUMENTARY FILMS </p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>BRAND AWARENESS VIDEOS</p> 
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>EVENT VIDEOGRAPHY</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>PRODUCT VIDEOS</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>DRONE VIDEOGRAPHY</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>MOTION-DESIGN</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Promotional Videos</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Tutorial Videos</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Motion Design</p>
                </div>
            </div>
            <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='mr-8 self-start mt-[32px] cursor-pointer' onClick={handleImageClick}/>
            {isPopupOpen && <Popup onClose={closePopup} />}
        </div>

        <div className='w-[100%] h-[1px] bg-[#E9E8EF]' />

        <div className='flex h-[336px] w-9/12 items-center relative  place-content-between'>
        <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div> 
        <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>     
            <Image src="/images/REC-FOTO.svg" alt='REC_FOTO' width={60} height={18.04} className='self-start mt-[32px] ml-8'/>
            
            <div className='flex flex-row gap-8 mr-[30px]'>
                <div className='flex w-[325px] h-[250px] justify-center'>
                    <p className='uppercase absolute text-white font-VcrMono tracking-[5.25px] text-4xl  self-center '>location<br />scouting</p>

                    <Image src="/images/servicesBlockFoto-1.svg" alt='FOTO' width={325} height={250} />
                </div>
                <div className='flex flex-col  justify-around pt-[40px] pb-[40px]'>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Finding suitable <br /> places for shooting;</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Searching for interior <br /> or exterior venues </p>
                </div>
            </div>
            <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='self-start mt-[32px] mr-8 cursor-pointer' onClick={handleImageClick}/>
            {isPopupOpen && <Popup onClose={closePopup} />}
        </div>

        <div className='w-[100%] h-[1px] bg-[#E9E8EF]' />

        <div className='flex h-[336px] w-9/12 items-center relative place-content-between'>
        <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div> 
        <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>     
            <Image src="/images/REC-FOTO.svg" alt='REC_FOTO' width={60} height={18.04} className='self-start mt-[32px] ml-8'/>
            
            <div className='flex flex-row gap-8 mr-[10px]'>
                <div className='flex w-[325px] h-[250px] justify-center'>
                    <p className='uppercase absolute text-white font-VcrMono tracking-[5.25px] text-4xl  self-center '>social media</p>
                    <Image src="/images/servicesBlockFoto-1.svg" alt='FOTO' width={325} height={250} />
                </div>
                <div className='flex flex-col  justify-around pt-[30px] pb-[30px]'>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Social Media Content</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Graphic design </p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Social Media Advertising</p> 
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Monitoring and Reporting</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Influencer Marketing</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Community Management</p>
                    <p className='text-white uppercase font-VcrMono text-sm tracking-[2.25px]'>Social Media Audits</p>
                </div>
            </div>
            <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='mr-8 self-start mt-[32px] cursor-pointer' onClick={handleImageClick}/>
            {isPopupOpen && <Popup onClose={closePopup} />}
        </div>
        
        <div className='w-[100%] h-[1px] bg-[#E9E8EF]' />
    </section>
  )
}

export default Services