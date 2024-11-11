"use client"
import React from 'react'
import { useState } from 'react';
import {AiFillCaretDown,AiFillCaretUp,AiFillQuestionCircle} from "react-icons/ai"
interface FAQ {
    question: string;
    answer: string;
  }
  
  const FAQElements: FAQ[] = [
    {
          question: "How do I apply for a loan",
          answer:"OneLot onboarding is easy ans straightforward onboarding process. We only require a few documents and after a few days you can get your first loan."
    },
    {
      question: "What are the interest rates offered?",
      answer:
        "OneLot offers monthly interest rates starting at 1.8% which is applied for all your loan applications.",
    },
    {
      question: "What kind of vehicles can I upload?",
      answer:
        "OneLot offers collateralized short term loans to used car dealers, allowing them to leverage their inventory for growth. We differ from services such as AsiaLink and Global Dominion, since our financing options are for car dealers themselves, not the customers of car dealers.",
    },
    {
      question: "How can I keep track of potential buyers?",
      answer:
        "No, OneLot is not a traditional bank. We are a dedicated financial institution that understands the unique requirements of used car dealers and offers short-term collateralized lending solutions to address their working capital needs. OneLot Financing Corporation is a duly registered corporate entity and is regulated by the Securities and Exchange Commission (SEC).",
    },
  ];

const FAQsSection = () => {
    const [ActiveIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(ActiveIndex === index ? -1 : index);
  };

  {console.log("ActiveIndex:", ActiveIndex)}

  return (
    <div className="flex  flex-col  gap-8 mx-4 bg-[#f9fafb] md:px-20 py-6  space-x-1 md:space-x-20 items-center">
    <h2 className="flex text-3xl font-bold text-start mb-8 mt-10 text-[#000]">
      Frequently Asked Questions
    </h2>
      {FAQElements.map((faq, index) => (
      <div
        key={index}
        className=" border-b-1 items-start border-gray-200 rounded-lg shadow-sm w-full max-w-3xl mx-auto"
      >
        <button
          className="flex flex-wrap justify-left items-left w-full max-w-[600px] p-4 text-left text-gray-50 bg-gray-50 focus:outline-none"
          onClick={() => toggleAccordion(index)}>
            <AiFillQuestionCircle className="text-gray-500 mt-2 " />
          <span className="text-lg font-medium flex-grow text-gray-900 text-left ml-2">
            {faq.question}
          </span>
          
          { ActiveIndex == index ? <AiFillCaretUp className='ml-auto text-gray-500'/>:<AiFillCaretDown className='ml-auto text-gray-500'/>}
        </button>
        {ActiveIndex === index && (
          <div className="p-4 ">
            <p className="text-[#6B7280]">{faq.answer}</p>
          </div>
        )}
      </div>
    ))}
    <button type="button" className="flex text-white bg-purple-900 border border-transparent rounded-lg w-35 my-4 ">
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm"><a href="/contact">See all</a></span>
        </button>
  </div>
  )
}

export default FAQsSection