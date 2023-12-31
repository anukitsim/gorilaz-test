import React from "react";


const GetInTouchSubjectPortolio = ({ sectionData }) => {

    console.log('Section Data:', sectionData);
  return (
    <>
       <div className="2sm:h-[80px] w-full bg-[#73E338] sm:h-[32px] flex justify-center  2sm:mt-[0px] md:mt-[250px] sm:mt-[0px] items-center">
          <p className="text-black text-xl font-bold uppercase sm:text-[10px] 2sm:text-xl">get in touch</p>
        </div>
      <section className="2sm:h-[574px] sm:mr-5 sm:mb-5 md:mb-0 sm:ml-5 md:mr-0 md:ml-0 sm:h-[320px] justify-center flex flex-col">
       <h2 className="uppercase text-white  text-center 2sm:text-[15px] sm:text-[8px] sm:mt-[60px] ">WE WILL GET YOU BACK</h2>
        <form
          action="https://api.web3forms.com/submit" 
          method="POST"
          id="form"
          className="flex  items-center 2sm:pt-[10px] sm:pt-[10px] gap-1 flex-col"
        >
          <input type="hidden" name="access_key" value="cec0113c-df12-4ce4-ba12-6e32cd6edab3"></input>
          <input type="hidden" name="subject" value="New Submission from your Website" />
          <input type="checkbox" name="botcheck" id="" className="hidden" />


          <div className="flex  flex-row 2sm:w-6/12 sm:w-ful gap-1">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="FULL NAME*"
              className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[16px] 2sm:p-5 sm:p-1 text-[#A9A9A9]  sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="EMAIL*"
              className="2sm:w-2/4 sm:w-full 2sm:h-[50px] sm:h-[16px] 2sm:p-5 sm:p-1 text-[#A9A9A9]  sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            />
          </div>
          
          <select
              required
              type="subject"
              name="text"
              className="2sm:w-2/4 sm:w-[219px] 2sm:h-[50px] sm:h-[16px] 2sm:p-4 sm:p-1 text-[#A9A9A9] sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
            >
              <option className="font-VcrMono text-gray" disabled hidden>
                SUBJECT*
              </option>
              {sectionData &&
                sectionData.map((data, index) => (
                  <option key={index} value={data.title.rendered}>
                    {data.title.rendered}
                  </option>
                  ))}
         </select>


          <textarea
            name="message"
            id="message"
            placeholder="MESSAGE*"
            className="2sm:w-2/4 sm:w-full 2sm:h-[185px] sm:h-[56px] 2sm:p-5 sm:p-1 text-[#A9A9A9] sm:text-[7px] 2sm:text-[14px] bg-transparent border 2sm:rounded-md sm:rounded-[3px]"
          />
          <button
            type="submit"
            className="2sm:w-2/4 sm:w-full 2sm:h-[45px] sm:h-[18px] text-black md:text-[15px] sm:mb-[85px] sm:text-[8px] rounded-[3px] 2sm:rounded-md sm:bg-[#73E338]"
          >
            SUBMIT NOW
          </button>
          <p class="text-base text-center text-gray-500" id="result"></p>
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



export default GetInTouchSubjectPortolio;

{
  /*
   */
}