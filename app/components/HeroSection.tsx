import React from "react";
import Image from "next/image";
import HeroImage from "../../public/assets/HeroImage.webp"
import RegulatoryImage from "../../public/assets/RegulatoryImage.svg"

const HeroSection = () => {
  return (
    <div className="px-2 py-2.5 bg-white text-center pb-4 mt-8 sm:mt-24">
        <p className="text-3xl md:text-5xl font-extrabold text-center text-[#000000] sm:text-5xl" >
            Grow your dealership with working capital loans and 
            <br></br>
             digital tools from OneLot
           
          </p>
          <br></br>
          <div className="text-400 text-center justify-center font-medium text-[#6b7280] px-4 sm:px-20 2xl:px-20 sm:w-2/3 2xl:w-1/2 mx-auto sm:text-xl">
            We enable dealers to buy more cars through our working capital loan
            solutions and sell cars more efficiently through our Dealership
            Management System with its inventory management, marketing solutions
            and market insights.
          </div>
          <br></br>
          <button
          type="button"
          className="bg-[#57009C]  p-0.5 text-white rounded-[0.5rem] lg:w-fit group items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-[#57009C] border border-transparent focus:ring-transparent dark:enabled:hover:bg-purple-900 dark:focus:ring-purple- rounded-lg focus:ring-2  sm:inline"
        >
          <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
            Inquire Now
          </span>
        </button>
       
        <div className=" w-[100%] flex items-center justify-center flex-col gap-2 object-contain">
          <div>
            <Image
              alt="HeroImage"
              src={HeroImage}
              height={1000}
              width={1200}
            />
          </div>
          <div className="text-[#6b7280] font-medium text-base">
            Regulated by
          </div>
          <div>
            <Image alt="RegulatoryImage" src={RegulatoryImage} height={200} width={160} />
          </div>

        </div>
      </div>
    //   </div>
    //   </div>
      
  );
};

export default HeroSection;