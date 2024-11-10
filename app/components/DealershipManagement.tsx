import React from 'react'
import { GiConfirmed } from "react-icons/gi";
import Image from 'next/image';
import DealershipManagementSystemImage from "../../public/assets/DealershipManagementSystem.svg"

const DealershipManagement = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row gap-8 mx-4 bg-[#f9fafb] md:px-20 py-6  space-x-1 md:space-x-20 items-start">
      <div className="flex flex-col md:flex-row gap-4">
        
        <div className="flex md:order-1 flex-col gap-6 md:pl-2 md:w-1/2">
          <div className="text-2xl md:text-4xl font-extrabold text-start text-[#000000] sm:text-3xl max-w-md sm:max-w-lg">Dealership Management System</div>
          <div className="text-lg text-[#000000] font-extrabold">
            Dealer Loans
          </div>
          <div className="text-[#6b7280] font-medium text-lg text-justify max-w-xl ml-0">
          OneLot’s digital platform is built with a single goal: to help used car dealers operate their business more efficiently.
          </div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div>
                <GiConfirmed color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <span className="text-lg text-[#000000] font-extrabold">
              Inventory Management: <span className="text-lg text-[#000000] font-black ">Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <GiConfirmed color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <span className="text-lg text-[#000000] font-extrabold">
              Marketing Tools: <span className="text-lg text-[#000000] font-black "> Promote your cars across all platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages, and Instagram with a single click.</span>
              </span>
            </div>{" "}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <GiConfirmed color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <span className="text-lg text-[#000000] font-extrabold">
              Marketing Insights (Coming Soon): <span className="text-lg text-[#000000] font-black ">Get insights on prices and volumes for all cars in the market. We provide you with all the data by combining information from various sources with a single click.</span>
              </span>
            </div>
          </div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="text-lg text-[#6b7280] font-medium">
          Sign up for OneLot's dealer platform today, and make managing your cars easier.
          </div>
          <div className="w-fit">
          <button type="button" className="flex  focus:z-10 focus:outline-none text-white bg-[#3600D1] border border-transparent enabled:hover:bg-[#3600D1] focus:ring-0 focus:ring-transparent dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900 rounded-lg w-30 my-4 ">
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm"><a href="/contact">Explore Now</a></span>
        </button>
            
          </div>
        </div>
        <div className="order-2 md:order-2 text-2xl md:text-4xl font-extrabold text-start text-[#000000] sm:text-3xl max-w-md sm:max-w-lg">
          <Image
          loading="lazy"
            src={DealershipManagementSystemImage}
            height={1000}
            width={1300}
            alt="dealership"
          />
        </div>
      </div>
      
    </div>
    
       
  </>

     
  );
};

export default DealershipManagement