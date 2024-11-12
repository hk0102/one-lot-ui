import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Image from "next/image";
import DealershipManagementSystemImage from "../../public/assets/DealershipManagementSystem.svg";

const DealershipManagement = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-8 mx-4 bg-[#f9fafb] md:px-20 py-6 items-start">
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#000000] sm:text-3xl">
            Dealership Management System
          </h1>
          <h2 className="text-lg text-[#000000] font-extrabold">Dealer Loans</h2>
          <p className="text-[#6b7280] font-medium text-lg text-justify max-w-xl">
            OneLot’s digital platform is built with a single goal: to help used car dealers operate their business more efficiently.
          </p>
          <hr className="h-px bg-[#e5e7eb]" />

          <div className="flex flex-col gap-4">
            {[
              {
                title: "Inventory Management",
                description:
                  "Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.",
              },
              {
                title: "Marketing Tools",
                description:
                  "Promote your cars across all platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages, and Instagram with a single click.",
              },
              {
                title: "Marketing Insights (Coming Soon)",
                description:
                  "Get insights on prices and volumes for all cars in the market. We provide you with all the data by combining information from various sources with a single click.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <AiOutlineCheckCircle color="#c3b6d1" fontSize="1rem" />
                <div>
                  <span className="text-lg font-extrabold text-[#000000]">
                    {feature.title}:
                  </span>
                  <span className="text-lg font-light text-[#000000]">
                    {" "}
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <hr className="h-px bg-[#e5e7eb]" />
          <p className="text-lg text-[#6b7280] font-medium">
            Sign up for OneLot's dealer platform today, and make managing your cars easier.
          </p>
          
          <div className="w-fit">
            <button type="button" className="flex text-white bg-purple-900 border border-transparent rounded-lg w-30 my-4 ">
              <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
                <a href="/contact">
                  Explore Now
                </a>
              </span>
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            loading="lazy"
            src={DealershipManagementSystemImage}
            height={1000}
            width={1300}
            alt="Dealership Management System"
          />
        </div>
      </section>

      <div className="h-px bg-[#e5e7eb]" />
    </>
  );
};

export default DealershipManagement;
