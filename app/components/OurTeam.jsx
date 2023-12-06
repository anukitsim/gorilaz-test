"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const TeamMember = ({ src, alt, description, name, span }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative  cursor-pointer ${isFlipped ? "flip" : ""}`}
      onClick={handleFlip}
    >
      <div className={`${"card"} ${isFlipped ? "flipped" : ""}`}>
        <div className={"front "}>
          <Image
            src={src}
            alt={alt}
            width={227}
            height={227}
            className="object-cover w-full h-full "
          />
        </div>
        <div className={"back"}>
          <Image
            src="/images/cardCorner.svg"
            alt="card"
            width={65}
            height={50}
            className="absolute top-[21px] right-[21px] "
          />
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
    <section className="w-9/12 mt-[112px]  flex mx-auto relative">
      <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
      <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
      <div className="w-[890px] mx-auto grid grid-cols-3  self-start grid-rows-2">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative">
            <div className="border border-white p-2">
              {/* Adjusted padding to create separation */}
              <TeamMember
                src={member.image}
                alt={member.name}
                name={member.name}
                description={member.description}
                span={member.span}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;

// <section className="flex justify-center items-center relative mx-auto w-9/12 mt-[112px] h-[757px]">

//   <div className="bg-[url('/images/sideLayer.svg')] absolute left-0 bg-repeat-y w-2 h-full"></div>
//   <div className="w-10/12 flex  flex-col">
//     <div className="flex flex-row justify-center items-center flex-wrap">
//       {teamMembers.length > 0 ? (
//         teamMembers.map((member) => (
//           <div key={member.id} >
//             {console.log('Image URL:', member.image)}
//             {/* Correct placement of imageUrl and TeamMember component */}

//             <TeamMember
//               src={member.image}
//               alt={member.name}
//               name={member.name}
//               description={member.description}
//               span={member.span}
//             />
//           </div>
//         ))
//       ) : (
//         <p>No team members found.</p>
//       )}
//     </div>
//   </div>
//   <div className="bg-[url('/images/sideLayerLeft.svg')] absolute right-0 bg-repeat-y w-2 h-full"></div>
// </section>
