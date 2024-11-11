import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle} from "react-icons/ai";
import FinancingImage from "../../public/assets/CarFinancing.webp"

const FinancingOptions = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mx-4 bg-[#f9fafb] md:px-20 py-6 w-auto space-x-1 md:space-x-20 items-start ">
      <div className="flex flex-col md:flex-row gap-4 my-12">
        <div className="order-2 md:order-1 text-2xl md:text-4xl font-extrabold text-start text-[#000000] sm:text-3xl max-w-md sm:max-w-lg">
          <Image
          loading="lazy"
            src={FinancingImage}
            height={1000}
            width={1300}
            alt="carfinance"
          />
        </div>
        <div className="flex md:order-2 flex-col gap-6 md:px-20">
          <div className="text-2xl md:text-4xl font-extrabold text-start text-[#000000] sm:text-3xl max-w-md sm:max-w-lg">Car Financing</div>
          <div className="text-lg text-[#000000] font-extrabold">
            Dealer Loans
          </div>
          <div className="text-[#6b7280] font-medium text-lg text-justify max-w-xl ml-0">
            OneLot’s working capital loans allows car dealer to buy more cars
            and capitalize on car purchase opportunities you would otherwise
            have missed. We transfer the money to your account within 6 hours.
          </div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div>
                <AiOutlineCheckCircle color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <div className="text-lg text-[#000000] font-semibold">
                Interest as low as 1.75% per month with daily calculation of
                interest
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <AiOutlineCheckCircle color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <div className="text-lg text-[#000000] font-semibold">
                Financing up to 70% of the vehicle purchase
              </div>
            </div>{" "}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <AiOutlineCheckCircle color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <div className="text-lg text-[#000000] font-semibold">
                Financing period up to 90 days with flexible repayment schedule
                at any point
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="text-lg text-[#6b7280] font-medium">
            Use OneLot's financing solution today, grow the number of cars in
            your lot and increase your profits
          </div>
          <div className="w-fit">
          <button type="button" className="flex text-white bg-purple-900 border border-transparent rounded-lg w-30 my-4 ">
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm"><a href="/contact">View Loans</a></span>
          </button>
            
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default FinancingOptions;