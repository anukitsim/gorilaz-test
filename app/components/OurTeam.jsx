"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const TeamMember = ({ imageUrl, name, description, span }) => {
  return (
    <div className="relative cursor-pointer card">
      <div className="front" 
     style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
    }}
      >
       
      </div>
      <div className="back hidden bg-[#181818] w-full h-full">
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
              imageUrl,
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
    <section className="md:w-9/12 sm:w-full mt-[112px] md:h-[940px] sm:h-[1600px] flex overflow-hidden  mx-auto justify-center">
      <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
      <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
      <div>
        <div className="mt-[50px]">
          <div className="w-[797px] md:h-[170px] sm:h-[5px] md:border-b mx-auto  flex flex-row md:border-b-[#E9E8EF]">
            <div className="w-[52px] text-white"></div>
            <div className="w-[230px] md:border-r md:border-r-white md:border-l text-white  md:border-l-[#E9E8EF]">
              
            </div>
            <div className="w-[230px] border-r sm:hidden md:block border-r-[#E9E8EF] text-white"></div>
            <div className="w-[230px] border-r sm:hidden md:block border-r-[#E9E8EF] text-white"></div>
            <div className="w-[52px] text-white"></div>
          </div>
          <div className="md:w-[797px]  mx-auto flex md:flex-row sm:flex-col  md:border-b md:border-b-[#E9E8EF]">
          <div className="w-[52px] text-white"></div>
            <div className="md:w-[230px] sm:w-full sm:border-b sm:border-b-[#E9E8EF] sm:border-t
             sm:border-t-[#E9E8EF] md:border-r text-white md:border-r-[#E9E8EF] 
            md:border-l md:border-l-[#E9E8EF]">

            {teamMembers.length > 0 && (
    <TeamMember
    key={0}
    imageUrl={teamMembers[0].imageUrl}
    name={teamMembers[0].name}
    description={teamMembers[0].description}
    span={teamMembers[0].span}
  />
  )}

            </div>
            <div className="md:w-[230px] sm:w-full md:border-r md:border-r-[#E9E8EF] text-white">
            {teamMembers.length > 1 && (
    <TeamMember
      key={1}
      imageUrl={teamMembers[1].imageUrl}
      name={teamMembers[1].name}
      description={teamMembers[1].description}
      span={teamMembers[1].span}
    />
  )}
            </div>
            <div className="md:w-[230px] sm:w-full md:border-r md:border-r-[#E9E8EF] text-white">
            {teamMembers.length > 2 && (
    <TeamMember
      key={2}
      imageUrl={teamMembers[2].imageUrl}
      name={teamMembers[2].name}
      description={teamMembers[2].description}
      span={teamMembers[2].span}
    />
  )}
            </div>
            <div className="w-[52px] text-white"></div>
          </div>
          <div className="md:w-[797px] sm:w-[100%] flex mx-auto md:flex-row sm:flex-col md:border-b md:border-b-[#E9E8EF]">
          <div className="w-[52px] text-white"></div>
            <div className="md:w-[230px] sm:w-full md:border-r md:border-r-[#E9E8EF] text-white md:border-l md:border-l-[#E9E8EF]">
            {teamMembers.length > 3 && (
    <TeamMember
      key={3}
      imageUrl={teamMembers[3].imageUrl}
      name={teamMembers[3].name}
      description={teamMembers[3].description}
      span={teamMembers[3].span}
    />
  )}
            </div>
            <div className="md:w-[230px] sm:w-[100%] md:border-r md:border-r-[#E9E8EF] text-white">
            {teamMembers.length > 4 && (
    <TeamMember
      key={4}
      imageUrl={teamMembers[4].imageUrl}
      name={teamMembers[4].name}
      description={teamMembers[4].description}
      span={teamMembers[4].span}
    />
  )}
            </div>
            <div className="md:w-[230px] sm:w-[100%] md:border-r md:border-r-[#E9E8EF] text-white">
            {teamMembers.length > 5 && (
    <TeamMember
      key={5}
      imageUrl={teamMembers[5].imageUrl}
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
            <div className="w-[230px] md:border-r text-white md:border-r-[#E9E8EF] md:border-l md:border-l-[#E9E8EF]">
              
            </div>
            <div className="w-[230px] md:border-r md:border-r-[#E9E8EF] text-white"></div>
            <div className="w-[230px] md:border-r md:border-r-[#E9E8EF] text-white"></div>
            <div className="w-[52px] text-white"></div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default OurTeam;
