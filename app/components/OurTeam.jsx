"use client"

import Image from "next/image";
import { useState } from "react";


const TeamMember = ({ src, alt, description, name, span }) => {

  
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
          <Image src={src} alt={alt} width={324} height={350}  className="object-cover w-full h-full" />
        </div>
        <div className={'back relative'}>
          <Image src='/images/cardCorner.svg' alt="card" width={65} height={50}  className='absolute top-[21px] right-[21px]'/>
          <div className="flex flex-col justify-center items-center pl-[12px] pr-[12px]">
          <h2 className="text-[20px] text-[#45FC4C]">{name}</h2>
          <span className="text-[10px] pt-[24px]">{span}</span>
          <p className="text-[10px] pt-[14px]">{description}</p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const teamMembers = [
    { src: "/images/team1.svg", alt: "team member",name: 'NIKA LEBANIDZE', description: "Photo-videography, mountains and nature are an integral part of my personal and professional experience for more than 20 years. People and their portraits, adventure and travel photography and Videography, extreme and adrenaline obtained by capturing the desired shot, documentary, turning memories into visual-aesthetic works. In my archive, on an international scale, a number of important moments of the history of mountaineering (and not only) are kept.", span: 'I am Nika Lebanidze, a mountaineer, traveler, cameraman and filmmaker' },
    { src: "/images/team1.svg", alt: "team member",name: 'Nick Laghiashvili', description: "", span: 'Photo-videography, mountains and nature are an integral part of my personal and professional experience for more than 20 years. People and their portraits, adventure and travel photography and Videography, extreme and adrenaline obtained by capturing the desired shot, documentary, turning memories into visual-aesthetic works. In my archive, on an international scale, a number of important moments of the history of mountaineering (and not only) are kept.' },
    { src: "/images/team3.svg", alt: "team member",name: 'levan oniani', description: "", span: "I seek beauty in the ordinary, finding delight in showcasing familiar things from unconventional angles. Like my colleagues at Gorillas' Production, I relish being fully immersed in the mountainous lifestyle." },
    { src: "/images/team4.svg", alt: "team member",name: 'Tamara Gokadze', description: "In addition to being a Photographer, I hold certification as a hiking guide. While my initial profession was in accounting, the monotony of office tasks led me to depart from that career path.", span: 'I have a deep passion for photography, cherishing those singular moments that unfold before my lens, exclusive to my perception and capture in that fleeting instance.' },
    { src: "/images/team5.svg", alt: "team member",name: 'Giorgi Gomiashvili', description: "Through photo-videography, I seize the chance to portray the world as I perceive it, capturing its essence through my lens.", span: 'I have actively engaged in adventure tourism for around 10 years. I hold certifications as a mountain guide from GMGA and IFMGA."I have actively engaged in adventure tourism for around 10 years. I hold certifications as a mountain guide from GMGA and IFMGA.' },
    { src: "/images/team5.svg", alt: "team member",name: 'Tinatin Gegenava', description: '"Ive adored mountains since my first hike at six—they bring me joy, freedom, and admiration. Theyve been incredible teachers, shaping my body, spirit, and values.', span: '' },
  ];

  return (
    <section className="flex justify-center items-center relative mx-auto w-9/12 mt-[112px] h-[757px]">
      <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
      <div className="w-11/12 flex flex-col">
        <div className="flex flex-row justify-start items-start flex-wrap">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
      <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
    </section>
  );
};

export default OurTeam;