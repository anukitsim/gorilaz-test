"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const TeamMember = ({ src, alt, description, name, span }) => {
  return (
    <div className="relative cursor-pointer card">
      <div className="front">
        <Image
          src={src}
          alt={alt}
          width={227}
          height={227}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="back hidden">
      <div className="flex flex-col items-baseline"> 
          <h2 className="text-[15px] uppercase text-[#45FC4C] mt-[75px] self-end pr-5 pt-5">{name}</h2>
          <div className="flex flex-col items-baseline pl-28 pt-10">
          <span className="text-white text-[10px]  tracking-wider ">{span}</span>
          <span className="text-white text-[10px]  tracking-wider ">{description}</span>
          </div>
         
        </div>
        <Image
          src="/images/cardCorner.svg"
          alt="card"
          width={65}
          height={50}
          className="absolute top-[21px] right-[21px] "
        />
       
      </div>
    </div>
  );
};

// ... (other imports and components)

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const getImageUrl = async (imageId) => {
    try {
      const res = await fetch(
        `http://gorillaz.local/wp-json/wp/v2/media/${imageId}`
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch image data: ${res.statusText}`);
      }

      const imageData = await res.json();
      return imageData.source_url;
    } catch (error) {
      console.error("Error fetching image data:", error.message);
      return ""; // Default to an empty string if there's an error
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://gorillaz.local/wp-json/wp/v2/team-member"
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Fetched data:", data);

        const formattedData = await Promise.all(
          data.map(async (member) => {
            const imageId = member.acf.image;
            const imageUrl = await getImageUrl(imageId);

            return {
              id: member.id,
              name: member.acf.name,
              description: member.acf.description,
              span: member.acf.span,
              image: imageUrl,
            };
          })
        );

        setTeamMembers(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-9/12 mt-[112px] h-[940px] flex mx-auto justify-center">
      <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
      <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
      <div>
        <div className="mt-[50px]">
          <div className="w-[797px] h-[170px] border-b mx-auto flex flex-row border-b-[#E9E8EF]">
            <div className="w-[52px] text-white"></div>
            <div className="w-[230px] border-r border-r-white border-l text-white  border-l-[#E9E8EF]">
              
            </div>
            <div className="w-[230px] border-r border-r-[#E9E8EF] text-white"></div>
            <div className="w-[230px] border-r border-r-[#E9E8EF] text-white"></div>
            <div className="w-[52px] text-white"></div>
          </div>
          <div className="w-[797px] mx-auto flex flex-row border-b border-b-[#E9E8EF]">
          <div className="w-[52px] text-white"></div>
            <div className="w-[230px] border-r text-white border-r-[#E9E8EF] border-l border-l-[#E9E8EF]">
            {teamMembers.length > 0 && (
    <TeamMember
      key={0}
      src={teamMembers[0].image}
      alt={teamMembers[0].name}
      name={teamMembers[0].name}
      description={teamMembers[0].description}
      span={teamMembers[0].span}
    />
  )}
            </div>
            <div className="w-[230px] border-r border-r-[#E9E8EF] text-white">
            {teamMembers.length > 1 && (
    <TeamMember
      key={1}
      src={teamMembers[1].image}
      alt={teamMembers[1].name}
      name={teamMembers[1].name}
      description={teamMembers[1].description}
      span={teamMembers[1].span}
    />
  )}
            </div>
            <div className="w-[230px] border-r border-r-[#E9E8EF] text-white">
            {teamMembers.length > 2 && (
    <TeamMember
      key={2}
      src={teamMembers[2].image}
      alt={teamMembers[2].name}
      name={teamMembers[2].name}
      description={teamMembers[2].description}
      span={teamMembers[2].span}
    />
  )}
            </div>
            <div className="w-[52px] text-white"></div>
          </div>
          <div className="w-[797px] flex mx-auto flex-row border-b border-b-[#E9E8EF]">
          <div className="w-[52px] text-white"></div>
            <div className="w-[230px] border-r border-r-[#E9E8EF] text-white border-l border-l-[#E9E8EF]">
            {teamMembers.length > 3 && (
    <TeamMember
      key={3}
      src={teamMembers[3].image}
      alt={teamMembers[3].name}
      name={teamMembers[3].name}
      description={teamMembers[3].description}
      span={teamMembers[3].span}
    />
  )}
            </div>
            <div className="w-[230px] border-r border-r-[#E9E8EF] text-white">
            {teamMembers.length > 4 && (
    <TeamMember
      key={4}
      src={teamMembers[4].image}
      alt={teamMembers[4].name}
      name={teamMembers[4].name}
      description={teamMembers[4].description}
      span={teamMembers[4].span}
    />
  )}
            </div>
            <div className="w-[230px] border-r border-r-[#E9E8EF] text-white">
            {teamMembers.length > 5 && (
    <TeamMember
      key={5}
      src={teamMembers[5].image}
      alt={teamMembers[5].name}
      name={teamMembers[5].name}
      description={teamMembers[5].description}
      span={teamMembers[5].span}
    />
  )}
            </div>
            <div className="w-[52px] text-white"></div>
          </div>
          <div className="w-[797px] h-[170px] flex mx-auto flex-row">
          <div className="w-[52px] text-white"></div>
            <div className="w-[230px] border-r text-white border-r-[#E9E8EF] border-l border-l-[#E9E8EF]">
              
            </div>
            <div className="w-[230px] border-r border-r-[#E9E8EF] text-white"></div>
            <div className="w-[230px] border-r border-r-[#E9E8EF] text-white"></div>
            <div className="w-[52px] text-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

