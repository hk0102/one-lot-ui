import React from "react";
import { AiFillCaretDown, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
import Logo from "../../public/assets/onelot-logo.webp";
import Flag from "../../public/assets/Flag-England.webp";

const PageFooter = () => {
  return (
    <footer className="flex flex-col gap-8 mx-4 bg-white md:px-20 py-6 items-center mt-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#000]">Get started today</h2>
      <p className="text-[#6B7280] text-base text-center font-medium md:w-1/2">
        We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.
      </p>
      <a href="/contact" className="flex text-white bg-purple-900 rounded-lg my-4 px-4 py-2 text-sm font-medium">
        Inquire Now
      </a>

      <div className="w-full mt-10 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Image src={Logo} alt="OneLot Logo" width={140} height={100} />

          <nav className="flex flex-col md:flex-row gap-4 items-center text-[#6B7280] text-base font-medium">
            <a href="#" className="hover:text-purple-900">Home</a>
            <a href="#" className="hover:text-purple-900">Features</a>
            <a href="#" className="hover:text-purple-900">About</a>
            <a href="#" className="hover:text-purple-900">Contact</a>
          </nav>
        </div>

        <div className="flex w-full justify-start md:justify-end gap-1 items-center mt-4 px-6 md:px-0">
          <span>ENG</span>
          <Image src={Flag} alt="England Flag" width={20} height={20} />
          <AiFillCaretDown />
        </div>

        <div className="w-full mt-6">
          <hr className="h-[1px] bg-[#e5e7eb]" />
          <div className="flex flex-col md:flex-row justify-between px-6 mt-2 py-4 text-sm text-[#6B7280] md:px-0">
            <p>© 2023 OneLot Technologies Incorporated Pte. Ltd. All Rights Reserved.</p>
            <p>© 2023 OneLot Financing Corporation. All Rights Reserved.</p>
            <div className="flex gap-2">
              <a href="#" aria-label="Facebook">
                <AiOutlineFacebook className="text-lg" />
              </a>
              <a href="#" aria-label="Instagram">
                <AiOutlineInstagram className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
