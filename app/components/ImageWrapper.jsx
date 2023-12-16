
import Image from "next/image";

const ImageWrapper = ({ src, alt, label, isHovered, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="image-wrapper border border-white">
        <Image src={src} alt={alt} width={266} height={204} />
      </div>
      <p className="text-white tracking-wider uppercase">{label}</p>
      <div className="flex flex-row gap-3">
        <span className="text-white text-[10px] uppercase cursor-pointer">view gallery</span>
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
