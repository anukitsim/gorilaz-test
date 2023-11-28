import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full  h-[605px]  mb-10  flex flex-col gap-16 justify-center items-center">
      <div className="pb-5 mt-20 relative flex">
        <div className="w-52 h-14 border-t-2 border-l-2 border-white  absolute -left-1 -top-1"></div>
        <div className="w-52 h-14 border-t-2 border-r-2 border-white  absolute -right-1 -top-1"></div>
        <div className="w-52 h-14 border-b-2 border-l-2 border-white  absolute -left-1 -bottom-1"></div>
        <div className="w-52 h-14 border-b-2 border-r-2 border-white  absolute -right-1 -bottom-1"></div>
        <div className="flex flex-row gap-20">
          <ul className="flex flex-col gap-5 pt-5 pl-20 whitespace-nowrap">
            <h2 className="font-sm text-[#73E338]">what we do</h2>
            <Link className="text-sx text-white" href="#">
              process
            </Link>
            <Link className="text-sx text-white" href="#">
              photography
            </Link>
            <Link className="text-sx text-white" href="#">
              videography
            </Link>
            <Link className="text-sx text-white" href="#">
              location scouting
            </Link>
            <Link className="text-sx z-10 text-white" href="#">
              social media{" "}
            </Link>
          </ul>
          <ul className="flex flex-col gap-5 pt-5 pl-20">
            <h2 className="font-sm text-[#73E338]">gorillas’</h2>
            <Link className="text-sx" href="#">
            our team
            </Link>
            <Link className="text-sx text-white" href="#">
            behind the scene
            </Link>
            <br />
            <h2 className="font-sm text-[#73E338]">portfolio</h2>
            <Link className="text-sx text-white" href="#">
              gorillas’insdustries
            </Link>
          </ul>
          <ul className="flex flex-col gap-5 pt-5 pr-5">
            <h2 className="font-sm text-[#73E338]">connect</h2>
            <div className="flex flex-row gap-2">
              <Link href="#">
                <Image
                  src="/images/facebook.svg"
                  alt="social-media-icon"
                  width={10}
                  height={10}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/instagram.svg"
                  alt="social-media-icon"
                  width={10}
                  height={10}
                />
              </Link>
              <Link href="#">
                <Image
                  src="images/whatsup.svg"
                  alt="social-media-icon"
                  width={10}
                  height={10}
                />
              </Link>
              <Link href="#">
                <Image
                  src="images/google.svg"
                  alt="social-media-icon"
                  width={10}
                  height={10}
                />
              </Link>
            </div>
           
            <h2 className="font-sm text-[#73E338] mt-2">contact</h2>
            <Link className="text-sx mt-2 text-white" href="#">
            +995 557 46 04 06
            </Link>
            <Link className="text-sx mt-2 text-white" href="#">
            +995 593 50 88 48
            </Link>
            <Link className="text-sx mt-2 z-10 text-white" href="#">
            info@gorillasproduction.ge
            </Link>

          </ul>
        
        </div>
       
      </div>
      <div className="flex flex-col items-center gap-2 mb-10">
      <Image
        src='/images/logo.svg'
        alt="logo"
        width={100}
        height={100}
        
         />
         <h1 className="font-sm text-white">Gorillas’   pRODUCTION</h1>
      </div>
     
    </footer>
  );
};

export default Footer;
