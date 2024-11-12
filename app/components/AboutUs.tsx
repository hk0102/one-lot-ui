import Image,{StaticImageData} from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import AnnouncementIcon from "../../public/assets/Announcement.webp";
import DollarIcon from "../../public/assets/Dollar.svg";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mx-4 md:px-20 py-6 w-auto items-start space-x-1 md:space-x-20 my-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black max-w-md sm:max-w-lg">
          Everything you need to grow your business
        </h2>
        <p className="text-lg font-medium text-gray-600 text-justify max-w-xl">
          OneLot is your trusted lending and financing partner, exclusively
          tailored for used car dealerships. We also offer digital tools for
          streamlined operations and growth of your dealership.
        </p>
        <div className="flex items-center gap-2 text-purple-700 font-bold">
          <span>Learn more</span>
          <AiOutlineArrowRight fontSize="1rem" style={{ fontWeight: "bold" }} />
        </div>
      </div>

      <div className="flex flex-col gap-8 items-start w-auto p-0 m-0">
        <InfoCard
          icon={DollarIcon}
          title="Dealer Loans"
          subtitle="Accelerate your growth with tailored loan solutions"
          description="Get comprehensive car financing solutions, unlock the potential of
          your dealership, and take it to new heights."
        />
        <InfoCard
          icon={AnnouncementIcon}
          title="Dealership Management System"
          subtitle="Enhance Efficiency and Sales with Free Digital Tools for Car Dealerships."
          description="Get comprehensive car financing solutions, unlock the potential of
          your dealership, and take it to new heights."
        />
      </div>
    </div>
  );
};

interface InfoCardProps {
  icon: StaticImageData; // Or "StaticImageData" for Next.js images
  title: string;
  subtitle: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps>  = ({ icon, title, subtitle, description }) => (
  <div className="flex flex-col md:flex-row text-start items-start gap-3">
    <Image
      loading="lazy"
      alt={title}
      src={icon}
      width="40"
      height="30"
      className="flex-shrink-0"
    />
    <div className="flex flex-col gap-2 items-start">
      <h3 className="text-base font-bold text-black">{title}</h3>
      <p className="text-base font-semibold text-purple-700">{subtitle}</p>
      <p className="text-base font-semibold text-gray-600">{description}</p>
    </div>
  </div>
);

export default AboutUs;
