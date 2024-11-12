import React from "react";
import Image from "next/image";
import EasyImg from "../../public/assets/easy.svg";
import FastImg from "../../public/assets/fast.svg";
import FlexibleImg from "../../public/assets/flexible.svg";
import TrustImg from "../../public/assets/trust.svg";
import HighAmtImg from "../../public/assets/high_amount.svg";

// TypeScript Interface for Benefit Card Elements
interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const Benefits = () => {
  // Benefit data array
  const benefitData: Benefit[] = [
    {
      icon: TrustImg,
      title: "Trust",
      description: "Regulated by Securities and Exchange Commission (SEC) Philippines",
    },
    {
      icon: HighAmtImg,
      title: "High Amount",
      description: "Get the highest loan amounts compared to other banks and lenders",
    },
    {
      icon: FastImg,
      title: "Fast",
      description: "Get the money within a few hours on the same day",
    },
    {
      icon: FlexibleImg,
      title: "Flexible",
      description: "Loans are tailored to your needs",
    },
    {
      icon: EasyImg,
      title: "Easy",
      description: "Run through an easy process and get your first loans within days",
    },
  ];

  return (
    <section className="flex flex-col gap-8 bg-white md:px-20 items-center my-20">
      <h2 className="text-3xl font-extrabold">Why OneLot</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {benefitData.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border rounded-lg shadow-md h-60 w-full md:w-60 p-4"
          >
            <div className="my-4">
              <Image loading="lazy" src={benefit.icon} height={30} width={50} alt={benefit.title} />
            </div>
            <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 px-4">{benefit.description}</p>
          </div>
        ))}
      </div>
      <div className="h-px mt-20 bg-gray-200 w-full" />
    </section>
  );
};

export default Benefits;
