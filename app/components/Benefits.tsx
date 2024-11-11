import React from 'react'
import EasyImg from "../../public/assets/easy.svg"
import FastImg from "../../public/assets/fast.svg"
import FlexibleImg from "../../public/assets/flexible.svg"
import TrustImg from "../../public/assets/trust.svg"
import HighAmtImg from "../../public/assets/high_amount.svg"
import Image from 'next/image'


interface BenefitCardElements {
    icon: string
    title: string;
    description: string;
  }
  

const Benefits = () => {
        const Benefits: BenefitCardElements[] = [
          {
            icon: TrustImg,
            title: "Trust",
            description:
              "Regulated by Securities and Exchange Commission (SEC) Philippines"
          },
          {
            icon: HighAmtImg,
            title: "High Amount",
            description:
              "Get the highest loan amounts compared to other banks and lenders"
          },
          {
            icon: FastImg,
            title: "Fast",
            description: "Get the money within a few hours on the same day"
          },
          {
            icon: FlexibleImg,
            title: "Flexible",
            description: "Loans are tailored to your needs"
          },
          {
            icon: EasyImg,
            title: "Easy",
            description: "Run through an easy process and get your first loans within days"
          },
        ];
      
  return (
    <>
    <div className="flex flex-col gap-8 bg-white md:px-20 items-center my-20">
        <div className="text-3xl font-extrabold justify-center">Why OneLot</div>
       <div className="flex flex-row  flex-wrap  gap-4 rounded-lg border-gray-300 mb-17" >
      {Benefits.map((benefit, index) => (
        <div key={index} className="flex flex-col items-center text-center relative border rounded-lg shadow-md h-[250px] min-h-[250px] w-full md:w-60 ">
          <div className=" justify-center my-8 mx-20 ">
          <Image loading="lazy" src={benefit.icon} height={30} width={50} alt="dealership" />
          </div>
          <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
          <p className="text-gray-600 text-wrap px-4">{benefit.description}</p>
          
        </div>
      ))}
        </div>
    
    </div>
    <div className="h-[1px] mt-20 bg-[#e5e7eb] "/>

    </>
    
  )
}

export default Benefits