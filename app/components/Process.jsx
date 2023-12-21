import React from 'react'
import Image from 'next/image'

const Process = () => {
  return (
    
   
    <div className='flex justify-start md:mt-[126px] 2sm:mt-[80px] sm:mt-[50px] items-center flex-col md:h-[1361px] 2sm:h-[1340px] sm:h-[1100px] gap-5'>      
         <div className='flex justify-center relative flex-row w-[72%]'>
            {/* Decor lines */}          
            <div className='absolute left-0 top-0 bottom-0 w-2 md:h-[1270px] 2sm:h-[1450px] sm:h-[1120px] bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
            <div className='absolute right-0 top-0 bottom-0 w-2 md:h-[1270px] 2sm:h-[1450px] sm:h-[1120px] bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>             
            {/* First block */}
            <div className='md:w-[75%] md:h-[299.27px] sm:w-[50%] sm:h-[320px] relative flex md:flex-row sm:flex-col md:mb-[70px] sm:mb-[0px] 2sm:mb-[120px] mt-[30px]'>
                <div className='md:min-w-[338.05px] relative md:h-[299.27px] flex flex-col sm:gap-3 md:justify-around sm:justify-center 2sm:min-w-[230.05px] 2sm:max-w-[230.05px] sm:min-w-[170.05px] sm:max-w-[170.05px]'>
                    <p className='uppercase font-VcrMono text-white md:text-[20px] md:pl-[40px] 2sm:pr-[10px] sm:pr-[20px]  2sm:text-[17px]  sm:text-[13px] tracking-[3px] text-center'>pre production</p>
                    <div className=''> 
                        <Image src="/images/process-foto-decor.svg" alt='decor-foto' width={338.05} height={244.27} 
                        className='absolute sm:left-[-13.95px] 2sm:left-[-14.5px] md:left-[19.5px] md:top-[53.8px] sm:top-[3.5px] 2sm:top-[31px] z-10 md:w-[338.5px]
                                   md:h-[244.27px] sm:w-[230.5px] sm:h-[200.27px]'/>
                    </div>
                    <div className='md:w-[241.05px] md:h-[244.27px] sm:w-[122.05px] sm:h-[120.27px] 2sm:w-[162.05px] 2sm:h-[164.27px] relative md:self-center 
                    sm:left-[10px] 2sm:left-[19px] rounded-full bg-[url("/images/process-foto-1.svg")] bg-no-repeat bg-center bg-cover'/>
                </div>
                <div className='flex flex-col h-[195px] md:gap-[20px] 2sm:gap-[5px] sm:gap-[5px] md:mt-[50px] sm:mt-[20px] 2sm:mt-[20px] sm:ml-[27px] 2sm:ml-[30px] md:ml-[70px] lg:ml-[130px]'>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Video objectives Distribution Channels </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Type of Video Concept development / Scripting</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'> Talent and Crew Acquisition </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Scheduling </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'> Equipment Acquisition </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Location scouting</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Budgeting</p>
                </div>
                </div>
            </div> 

        {/* 2 Block */}
        <div className='flex justify-center relative flex-row w-9/12'>
            
            <div className='md:w-[75%] md:h-[299.27px] sm:w-[50%] sm:h-[320px] relative flex md:flex-row sm:flex-col md:mb-[70px] sm:mb-[0px] 2sm:mb-[50px] mt-[30px]'>
            <div className='md:min-w-[338.05px] relative md:h-[299.27px] flex flex-col sm:gap-3 md:justify-around sm:justify-center 2sm:min-w-[230.05px] 2sm:max-w-[230.05px] sm:min-w-[170.05px] sm:max-w-[170.05px]'>
                    <p className='uppercase font-VcrMono text-white md:text-[20px] md:pl-[40px] 2sm:pr-[10px] sm:pr-[20px] 2sm:text-[17px] sm:text-[13px] tracking-[3px] text-center'>production</p>
                    <div className=''> 
                        <Image src="/images/process-foto-decor.svg" alt='decor-foto' width={338.05} height={244.27} className='absolute sm:left-[-13.95px] 2sm:left-[-14.5px] md:left-[19.5px] md:top-[51.8px] sm:top-[3.5px] 2sm:top-[31px] z-10 md:w-[338.5px]
                                   md:h-[244.27px] sm:w-[230.5px] sm:h-[200.27px]'/>
                    </div>
                    <div className='md:w-[241.05px] md:h-[244.27px] sm:w-[122.05px] sm:h-[120.27px] 2sm:w-[162.05px] 2sm:h-[164.27px] relative md:self-center 
                    sm:left-[10px] 2sm:left-[19px] rounded-full bg-[url("/images/process-foto-1.svg")] bg-no-repeat bg-center bg-cover' />
                </div>
                <div className='flex flex-col h-[195px] md:gap-[20px] 2sm:gap-[5px] sm:gap-[5px] md:mt-[50px] sm:mt-[20px] 2sm:mt-[20px] sm:ml-[27px] 2sm:ml-[30px] md:ml-[70px] lg:ml-[130px]'>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Crew Recruitment </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Transport and accommodation Management</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'> Arts and Props</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>SFX and Stunts </p>
                </div>
            </div>
        </div>

        {/* 3 Block */}
        <div className='flex justify-center relative flex-row w-9/12'>
            
            <div className='md:w-[75%] md:h-[299.27px] sm:w-[50%] sm:h-[320px] relative flex md:flex-row sm:flex-col md:mb-[70px] sm:mb-[0px] md:mt-[30px] 2sm:mt-[30px] sm:mt-[0px]'>
                    <div className='md:min-w-[338.05px] relative md:h-[299.27px] flex flex-col sm:gap-3 md:justify-around sm:justify-center 2sm:min-w-[230.05px] 2sm:max-w-[230.05px] sm:min-w-[170.05px] sm:max-w-[170.05px]'>
                        <p className='uppercase font-VcrMono text-white md:text-[20px] md:pl-[40px] 2sm:pr-[10px] sm:pr-[20px] 2sm:text-[17px] sm:text-[13px] tracking-[3px] text-center'>pre production</p>
                        <div className=''> 
                            <Image src="/images/process-foto-decor.svg" alt='decor-foto' width={338.05} height={244.27} className='absolute sm:left-[-13.95px] 2sm:left-[-14.5px] md:left-[19.5px] md:top-[51.8px] sm:top-[3.5px] 2sm:top-[31px] z-10 md:w-[338.5px]
                                   md:h-[244.27px] sm:w-[230.5px] sm:h-[200.27px]'/>
                        </div>
                        <div className='md:w-[241.05px] md:h-[244.27px] sm:w-[122.05px] sm:h-[120.27px] 2sm:w-[162.05px] 2sm:h-[164.27px] relative md:self-center 
                        sm:left-[10px] 2sm:left-[19px] rounded-full bg-[url("/images/process-foto-1.svg")] bg-no-repeat bg-center bg-cover'/>
                </div>
                <div className='flex flex-col h-[195px] md:gap-[20px] 2sm:gap-[5px] sm:gap-[5px] md:mt-[50px] sm:mt-[20px] 2sm:mt-[20px] sm:ml-[27px] 2sm:ml-[30px] md:ml-[70px] lg:ml-[130px]'>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Receipt of Raw Footage</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Storage and Organization of Raw Footage</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Build the Rough CutReceive Notes and Refine </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>The Rough Cut Into a Final "Locked" </p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Cut Visual Effects (VFX) / Color management</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Sound Effects / Mixing</p>
                    <p className='uppercase font-VcrMono text-white tracking-[1.5px] md:text-[15px] 2sm:text-[12px] sm:text-[7px]'>Final delivery</p>
                </div>
            </div>

            

        </div>  
    </div>
  )
}

export default Process





// noesi
