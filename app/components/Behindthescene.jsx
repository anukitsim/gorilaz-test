import React from 'react'
import Image from 'next/image'


const Behindthescene = () => {
  return (
    <div className='flex justify-center items-center flex-col mt-40'>
        <div className='w-9/12 bg-[url("/images/footerLayer.svg")] bg-repeat-x text-white flex justify-center self-center p-[37px]'>
            <p className='font-VcrMono text-2xl text-[#73E338] flex justify-center text-center tracking-[2.5px]'>UNVEILING THE GORILLA HUSTLE: <br /> FROM CONCEPT TO CREATION</p>
        </div>
        <div className='flex flex-row w-[70.03%] h-[613] mb-[68.75px]'>
            <div className='flex flex-col w-[60.5%] h-[614px] justify-between items-center pt-[65px]'> 
                <p className='text-sm text-white font-VcrMono tracking-[1.5px] uppercase w-[400px] '>
                    Ever tried catching a gorilla? They're the jet-setters of 
                    the animal kingdom, zipping across continents
                    faster than you can say 'snap.' Wrangling them into one spot? Now that's a feat. Roles in our team 
                    aren't just about producing or editing; we've got a specialist in the art of gorilla-speed communication,
                    ensuring our internal kitchen stays piping hot!</p>

                <Image src='/images/behindthesceneFoto.svg' alt='behindthescene-foto-1' width={400} height={300}/>
            </div>
             <Image className='' sizes="(max-width: 27.71px) 400px, (max-width: 613px) calc(19.71vw - 37px), (min-width: px) 400px, calc(79.17vw - 28px)" src="/images/GapFoto.svg" alt='Gap-Foto' width={27} height={614}/> 
            <div className='flex flex-col w-[60.5%] h-[613px] justify-between items-center  pb-[65px]'> 
                <Image src='/images/behindthesceneFoto.svg' alt='behindthescene-foto-1' width={400} height={300}/>   

                <p className='text-sm text-white font-VcrMono tracking-[1.5px] uppercase w-[400px] '>Ah, the magic word: 'Order!'
                Everyone wants their masterpiece yesterday, and time becomes our own nemesis. We're sprinting through 
                client details, scripting, scouting locations, prepping actors, gathering specialized gear—hop, hop, direct to production,
                and voilà, the project's a wrap in a blink.</p>            
            </div> 
            
        </div> 
        <div className='w-[530.027px] mb-10'>
                <p className='font-VcrMono uppercase text-[#73E338] tracking-[2.5px] text-2xl'>Welcome to Gorillas' Production,</p>
                <p className='font-VcrMono uppercase text-white tracking-[1.5px] text-sm'>our own wild jungle. Here, a team of professional, friendly gorillas works round the clock, weaving magic. 
                    It's the place 'Where Every Story Finds Its Extraordinary Frame.' Stay tuned for our behind-the-scenes antics—Gorillas’-style! </p>
            </div>  
    </div>
  )
}

export default Behindthescene
