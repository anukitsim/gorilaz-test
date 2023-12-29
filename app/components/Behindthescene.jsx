"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import getImageUrl from "./ImageUtils"; 


const Behindthescene = () => {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('https://gorillasproduction.pro/wp-json/wp/v2/behind-the-scene');
          console.log('Response Headers:', res.headers);
          if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
          }
  
          const data = await res.json();
          console.log("Fetched production data:", data);
  
          const formattedData = await Promise.all(
            data.map(async (scene) => {
              const imageId = scene.acf.image;
              const imageUrl = await getImageUrl(imageId, apiUrl);
  
              return {
                imageUrl,
              };
            })
          );
  
          setData(formattedData);
        } catch (error) {
          console.error("Error fetching production data:", error.message);
        }
      };
  
      fetchData();
    }, []);
  return (
    <section className="md:ml-0 sm:ml-2 md:w-full sm:w-full 2sm:mb-[40px]  md:h-[1200px] overflow-hidden">
  <div className='flex justify-center sm:h-[850px]  items-center relative flex-col md:mt-40 sm:mt-10 '>
      
        
      <div className='w-9/12 md:h-[1150px] sm:h-[1150px] ml-9  relative flex flex-col'>

          <div className='absolute left-0 top-0 bottom-0 w-2 2sm:h-[848px] md:h-[1100px] sm:h-[815px] bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div> 

          <div className='md:w-[650.5px] sm:w-[225px] sm:h-[97px] 2sm:ml-[55px] 2sm:w-[472px] 2sm:h-[107px] md:h-[148.27px]  flex flex-col justify-between md:ml-[65px] 2md:ml-[188px] sm:ml-[30px] sm:mt-10 md:mt-0'>
              <h1 className='uppercase tracking-[2.4px] font-VcrMono text-[#73E338] md:text-[24px] 2sm:text-[18px] sm:mb-[10px] sm:text-[10px] sm:tracking-[1px] text-center'>Welcome to Gorillas' Production,</h1>
              <p className='uppercase tracking-[1.5px] font-VcrMono text-white md:text-[15px] sm:ml-1 md:ml-0 2sm:text-[11px] sm:text-[8px] sm:tracking-[0.8px]'>our own wild jungle. Here, a team of professional, friendly gorillas works
                  round the clock, weaving magic. It's the place 'Where Every 
                  Story Finds Its Extraordinary Frame. Stay tuned for our behind-the-scenes 
                  antics—Gorillas’-style! </p>
          </div>

          <Image className='absolute md:left-[247px] 2md:left-[370px] sm:left-10 md:top-[192px] sm:top-[-60px] sm:hidden 2sm:block 2sm:top-[172px] 2sm:left-[145px]  md:min-w-[974.297px] md:min-h-[799.968px] 2sm:min-w-[764.297px] 2sm:min-h-[579.968px] sm:w-[332.62px] sm:h-[640.07] z-0 ' src="/images/behind-the-scene-decor.svg" alt='decor-foto' width={974.297} height={799.968}/>
          <Image className='absolute sm:block 2sm:hidden top-[170px] left-[20px] sm:min-w-[333.5px] sm:min-h-[640.5px] ' src="/images/behindthescene-decor-foto-2.svg" alt='decor-foto' width={333.5} height={640.5}/>
          {/* Block 1 */}
          <div className='md:w-[80%] sm:w-[300px]  flex md:flex-row sm:flex-col 2md:ml-[188px] 2sm:gap-24 2sm:flex-row 2md:gap-28 md:gap-28 2md:ml-[188px]  md:mt-[81px] sm:mt-[60px] md:ml-[65px] sm:ml-14'>
              <Image className='outline outline-offset-[-8px] outline-white rounded-lg z-10 md:w-[400px] md:h-[300px] 2sm:w-[285px] 2sm:h-[215px] sm:w-[160px] sm:h-[120px]' src={data.length > 1 ? data[1].imageUrl : ""} alt='foto' width={400} height={300}/>
              <div className='md:mt-[104px] 2sm:mt-[80px] sm:mt-[28px] sm:ml-[-20px] sm:pr-[20px]  md:ml-[1px]'>
                  <h1 className='uppercase tracking-[2px] font-VcrMono text-[#73E338] md:text-[20px] 2sm:text-[13px] sm:text-[10px] min-w-[399px] '>Unveiling the Gorilla Hustle:</h1> 
                  <h1 className='uppercase tracking-[2px] font-VcrMono text-[#73E338] md:text-[20px] 2sm:text-[13px] sm:text-[10px] ml-[14px]'>From Concept to Creation</h1>
              </div>
              
          </div>

          {/* Block 2 */}
          <div className='md:w-[80%] sm:w-full h-[300.94px] 2sm:mt-[70px] flex md:flex-row sm:flex-col sm:flex-col-reverse 2sm:flex-row  2sm:gap-28 sm:gap-[50px] md:mt-[81px] sm:mt-[25px] md:ml-[65px] 2md:ml-[188px] sm:ml-14'>
              <div className='flex flex-col md:w-[380px] sm:w-[198px] md:h-[402.3px] sm:h-[120px] 2sm:w-[260px] 2sm:mt-[20px] z-50'>               
                  <h1 className='uppercase 2sm:tracking-[1.5px] sm:tracking-[0.7px] font-VcrMono text-white md:text-[15px] 2sm:text-[11px] sm:text-[7px] 2sm:w-[330px] md:w-[410px] sm:w-[200px] h-[200px] z-10'>
                  Ever tried catching a gorilla? They're the jet-setters of the animal kingdom, zipping
                  across continents faster than you can say 'snap.' Wrangling them into one spot? Now
                  that's a feat. Roles in our team aren't just about producing or editing; we've got a
                  specialist in the art of gorilla-speed communication, ensuring our internal kitchen stays piping hot!
                  </h1>
                  <h1 className='uppercase tracking-[1.5px] font-VcrMono text-white md:text-[15px] 2sm:text-[11px] sm:pt-5 md:pt-0 sm:text-[7px] md:mt-[10%] sm:mt-0 2sm:w-[330px] md:w-[410px] md:h-[60px] sm:w-[200px] sm:h-[80px] z-10'>
                  Ah, the magic word: <span className='text-[#73E338]'>'Order!'</span>  Everyone wants their masterpiece yesterday, and time becomes our own nemesis.
                  We're sprinting through client details, scripting, scouting locations, prepping actors,
                  gathering specialized gear—hop, hop, direct to production, and voilà, the project's a wrap in a blink.
                  </h1>
              </div>
              <div className='md:mt-[35px] sm:mt-0 md:w-[400px] md:h-[300px] sm:w-[168px] sm:h-[126px] z-10'>
                  <Image className='outline outline-offset-[-8px] outline-white rounded-lg z-50 md:min-w-[400px] md:min-h-[300px] 2sm:min-w-[285px] 2sm:min-h-[215px] sm:w-[160px] sm:h-[120px] 2sm:mt-[30px]' src={data.length > 0 ? data[0].imageUrl : ""} alt='foto' width={400} height={300}/>
              </div>
          </div>
      
      </div>    
  </div>
    </section>
  
  )
}

export default Behindthescene
