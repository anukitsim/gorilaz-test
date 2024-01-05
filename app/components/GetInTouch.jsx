"use client"

import React from "react";

const GetInTouch = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const selectedSubject = document.querySelector('select[name="text"]').value;
    console.log('Selected Subject:', selectedSubject);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait...";

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const jsonResponse = await response.json();

      if (response.status === 200) {
        // Show success message
        result.innerHTML = jsonResponse.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        // Show error message
        console.log(response);
        result.innerHTML = jsonResponse.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
      
      // Show the result element
      result.style.display = "block";

      
      // Hide the result element after 3 seconds
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
      
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

  
  return (
    <>
       <div className="2sm:h-[80px] w-full bg-[#73E338] sm:h-[40px] flex justify-center md:mt-[237px] sm:mt-[80px] items-center">
          <p className="text-black md:text-[25px]  uppercase sm:text-[10px] 2sm:text-xl font-bold touch-text">get in touch</p>
        </div>
      <section className="2sm:h-[574px] sm:mr-5 sm:mb-5 md:mb-0 sm:ml-5 md:mr-0 md:ml-0 sm:h-[320px] justify-center flex flex-col">
       <h2 className="uppercase text-white  text-center 2sm:text-[15px] sm:text-[8px] md:pb-5 sm:pb-2 sm:mt-[90px] ">WE WILL GET YOU BACK</h2>
       <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
              className="flex  items-center pt-[10px] gap-1 flex-col"
              onSubmit={handleSubmit} 
            >
              <input
                type="hidden"
                name="access_key"
                value="cec0113c-df12-4ce4-ba12-6e32cd6edab3"
              ></input>
              <input
                type="hidden"
                name="subject"
                value="New Submission from your Website"
              />
              <input type="checkbox" name="botcheck" id="" className="hidden" />

          <div className="flex  md:flex-row sm:flex-col 2sm:w-6/12 sm:w-full gap-1 ">
            <input
              type="text"
              name="name"
              id="name"
              required            
              placeholder="FULL NAME*"
              className="2sm:w-full sm:w-full 2sm:h-[50px] sm:h-[30px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="EMAIL*"
              className="2sm:w-full sm:w-full 2sm:h-[50px] sm:h-[30px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
          </div>
            <input
              required
              type="subject"
              name="text"
              placeholder="SUBJECT*"
              className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[30px] 2sm:p-5 sm:p-1 text-[#A9A9A9] sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
          <textarea
            name="message"
            id="message"
            placeholder="MESSAGE*"
            className="2sm:w-2/4 sm:w-full 2sm:h-[185px] sm:h-[70px] 2sm:p-5 sm:p-1 text-white sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
          />
          <button
            type="submit"
            className="submit-text font-bold 2sm:w-2/4 sm:w-full text-center 2sm:h-[45px] sm:h-[27px] text-black md:text-[18px] sm:text-[10px] sm:mb-[85px]  rounded-[3px] 2sm:rounded-md sm:bg-[#73E338]"
          >
            SUBMIT NOW
          </button>
          <p className="text-base text-center text-gray-500 absolute bottom-5" id="result"></p>
        </form>
      </section>
    </>
  );

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-green-500");
          } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-red-500");
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
};

export default GetInTouch;

{
  /*
   */
}
