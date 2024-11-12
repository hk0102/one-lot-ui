"use client"
import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp, AiFillQuestionCircle } from "react-icons/ai";

interface FAQ {
  question: string;
  answer: string;
}

const FAQElements: FAQ[] = [
  {
    question: "How do I apply for a loan?",
    answer: "OneLot onboarding is an easy and straightforward process. We only require a few documents, and after a few days, you can get your first loan."
  },
  {
    question: "What are the interest rates offered?",
    answer: "OneLot offers monthly interest rates starting at 1.8% for all loan applications."
  },
  {
    question: "What kind of vehicles can I upload?",
    answer: "OneLot offers collateralized short-term loans to used car dealers, allowing them to leverage their inventory for growth. Unlike services such as AsiaLink and Global Dominion, our financing options are designed for car dealers, not their customers."
  },
  {
    question: "Is OneLot a traditional bank?",
    answer: "No, OneLot is a dedicated financial institution that understands the unique needs of used car dealers, offering short-term collateralized loans for working capital. OneLot Financing Corporation is a registered entity regulated by the SEC."
  }
];

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col gap-8 mx-4 bg-[#f9fafb] md:px-20 py-6 items-center">
      <h2 className="text-3xl font-bold text-start mb-8 mt-10 text-[#000]">
        Frequently Asked Questions
      </h2>
      {FAQElements.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 rounded-lg shadow-sm w-full max-w-3xl mx-auto">
          <button
            className="flex items-center w-full p-4 text-left text-gray-900 bg-gray-50 focus:outline-none"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <AiFillQuestionCircle className="text-gray-500 mr-2" />
            <span className="text-lg font-medium flex-grow">{faq.question}</span>
            {activeIndex === index ? <AiFillCaretUp className="text-gray-500" /> : <AiFillCaretDown className="text-gray-500" />}
          </button>
          {activeIndex === index && (
            <div id={`faq-answer-${index}`} className="p-4 text-[#6B7280]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      <button type="button" className="text-white bg-purple-900 rounded-lg my-4 px-4 py-2">
        <a href="/contact">See all</a>
      </button>
    </section>
  );
};

export default FAQsSection;
