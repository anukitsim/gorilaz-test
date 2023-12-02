"use client"

import { useState } from 'react'
import Image from 'next/image'
import Popup from './Popup';
import RunningLine from "./RunningLine";

const Portfolio = () => {


  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleImageClick = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section className="">
      <RunningLine />
      <div className="border-t mt-[137px] border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row relative text-white mx-auto h-full">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white flex justify-center">
            <Image src='/images/portfolio1.svg' alt="image" width={400} height={300} />
          </div>
          <div className="w-1/2 pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] right-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">tourism</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">We capture the essence of destinations, transforming landscapes into immersive tales that beckon travelers.</p>
            
          </div>
        </div>
      </div>
      <div className=" border-t  border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] left-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">sports</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">From adrenaline-pumping action to the emotional highs of victory, we encap sulate the heart of sports through our lens.</p>
            
          </div>
          <div className="w-1/2 flex justify-center">
          <Image src='/images/portfolio2.svg' alt="image" width={400} height={300}/>
          </div>
        </div>
      </div>
      <div className=" border-t border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row  text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white flex justify-center">
          <Image src='/images/portfolio1.svg' alt="image" width={400} height={300}/>
          </div>
          <div className="w-1/2 pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] right-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">fashion</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">Our artistic vision brings fashion to life, showcasing style and elegance with captivating visuals.</p>
            
          </div>
        </div>
      </div>
      <div className=" border-t border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row  text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] left-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">education</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">We craft engaging educational content, making learning an enriching and visually stimulating experience.</p>
            
          </div>
          <div className="w-1/2 flex justify-center">
          <Image src='/images/portfolio2.svg' alt="image" width={400} height={300}/>
          </div>
        </div>
      </div>
      <div className=" border-t border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row  text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white flex justify-center">
          <Image src='/images/portfolio1.svg' alt="image" width={400} height={300}/>
          </div>
          <div className="w-1/2 pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] right-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">Entertainment</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">Dive into the world of entertainment with us, where each frame we create is a gateway to captivating stories</p>
            
          </div>
        </div>
      </div>
      <div className=" border-t border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row  text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] left-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">Telecommunications</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">Transforming complex telecommunications narratives into visually compelling and easily digestible stories.</p>
            
          </div>
          <div className="w-1/2 flex justify-center">
          <Image src='/images/portfolio2.svg' alt="image" width={400} height={300}/>
          </div>
        </div>
      </div>
      <div className=" border-t border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row  text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white flex justify-center">
          <Image src='/images/portfolio1.svg' alt="image" width={400} height={300}/>
          </div>
          <div className="w-1/2 pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] right-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">Agriculture</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">
Agriculture: Showcasing the innovation and dedication of the agricultural world through impactful visual narratives.</p>
            
          </div>
        </div>
      </div>
      <div className=" border-t border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row  text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] left-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">Food and Beverages</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">From farm to table, we celebrate the artistry and stories behind culinary experiences.</p>
            
          </div>
          <div className="w-1/2 flex justify-center">
          <Image src='/images/portfolio2.svg' alt="image" width={400} height={300}/>
          </div>
        </div>
      </div>
      <div className=" border-t border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row  text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white flex justify-center">
          <Image src='/images/portfolio1.svg' alt="image" width={400} height={300}/>
          </div>
          <div className="w-1/2 pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] right-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">Healthcare</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">
            We humanize healthcare stories, conveying compassion and resilience through powerful visual storytelling
</p>
            
          </div>
        </div>
      </div>
      <div className=" border-t border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row  text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] left-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">HORECA Sectors</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">From hospitality to catering, we bring to life the essence and experiences within the HORECA industry.</p>
            
          </div>
          <div className="w-1/2 flex justify-center">
          <Image src='/images/portfolio2.svg' alt="image" width={400} height={300}/>
          </div>
        </div>
      </div>
      <div className=" border-t border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row  text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white flex justify-center">
          <Image src='/images/portfolio1.svg' alt="image" width={400} height={300}/>
          </div>
          <div className="w-1/2 pt-[105px] pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] right-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup}/>}
            <h2 className="text-white text-[30px] tracking-wide uppercase">Wine Industry</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">
            Telling the stories behind each bottle, capturing the heritage and craftsmanship of the wine industry through our lens.

</p>
            
          </div>
        </div>
      </div>
      <div className=" border-t border-b border-white h-[337px]">
        <div className="w-9/12 flex flex-row  text-white mx-auto h-full relative">
          <div className='absolute left-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayer.svg")] bg-repeat-y'></div>
          <div className='absolute right-0 top-0 bottom-0 w-2 h-full bg-[url("/images/sideLayerLeft.svg")] bg-repeat-y'></div>
          <div className="w-1/2 border-r border-white pt-[105px] flex justify-center items-center pl-[85px]">
          <Image src="/images/services-+-foto.svg" alt='REC_FOTO' width={40} height={45} className='cursor-pointer absolute top-[32px] left-[34px]' onClick={handleImageClick}/>
          {isPopupOpen && <Popup onClose={closePopup} />}
            <h2 className="text-white text-[30px] tracking-wide uppercase">Automotive Industry</h2>
            <p className="text-white text-[15px] mt-[35px] w-9/12 tracking-[2.25px]">Capturing the innovation and thrill of the automotive world with dynamic visual narratives.
</p>
            
          </div>
          <div className="w-1/2 flex justify-center">
          <Image src='/images/portfolio2.svg' alt="image" width={400} height={300}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
