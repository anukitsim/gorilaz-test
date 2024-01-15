
import Image from "next/image";

const ImageWrapper = ({ videoSrc, src, alt, label, isHovered, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div className="flex flex-col gap-2  " onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      {videoSrc ? (
        <div className="image-wrapper rounded-lg relative">
          <div className="absolute border z-50 rounded-md border-white top-[5px] left-[5px] right-[5px] bottom-[5px]"></div>
          <video autoPlay loop muted className="w-full  h-full rounded-lg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        src ? (
          <div className="image-wrapper  rounded-lg">
             <div className="absolute border z-50 rounded-md border-white top-[5px] left-[5px] right-[5px] bottom-[5px]"></div>
            <Image src={src} alt={alt} width={266} height={204} loading='lazy'/>
          </div>
        ) : null
      )}
      <p className="text-white tracking-wider uppercase pl-2">{label}</p>
      <div className="flex flex-row gap-3">
        <span className="text-white text-[10px] uppercase pl-2 cursor-pointer">view gallery</span>
        <Image
          src={isHovered ? "/images/gallery-errow-green.svg" : "/images/galerry-errow.svg"}
          alt="arrow"
          width={11}
          height={11}
        />
      </div>
    </div>
  );
};

export default ImageWrapper;
