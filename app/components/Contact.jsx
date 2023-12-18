import Image from "next/image"
import Link from "next/link"
const Contact = () => {
  return (
    <section className='mt-[112px] w-9/12 h-[809px] mx-auto flex flex-col items-center justify-start'>
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-[810px]"></div>

        {/* TITLE */}
        <h1 className='text-white text-[30px] uppercase tracking-[4.5px] top-[30px]'>contact</h1>

        <div className="flex flex-col relative w-[454px] h-[225px] items-center mt-[40px] ">
          <a href="facetime://+995593508848" >
              <Image
              src='/images/whatsup.svg'
              alt="whatsup"
              width={65}
              height={50}
                />
          </a>
            
          <a href="whatsapp://send?phone=+995593508848" >
              <p className="text-white text-[20px] mt-[40px] tracking-[3px]">+995 593 50 88 48</p>
          </a>

           <a href="whatsapp://send?phone=+995 557460406" >
              <p className="text-white text-[20px] mt-[10px] tracking-[3px]">+995 557 46 04 06</p>
          </a> 
            <div className="w-2/6 h-[180.391px]  border-l-[1px] border-[#E9E8EF]  absolute left-0 bottom-0"></div> 
            <div className="w-2/6 h-[180px]  border-r-[1px] border-[#E9E8EF]  absolute right-0 bottom-0"></div>
            
        </div>

        <div className="flex flex-col w-[454px] h-[225px] relative items-center pt-[60px] border-[1px] border-[#E9E8EF]">
              <Link lassName="z-10 self-center" href="#">
                  <Image
                    src='/images/google.svg'
                    alt="whatsup"
                    width={65}
                    height={65}/>
              </Link> 

              <p className="text-white text-[20px] mt-[49px] uppercase tracking-[3px]">info@gorillasproduction.ge</p>
              <div className="w-2/4 h-[0px] border-t-[1px]  border-[#E9E8EF] absolute left-[-227px] top-[-1px]"></div>
              <div className="w-2/4 h-[0px] border-t-[1px]  border-[#E9E8EF] absolute right-[-227px] top-[-1px]"></div>
              <div className="w-2/4 h-[0px] border-t-[1px]  border-[#E9E8EF] absolute left-[-227px] bottom-[-1px]"></div>
              <div className="w-2/4 h-[0px] border-t-[1px]  border-[#E9E8EF] absolute right-[-227px] bottom-[-1px]"></div>
        </div>
        
        <div className="flex flex-row w-[454px] relative h-[225px] justify-center gap-20">

                <Link className="z-10 self-center" href="https://www.facebook.com/profile.php?id=100087287107008/" target="_blank">
                   <Image
                    src='/images/facebook.svg'
                    alt="facebook"
                    width={65}
                    height={65}/>
                </Link>
                <Link className="z-10 self-center" href="https://www.instagram.com/gorillasproduction/" target="_blank">
                    <Image
                    src='/images/instagram.svg'
                    alt="whatsup"
                    width={65}
                    height={65}/>              
                </Link>
            
            <div className="w-2/6 h-full  border-l-[1px] border-[#E9E8EF]  absolute left-0 top-0"></div> 
            <div className="w-2/6 h-full  border-r-[1px] border-[#E9E8EF]  absolute right-0 top-0"></div>
        </div>
       

        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2  h-[810px]"></div>
    </section>
  )
}

export default Contact
