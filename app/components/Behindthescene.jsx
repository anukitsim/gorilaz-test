import React from 'react'
import Image from 'next/image'


const Behindthescene = () => {
  return (
    <section className="md:ml-0 sm:ml-2 md:w-full sm:w-full mt-[130px] overflow-hidden">
  <div className='flex justify-center  items-center relative flex-col md:mt-40 sm:mt-10 mb-[250px]'>
      
        
      <div className='w-9/12 md:h-[1028px] sm:h-[700px] relative flex flex-col'>

          <div className='absolute left-0 top-0 bottom-0 w-2 h-[1028px] bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div> 

          <div className='md:w-[650.5px] sm:w-[272px] md:h-[148.27px] sm:h-[97px] flex flex-col justify-between md:ml-[24.5%] sm:ml-5 sm:mt-10 md:mt-0'>
              <h1 className='uppercase tracking-[2.4px] font-VcrMono text-[#73E338] md:text-[24px] sm:text-[10px] text-center'>Welcome to Gorillas' Production,</h1>
              <p className='uppercase tracking-[1.5px] font-VcrMono text-white md:text-[15px] sm:ml-1 md:ml-0 sm:text-[8px]'>our own wild jungle. Here, a team of professional, friendly gorillas works
                  round the clock, weaving magic. It's the place 'Where Every 
                  Story Finds Its Extraordinary Frame. Stay tuned for our behind-the-scenes 
                  antics—Gorillas’-style! </p>
          </div>

          <Image className='absolute md:left-[38.5%] sm:left-10 md:top-[192px] sm:top-[-60px] md:w-[974.297px] md:h-[799.968px] sm:w-[332.62px] sm:h-[640.07px]' src="/images/behind-the-scene-decor.svg" alt='decor-foto' width={974.297} height={799.968}/>

          {/* Block 1 */}
          <div className='md:w-[80%] sm:w-full h-[300.94px] flex md:flex-row sm:flex-col gap-28 md:mt-[81px] sm:mt-[70px] md:ml-[24.5%] sm:ml-14'>
              <Image className='outline outline-offset-[-8px] outline-white rounded-lg z-10 md:w-[400px] md:h-[300px] sm:w-[160px] sm:h-[120px]' src="/images/behindthescene-foto-1.svg" alt='foto' width={400} height={300}/>
              <div className='md:mt-[104px] sm:mt-[-50px]'>
                  <h1 className='uppercase tracking-[2px]  font-VcrMono text-[#73E338] md:text-[20px] sm:text-[10px] min-w-[399px] '>Unveiling the Gorilla Hustle:</h1> 
                  <h1 className='uppercase tracking-[2px]  font-VcrMono text-[#73E338] md:text-[20px] sm:text-[10px] ml-[14px]'>From Concept to Creation</h1>
              </div>
          </div>

          {/* Block 2 */}
          <div className='w-[80%] h-[403.94px] flex md:flex-row sm:flex-col-reverse md:gap-28 sm:gap-5 md:mt-[81px] sm:mt-[50px] ml-[24.5%] z-10'>
              <div className='flex flex-col md:w-[380px] sm:w-[198px] md:h-[402.3px] sm:h-[120px]'>               
                  <h1 className='uppercase tracking-[1.5px] font-VcrMono text-white md:text-[15px] sm:text-[7px] md:w-[410px] sm:w-[250px] h-[200px] z-10'>
                  Ever tried catching a gorilla? They're the jet-setters of the animal kingdom, zipping
                  across continents faster than you can say 'snap.' Wrangling them into one spot? Now
                  that's a feat. Roles in our team aren't just about producing or editing; we've got a
                  specialist in the art of gorilla-speed communication, ensuring our internal kitchen stays piping hot!
                  </h1>
                  <h1 className='uppercase tracking-[1.5px] font-VcrMono text-white md:text-[15px] sm:pt-5 md:pt-0 sm:text-[7px] md:mt-[10%] sm:mt-0 md:w-[410px] md:h-[60px] sm:w-[250px] sm:h-[80px] z-10'>
                  Ah, the magic word: <span className='text-[#73E338]'>'Order!'</span>  Everyone wants their masterpiece yesterday, and time becomes our own nemesis.
                  We're sprinting through client details, scripting, scouting locations, prepping actors,
                  gathering specialized gear—hop, hop, direct to production, and voilà, the project's a wrap in a blink.
                  </h1>
              </div>
              <div className='md:mt-[35px] sm:mt-0 md:w-[400px] md:h-[300px] sm:w-[168px] sm:h-[126px]'>
                  <Image className='outline outline-offset-[-8px] outline-white rounded-lg z-10' src="/images/behindthescene-foto-2.svg" alt='foto' width={400} height={300}/>
              </div>
          </div>
      
      </div>    
  </div>
    </section>
  
  )
}

export default Behindthescene
