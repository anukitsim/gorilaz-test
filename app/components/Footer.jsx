import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="w-full  h-[409px] relative flex justify-center items-center ">
        <div className="h-[203px] w-[49%]  relative flex  place-content-around pt-[30px]">
          {/* <Image src="/images/footerFoto.svg" alt="(+-)-foto" width={4.01} height={59.2} className="right-0 z-50" /> */}
          <div className="w-[95%] h-[60%] border-t-2 border-l-2 border-white  absolute -left-1 -top-1"></div>
          <div className="w-[95%] h-[60%] border-b-2 border-r-2 border-white  absolute -right-1 -bottom-1"></div>
          {/* <div className="flex flex-row gap-20 "> */}
            <div className="flex flex-col h-[134px] gap-2.5  ">
              <h2 className="uppercase font-VcrMono text-sm tracking-[1.95px] text-[#73E338]">what we do</h2>
              <Link className="font-VcrMono tracking-[1.5px] uppercase text-[10px] text-white" href="#">
                process
              </Link>
              <Link className=" tracking-[1.5px] uppercase font-VcrMono text-[10px] text-white" href="#">
                photography
              </Link>
              <Link className="font-VcrMono  tracking-[1.5px] uppercase text-[10px] text-white" href="#">
                videography
              </Link>
              <Link className="font-VcrMono  tracking-[1.5px] uppercase text-[10px] text-white" href="#">
                location scouting
              </Link>
              <Link className="font-VcrMono  tracking-[1.5px] uppercase text-[10px] z-10 text-white" href="#">
                social media{" "}
              </Link>
            </div>
            <ul className="flex flex-col h-[134px] gap-2 ">
              <h2 className="font-VcrMono tracking-[1.95px] uppercase text-sm text-[#73E338]">gorillas’</h2>
              <Link className="font-VcrMono text-[#FFF] tracking-[1.5px] uppercase text-[10px]" href="#">
              our team
              </Link>
              <Link className="font-VcrMono ] tracking-[1.5px] uppercase text-[10px] text-white mb-8" href="#">
              behind the scene
              </Link>
              
              <h2 className="font-VcrMono tracking-[1.95px] uppercase text-sm text-[#73E338]">portfolio</h2>
              <Link className="font-VcrMono  tracking-[1.5px] uppercase text-[10px] text-white" href="#">
                gorillas’insdustries
              </Link>
            </ul>
            <ul className="flex flex-col h-[134px] gap-2 ">
              <h2 className="font-VcrMono tracking-[1.95px]  uppercase text-sm text-[#73E338]">connect</h2>
              <div className="flex flex-row gap-2">
                <Link href="#">
                  <Image
                    src="/images/facebook.svg"
                    alt="social-media-icon"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/instagram.svg"
                    alt="social-media-icon"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="images/whatsup.svg"
                    alt="social-media-icon"
                    width={19}
                    height={19}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="images/google.svg"
                    alt="social-media-icon"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            
              <h2 className="font-VcrMono text-sm tracking-[1.95px] uppercase text-[#73E338] ">contact</h2>
              <Link className="font-VcrMono  tracking-[1.5px] text-[10px] uppercase text-sx text-white" href="#">
              +995 557 46 04 06
              </Link>
              <Link className="font-VcrMono tracking-[1.5px] uppercase text-[10px]  text-white" href="#">
              +995 593 50 88 48
              </Link>
              <Link className="font-VcrMono  tracking-[1.5px] uppercase text-[10px]  z-10 text-white" href="#">
              info@gorillasproduction.ge
              </Link>

            </ul>
            <Image src="/images/logo.svg" alt="footer-logo-foto" width={50} height={50} className="absolute right-11 top-8" />
          
          {/* </div> */}
        </div>
        
      
      </footer>

      <div className="flex flex-col  mx-auto justify-center w-80 h-[185.39px] mt-[150px] mb-[40px]">
        <div className="flex flex-col items-center  mb-[20px]">
          <Image
            src='/images/logo.svg'
            alt="logo"
            width={100}
            height={100}
            />
              <h1 className="font-sm text-white uppercase mt-[24px] font-Assuan">Gorillas’ PRODUCTION</h1>
        </div>
      
        <p className="text-[10px] text-center text-[#FFF] font-VcrMono">WWW.GORILLASPRODACTION.GE <br /> 
            <Image className="inline-block " 
            src="/images/footer-Cicon.svg" 
            alt="footer-Cicon-foto" width={9} height={9}/> All rights reserved 2023</p>
      </div>
    </div>
    
  );
};

export default Footer;
