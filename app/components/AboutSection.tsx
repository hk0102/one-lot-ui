import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import AnnouncementIcon from "../../public/assets/Announcement.webp"
import DollarIcon from "../../public/assets/Dollar.svg"

const AboutSection = () => {
  return (
    <div className="flex flex-col mx-4 md:flex-row gap-8 items-start  md:px-20 py-6 w-auto space-x-1 md:space-x-20">
      <div className="flex flex-col gap-4 ">
      <div className="text-2xl md:text-4xl font-extrabold text-start text-[#000000] sm:text-3xl max-w-md sm:max-w-lg">
  Everything you need to grow your business
</div>
        <div className="font-medium text-[#6b7280] text-lg text-justify max-w-xl mx-auto">
          OneLot is your trusted lending and financing partner, exclusively
          tailored for used car dealership. We also offer digital tools for
          streamlined operations and growth of your dealership.
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#57099C]">Learn more</div>
          <div>
            <FaArrowRight color="#57099C" fontSize={"0.8rem"} />
          </div>
        </div>
      </div>
      <div>
      <div className="flex flex-col gap-4 items-start w-auto p-0 m-0" >

        <div className="flex flex-col md:flex-row items-start gap-3 text-start">
          <div>
            <Image
              loading="lazy"
              alt="speaker"
              src={DollarIcon}
              width={"40"}
              height={"30"}
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="text-base font-bold text-[#000000]">
              Dealer Loans
            </div>
            <div className="text-base font-semibold text-[#7e3af2]">
              Accelerate your growth with tailored loan solutions
            </div>
            <div className="text-base font-semibold text-[rgb(107,114,128)]">
              Get comprehensive car financing solutions, unlock the potential of
              your dealership and take it to new heights.
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-md font-medium text-[#7e3af2]">
                Learn more
              </div>
              <div>
                <FaArrowRight color="#57099C" fontSize={"0.8rem"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-3 text-start" >
          <div>
            {" "}
            <Image
              loading="lazy"
              alt="mic"
              src={AnnouncementIcon}
              width={"40"}
              height={"30"}
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="text-base font-bold text-[#000000]">
              Dealership Management System
            </div>
            <div className="text-base font-semibold text-[#7e3af2]">
            Enhance Efficiency and Sales with Free Digital Tools for Car Dealerships.
            </div>
            <div className="text-base font-semibold text-[rgb(107,114,128)]">
              Get comprehensive car financing solutions, unlock the potential of
              your dealership and take it to new heights.
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-md font-medium text-[#7e3af2]">
                Learn more
              </div>
              <div>
                <FaArrowRight color="#57099C" fontSize={"0.8rem"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutSection;