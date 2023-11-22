"use client"

  import Image from "next/image";
  import { useEffect } from 'react';


  const Header = () => {
    useEffect(() => {
      const folders = document.querySelectorAll('.folder');
  
      folders.forEach((folder, index) => {
        folder.addEventListener('mouseenter', () => {
          if (index > 0) {
            // Move the previous sibling down
            const prevSibling = folders[index - 1];
            prevSibling.style.transform = 'translateY(30px)';
          }
        });
  
        folder.addEventListener('mouseleave', () => {
          if (index > 0) {
            // Reset the transform on mouse leave
            const prevSibling = folders[index - 1];
            prevSibling.style.transform = 'translateY(0)';
          }
        });
      });
    }, []);

    return (
      <div className="w-full h-52 bg-[#73E338] flex items-center justify-center relative">
        <div className="bg-gray-500  bg-opacity-50 top-[53px] w-11/12 h-[620px] absolute flex items-end">
          {/* Folder 1 */}

          <div className=" absolute left-10 bottom-20 ">
            <div className="relative">
             
              <div className="folder flex-col gap-2 z-50 w-[255.423px] h-[244.339px] flex justify-center items-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] relative">
              <p className='absolute left-5 top-4 text-[5px] '>07</p>
              <Image 
                src='/images/logo.svg'
                alt='logo'
                width={100}
                height={100}
              />
              
              <p  className='text-[5px]'>GORILAS' PRODUCTION</p>
              <div  className=" w-[55.19px] h-[16.307px]  bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] z-[100] absolute -top-4 left-[200px] flex items-center justify-end pr-1">
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={0}
                  className="flex items-center"
                />
              </div>
            </div>
            </div>

            {/* Folder 2 */}
            <div className="folder group-hover:-top-4 group-hover:left-[198px] z-40 w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[27px]">

              {/* Add content for the second folder here */}
              <div className="w-[55.19px] h-[16.307px] bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] z-[100] absolute -top-4 left-[198px] flex items-center justify-end pr-1">
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={0}
                  className="flex items-center"
                />
              </div>
              <p className='absolute left-5 top-4 text-[5px] '>06</p>
            <p className='absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono'>BLOG</p>
            </div>

            {/* Folder 3 */}
            <div className="folder z-30 w-[255.423px]  h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[54px]">
              {/* Add content for the third folder here */}
              <div className="w-[55.19px] h-[16.307px] bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] z-[100] absolute -top-4 left-[198px] flex items-center justify-end pr-1">
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={0}
                  className="flex items-center"
                />
              </div>
              <p className='absolute left-5 top-4 text-[5px] '>05</p>
            <p className='absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono'>CONTACT</p>
            </div>
            <div className="folder z-20 w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[81px]">
              {/* Add content for the third folder here */}
              <div className="w-[55.19px] h-[16.307px] bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] z-[100] absolute -top-4 left-[198px] flex items-center justify-end pr-1">
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={0}
                  className="flex items-center"
                />
              </div>
              <p className='absolute left-5 top-4 text-[5px] '>04</p>
            <p className='absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono'>WHAT WE DO</p>
            </div>
            <div className="folder z-10 w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[108px]">
              {/* Add content for the third folder here */}
              <div className="w-[55.19px] h-[16.307px] bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] z-[100] absolute -top-4 left-[198px] flex items-center justify-end pr-1">
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={0}
                  className="flex items-center"
                />
              </div>
              <p className='absolute left-5 top-4 text-[5px] '>03</p>
            <p className='absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono'>PORTFOLIO</p>
            </div>
            <div className="folder z-[5] w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[135px]">
              {/* Add content for the third folder here */}
              <div className="w-[55.19px] h-[16.307px] bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] z-[100] absolute -top-4 left-[198px] flex items-center justify-end pr-1">
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={0}
                  className="flex items-center"
                />
              </div>
              <p className='absolute left-5 top-4 text-[5px] '>02</p>
            <p className='absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono'>GORILAS'</p>
            </div>
            <div className="folder z-[1] w-[255.423px] h-[244.339px] flex justify-center flex-shrink-0 border border-solid border-[#565656] rounded-tl-[15px] rounded-tr-[0.3px] rounded-br-[5px] rounded-bl-[5px] bg-[#181818] absolute bottom-[162px]">
              {/* Add content for the third folder here */}
              <div className="w-[55.19px] h-[16.307px] bg-[#565656] rounded-tl-[36.75px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] z-[100] absolute -top-4 left-[199px] flex items-center justify-end pr-1">
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={0}
                  className="flex items-center"
                />
              </div>
              <p className='absolute left-5 top-4 text-[5px] '>01</p>
            <p className='absolute left-9 top-3 text-[15px] text-[#73E338] font-VcrMono'>HOME</p>
            </div>
          </div>

          {/* Add more folders as needed */}
        </div>
      </div>
    );
  };

  export default Header;
