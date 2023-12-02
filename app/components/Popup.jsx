import Image from "next/image";

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay flex flex-col  w-9/12 h-[100vh]  overflow-y-auto">
      <div className="flex justify-between ml-9 mr-9  mt-14">
        <p className='text-white text-[35px] uppercase'>Photography</p>
        <Image
          src='/images/cross.svg'
          alt="close"
          width={27}
          height={27}
          onClick={onClose}
          className='cursor-pointer'
        />
      </div>
      
      {/* First Row */}
      <div className="flex flex-row mt-14 ml-9 relative mb-[155px] z-100">
        <div className="bg-[#222] w-[238px] h-[401px] absolute left-0 z-10"></div>
        <div className="bg-[#333] w-[238px] h-[401px] absolute z-20 left-[15%]"></div>
        <div className="bg-[#444] w-[238px] h-[401px] absolute left-[30%] z-30"></div>
        <div className="bg-[#555] w-[238px] h-[401px] absolute z-40 left-[45%]"></div>
        <div className="bg-[#666] w-[238px] h-[401px] absolute z-50 left-[60%]"></div>
      </div>

      {/* Second Row */}
      <div className="flex flex-row mt-5 top-[300px] ml-9  relative z-100">
        <div className="bg-[#777] w-[238px] h-[401px] absolute left-0 z-60"></div>
        <div className="bg-[#888] w-[238px] h-[401px] absolute left-[15%] z-70"></div>
        <div className="bg-[#999] w-[238px] h-[401px] absolute left-[30%] z-80"></div>
        <div className="bg-[#AAA] w-[238px] h-[401px] absolute left-[45%] z-90"></div>
        <div className="bg-[#BBB] w-[238px] h-[401px] absolute left-[60%] z-100"></div>
      </div>
    </div>
  );
};

export default Popup;
