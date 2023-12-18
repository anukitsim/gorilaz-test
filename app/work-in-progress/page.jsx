"use client"


import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const originalText = "In Progress...";

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setText(originalText.substring(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the interval for the typing speed

    // Cleanup the interval on component unmount
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <main className="flex justify-center items-center mt-[200px] mb-[200px]">
      <h1 className="text-white text-2xl">{text}</h1>
    </main>
  );
};

export default TypingEffect;

