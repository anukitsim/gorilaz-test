"use client"

import Image from "next/image";
import { useState } from "react";


const TeamMember = ({ src, alt }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative cursor-pointer ${isFlipped ? 'flip' : ""}`}
      onClick={handleFlip}
    >
      <div className={`${'card'} ${isFlipped ? 'flipped' : ""}`}>
        <div className={'front'}>
          <Image src={src} alt={alt} width={324} height={350} />
        </div>
        <div className={'back'}>
          <p></p>
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <section className="flex justify-center items-center relative mx-auto w-9/12 mt-28 h-[757px]">
      <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
      <div className="w-11/12 flex flex-col">
        <div className="flex flex-row justify-start items-start">
          <TeamMember src="/images/team1.svg" alt="team member" />
          <TeamMember src="/images/team1.svg" alt="team member" />
          <TeamMember src="/images/team3.svg" alt="team member" />
        </div>
        <div className="flex flex-row justify-start items-start">
          <TeamMember src="/images/team4.svg" alt="team member" />
          <TeamMember src="/images/team5.svg" alt="team member" />
          <TeamMember src="/images/team5.svg" alt="team member" />
        </div>
      </div>
      <div className="bg-[url('/images/sideLayer.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
    </section>
  );
};

export default OurTeam;
