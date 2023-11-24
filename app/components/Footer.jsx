import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className='flex flex-col border-t border-b  justify-center pt-20 mb-20 items-center gap-20 relative'>
        <div className="absolute -top-3 left-0 right-0 z-10" style={{ background: 'url(/images/footerLayer.svg) repeat-x'  }}></div>
       
  <div>
</div>
        <div className='flex w-6/12 p-8 self-center items-center justify-around relative'>
          
            <div className="w-52 h-14 border-t-2 border-l-2 border-white  absolute -left-1 -top-1"></div>
            <div className="w-52 h-14 border-t-2 border-r-2 border-white  absolute -right-1 -top-1"></div>
            <div className="w-52 h-14 border-b-2 border-l-2 border-white  absolute -left-1 -bottom-1"></div>
            <div className="w-52 h-14 border-b-2 border-r-2 border-white  absolute -right-1 -bottom-1"></div>
            {/* FOOTER BOX-WHAT WE DO */}
            <div className='flex flex-col justify-around w-40 h-40'>
                <h3 className='font-VcrMono text-[#73E338] text-[13px] tracking-[1.95px] '>WHAT WE DO</h3>
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px]'>PROCESS</Link>   
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px]'>PHOTOGRAPHY</Link>
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px]'>VIDEOGRAPHY</Link>
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px]'>LOCATION SCOUTING</Link>
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px] z-10'>SOCIAL MEDIA</Link>                   
            </div>

            {/* FOOTER BOX-GORILAS */}
            <div className='flex flex-col justify-around w-40 h-40'>
                <h3 className='font-VcrMono text-[#73E338] text-[13px] tracking-[1.95px]'>GORILAS'</h3>
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px]'>OUR TEAM</Link>   
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px]'>BEHIND THE SCENE</Link>
                <br />
                <h3 className='font-VcrMono text-[#73E338] text-[13px] tracking-[1.5px]'>PORTFOLIO</h3>
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px]'>GORILAS'INDUSTRIES</Link>                 
            </div>

            {/* FOOTER BOX-CONTACT */}
            <div className='flex flex-col justify-around w-40 h-40'>
                <h3 className='font-VcrMono text-[#73E338] text-[13px] tracking-[1.95px]'>CONTACT</h3>
                <div className='flex flex-row gap-2'>
                    <Link href='#' className=''>
                        <Image  src='/images/facebook.svg' alt='facebook-foto' width={10.616} height={11.458} /> 
                    </Link> 
                    <Link href='#' className=''>
                        <Image  src='/images/instagram.svg' alt='facebook-foto' width={10.616} height={11.458} /> 
                    </Link>
                    <Link href='#' className=''>
                        <Image  src='/images/whatsupp.svg' alt='facebook-foto' width={10.616} height={11.458} /> 
                    </Link>
                    <Link href='#' className=''>
                        <Image  src='/images/google.svg' alt='facebook-foto' width={10.616} height={11.458} /> 
                    </Link> 
                </div> 
                <br /> 
                <h3 className='font-VcrMono text-[#73E338] text-[13px] tracking-[1.95px] mb-[20px]'>CONTACT</h3>
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px] mb-[10px]'>+995 557 46 04 06</Link>
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px] mb-[10px]'>+995 593 50 88 48</Link>
                <Link href='#' className='font-VcrMono text-[10px] tracking-[1.5px] mb-[10px] z-10'>INFO@GORILLASPRODUCTION.GE</Link>                   
            </div>
            
            
            
            
        </div>
        <div>
            <Image src='/images/logo.svg' alt='logo-foto' width={103} height={103} className='flex mx-auto'/>
            <br />
            <p className='flex justify-center font-VcrMono text-[15px] tracking-[2.25px]'>GORILAS' PRODUCTION</p>
        </div>

       
     </div>
    
    

  )
}
