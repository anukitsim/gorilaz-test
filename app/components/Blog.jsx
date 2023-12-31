"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Blog = () => {
  
    const instagramAuth = async (e) => {
    

        try {
          const response = await fetch('https://api.instagram.com/oauth/authorize?client_id=1584615455679017&redirect_uri=https://gorillasproduction.ge/&scope=user_profile,user_media&response_type=code', 
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });

        console.log(response);
    
    
        //   const jsonResponse = await response.json();
    
        //   if (response.status === 200) {
        //     // Show success message
        //     result.innerHTML = jsonResponse.message;
        //     result.classList.remove("text-gray-500");
        //     result.classList.add("text-green-500");
        //   } else {
        //     // Show error message
        //     console.log(response);
        //     result.innerHTML = jsonResponse.message;
        //     result.classList.remove("text-gray-500");
        //     result.classList.add("text-red-500");
        //   }
          
        //   // Show the result element
        //   result.style.display = "block";
    
          
        //   // Hide the result element after 3 seconds
        //   setTimeout(() => {
        //     result.style.display = "none";
        //   }, 3000);
          
        } catch (error) {
          console.log(error);
          result.innerHTML = "Something went wrong!";
          // Show alert instead of refreshing the page
          window.alert('An error occurred. Please try again later.');
        } finally {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 3000);
        }
      };
      instagramAuth();

  return (
    <>
</>

  );
};

export default Blog;

