import Image from "next/image";


const Popup = ({ onClose, sectionTitle }) => {
  return (
    <div className="popup-overlay flex flex-col w-9/12 h-[100vh] absolute justify-start">
      <div className="flex justify-between">
        <p className="text-white text-[35px] uppercase">{sectionTitle}</p>
        <Image
          src="/images/cross.svg"
          alt="close"
          width={27}
          height={27}
          onClick={onClose}
          className="cursor-pointer"
        />
      </div>
      {/* Add popup content based on the sectionTitle */}
    </div>
  );
};


export default Popup;
