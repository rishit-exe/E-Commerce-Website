'use client';

import { useState } from "react";
import Image from "next/image";

const imgLogo = "/home/logo.png";
const imgIconAccount = "/home/icon-account.svg";
const imgIconSearch = "/home/icon-search.svg";
const imgIconHeart = "/home/icon-heart.svg";
const imgIconCart = "/home/icon-cart.svg";

export default function Header({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`bg-white ${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-[54px] h-20 sm:h-[100px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-[5px] cursor-pointer z-50">
          <Image src={imgLogo} alt="Logo" width={40} height={26} className="object-contain sm:w-[50px] sm:h-8" />
          <span className="font-bold text-[24px] sm:text-[34px] text-black font-['Montserrat']">Furniro</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-[75px]">
          <a href="/" className="font-medium text-[16px] text-black hover:text-[#B88E2F]">Home</a>
          <a href="/shop" className="font-medium text-[16px] text-black hover:text-[#B88E2F]">Shop</a>
          <a href="/about" className="font-medium text-[16px] text-black hover:text-[#B88E2F]">About</a>
          <a href="/contact" className="font-medium text-[16px] text-black hover:text-[#B88E2F]">Contact</a>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-[25px] lg:gap-[45px] items-center">
          <Image src={imgIconAccount} alt="Account" width={24} height={24} className="cursor-pointer sm:w-7 sm:h-7" />
          <Image src={imgIconSearch} alt="Search" width={24} height={24} className="cursor-pointer sm:w-7 sm:h-7" />
          <Image src={imgIconHeart} alt="Wishlist" width={24} height={24} className="cursor-pointer sm:w-7 sm:h-7" />
          <a href="/cart">
            <Image src={imgIconCart} alt="Cart" width={24} height={24} className="cursor-pointer sm:w-7 sm:h-7" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50 flex flex-col gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 lg:hidden pt-24 px-6">
            <nav className="flex flex-col gap-6 mb-8">
              <a href="/" className="font-medium text-[18px] text-black hover:text-[#B88E2F]" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="/shop" className="font-medium text-[18px] text-black hover:text-[#B88E2F]" onClick={() => setIsMobileMenuOpen(false)}>Shop</a>
              <a href="/about" className="font-medium text-[18px] text-black hover:text-[#B88E2F]" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="/contact" className="font-medium text-[18px] text-black hover:text-[#B88E2F]" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </nav>
            <div className="flex gap-6 items-center pt-6 border-t border-gray-200">
              <Image src={imgIconAccount} alt="Account" width={28} height={28} className="cursor-pointer" />
              <Image src={imgIconSearch} alt="Search" width={28} height={28} className="cursor-pointer" />
              <Image src={imgIconHeart} alt="Wishlist" width={28} height={28} className="cursor-pointer" />
              <a href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                <Image src={imgIconCart} alt="Cart" width={28} height={28} className="cursor-pointer" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
