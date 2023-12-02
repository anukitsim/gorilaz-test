import React from 'react'
import Image from 'next/image'

const Process = () => {
  return (
    
   
    <div className='flex justify-start mt-[126px] items-center flex-col h-[1361px]'>
        <div className='w-[74.5%] bg-[url("/images/footerLayer.svg")] bg-repeat-x text-white flex justify-center self-center p-[37px]'/>
         <div className='flex justify-center flex-row w-[70.03%] mb-[68.75px]'>
        
            {/*  1-3 FOTO BLOCK */}
            <div className='flex flex-col w-[420px] h-[668.28px] justify-between pb-[65px] relative  mr-[46px]'> 
                <div className='flex flex-row relative w-[505px]'>
                    <div className='flex flex-col'>
                        <Image src="/images/processGap-1.svg" alt='process-gap-foto-1' width={418.5} height={22.32} className='absolute top-[135px] left-[40px]'/>    
                        <Image src='/images/processFoto-1.svg' alt='behindthescene-foto-1' width={400} height={300} className='z-10'/>  
                        <div className='flex justify-center items-center w-[263.5px] h-[80px] bg-[#73E338]  absolute trackin-wide
                                         left-[36%] top-[-21px] uppercase font-VcrMono te3xt-xl z-20'>production</div> 

                        <div className='flex flex-col gap-[13px] mb-[86.5px]'>
                            <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Video objectivesDistribution Channels</p>
                            <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Type of VideoConcept development/Scripting</p>
                            <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Talent and Crew Acquisition</p>
                            <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Scheduling</p>
                            <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Equipment Acquisition</p>
                            <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Location scouting</p>
                            <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Budgeting</p>
                        </div>  
                    </div>
                    <div className='flex absolute right-[12px] top-[-20px] '>
                        <Image src="/images/gapProcessFoto.svg" alt='gap-foto' width={27.71} height={668.28} className=''/>
                    </div>  
                </div>

                <div className='flex flex-col w-[420px] h-[563px] justify-between pb-[110px] relative ml-[23%] mt-[1%] '> 
                <Image src='/images/processFoto-3.svg' alt='behindthescene-foto-1' width={400} height={300} className='z-10'/>   
                <div className='flex flex-col gap-[15px] mt-[15px]'>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Receipt of Raw Footage</p>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Storage and Organization of Raw Footage</p>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Build the Rough CutReceive Notes and Refine</p>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>The Rough Cut Into a Final "Locked"</p>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>CutVisual Effects (VFX) / Color management</p>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Sound Effects/Mixing </p>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Final delivery</p>
                </div>  
                <div className='flex justify-center items-center w-[263.5px] h-[80px] bg-[#73E338] absolute trackin-wide
                                left-[43px] top-[-38px] uppercase font-VcrMono text-xl z-10'>production</div>                                                                                                              
            </div> 
                                                                                                                     
            </div> 

            {/* 2 FOTO BLOCK */}
            <div className='flex flex-col w-[420px] h-[563px] justify-between pb-[110px] relative mt-[20%] ml-[7.1%]'> 
                <Image src="/images/processGap-2.svg" alt='process-gap-foto-1' width={418.5} height={22.32} className='absolute top-[145px] left-[-50px]'/>
                <Image src='/images/processFoto-2.svg' alt='behindthescene-foto-1' width={400} height={300} className='z-10'/>   
                <div className='flex flex-col gap-[15px] '>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Crew Recruitment</p>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Transport and accommodation Management</p>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>Arts and Props</p>
                    <p className='font-VcrMono text-white text-sm uppercase tracking-[1.5px]'>SFX and Stunts</p>
                </div>  
                <div className='flex justify-center items-center w-[263.5px] h-[80px] bg-[#73E338] absolute trackin-wide  left-[43px] top-[-38px] uppercase font-VcrMono text-xl z-10'>production</div>                                                                                                              
            </div> 
            
        </div>   
    </div>
  )
}

export default Process





// noesi

