
import React from "react";
import {AiFillCaretDown, AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai"
import Image from "next/image";
import Logo from "../../public/assets/onelot-logo.webp"
import Flag from "../../public/assets/Flag-England.webp"

const PageFooter = () => {
  return (
    <div className="flex  flex-col  gap-8 mx-4 bg-white md:px-20 py-6  space-x-1 md:space-x-20 items-center mt-10">
    <h2 className="flex text-4xl font-bold text-center mb-8 text-[#000] ">Get started today</h2>
      <div className="text-[#6B7280] text-base text-center font-medium  md:w-1/2">
        We look forward to serving the needs of used car dealers across the
        Philippines and helping them thrive in this dynamic market.
      </div>
      <button type="button" className="flex text-white bg-purple-900 border border-transparent rounded-lg w-30 my-4 ">
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm"><a href="/contact">Inquire Now</a></span>
        </button>
      <div className="mt-10 md:px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-[1rem]">
          <div>
            <Image alt="logo" src={Logo} height={100} width={140} />
          </div>
          <div className="flex flex-col items-start px-6 md:px-0 md:flex-row md:items-center gap-4">
            <div className=" text-[#6B7280] text-base font-medium ">Home</div>
            <div className=" text-[#6B7280] text-base font-normal ">
              Features
            </div>
            <div className=" text-[#6B7280] text-base font-normal ">About</div>
            <div className=" text-[#6B7280] text-base font-normal ">Contact</div>
          </div>
        </div>
        <div className="flex w-full justify-start px-6 md:px-0 md:justify-end gap-1 items-center">
          <div>ENG</div>
          <Image src={Flag} alt = "flag" height={20} width= {50}></Image>
          <div>
            <AiFillCaretDown />
          </div>
        </div>
        <div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="flex px-6 mt-2 py-2 md:px-0 flex-col gap-4">
            <div>
              © 2023 OneLot Technologies Incorporated Pte. Ltd. All Rights
              Reserved.
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <div>
                © 2023 OneLot Financing Corporation. All Rights Reserved.
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <AiOutlineFacebook />
                </div>
                <div>
                  <AiOutlineInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;