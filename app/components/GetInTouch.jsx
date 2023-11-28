import React from 'react'

const GetInTouch = () => {
  return (
    <section>
        <div className='h-[100px] w-full bg-[#73E338] flex justify-center items-center'>
           <p className='text-black text-3xl'>get in touch</p>
        </div>
        <form action="post" className='flex items-center gap-5 flex-col pt-36'>
            <div className='flex flex-row gap-5 w-6/12'>
                <input type="text" required placeholder='FULL NAME*' className='w-2/4 h-[50px] p-5 bg-transparent border rounded-md'/>
                <input type="email" required placeholder='EMAIL*' className='w-2/4 h-[50px] p-5 bg-transparent border rounded-md'/>
            </div>
            <input type="text" required placeholder='SUBJECT*' className='w-2/4 h-[50px] p-5 bg-transparent border rounded-md'/>
            <textarea placeholder='MESSAGE*' className='w-2/4 h-[185px] p-5 bg-transparent border rounded-md'/>
            <button type='submit' className='w-2/4 h-[69px] text-black text-sm rounded-md bg-[#73E338]'>SUBMIT NOW</button>
        </form>
    </section>
  )
}

export default GetInTouch