"use client";

import Image from "next/image";
import { useState } from "react";

const OurTeam = () => {
  const textContent = [
    {
      h1: "Team Member 2",
      p: "Description for Team Member 2",
      span: "Role: Designer",
    },
    {
      h1: "NIKA LEBANIDZE",
      p: "I am Nika Lebanidze, a mountaineer, traveler, cameraman and filmmaker",
      span: "Photo-videography, mountains and nature are an integral part of my personal and professional experience for more than 20 years. People and their portraits, adventure and travel photography and Videography, extreme and adrenaline obtained by capturing the desired shot, documentary, turning memories into visual-aesthetic works. In my archive, on an international scale, a number of important moments of the history of mountaineering (and not only) are kept.",
    },
    {
      h1: "Team Member 2",
      p: "Description for Team Member 2",
      span: "Role: Designer",
    },
    {
      h1: "Team Member 2",
      p: "Description for Team Member 2",
      span: "Role: Designer",
    },
    {
      h1: "Team Member 2",
      p: "Description for Team Member 2",
      span: "Role: Designer",
    },
    {
      h1: "Team Member 2",
      p: "Description for Team Member 2",
      span: "Role: Designer",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredRow(Math.floor(index / 2));
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
    setHoveredIndex(null);
  };

  const getItemStyle = (index) => {
    const rowIndex = Math.floor(index / 2);

    if (hoveredRow !== null && hoveredRow === rowIndex) {
      return {
        gridColumn: `span 4`,
        gridRow: "span 1",
        position: "relative",
        zIndex: 5,
        transition: "grid-column 0.3s ease",
      };
    } else {
      if ([0, 3, 4].includes(index) && hoveredIndex !== index) {
        return {
          gridColumn: "span 5",
          gridRow: "span 1",
          position: "relative",
          transition: "grid-column 3s ease",
        };
      } else {
        return {
          gridColumn: "span 3",
          gridRow: "span 1",
          position: "relative",
          transition: "grid-column 3s ease",
        };
      }
    }
  };

  const getDescriptionStyle = (index) => {
    const rowIndex = Math.floor(index / 2);

    if (
      hoveredRow !== null &&
      hoveredRow === rowIndex &&
      hoveredIndex === index
    ) {
      return {
        gridColumn: "span 4",
        gridRow: "span 1",
        position: "relative",
        zIndex: 10,
        opacity: 1,
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        transition: "grid-column 3s ease",
      };
    } else {
      return {
        gridColumn: "span 4",
        gridRow: "span 1",
        display: "none",
        transition: "grid-column 3s ease",
      };
    }
  };

  return (
    <section className="w-9/12 mx-auto mb-10 relative flex flex-col gap-16 justify-center items-center">
      <div className="border-layer left" />

      <div className="w-1/2 h-auto grid grid-cols-8 grid-rows-3">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className="relative team-image"
            style={getItemStyle(index)}
            onMouseEnter={() =>
              handleMouseEnter(
                index === 0 || index === 2 || index === 4
                  ? index + 1
                  : index - 1
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex === index && (
              <div
                className="blackSquare rounded-lg"
                style={{
                  backgroundColor: "#212020",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                  transition: "background-color 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                }}
              >
                {textContent[index] && (
                  <>
                    <div className="pt-5"></div>
                    <h1 className="text-sm text-center text-[#45FC4C] w-65 h-50 border-rl-white">
                     
                      {textContent[index].h1}
                    </h1>
                    
                    <p className=" pl-6 text-white text-[10px] text-left">
                      {textContent[index].p}
                    </p>
                    <br />
                    <span className="text-white pl-6 text-[10px] text-xs text-left">
                      {textContent[index].span}
                    </span>
                  </>
                )}
              </div>
            )}
            <Image
              src={`/images/team${index + 1}.svg`}
              alt={`team member ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="border-layer right" />
    </section>
  );
};

export default OurTeam;
