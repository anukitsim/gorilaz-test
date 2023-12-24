"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const TeamMember = ({ imageUrl, name, description, span }) => {
  return (
    <div className="relative cursor-pointer card">
      <div
        className="front outline outline-white outline-offset-[-5px] rounded-lg sm:ml-[-25%] md:ml-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className="back hidden bg-[#181818] w-full h-full border border-white">
        <div className="flex flex-col items-baseline">
          <h2 className="text-[15px] uppercase text-[#45FC4C] mt-[75px] self-end pr-5 pt-5">
            {name}
          </h2>
          <div className="flex flex-col items-baseline pl-28 pt-10">
            <span className="text-white text-[10px]  tracking-wider ">
              {span}
            </span>
            <span className="text-white text-[10px]  tracking-wider ">
              {description}
            </span>
          </div>
        </div>
        <Image
          src="/images/cardCorner.svg"
          alt="card"
          width={65}
          height={50}
          className="absolute top-[21px] right-[21px]"
        />
      </div>
    </div>
  );
};

// ... (other imports and components)

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL


  const getImageUrl = async (imageId) => {
    try {
      const res = await fetch(
        `${apiUrl}/media/${imageId}`
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
          `${apiUrl}/team-member`
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
    <>
<div className="w-[20%] absolute h-[1px] md:top-[190%] sm:top-[110%] right-0 flex justify-center items-center bg-white"></div>
<div className="w-[20%] absolute h-[1px] md:top-[190%] sm:top-[110%] flex justify-center items-center bg-white"></div>
<section className="md:w-9/12 relative sm:w-full md:mt-[120px] sm:mt-[150px] md:h-[835px]  sm:h-[1500px] flex overflow-hidden  mx-auto justify-center">
  <div className="bg-[url('/images/sideLayer.svg')] absolute left-5 bg-repeat-y w-2 h-full"></div>
  <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-5 bg-repeat-y w-2 h-full"></div>
  <div className="md:h-3/4  sm:h-full  w-9/12 border-t border-t-white border-b border-b-white sm:border-b sm:border-b-white flex md:justify-center md:items-center md:mt-[136px] sm:mt-0 ">
    <div className="md:w-10/12 sm:w-full h-3/4 md:gap-1 sm:gap-0 flex flex-col justify-center items-center">
      <div className="md:w-full sm:w-full  flex md:flex-row sm:flex-col justify-center md:gap-1 sm:gap-0 sm:mt-96 md:mt-0">

          {teamMembers.length > 5 && (
            <TeamMember
              key={5}
              imageUrl={teamMembers[5].imageUrl}
              name={teamMembers[5].name}
              description={teamMembers[5].description}
              span={teamMembers[5].span}

            />
          )}

          {teamMembers.length > 4 && (
            <TeamMember
              key={4}
              imageUrl={teamMembers[4].imageUrl}
              name={teamMembers[4].name}
              description={teamMembers[4].description}
              span={teamMembers[4].span}
            />
          )}

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
      <div className="w-full flex md:flex-row  justify-center sm:flex-col md:gap-1 sm:gap-0">

          {teamMembers.length > 2 && (
            <TeamMember
              key={2}
              imageUrl={teamMembers[2].imageUrl}
              name={teamMembers[2].name}
              description={teamMembers[2].description}
              span={teamMembers[2].span}
            />
          )}

          {teamMembers.length > 1 && (
            <TeamMember
              key={1}
              imageUrl={teamMembers[1].imageUrl}
              name={teamMembers[1].name}
              description={teamMembers[1].description}
              span={teamMembers[1].span}
            />
          )}

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
    </div>
  </div>
</section>
</>

  );
};

export default OurTeam;

