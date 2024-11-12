import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import AvatarImg from "../../public/assets/Avatar_1.webp";

const CustomerTestimonials = () => {
  return (
    <>
    <div className="flex flex-col gap-8 bg-white md:px-20 items-center my-20">
      <div className="text-4xl font-extrabold justify-center">Testimonials</div>
      <div>
        <Image
          alt={"avatar"}
          src={AvatarImg}
          height={"30"}
          width={"90"}
        />
      </div>
      <div className="flex text-2xl font-semibold text-center mb-8 text-[#000] md:w-2/3 ">
        "The service of OneLot is top notch, they act fast ad can provide
        dealers with the funds they need,whey they need it"
      </div>
      <div className="flex items-center gap-2">
        <div className="font-semibold line-clamp-2 text-base text-[#000]  ">
          Mark Vergel de Dios
        </div>
        <div className="font-medium line-clamp-2 text-base text-[#000] ">
          Owner MVD Auto Works
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <AiOutlineArrowLeft fontSize={"1.3rem"} color="#707070" />
        </div>
        <div>
          <AiOutlineArrowRight  fontSize={"1.3rem"} color="#707070" />
        </div>
      </div>
      
    </div>
    <div className="h-[1px] bg-[#e5e7eb] "/>
    </>
  );
};

export default CustomerTestimonials;