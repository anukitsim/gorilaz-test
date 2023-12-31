"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Blog = () => {
  
    const instagramAuth = async (e) => {

            try{
              await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=10&access_token=IGQWRPSUxuTGhRNl9wdnVCZADM4NndLU2sxenNJZAWxWRkd6MVhRT0JmbUdhZA3ItT2FFZAEt5UGIydG5xY1kwQjQ5UGRFSjlrdFRrNGlMSzc0c0p3OUpycjAzdEdHN2F3MmFIby10cmVtVHk0OF9VYk9WSEE5N3VDVmMZD`)
                  .then((resp) => {
                    console.log(resp)
                  })
            } catch (err) {
                console.log('error', err)
            }
    

    //     try {
    //       const response = await fetch('https://api.instagram.com/oauth/authorize?client_id=1584615455679017&redirect_uri=https://gorillasproduction.ge/&scope=user_profile,user_media&response_type=code', 
    //       {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'
    //         }
    //       });

    //     console.log(response);
    
    
    //     //   const jsonResponse = await response.json();
    
    //     //   if (response.status === 200) {
    //     //     // Show success message
    //     //     result.innerHTML = jsonResponse.message;
    //     //     result.classList.remove("text-gray-500");
    //     //     result.classList.add("text-green-500");
    //     //   } else {
    //     //     // Show error message
    //     //     console.log(response);
    //     //     result.innerHTML = jsonResponse.message;
    //     //     result.classList.remove("text-gray-500");
    //     //     result.classList.add("text-red-500");
    //     //   }
          
    //     //   // Show the result element
    //     //   result.style.display = "block";
    
          
    //     //   // Hide the result element after 3 seconds
    //     //   setTimeout(() => {
    //     //     result.style.display = "none";
    //     //   }, 3000);
          
    //     } catch (error) {
    //       console.log(error);
    //       result.innerHTML = "Something went wrong!";
    //       // Show alert instead of refreshing the page
    //       window.alert('An error occurred. Please try again later.');
    //     } finally {
    //       form.reset();
    //       setTimeout(() => {
    //         result.style.display = "none";
    //       }, 3000);
    //     }
       };
      instagramAuth();

  return (
    <>
</>

  );
};

export default Blog;

