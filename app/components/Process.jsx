import React from 'react'
import Image from 'next/image'

const Process = () => {
  return (
    
   
    <div className='flex justify-start mt-[126px] items-center flex-col h-[1361px] gap-5'>      
         <div className='flex justify-center relative flex-row w-9/12'>
            {/* Decor lines */}          
            <div className='absolute left-0 top-0 bottom-0 w-2 h-[1200px] bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
            <div className='absolute right-0 top-0 bottom-0 w-2 h-[1200px] bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>             
            {/* First block */}
            <div className='w-[75%] h-[299.27px] relative flex  mb-[70px] mt-[30px]'>
                <div className='w-[338.05px] relative h-[299.27px] flex flex-col  justify-around min-w-[338.05px]'>
                    <p className='uppercase font-VcrMono text-white text-[20px] tracking-[3px] text-center'>pre production</p>
                    <div className=''> 
                        <Image src="/images/process-foto-decor.svg" alt='decor-foto' width={338.05} height={244.27} className='absolute left-[0.5px] top-[49px] z-10'/>
                    </div>
                    <div className='w-[241.05px] h-[244.27px] relative self-center rounded-full bg-[url("/images/process-foto-1.svg")] bg-no-repeat bg-center bg-cover'/>
                </div>
                <div className='flex flex-col h-[195px] gap-[10px] mt-[50px] ml-[10%]'>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Video objectives Distribution Channels </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Type of Video Concept development / Scripting</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'> Talent and Crew Acquisition </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Scheduling </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'> Equipment Acquisition </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Location scouting</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Budgeting</p>
                </div>
            </div>
        </div> 

        {/* 2 Block */}
        <div className='flex justify-center relative flex-row w-9/12 mb-[70px]'>
            
            <div className='w-[75%] h-[299.27px] relative flex '>
            <div className='w-[338.05px] relative h-[299.27px] flex flex-col  justify-around min-w-[338.05px]'>
                    <p className='uppercase font-VcrMono text-white text-[20px] tracking-[3px] text-center'>pre production</p>
                    <div className=''> 
                        <Image src="/images/process-foto-decor.svg" alt='decor-foto' width={338.05} height={244.27} className='absolute left-[0.5px] top-[49px] z-10'/>
                    </div>
                    <div className='w-[241.05px] h-[244.27px] relative self-center rounded-full bg-[url("/images/process-foto-1.svg")] bg-no-repeat bg-center bg-cover' />
                </div>
                <div className='flex flex-col h-[195px] gap-[10px] mt-[100px] ml-[10%]'>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Crew Recruitment </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Transport and accommodation Management</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'> Arts and Props</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>SFX and Stunts </p>
                </div>
            </div>
        </div>

        {/* 3 Block */}
        <div className='flex justify-center relative flex-row w-9/12 '>
            
            <div className='w-[75%] h-[299.27px] flex '>
                    <div className='w-[338.05px] relative h-[299.27px] flex flex-col  justify-around min-w-[338.05px]'>
                        <p className='uppercase font-VcrMono text-white text-[20px] tracking-[3px] text-center'>pre production</p>
                        <div className=''> 
                            <Image src="/images/process-foto-decor.svg" alt='decor-foto' width={338.05} height={244.27} className='absolute left-[0.5px] top-[49px] z-10'/>
                        </div>
                        <div className='w-[241.05px] h-[244.27px] relative self-center rounded-full bg-[url("/images/process-foto-1.svg")] bg-no-repeat bg-center bg-cover'/>
                </div>
                <div className='flex flex-col h-[195px] gap-[10px] mt-[50px] ml-[10%]'>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Receipt of Raw Footage</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Storage and Organization of Raw Footage</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Build the Rough CutReceive Notes and Refine </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>The Rough Cut Into a Final "Locked" </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Cut Visual Effects (VFX) / Color management</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Sound Effects / Mixing</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] text-[15px]'>Final delivery</p>
                </div>
            </div>

            

        </div>  
    </div>
  )
}

export default Process





// noesi

