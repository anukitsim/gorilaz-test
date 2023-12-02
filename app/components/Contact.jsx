import Image from "next/image"

const Contact = () => {
  return (
    <section className='mt-[112px] w-9/12 h-[709px] mx-auto flex flex-col items-center justify-start gap-14'>
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-[576px]"></div>
        <h1 className='text-[#73E338] text-[30px]'>contact</h1>
        <div className="flex flex-col gap-5 items-center">
        <Image
        src='/images/whatsup.svg'
        alt="whatsup"
        width={60}
        height={61}
         />
         <p className="text-white text-[20px]">+995 593 50 88 48</p>
         <p className="text-white text-[20px]">+995 557 46 04 06</p>
        </div>
        <div className="flex flex-col gap-5 items-center">
        <Image
        src='/images/google.svg'
        alt="whatsup"
        width={60}
        height={61}
         />
           <p className="text-white text-[20px]">info@gorillasproduction.ge</p>
        </div>
        <div className="pt-[70px] gap-5 flex flex-row">
        <Image
        src='/images/facebook.svg'
        alt="whatsup"
        width={60}
        height={61}
         />
         <Image
        src='/images/instagram.svg'
        alt="whatsup"
        width={60}
        height={61}
         />

        </div>
       

        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2  h-[576px]"></div>
    </section>
  )
}

export default Contact
