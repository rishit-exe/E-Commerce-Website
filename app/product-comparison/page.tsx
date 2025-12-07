'use client';

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productsData from "@/data/products.json";

export default function ProductComparison() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative h-[316px] w-full">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/comparison/banner-bg.jpg" 
            alt="" 
            fill
            className="object-cover opacity-50 blur-[3px]"
          />
        </div>
        
        {/* Logo and Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <Image 
            src="/home/logo.png" 
            alt="Logo" 
            width={77} 
            height={77}
            className="mb-[16px]"
          />
          <h1 className="font-medium text-[48px] text-black">Product Comparison</h1>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-[21px] left-1/2 -translate-x-1/2 flex items-center gap-[14px]">
          <a href="/" className="font-medium text-[16px] text-black hover:text-[#B88E2F] cursor-pointer transition-colors">Home</a>
          <Image 
            src="/comparison/arrow-down.svg" 
            alt="" 
            width={20} 
            height={20}
            className="rotate-[-90deg]"
          />
          <span className="font-light text-[16px] text-black">Comparison</span>
        </div>
      </div>

      {/* Main Comparison Content */}
      <div className="px-[54px] py-0 relative">
        {/* Top Section - Product Cards and Add Product */}
        <div className="flex items-start gap-0 pt-[100px] pb-[70px] border-b border-[#E8E8E8]">
          {/* Left Column - Call to Action */}
          <div className="w-[25%] pt-[107.5px]">
            <h2 className="font-medium text-[28px] text-black leading-[35.42px] mb-[17px] max-w-[223px]">
              Go to Product page for more Products
            </h2>
            <a href="/shop" className="flex items-center cursor-pointer group">
              <span className="font-medium text-[20px] text-[#727272] group-hover:text-[#B88E2F] transition-colors">View More</span>
            </a>
            <div className="w-[115px] h-[2px] bg-[#727272] mt-[3px]"></div>
          </div>

          {/* Product 1 - Asgaard Sofa */}
          <div className="w-[25%] flex flex-col items-center">
            <div className="w-[280px] h-[177px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center mb-[24px]">
              <Image 
                src="/comparison/asgaard-sofa.jpg" 
                alt="Asgaard Sofa" 
                width={239} 
                height={142}
                className="object-contain"
              />
            </div>
            <h3 className="font-medium text-[24px] text-black mb-[5px]">Asgaard Sofa</h3>
            <p className="font-medium text-[18px] text-black mb-[2px]">Rs. 250,000.00</p>
            <div className="flex items-center gap-[11px]">
              <span className="font-medium text-[18px] text-black">4.7</span>
              <div className="flex gap-[6px]">
                {[1, 2, 3, 4].map((i) => (
                  <Image key={i} src="/comparison/star-filled.svg" alt="" width={20} height={20} />
                ))}
                <Image src="/comparison/star-half.svg" alt="" width={20} height={20} />
              </div>
              <div className="w-[1px] h-[30px] bg-[#E8E8E8]"></div>
              <span className="font-normal text-[13px] text-[#9F9F9F]">204 Review</span>
            </div>
          </div>

          {/* Product 2 - Outdoor Sofa Set */}
          <div className="w-[25%] flex flex-col items-center">
            <div className="w-[280px] h-[177px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center mb-[24px]">
              <Image 
                src="/comparison/outdoor-sofa-set.jpg" 
                alt="Outdoor Sofa Set" 
                width={252} 
                height={161}
                className="object-contain"
              />
            </div>
            <h3 className="font-medium text-[24px] text-black mb-[5px]">Outdoor Sofa Set</h3>
            <p className="font-medium text-[18px] text-black mb-[2px]">Rs. 224,000.00</p>
            <div className="flex items-center gap-[11px]">
              <span className="font-medium text-[18px] text-black">4.2</span>
              <div className="flex gap-[6px]">
                {[1, 2, 3, 4].map((i) => (
                  <Image key={i} src="/comparison/star-filled.svg" alt="" width={20} height={20} />
                ))}
                <Image src="/comparison/star-half.svg" alt="" width={20} height={20} />
              </div>
              <div className="w-[1px] h-[30px] bg-[#E8E8E8]"></div>
              <span className="font-normal text-[13px] text-[#9F9F9F]">145 Review</span>
            </div>
          </div>

          {/* Add Product Button */}
          <div className="w-[25%] flex flex-col items-center pt-[83px] relative">
            <h3 className="font-medium text-[24px] text-black mb-[14px]">Add A Product</h3>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-[242px] h-[39px] bg-[#B88E2F] rounded-[6px] flex items-center justify-between px-[18px] hover:bg-[#A07828] transition-colors"
            >
              <span className="font-semibold text-[14px] text-white">Choose a Product</span>
              <Image 
                src="/comparison/dropdown-arrow.svg" 
                alt="" 
                width={18} 
                height={8.5}
                className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-[110px] w-[242px] bg-white border border-[#E8E8E8] rounded-[6px] shadow-lg z-10 max-h-[300px] overflow-y-auto">
                {productsData.map((product, index) => (
                  <div
                    key={index}
                    className="px-[18px] py-[12px] hover:bg-[#F9F1E7] cursor-pointer transition-colors border-b border-[#E8E8E8] last:border-b-0"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-[12px]">
                      <Image 
                        src={product.image} 
                        alt={product.title} 
                        width={40} 
                        height={40}
                        className="object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-[14px] text-black">{product.title}</p>
                        <p className="font-normal text-[12px] text-[#9F9F9F]">{product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="relative">
          {/* Vertical Separators */}
          <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-[#E8E8E8]"></div>
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[#E8E8E8]"></div>
          <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-[#E8E8E8]"></div>

          {/* General Section */}
          <div className="py-[59px]">
            <h3 className="font-medium text-[28px] text-black mb-[58px] pl-[42px]">General</h3>
            
            <ComparisonRow label="Sales Package" col1="1 sectional sofa" col2="1 Three Seater, 2 Single Seater" />
            <ComparisonRow label="Model Number" col1="TFCBLIGRBL6SRHS" col2="DTUBLIGRBL568" />
            <ComparisonRow label="Secondary Material" col1="Solid Wood" col2="Solid Wood" />
            <ComparisonRow label="Configuration" col1="L-shaped" col2="L-shaped" />
            <ComparisonRow label="Upholstery Material" col1="Fabric + Cotton" col2="Fabric + Cotton" />
            <ComparisonRow label="Upholstery Color" col1="Bright Grey & Lion" col2="Bright Grey & Lion" />
          </div>

          {/* Product Section */}
          <div className="py-[59px] border-t border-[#E8E8E8]">
            <h3 className="font-medium text-[28px] text-black mb-[58px] pl-[42px]">Product</h3>
            
            <ComparisonRow label="Filling Material" col1="Foam" col2="Matte" />
            <ComparisonRow label="Finish Type" col1="Bright Grey & Lion" col2="Bright Grey & Lion" />
            <ComparisonRow label="Adjustable Headrest" col1="No" col2="yes" />
            <ComparisonRow label="Maximum Load Capacity" col1="280 KG" col2="300 KG" />
            <ComparisonRow label="Origin of Manufacture" col1="India" col2="India" />
          </div>

          {/* Dimensions Section */}
          <div className="py-[59px] border-t border-[#E8E8E8]">
            <h3 className="font-medium text-[28px] text-black mb-[58px] pl-[42px]">Dimensions</h3>
            
            <ComparisonRow label="Width" col1="265.32 cm" col2="265.32 cm" />
            <ComparisonRow label="Height" col1="76 cm" col2="76 cm" />
            <ComparisonRow label="Depth" col1="167.76 cm" col2="167.76 cm" />
            <ComparisonRow label="Weight" col1="45 KG" col2="65 KG" />
            <ComparisonRow label="Seat Height" col1="41.52 cm" col2="41.52 cm" />
            <ComparisonRow label="Leg Height" col1="5.46 cm" col2="5.46 cm" />
          </div>

          {/* Warranty Section */}
          <div className="py-[59px] border-t border-[#E8E8E8]">
            <h3 className="font-medium text-[28px] text-black mb-[58px] pl-[42px]">Warranty</h3>
            
            <ComparisonRow 
              label="Warranty Summary" 
              col1="1 Year Manufacturing Warranty" 
              col2="1.2 Year Manufacturing Warranty" 
            />
            <ComparisonRow 
              label="Warranty Service Type" 
              col1="For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com" 
              col2="For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com"
              multiline
            />
            <ComparisonRow 
              label="Covered in Warranty" 
              col1="Warranty Against Manufacturing Defect" 
              col2="Warranty of the product is limited to manufacturing defects only."
              multiline
            />
            <ComparisonRow 
              label="Not Covered in Warranty" 
              col1="The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage." 
              col2="The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage."
              multiline
            />
            <ComparisonRow label="Domestic Warranty" col1="1 Year" col2="3 Months" />
          </div>

          {/* Add to Cart Buttons */}
          <div className="flex py-[62px]">
            <div className="w-[25%]"></div>
            <div className="w-[25%] flex justify-center">
              <button className="w-[215px] h-[64px] bg-[#B88E2F] border border-[#B88E2F] flex items-center justify-center hover:bg-[#A07828] hover:border-[#A07828] transition-all duration-300 cursor-pointer">
                <span className="font-normal text-[20px] text-white">Add To Cart</span>
              </button>
            </div>
            <div className="w-[25%] flex justify-center">
              <button className="w-[215px] h-[64px] bg-[#B88E2F] border border-[#B88E2F] flex items-center justify-center hover:bg-[#A07828] hover:border-[#A07828] transition-all duration-300 cursor-pointer">
                <span className="font-normal text-[20px] text-white">Add To Cart</span>
              </button>
            </div>
            <div className="w-[25%]"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-[100px]">
        <div className="container mx-auto px-[53px]">
          <div className="flex justify-between items-start">
            {/* High Quality */}
            <div className="flex gap-[10px] items-start">
              <Image src="/comparison/trophy.svg" alt="" width={60} height={60} />
              <div>
                <h4 className="font-semibold text-[25px] text-[#242424] leading-[37.5px]">High Quality</h4>
                <p className="font-medium text-[20px] text-[#898989] leading-[30px]">crafted from top materials</p>
              </div>
            </div>

            {/* Warranty Protection */}
            <div className="flex gap-[10px] items-start">
              <Image src="/comparison/guarantee.svg" alt="" width={60} height={60} />
              <div>
                <h4 className="font-semibold text-[25px] text-[#242424] leading-[37.5px]">Warranty Protection</h4>
                <p className="font-medium text-[20px] text-[#898989] leading-[30px]">Over 2 years</p>
              </div>
            </div>

            {/* Free Shipping */}
            <div className="flex gap-[10px] items-start">
              <Image src="/comparison/shipping.svg" alt="" width={60} height={60} />
              <div>
                <h4 className="font-semibold text-[25px] text-[#242424] leading-[37.5px]">Free Shipping</h4>
                <p className="font-medium text-[20px] text-[#898989] leading-[30px]">Order over 150 $</p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="flex gap-[10px] items-start">
              <Image src="/comparison/customer-support.svg" alt="" width={60} height={60} />
              <div>
                <h4 className="font-semibold text-[25px] text-[#242424] leading-[37.5px]">24 / 7 Support</h4>
                <p className="font-medium text-[20px] text-[#898989] leading-[30px]">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Comparison Row Component
function ComparisonRow({ 
  label, 
  col1, 
  col2, 
  multiline = false 
}: { 
  label: string; 
  col1: string; 
  col2: string; 
  multiline?: boolean;
}) {
  return (
    <div className="flex items-start mb-[59px]">
      <div className="w-[25%] pl-[42px]">
        <p className={`font-normal text-[20px] text-black leading-[25.3px] ${multiline ? 'max-w-[241px]' : ''}`}>
          {label}
        </p>
      </div>
      <div className="w-[25%] pl-[21px]">
        <p className={`font-normal text-[20px] text-black leading-[25.3px] ${multiline ? 'max-w-[241px]' : ''}`}>
          {col1}
        </p>
      </div>
      <div className="w-[25%] pl-[25px]">
        <p className={`font-normal text-[20px] text-black leading-[25.3px] ${multiline ? 'max-w-[241px]' : ''}`}>
          {col2}
        </p>
      </div>
      <div className="w-[25%]"></div>
    </div>
  );
}