import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className='w-full h-full bg-black globalLoader'>
        <div className='w-11/12 h-3/4 flex justify-center items-center'>
        <div className="absolute inset-0 flex items-center justify-center">
      <div className="md:w-1/4 md:h-[133px] sm:w-[65.861px] sm:h-[31.808px] border-t-2 border-l-2 border-white  absolute left-10 top-10 bounce"></div>
      <div className="md:w-1/4 md:h-[133px] sm:w-[65.861px] sm:h-[31.808px] border-t-2 border-r-2 border-white  absolute right-10 top-10 bounce"></div>
      <div className="md:w-2/6 md:h-[133.391px] sm:w-[81px] sm:h-[31px] border-b-2 border-l-2 border-white  absolute left-10 md:bottom-10 sm:bottom-0 bounce"></div>
      <div className="md:w-2/6 md:h-[133px] sm:w-[81px] sm:h-[31px] border-b-2 border-r-2 border-white  absolute right-10 md:bottom-10 sm:bottom-0 bounce"></div>
      <Image src='/images/loader.svg' alt='loader' width={300} height={188} className='loaderImage'/>
    </div>
    
        </div>
      
    </div>
  )
}

export default Loading
