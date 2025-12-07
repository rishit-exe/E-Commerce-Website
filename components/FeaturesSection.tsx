import React from 'react';
import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <div className="bg-[#FAF3EA] py-8 sm:py-16 lg:py-[100px]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-[53px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* High Quality */}
          <div className="flex gap-2.5 items-start">
            <Image src="/comparison/trophy.svg" alt="" width={60} height={60} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
            <div>
              <h4 className="font-semibold text-[20px] sm:text-[25px] text-[#242424] leading-tight sm:leading-[37.5px]">High Quality</h4>
              <p className="font-medium text-[16px] sm:text-[20px] text-[#898989] leading-relaxed sm:leading-[30px]">crafted from top materials</p>
            </div>
          </div>

          {/* Warranty Protection */}
          <div className="flex gap-2.5 items-start">
            <Image src="/comparison/guarantee.svg" alt="" width={60} height={60} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
            <div>
              <h4 className="font-semibold text-[20px] sm:text-[25px] text-[#242424] leading-tight sm:leading-[37.5px]">Warranty Protection</h4>
              <p className="font-medium text-[16px] sm:text-[20px] text-[#898989] leading-relaxed sm:leading-[30px]">Over 2 years</p>
            </div>
          </div>

          {/* Free Shipping */}
          <div className="flex gap-2.5 items-start">
            <Image src="/comparison/shipping.svg" alt="" width={60} height={60} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
            <div>
              <h4 className="font-semibold text-[20px] sm:text-[25px] text-[#242424] leading-tight sm:leading-[37.5px]">Free Shipping</h4>
              <p className="font-medium text-[16px] sm:text-[20px] text-[#898989] leading-relaxed sm:leading-[30px]">Order over 150 $</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex gap-2.5 items-start">
            <Image src="/comparison/customer-support.svg" alt="" width={60} height={60} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
            <div>
              <h4 className="font-semibold text-[20px] sm:text-[25px] text-[#242424] leading-tight sm:leading-[37.5px]">24 / 7 Support</h4>
              <p className="font-medium text-[16px] sm:text-[20px] text-[#898989] leading-relaxed sm:leading-[30px]">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
