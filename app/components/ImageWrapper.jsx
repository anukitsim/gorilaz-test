
import Image from "next/image";


const ImageWrapper = ({ src, alt, label, isHovered, onMouseEnter, onMouseLeave, onClick, isArrowGreen }) => {
  const isVideography = label.toLowerCase() === 'videography';
  
  return (
    <div
    className="flex flex-col gap-2"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    {isVideography ? ( // Check if it's the "Videography" section
       <div className="image-wrapper ">
       <video autoPlay loop muted className="w-full h-full outline outline-white outline-offset-[-5px] rounded-lg">
         <source src={"/video/video2.mp4"} type="video/mp4" />
         Your browser does not support the video tag.
       </video>
     </div>
    ) : (
      <div className="image-wrapper outline outline-white outline-offset-[-5px] rounded-lg">
        <Image src={src} alt={alt} width={266} height={204} />
      </div>
    )}
    <p className="text-white tracking-wider uppercase pl-2">{label}</p>
    <div className="flex flex-row gap-3">
      <span className="text-white text-[10px] uppercase pl-2 cursor-pointer">view gallery</span>
      <Image
        src={isHovered || isArrowGreen ? "/images/gallery-errow-green.svg" : "/images/galerry-errow.svg"}
        alt="arrow"
        width={11}
        height={11}
      />
    </div>
  </div>
  );
};

export default ImageWrapper;