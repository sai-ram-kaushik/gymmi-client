import React from "react";
// import hero_img from "../assets/images/undraw.png";
import phone from "../assets/images/phone.png";
import app_store from '../assets/images/app_store.png'
import google_play from '../assets/images/google_play.png'
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
        <div className="w-full h-[350vh] md:h-[180vh] text-center flex flex-col">
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
              <p className="text-[34px] p-2 mt-10">
                AI Based Posture Detection System
              </p>
              <div className="flex items-center justify-center ml-8 text-center">
                <ul className="list-disc text-[18px] font-poppins flex flex-col justify-center ">
                  <li>Keep track of your workouts</li>
                  <li>Improve your results</li>
                  <li>Reach the next level of perfection</li>
                  <li>AI Recognition on device locally</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-20 justify-center mt-8 flex-wrap">
            <div className="flex flex-col gap-14 border-2 border-[#F65A5A] w-[285px] h-[532px] bg-[#E9E9E9] rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[10px]">
              <p className="text-[34px] mt-10">Professional Trainers</p>
              <p className="text-justify p-3 text-[18px]">
                We also provide a Lady trainer for our female customers. She may
                make things easier since they can relate to what you are
                feeling. With a female trainer ,your comfort level may be
                higher, which will increase your motivation and help you to get
                fit easily.
              </p>
            </div>

            <div className="flex flex-col gap-20 border-2 border-[#F65A5A] w-[285px] h-[532px] bg-[#E9E9E9] rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[10px]">
              <p className="text-[34px] p-2 mt-10">Logging Workout</p>
              <p>Locate Nearby Gyms</p>
            </div>
          </div>
          {/* <div className="f">
            <img src={hero_img} alt="hero_image" />
          </div> */}
        </div>
      </div>

      <div className="bg-[#F4F4F4]">
        <div className="flex justify-center items-center">
          <p className="text-[#272626] text-[34px] font-dm p-4">
            How it works? – Simple as 1,2,3
          </p>
        </div>
        <div className="md:flex md:flex-row flex-col justify-center mt-8">
          <p className="text-black max-w-[500px] font-montserrat text-[19px]">
            An AI fitness trainer is a computerized coach who can tell when
            you're working out and when you're not. When you begin working out,
            this app will begin automatically recording your workout time, heart
            rate, calories burned, and so on. You can then share the workout
            data with the community. This helps to keep you motivated and on
            track.
          </p>
          <img src={phone} alt="" className="md:w-1/4" />
        </div>

        <div className="flex items-center justify-center mt-4">
          <p className="text-black text-[34px] font-dm text-center">
            Why Choose AI Training Over Personal Training?
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          <p className="text-[#F65A5A] border p-2 border-[#F65A5A]">1</p>
          <p className="text-black mt-2 font-montserrat text-center">Download the App from Play Store/App Store <span className="text-[#E67E22]">AND</span> It’s Completely free to download</p>
          <p className="text-[#F65A5A] border p-2 border-[#F65A5A] mt-8">2</p>
          <p className="text-black mt-2 font-montserrat text-center">Subscribe any plan using our <span className="text-[#F65A5A]">mobile-app</span> or website , Or you can simply call us by clicking</p>
          <p className="text-[#F65A5A] border p-2 border-[#F65A5A] mt-8">3</p>
          <p className="text-black mt-2 font-montserrat text-center">Be regular , show diligence. We consider your efforts , See you <span className="text-[#FF0000]">at <b>GYMMI</b></span></p>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
            <p className="text-black"><b>Get the app.</b></p>
            <div className="md:flex md:flex-row flex-col items-center justify-center md:gap-[45px] mt-8 cursor-pointer">
                <img src={app_store} alt="app_store" className="md:w-2/4"/>
                <img src={google_play} alt="google_play" className="md:w-2/4"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
