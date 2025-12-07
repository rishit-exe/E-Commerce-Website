'use client';

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  
  const parsePrice = (priceString: string | number): number => {
    const str = typeof priceString === 'string' ? priceString : String(priceString);
    // Remove currency symbols and spaces, then replace dots with empty string (for Indonesian format)
    // Keep only numbers
    const cleaned = str.replace(/[^\d]/g, '');
    return parseFloat(cleaned) || 0;
  };
  
  const total = cartItems.reduce((sum, item) => {
    const price = parsePrice(item.price);
    return sum + (price * item.quantity);
  }, 0);

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
            width={60} 
            height={60}
            className="mb-3 sm:w-[77px] sm:h-[77px] sm:mb-4"
          />
          <h1 className="font-medium text-[32px] sm:text-[40px] lg:text-[48px] text-black">Cart</h1>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-4 sm:bottom-[21px] left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3.5">
          <a href="/" className="font-medium text-[14px] sm:text-[16px] text-black hover:text-[#B88E2F] cursor-pointer transition-colors">Home</a>
          <Image 
            src="/cart/arrow-down.svg" 
            alt="" 
            width={16} 
            height={16}
            className="-rotate-90 sm:w-5 sm:h-5"
          />
          <span className="font-light text-[14px] sm:text-[16px] text-black">Cart</span>
        </div>
      </div>

      {/* Main Cart Content */}
      <div className="bg-white py-8 sm:py-12 lg:py-[72px] px-4 sm:px-8 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[30px]">
          {/* Cart Items */}
          <div className="flex-1">
            {/* Desktop Table Header */}
            <div className="hidden lg:flex bg-[#F9F1E7] h-[55px] items-center px-[140px] mb-[55px]">
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

            {/* Mobile Card Layout */}
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#9F9F9F] text-[18px] mb-4">Your cart is empty</p>
                <a href="/shop" className="inline-block bg-[#B88E2F] text-white px-8 py-3 rounded hover:bg-[#A07828] transition-colors">
                  Continue Shopping
                </a>
              </div>
            ) : (
              <>
                {cartItems.map((item) => {
                  const itemPrice = parsePrice(item.price);
                  const itemSubtotal = itemPrice * item.quantity;

                  return (
                    <div key={item.id}>
                      {/* Mobile */}
                      <div className="lg:hidden bg-white border border-[#E8E8E8] rounded-lg p-4 mb-6">
                        <div className="flex gap-4 mb-4">
                          <div className="w-20 h-20 bg-[#F9F1E7] rounded-lg flex items-center justify-center shrink-0">
                            <Image 
                              src={item.image} 
                              alt={item.title} 
                              width={70} 
                              height={70}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-[16px] text-black mb-2">{item.title}</h3>
                            <p className="font-normal text-[14px] text-[#9F9F9F] mb-1">{item.price}</p>
                            <div className="flex items-center gap-3">
                              <div className="border border-[#9F9F9F] rounded-[5px] flex items-center">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 hover:bg-gray-100">-</button>
                                <span className="font-normal text-[14px] text-black px-3">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 hover:bg-gray-100">+</button>
                              </div>
                              <p className="font-medium text-[16px] text-black">Rp {itemSubtotal.toLocaleString('id-ID')}</p>
                            </div>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="shrink-0">
                            <Image 
                              src="/cart/delete-icon.svg" 
                              alt="Delete" 
                              width={24} 
                              height={24}
                              className="hover:opacity-70 transition-opacity"
                            />
                          </button>
                        </div>
                      </div>

                      {/* Desktop Cart Item */}
                      <div className="hidden lg:flex items-center px-[3px] mb-8">
                        {/* Product Image */}
                        <div className="w-[105px] h-[105px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center mr-[35px]">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            width={90} 
                            height={90}
                            className="object-contain"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex items-center flex-1">
                          <div className="w-[25%]">
                            <p className="font-normal text-[16px] text-[#9F9F9F]">{item.title}</p>
                          </div>
                          <div className="w-[20%]">
                            <p className="font-normal text-[16px] text-[#9F9F9F]">{item.price}</p>
                          </div>
                          <div className="w-[25%]">
                            <div className="border border-[#9F9F9F] rounded-[5px] flex items-center w-fit">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-2 hover:bg-gray-100">-</button>
                              <span className="font-normal text-[16px] text-black px-4">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-2 hover:bg-gray-100">+</button>
                            </div>
                          </div>
                          <div className="w-[20%]">
                            <p className="font-normal text-[16px] text-black">Rp {itemSubtotal.toLocaleString('id-ID')}</p>
                          </div>
                          <div className="w-[10%] flex justify-end">
                            <button onClick={() => removeFromCart(item.id)} className="w-7 h-7">
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
                  );
                })}
              </>
            )}
          </div>

          {/* Cart Totals */}
          <div className="w-full lg:w-[393px] bg-[#F9F1E7] rounded-lg p-6 sm:p-8 lg:px-[75px] lg:py-[15px]">
            <h2 className="font-semibold text-[24px] sm:text-[28px] lg:text-[32px] text-black text-center mb-8 sm:mb-10 lg:mb-[61px]">Cart Totals</h2>
            
            {/* Subtotal */}
            <div className="flex justify-between mb-5 sm:mb-6 lg:mb-[30px]">
              <span className="font-medium text-[14px] sm:text-[16px] text-black">Subtotal</span>
              <span className="font-normal text-[14px] sm:text-[16px] text-[#9F9F9F]">Rp {total.toLocaleString('id-ID')}</span>
            </div>

            {/* Total */}
            <div className="flex justify-between mb-6 sm:mb-8 lg:mb-[42px]">
              <span className="font-medium text-[14px] sm:text-[16px] text-black">Total</span>
              <span className="font-medium text-[18px] sm:text-[20px] text-[#B88E2F]">Rp {total.toLocaleString('id-ID')}</span>
            </div>

            {/* Check Out Button */}
            <div className="flex justify-center">
              <a href="/checkout" className="w-full sm:w-auto">
                <button className="border border-black rounded-[15px] w-full sm:w-[222px] h-14 sm:h-14 lg:h-[58.95px] text-[20px] sm:text-[20px] text-black font-normal hover:bg-black hover:text-white transition-colors">
                  Check Out
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}