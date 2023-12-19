import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="w-full  2sm:h-[409px] sm:h-[200px] relative flex justify-center items-center ">
        <div className="2sm:h-[203px] 2sm:w-[49%] sm:w-[313px] sm:h-[105px] relative flex  place-content-around 2sm:pt-[30px] sm:pt-[10px]">
          {/* <Image src="/images/footerFoto.svg" alt="(+-)-foto" width={4.01} height={59.2} className="right-0 z-50" /> */}
          <div className="w-[95%] h-[60%] border-t-2 border-l-2 border-white  absolute -left-1 -top-1"></div>
          <div className="w-[95%] h-[60%] border-b-2 border-r-2 border-white  absolute -right-1 -bottom-1"></div>
          <Image src='/images/header-regulator.svg' alt="regulator" width={5} height={146} className='absolute -left-1.5 2sm:top-[96px] sm:top-[70px] 2sm:w-[5] 2sm:h-[146px] sm:w-[5] sm:h-[35px]' />
          <Image src='/images/header-regulator.svg' alt="regulator" width={5} height={146} className='absolute -right-1.5 2sm:bottom-[96px] sm:bottom-[70px] 2sm:w-[5] 2sm:h-[146px] sm:w-[5] sm:h-[35px]' />
          {/* <div className="flex flex-row gap-20 "> */}
            <div className="flex flex-col 2sm:h-[134px] sm:h-[50px] sm:gap-1.5 2sm:gap-2.5">
              <h2 className="uppercase font-VcrMono 2sm:text-sm sm:text-[8px] tracking-[1.95px] text-[#73E338]">what we do</h2>
              <Link className="font-VcrMono 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[5px] text-white z-50" href="/process">
                process
              </Link>
              <Link className=" 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase font-VcrMono 2sm:text-[10px] sm:text-[5px] text-white z-50" href="#">
                photography
              </Link>
              <Link className="font-VcrMono  2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[5px] text-white z-50" href="#">
                videography
              </Link>
              <Link className="font-VcrMono  2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[5px] text-white z-50" href="#">
                location scouting
              </Link>
              <Link className="font-VcrMono  2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[5px] text-white z-50" href="#">
                social media{" "}
              </Link>
            </div>
            <ul className="flex flex-col 2sm:h-[134px] sm:h-[50px] gap-1.5 ">
              <h2 className="font-VcrMono tracking-[1.95px] uppercase 2sm:text-sm sm:text-[8px] text-[#73E338]">gorillas’</h2>
              <Link className="font-VcrMono text-[#FFF] 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[5px] z-50" href="/gorilas/our-team">
              our team
              </Link>
              <Link className="font-VcrMono 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[5px] z-50 text-white 2sm:mb-8 sm:mb-[10px]" href="/gorilas/behind-the-scene">
              behind the scene
              </Link>
              
              <h2 className="font-VcrMono tracking-[1.95px] uppercase 2sm:text-sm sm:text-[8px] text-[#73E338]">portfolio</h2>
              <Link className="font-VcrMono 2sm:tracking-[1.5px] sm:tracking-[0.75px] z-50 uppercase 2sm:text-[10px] sm:text-[5px] text-white" href="/portfolio/industries">
                gorillas’insdustries
              </Link>
            </ul>
            <ul className="flex flex-col 2sm:h-[134px] sm:h-[50px] gap-[4.7px] ">
              <h2 className="font-VcrMono tracking-[1.95px]  uppercase 2sm:text-sm sm:text-[8px] text-[#73E338]">connect</h2>
              <div className="flex flex-row 2sm:max-w-[100px] sm:max-w-[50px] pt-2 gap-1.5">
                <Link href="#" className="z-50">
                  <Image
                    src="/images/facebook.svg"
                    alt="social-media-icon"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#" className="z-50">
                  <Image
                    src="/images/instagram.svg"
                    alt="social-media-icon"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#" className="z-50">
                  <Image
                    src="/images/whatsup.svg"
                    alt="social-media-icon"
                    width={19}
                    height={19}
                  />
                </Link>
                <Link href="#" className="z-50">
                  <Image
                    src="/images/google.svg"
                    alt="social-media-icon"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            
              <h2 className="font-VcrMono pt-2 2sm:text-sm sm:text-[8px] tracking-[1.95px] uppercase text-[#73E338] ">contact</h2>
              <Link className="font-VcrMono z-50 pt-[10px] 2sm:tracking-[1.5px] sm:tracking-[0.75px] 2sm:text-[10px] sm:text-[5px] uppercase text-sx text-white" href="#">
              +995 557 46 04 06
              </Link>
              <Link className="font-VcrMono z-50 2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[5px]  text-white" href="#">
              +995 593 50 88 48
              </Link>
              <Link className="font-VcrMono z-50  2sm:tracking-[1.5px] sm:tracking-[0.75px] uppercase 2sm:text-[10px] sm:text-[5px] text-white" href="#">
              info@gorillasproduction.ge
              </Link>

            </ul>
            <div className="absolute 2sm:right-11 2sm:top-8 sm:right-2 sm:top-3">
                <Image src="/images/logo.svg" alt="footer-logo-foto" width={50} height={50} className="2sm:w-[50px] 2sm:h-[50px] sm:w-[28px] sm:h-[28px]"/>
            </div>
          {/* </div> */}
        </div>
        
      
      </footer>

      <div className="flex flex-col  mx-auto justify-center w-80 h-[185.39px] 2sm:mt-[150px] 2sm:mb-[30px] sm:mt-[30px]">
        <div className="flex flex-col items-center  2sm:mb-[20px] sm:mb-[5px]">
          <Image
            src='/images/logo.svg'
            alt="logo"
            width={100}
            height={100}
            className="2sm:w-[100px] 2sm:h-[100px] sm:w-[60px] sm:h-[60px]"
            />
              <h1 className="2sm:text-[15px] 2sm:tracking-[2.25px] sm:text-[8px] sm:tracking-[1.2px] text-white uppercase 2sm:mt-[24px] sm:mt-[12px] font-ASSUAN  ">Gorillas’ PRODUCTION</h1>
        </div>
      
        <p className="2sm:text-[10px] sm:text-[5px] text-center text-[#FFF] font-VcrMono ">WWW.GORILLASPRODACTION.GE <br /> 
            <Image className="inline-block " 
            src="/images/footer-Cicon.svg" 
            alt="footer-Cicon-foto" width={9} height={9}/> All rights reserved 2023</p>
      </div>
    </div>
    
  );
};

export default Footer;
