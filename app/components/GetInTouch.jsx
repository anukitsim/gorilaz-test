import React from 'react'

const GetInTouch = () => {
  return (
    <section className='h-[553px] mt-[60px] flex flex-col'>
    <div className='h-[80px] w-full bg-[#73E338] flex justify-center items-center'>
           <p className='text-black text-xl'>get in touch</p>
        </div>
        <form action="post" className='flex  items-center pt-[60px] gap-1 flex-col'>
            <div className='flex  flex-row w-6/12'>
                <input type="text" required placeholder='FULL NAME*' className='w-1/2 h-[50px] p-5 bg-transparent border rounded-md'/>
                <input type="email" required placeholder='EMAIL*' className='w-1/2 h-[50px] p-5 bg-transparent border rounded-md'/>
            </div>
            <input type="text" required placeholder='SUBJECT*' className='w-2/4 h-[50px] p-5 bg-transparent border rounded-md'/>
            <textarea placeholder='MESSAGE*' className='w-2/4 h-[185px] p-5 bg-transparent border rounded-md'/>
            <button type='submit' className='w-2/4 h-[45px] text-black text-[15px] rounded-md bg-[#73E338]'>SUBMIT NOW</button>
        </form> 
    </section>
  )
}

export default GetInTouch


    {/* 
        */}