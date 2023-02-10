import React from "react";
import hero_img from '../assets/images/undraw.png'
const Hero = () => {
  return (
    <div className="text-white">
      <div className=" mt-[-96px] w-full h-[80vh] text-center  flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6 font-dm">
          AI <span className="text-[#FF0000]">FITNESS </span>BUDDY
        </h1>
        <p className="md:text-5xl sm:text-3xl text-2xl font-dm">
          Go Fit With <span className="text-[#FF0000]">gymmi.fit</span>
        </p>
        <div className="flex flex-row gap-[21px] justify-center items-center mt-10">
          <p className="border p-4 rounded-full border-[#FF0909] bg-[#E62222] w-[145px] cursor-pointer text-[20px] text-white">
            Lets Go!
          </p>
          <p className="border p-4 rounded-full border-[#FF0909] bg-[#E9E9E936] text-[20px] w-[145px] cursor-pointer text-white">
            Confused?
          </p>
        </div>
      </div>

      <div className="bg-white text-gray-600">
        <div className="w-full h-[280vh] md:h-[168vh] text-center flex flex-col">
          <p className="mt-10 md:text-4xl sm:text-3xl text-2xl font-montserrat font-bold">
            AI FITNESS COACH -IN YOUR PHONE
          </p>

          <div className="flex flex-col mt-10 gap-3 font-poppins">
            <p className="text-[20px]">Stop guessing, Start working</p>
            <p className="text-[20px]">
              Get your next best exercises, reps and weight based on your
              fitness history, goals and experience.
            </p>
          </div>
          <div className="flex flex-row gap-20 justify-center mt-8 flex-wrap">
            <div className="flex flex-col gap-20 border-2 border-[#F65A5A] w-[285px] h-[532px] bg-[#E9E9E9] rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[10px]">
              <p className="text-[34px] mt-10">Locate Nearby Gyms</p>
              <p>Locate Nearby Gyms</p>
            </div>

            <div className="flex flex-col gap-20 border-2 border-[#F65A5A] w-[285px] h-[532px] bg-[#E9E9E9] rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[10px]">
              <p className="text-[34px] p-2 mt-10">AI Based Posture Detection System</p>
              <p>Locate Nearby Gyms</p>
            </div>
          </div>

          <div className="flex flex-row gap-20 justify-center mt-8 flex-wrap">
            <div className="flex flex-col gap-14 border-2 border-[#F65A5A] w-[285px] h-[532px] bg-[#E9E9E9] rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[10px]">
              <p className="text-[34px] mt-10">Professional Trainers</p>
              <p className="text-justify p-3 text-[18px]">We also provide a Lady trainer for our female customers. She may make things easier since they can relate to what you are feeling. With a female trainer ,your comfort level may be higher, which will increase your motivation and help you to get fit easily.</p>
            </div>

            <div className="flex flex-col gap-20 border-2 border-[#F65A5A] w-[285px] h-[532px] bg-[#E9E9E9] rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[10px]">
              <p className="text-[34px] p-2 mt-10">Logging Workout</p>
              <p>Locate Nearby Gyms</p>
            </div>
          </div>
          <div className="flex justify-end">
            <img src={hero_img} alt="hero_image" />
          </div>
        </div>
      </div>

      <div className="bg-black">
        hello
      </div>
    </div>
  );
};

export default Hero;
