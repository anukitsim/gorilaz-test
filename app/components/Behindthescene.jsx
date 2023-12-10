import React from 'react'
import Image from 'next/image'


const Behindthescene = () => {
  return (
    <div className='flex justify-center  items-center relative flex-col mt-40 mb-[250px]'>
        {/* <div className='absolute left-[45%] top-[137px]'>
            <div className='w-[950px] relative h-[890px] flex justify-between'> 
                <div className='w-[1px] absolute h-[840px] bg-[#E9E8EF] ml-[226px] bottom-0'/>
                <div className='w-[1px] absolute h-[840px] bg-[#E9E8EF] ml-[452px] bottom-0'/>
                <div className='w-[1px] absolute h-[840px] bg-[#E9E8EF] ml-[678px] bottom-0'/>
                <div className='w-[1px] absolute h-[420px] bg-[#E9E8EF] ml-[0px] bottom-[420px]'/>

                <div className='w-full absolute h-[1px] bg-[#E9E8EF] mt-[226px]'/>
                <div className='w-[990px] absolute h-[1px] bg-[#E9E8EF] mt-[452px] left-[-40px]'/>
                <div className='w-[750px] absolute h-[1px] bg-[#E9E8EF] mt-[668px] right-0'/>
            </div>
        </div> */}
        
        <div className='w-9/12 h-[1028px] relative flex flex-col  '>

            <div className='absolute left-0 top-0 bottom-0 w-2 h-[1028px] bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div> 

            <div className='w-[650.5px] h-[148.27px] flex flex-col justify-between ml-[24.5%]'>
                <h1 className='uppercase tracking-[2.4px] font-VcrMono text-[#73E338] text-[24px] text-center'>Welcome to Gorillas' Production,</h1>
                <p className='uppercase tracking-[1.5px] font-VcrMono text-white text-[15px]'>our own wild jungle. Here, a team of professional, friendly gorillas works
                    round the clock, weaving magic. It's the place 'Where Every 
                    Story Finds Its Extraordinary Frame. Stay tuned for our behind-the-scenes 
                    antics—Gorillas’-style! </p>
            </div>

            <Image className='absolute left-[38.5%] top-[192px]' src="/images/behind-the-scene-decor.svg" alt='decor-foto' width={974.297} height={799.968}/>

            {/* Block 1 */}
            <div className='w-[80%] h-[300.94px] flex gap-28 mt-[81px] ml-[24.5%] '>
                <Image className='outline outline-offset-[-8px] outline-white rounded-lg z-10' src="/images/behindthescene-foto-1.svg" alt='foto' width={400} height={300}/>
                <div className='mt-[104px]'>
                    <h1 className='uppercase tracking-[2px]  font-VcrMono text-[#73E338] text-[20px] min-w-[399px] '>Unveiling the Gorilla Hustle:</h1> 
                    <h1 className='uppercase tracking-[2px]  font-VcrMono text-[#73E338] text-[20px] ml-[14px]'>From Concept to Creation</h1>
                </div>
            </div>

            {/* Block 2 */}
            <div className='w-[80%] h-[403.94px] flex gap-28 mt-[81px] ml-[24.5%] z-10'>
                <div className='flex flex-col w-[380px] h-[402.3px]'>               
                    <h1 className='uppercase tracking-[1.5px] font-VcrMono text-white text-[15px] w-[410px] h-[200px] z-10'>
                    Ever tried catching a gorilla? They're the jet-setters of the animal kingdom, zipping
                    across continents faster than you can say 'snap.' Wrangling them into one spot? Now
                    that's a feat. Roles in our team aren't just about producing or editing; we've got a
                    specialist in the art of gorilla-speed communication, ensuring our internal kitchen stays piping hot!
                    </h1>
                    <h1 className='uppercase tracking-[1.5px] font-VcrMono text-white text-[15px] mt-[10%] w-[410px] h-[160px] z-10'>
                    Ah, the magic word: <span className='text-[#73E338]'>'Order!'</span>  Everyone wants their masterpiece yesterday, and time becomes our own nemesis.
                    We're sprinting through client details, scripting, scouting locations, prepping actors,
                    gathering specialized gear—hop, hop, direct to production, and voilà, the project's a wrap in a blink.
                    </h1>
                </div>
                <div className='mt-[35px] w-[400px]h-[300px]'>
                    <Image className='outline outline-offset-[-8px] outline-white rounded-lg z-10' src="/images/behindthescene-foto-2.svg" alt='foto' width={400} height={300}/>
                </div>
            </div>
        
        </div>    
    </div>
  )
}

export default Behindthescene
