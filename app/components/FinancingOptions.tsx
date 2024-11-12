import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import FinancingImage from "../../public/assets/CarFinancing.webp";

const FinancingOptions = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 bg-[#f9fafb] md:px-20 sm:px-0 py-5 mr-1/3 items-start">
      {/* Left Section with Image */}
      <div className="order-2 md:order-1 max-w-md sm:max-w-lg">
        <Image
          loading="lazy"
          src={FinancingImage}
          height={1000}
          width={1300}
          alt="Car financing options"
        />
      </div>

      {/* Right Section with Content */}
      <div className="flex flex-col gap-6 md:px-20 md:order-2 ">
        <h2 className="text-2xl md:text-4xl font-extrabold text-start text-[#000000] sm:text-3xl max-w-md sm:max-w-lg">
          Car Financing
        </h2>

        <h3 className="text-lg text-[#000000] font-extrabold">Dealer Loans</h3>

        <p className="text-lg font-medium text-[#6b7280] text-justify max-w-xl">
          OneLot’s working capital loans allow car dealers to buy more cars and
          capitalize on opportunities that might otherwise be missed. We
          transfer funds to your account within 6 hours.
        </p>

        <div className="h-[1px] bg-[#e5e7eb]" />

        {/* Financing Benefits */}
        <div className="flex flex-col gap-2">
          {[
            "Interest as low as 1.75% per month with daily calculation of interest",
            "Financing up to 70% of the vehicle purchase",
            "Financing period up to 90 days with a flexible repayment schedule at any point",
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <div>
               <AiOutlineCheckCircle color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <span className="text-lg text-[#000000] font-semibold">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="h-[1px] bg-[#e5e7eb]" />

        <p className="text-lg text-[#6b7280] font-medium">
          Use OneLot's financing solution today to grow your car inventory and
          increase profits.
        </p>

        {/* Button */}
        <div className="w-fit">
          <a href="/contact" className="flex bg-purple-900 text-white rounded-lg px-4 py-2 text-sm">
            View Loans
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinancingOptions;
