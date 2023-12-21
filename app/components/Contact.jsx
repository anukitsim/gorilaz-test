import Image from "next/image"
import Link from "next/link"
const Contact = () => {
  return (
    <section className='2sm:mt-[112px] sm:mt-[50px] w-[72%] 2sm:h-[809px] sm:h-[350px] mx-auto flex flex-col items-center justify-start'>
        <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 2sm:h-[810px] sm:h-[390px] "></div>

        {/* TITLE */}
        <h1 className='text-white 2sm:text-[30px] sm:text-[15px] uppercase tracking-[4.5px] top-[30px]'>contact</h1>

        <div className="flex flex-col relative 2sm:w-[454px] 2sm:h-[225px] sm:w-[254px] sm:mb-[20px] 2md:mb-[0px] sm:h-[125px] items-center mt-[40px]">
          <a href="facetime://+995593508848" >
              <Image
              src='/images/whatsup.svg'
              alt="whatsup"
              width={65}
              height={50}
              className="2sm:w-[80px] 2sm:h-[65px] sm:w-[45px] sm:h-[40px]"
                />
          </a>
            
          <a href="whatsapp://send?phone=+995593508848" >
              <p className="text-white 2sm:text-[20px] sm:text-[10px] 2sm:mt-[40px] sm:mt-[15px] tracking-[3px]">+995 593 50 88 48</p>
          </a>

           <a href="whatsapp://send?phone=+995 557460406" >
              <p className="text-white 2sm:text-[20px] sm:text-[10px] mt-[10px] tracking-[3px]">+995 557 46 04 06</p>
          </a> 
            <div className="w-2/6 h-[180.391px]  border-l-[1px] border-[#E9E8EF]  absolute left-0 bottom-0 sm:hidden md:hidden 2md:block"></div> 
            <div className="w-2/6 h-[180px]  border-r-[1px] border-[#E9E8EF]  absolute right-0 bottom-0 sm:hidden md:hidden 2md:block"></div>
            
        </div>

        <div className="flex flex-col 2sm:w-[454px] 2sm:h-[225px] sm:w-[254px] sm:h-[125px] relative items-center 2sm:pt-[60px] sm:pt-[0px] 2md:border-[1px] 2md:border-[#E9E8EF]   2md:border">
              <Link lassName="z-10 self-center" href="#">
                  <Image
                    src='/images/google.svg'
                    alt="whatsup"
                    width={65}
                    height={65}
                    className="2sm:w-[80px] 2sm:h-[65px] sm:w-[45px] sm:h-[40px]"
                    />
              </Link> 

              <p className="text-white 2sm:text-[20px] sm:text-[10px] 2sm:mt-[49px] sm:mt-[20px] uppercase tracking-[3px]">info@gorillasproduction.ge</p>
              <div className="w-2/4 h-[0px] border-t-[1px]  border-[#E9E8EF] absolute left-[-227px] top-[-1px] sm:hidden md:hidden 2md:block"></div>
              <div className="w-2/4 h-[0px] border-t-[1px]  border-[#E9E8EF] absolute right-[-227px] top-[-1px] sm:hidden md:hidden 2md:block"></div>
              <div className="w-2/4 h-[0px] border-t-[1px]  border-[#E9E8EF] absolute left-[-227px] bottom-[-1px] sm:hidden md:hidden 2md:block"></div>
              <div className="w-2/4 h-[0px] border-t-[1px]  border-[#E9E8EF] absolute right-[-227px] bottom-[-1px] sm:hidden md:hidden 2md:block"></div>
        </div>
        
        <div className="flex flex-row 2sm:w-[454px] 2sm:h-[225px] sm:w-[254px] sm:h-[125px] relative justify-center 2sm:gap-20 sm:gap-10">

                <Link className="z-10 self-center" href="https://www.facebook.com/profile.php?id=100087287107008/" target="_blank">
                   <Image
                    src='/images/facebook.svg'
                    alt="facebook"
                    width={65}
                    height={65}
                    className="2sm:w-[80px] 2sm:h-[65px] sm:w-[45px] sm:h-[40px]"/>
                </Link>
                <Link className="z-10 self-center" href="https://www.instagram.com/gorillasproduction/" target="_blank">
                    <Image
                    src='/images/instagram.svg'
                    alt="whatsup"
                    width={65}
                    height={65}
                    className="2sm:w-[80px] 2sm:h-[65px] sm:w-[45px] sm:h-[40px]"/>              
                </Link>
            
            <div className="w-2/6 h-full  border-l-[1px] border-[#E9E8EF]  absolute left-0 top-0 sm:hidden md:hidden 2md:block"></div> 
            <div className="w-2/6 h-full  border-r-[1px] border-[#E9E8EF]  absolute right-0 top-0 sm:hidden md:hidden 2md:block"></div>
        </div>
       

        <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2  2sm:h-[810px] sm:h-[390px]"></div>
    </section>
  )
}

export default Contact
