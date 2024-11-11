import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const SocialMediaConnect = () => {
  return (
    <div className="container flex flex-col gap-y-8 mx-4 bg-white md:px-16 py-8 items-center mt-12">
      <h2 className="headline text-4xl font-bold text-center text-black">
        Connect With Us
      </h2>
      <p className="subtitle text-gray-500 flex text-xl font-normal text-center mb-5 md:w-3/4 sm:w-1/2">
        Follow us on Facebook and Instagram to stay updated on our latest offers, updates, and new product releases.
      </p>
      <div className="social-links flex flex-col md:flex-row items-center gap-5">
        <div className="social-button flex items-center gap-3 px-5 py-3 rounded-md border border-black cursor-pointer hover:bg-gray-200 transition duration-200">
          <FaFacebook />
          <span>Follow us on Facebook</span>
        </div>
        <div className="social-button flex items-center gap-3 px-5 py-3 rounded-md border border-black cursor-pointer hover:bg-gray-200 transition duration-200">
          <BsInstagram />
          <span>Follow us on Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaConnect;
