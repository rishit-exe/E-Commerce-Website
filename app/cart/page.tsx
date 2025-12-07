'use client';

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 250000;
  const subtotal = pricePerItem * quantity;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative h-[316px] w-full">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/cart/banner-bg.jpg" 
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
            className="mb-4"
          />
          <h1 className="font-medium text-[48px] text-black">Cart</h1>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-[21px] left-1/2 -translate-x-1/2 flex items-center gap-3.5">
          <a href="/" className="font-medium text-[16px] text-black hover:text-[#B88E2F] cursor-pointer transition-colors">Home</a>
          <Image 
            src="/cart/arrow-down.svg" 
            alt="" 
            width={20} 
            height={20}
            className="-rotate-90"
          />
          <span className="font-light text-[16px] text-black">Cart</span>
        </div>
      </div>

      {/* Main Cart Content */}
      <div className="bg-white py-[72px] px-[100px]">
        <div className="flex gap-[30px]">
          {/* Cart Items Table */}
          <div className="flex-1">
            {/* Table Header */}
            <div className="bg-[#F9F1E7] h-[55px] flex items-center px-[140px] mb-[55px]">
              <div className="flex w-full">
                <div className="w-[35%]">
                  <p className="font-medium text-[16px] text-black">Product</p>
                </div>
                <div className="w-[20%]">
                  <p className="font-medium text-[16px] text-black">Price</p>
                </div>
                <div className="w-[25%]">
                  <p className="font-medium text-[16px] text-black">Quantity</p>
                </div>
                <div className="w-[20%]">
                  <p className="font-medium text-[16px] text-black">Subtotal</p>
                </div>
              </div>
            </div>

            {/* Cart Item */}
            <div className="flex items-center px-[3px]">
              {/* Product Image */}
              <div className="w-[105px] h-[105px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center mr-[35px]">
                <Image 
                  src="/cart/asgaard-sofa.jpg" 
                  alt="Asgaard sofa" 
                  width={90} 
                  height={90}
                  className="object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex items-center flex-1">
                <div className="w-[25%]">
                  <p className="font-normal text-[16px] text-[#9F9F9F]">Asgaard sofa</p>
                </div>
                <div className="w-[20%]">
                  <p className="font-normal text-[16px] text-[#9F9F9F]">Rs. 250,000.00</p>
                </div>
                <div className="w-[25%]">
                  <div className="border border-[#9F9F9F] rounded-[5px] w-[32px] h-[32px] flex items-center justify-center">
                    <span className="font-normal text-[16px] text-black">{quantity}</span>
                  </div>
                </div>
                <div className="w-[20%]">
                  <p className="font-normal text-[16px] text-black">Rs. {subtotal.toLocaleString()}.00</p>
                </div>
                <div className="w-[10%] flex justify-end">
                  <button className="w-[28px] h-[28px]">
                    <Image 
                      src="/cart/delete-icon.svg" 
                      alt="Delete" 
                      width={28} 
                      height={28}
                      className="hover:opacity-70 transition-opacity"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="w-[393px] bg-[#F9F1E7] h-[390px] px-[75px] py-[15px]">
            <h2 className="font-semibold text-[32px] text-black text-center mb-[61px]">Cart Totals</h2>
            
            {/* Subtotal */}
            <div className="flex justify-between mb-[30px]">
              <span className="font-medium text-[16px] text-black">Subtotal</span>
              <span className="font-normal text-[16px] text-[#9F9F9F]">Rs. {subtotal.toLocaleString()}.00</span>
            </div>

            {/* Total */}
            <div className="flex justify-between mb-[42px]">
              <span className="font-medium text-[16px] text-black">Total</span>
              <span className="font-medium text-[20px] text-[#B88E2F]">Rs. {subtotal.toLocaleString()}.00</span>
            </div>

            {/* Check Out Button */}
            <div className="flex justify-center">
              <button className="border border-black rounded-[15px] w-[222px] h-[58.95px] text-[20px] text-black font-normal hover:bg-black hover:text-white transition-colors">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-[100px]">
        <div className="container mx-auto px-[53px]">
          <div className="flex justify-between items-start">
            {/* High Quality */}
            <div className="flex gap-[10px] items-start">
              <Image src="/cart/trophy.svg" alt="" width={60} height={60} />
              <div>
                <h4 className="font-semibold text-[25px] text-[#242424] leading-[37.5px]">High Quality</h4>
                <p className="font-medium text-[20px] text-[#898989] leading-[30px]">crafted from top materials</p>
              </div>
            </div>

            {/* Warranty Protection */}
            <div className="flex gap-[10px] items-start">
              <Image src="/cart/guarantee.svg" alt="" width={60} height={60} />
              <div>
                <h4 className="font-semibold text-[25px] text-[#242424] leading-[37.5px]">Warranty Protection</h4>
                <p className="font-medium text-[20px] text-[#898989] leading-[30px]">Over 2 years</p>
              </div>
            </div>

            {/* Free Shipping */}
            <div className="flex gap-[10px] items-start">
              <Image src="/cart/shipping.svg" alt="" width={60} height={60} />
              <div>
                <h4 className="font-semibold text-[25px] text-[#242424] leading-[37.5px]">Free Shipping</h4>
                <p className="font-medium text-[20px] text-[#898989] leading-[30px]">Order over 150 $</p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="flex gap-[10px] items-start">
              <Image src="/cart/customer-support.svg" alt="" width={60} height={60} />
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