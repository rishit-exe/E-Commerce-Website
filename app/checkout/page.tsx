'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('bank-transfer');

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative h-[200px] sm:h-[250px] lg:h-[316px] w-full">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/shop/shop-banner.jpg" 
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
            className="mb-2 sm:mb-4 w-[50px] h-[50px] sm:w-[77px] sm:h-[77px]"
          />
          <h1 className="font-medium text-[32px] sm:text-[40px] lg:text-[48px] text-black">Checkout</h1>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-[15px] sm:bottom-[21px] left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3.5">
          <a href="/" className="font-medium text-[14px] sm:text-[16px] text-black hover:text-[#B88E2F] cursor-pointer transition-colors">Home</a>
          <Image 
            src="/comparison/arrow-down.svg" 
            alt="" 
            width={14} 
            height={14}
            className="-rotate-90 sm:w-[20px] sm:h-[20px]"
          />
          <span className="font-light text-[14px] sm:text-[16px] text-black">Checkout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8 sm:py-12 lg:py-[63px] px-4 sm:px-8 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[30px] max-w-[1440px] mx-auto">
          {/* Billing Details Form */}
          <div className="w-full lg:w-[608px]">
            <h2 className="font-semibold text-[28px] sm:text-[32px] lg:text-[36px] text-black mb-6 lg:mb-9">Billing details</h2>
            
            <div className="space-y-6 lg:space-y-9">
              {/* First Name & Last Name */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-[31px]">
                <div className="flex-1">
                  <label className="block font-medium text-[16px] text-black mb-[22px]">
                    First Name
                  </label>
                  <input 
                    type="text"
                    className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] outline-none focus:border-black"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-[16px] text-black mb-[22px]">
                    Last Name
                  </label>
                  <input 
                    type="text"
                    className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block font-medium text-[16px] text-black mb-[22px]">
                  Company Name (Optional)
                </label>
                <input 
                  type="text"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] outline-none focus:border-black"
                />
              </div>

              {/* Country / Region */}
              <div>
                <label className="block font-medium text-[16px] text-black mb-[22px]">
                  Country / Region
                </label>
                <div className="relative">
                  <select 
                    className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] text-[#9F9F9F] appearance-none outline-none focus:border-black"
                  >
                    <option>Sri Lanka</option>
                  </select>
                  <Image 
                    src="/comparison/arrow-down.svg" 
                    alt="" 
                    width={20} 
                    height={20}
                    className="absolute right-[30px] top-1/2 -translate-y-1/2 pointer-events-none"
                  />
                </div>
              </div>

              {/* Street Address */}
              <div>
                <label className="block font-medium text-[16px] text-black mb-[22px]">
                  Street address
                </label>
                <input 
                  type="text"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] outline-none focus:border-black"
                />
              </div>

              {/* Town / City */}
              <div>
                <label className="block font-medium text-[16px] text-black mb-[22px]">
                  Town / City
                </label>
                <input 
                  type="text"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] outline-none focus:border-black"
                />
              </div>

              {/* Province */}
              <div>
                <label className="block font-medium text-[16px] text-black mb-[22px]">
                  Province
                </label>
                <div className="relative">
                  <select 
                    className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] text-[#9F9F9F] appearance-none outline-none focus:border-black"
                  >
                    <option>Western Province</option>
                  </select>
                  <Image 
                    src="/comparison/arrow-down.svg" 
                    alt="" 
                    width={20} 
                    height={20}
                    className="absolute right-[30px] top-1/2 -translate-y-1/2 pointer-events-none"
                  />
                </div>
              </div>

              {/* ZIP code */}
              <div>
                <label className="block font-medium text-[16px] text-black mb-[22px]">
                  ZIP code
                </label>
                <input 
                  type="text"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] outline-none focus:border-black"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium text-[16px] text-black mb-[22px]">
                  Phone
                </label>
                <input 
                  type="tel"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] outline-none focus:border-black"
                />
              </div>

              {/* Email address */}
              <div>
                <label className="block font-medium text-[16px] text-black mb-[22px]">
                  Email address
                </label>
                <input 
                  type="email"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] outline-none focus:border-black"
                />
              </div>

              {/* Additional information */}
              <div>
                <input 
                  type="text"
                  placeholder="Additional information"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-[30px] text-[#9F9F9F] placeholder:text-[#9F9F9F] outline-none focus:border-black"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[608px]">
            <div className="pt-6 sm:pt-12 lg:pt-[87px] pb-8 sm:pb-12 lg:pb-[86px] px-4 sm:px-6 lg:px-[38px] border border-[#D9D9D9] lg:border-0 rounded-lg lg:rounded-none">
              {/* Product Header */}
              <div className="flex justify-between mb-3.5">
                <h3 className="font-medium text-[20px] sm:text-[24px] text-black">Product</h3>
                <h3 className="font-medium text-[20px] sm:text-[24px] text-black">Subtotal</h3>
              </div>

              {/* Product Item */}
              <div className="flex justify-between mb-5 sm:mb-[22px]">
                <div className="flex items-center gap-2">
                  <span className="text-[#9F9F9F] text-[14px] sm:text-[16px]">Asgaard sofa</span>
                  <span className="font-medium text-[12px] text-black">X</span>
                  <span className="font-medium text-[12px] text-black">1</span>
                </div>
                <span className="font-light text-[14px] sm:text-[16px] text-black">Rs. 250,000.00</span>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between mb-5 sm:mb-[22px]">
                <span className="text-[14px] sm:text-[16px] text-black">Subtotal</span>
                <span className="font-light text-[14px] sm:text-[16px] text-black">Rs. 250,000.00</span>
              </div>

              {/* Total */}
              <div className="flex justify-between mb-6 sm:mb-[35px]">
                <span className="text-[14px] sm:text-[16px] text-black">Total</span>
                <span className="font-bold text-[20px] sm:text-[24px] text-[#B88E2F]">Rs. 250,000.00</span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#D9D9D9] mb-5 sm:mb-[22px]"></div>

              {/* Payment Methods */}
              <div className="space-y-4 sm:space-y-[22px] mb-6 sm:mb-[39px]">
                {/* Direct Bank Transfer */}
                <div>
                  <label className="flex items-center gap-[15px] cursor-pointer">
                    <div className="relative">
                      <input 
                        type="radio"
                        name="payment"
                        value="bank-transfer"
                        checked={paymentMethod === 'bank-transfer'}
                        onChange={() => setPaymentMethod('bank-transfer')}
                        className="sr-only"
                      />
                      <div className={`w-3.5 h-3.5 rounded-full border ${paymentMethod === 'bank-transfer' ? 'border-black bg-black' : 'border-[#9F9F9F]'}`}></div>
                    </div>
                    <span className="text-[14px] sm:text-[16px] text-black">Direct Bank Transfer</span>
                  </label>
                  
                  {paymentMethod === 'bank-transfer' && (
                    <p className="font-light text-[14px] sm:text-[16px] text-[#9F9F9F] text-justify mt-2 sm:mt-[11px] leading-6">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                  )}
                </div>

                {/* Direct Bank Transfer (Second Option) */}
                <label className="flex items-center gap-[15px] cursor-pointer">
                  <div className="relative">
                    <input 
                      type="radio"
                      name="payment"
                      value="bank-transfer-2"
                      checked={paymentMethod === 'bank-transfer-2'}
                      onChange={() => setPaymentMethod('bank-transfer-2')}
                      className="sr-only"
                    />
                    <div className={`w-3.5 h-3.5 rounded-full border ${paymentMethod === 'bank-transfer-2' ? 'border-black bg-black' : 'border-[#9F9F9F]'}`}></div>
                  </div>
                  <span className="font-medium text-[14px] sm:text-[16px] text-[#9F9F9F]">Direct Bank Transfer</span>
                </label>

                {/* Cash On Delivery */}
                <label className="flex items-center gap-[15px] cursor-pointer">
                  <div className="relative">
                    <input 
                      type="radio"
                      name="payment"
                      value="cash-on-delivery"
                      checked={paymentMethod === 'cash-on-delivery'}
                      onChange={() => setPaymentMethod('cash-on-delivery')}
                      className="sr-only"
                    />
                    <div className={`w-3.5 h-3.5 rounded-full border ${paymentMethod === 'cash-on-delivery' ? 'border-black bg-black' : 'border-[#9F9F9F]'}`}></div>
                  </div>
                  <span className="font-medium text-[14px] sm:text-[16px] text-[#9F9F9F]">Cash On Delivery</span>
                </label>
              </div>

              {/* Privacy Policy */}
              <p className="font-light text-[14px] sm:text-[16px] text-black text-justify leading-6 mb-6 sm:mb-[39px]">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy.</span>
              </p>

              {/* Place Order Button */}
              <button className="w-full sm:w-[318px] h-16 border border-black rounded-[15px] mx-auto block text-black hover:bg-black hover:text-white transition-colors">
                <span className="font-normal text-[18px] sm:text-[20px]">Place order</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-12 sm:py-16 lg:py-[100px]">
        <div className="container mx-auto px-4 sm:px-8 lg:px-[53px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* High Quality */}
            <div className="flex gap-2.5 items-start">
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex-shrink-0 flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 5L35 20H50L38.75 28.75L43.75 43.75L30 35L16.25 43.75L21.25 28.75L10 20H25L30 5Z" fill="#242424"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[20px] sm:text-[25px] text-[#242424] leading-tight">High Quality</h4>
                <p className="font-medium text-[16px] sm:text-[20px] text-[#898989] leading-relaxed">crafted from top materials</p>
              </div>
            </div>

            {/* Warranty Protection */}
            <div className="flex gap-2.5 items-start">
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex-shrink-0 flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 5L40 15V35C40 40 35 45 30 50C25 45 20 40 20 35V15L30 5Z" fill="#242424"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[20px] sm:text-[25px] text-[#242424] leading-tight">Warranty Protection</h4>
                <p className="font-medium text-[16px] sm:text-[20px] text-[#898989] leading-relaxed">Over 2 years</p>
              </div>
            </div>

            {/* Free Shipping */}
            <div className="flex gap-2.5 items-start">
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex-shrink-0 flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15H35V35H10V15ZM40 20H50L55 30V40H40V20ZM15 45C17.75 45 20 42.75 20 40C20 37.25 17.75 35 15 35C12.25 35 10 37.25 10 40C10 42.75 12.25 45 15 45ZM45 45C47.75 45 50 42.75 50 40C50 37.25 47.75 35 45 35C42.25 35 40 37.25 40 40C40 42.75 42.25 45 45 45Z" fill="#242424"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[20px] sm:text-[25px] text-[#242424] leading-tight">Free Shipping</h4>
                <p className="font-medium text-[16px] sm:text-[20px] text-[#898989] leading-relaxed">Order over 150 $</p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="flex gap-2.5 items-start">
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex-shrink-0 flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10C18.95 10 10 18.95 10 30C10 35.5 12.5 40.5 16.5 43.75V50L23.25 46.5C25.25 47.25 27.5 47.5 30 47.5C41.05 47.5 50 38.55 50 27.5C50 16.45 41.05 7.5 30 7.5V10Z" fill="#242424"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[20px] sm:text-[25px] text-[#242424] leading-tight">24 / 7 Support</h4>
                <p className="font-medium text-[16px] sm:text-[20px] text-[#898989] leading-relaxed">Dedicated support</p>
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