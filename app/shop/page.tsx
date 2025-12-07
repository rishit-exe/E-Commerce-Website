'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';

// Hero Banner Images
const imgShopBanner = "/shop/shop-banner.jpg";
const imgBreadcrumbArrow = "/shop/breadcrumb-arrow.svg";

// Filter Bar Icons
const imgFilterIcon = "/shop/filter-icon.svg";
const imgViewList = "/shop/view-list.svg";
const imgViewGrid = "/shop/view-grid.svg";

// Features Icons
const imgTrophy = "/shop/trophy.svg";
const imgGuarantee = "/shop/guarantee.svg";
const imgShipping = "/shop/shipping.svg";
const imgSupport = "/shop/support.svg";

function ShopHero() {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[316px]">
      <div className="absolute inset-0 blur-[3px]">
        <Image 
          src={imgShopBanner} 
          alt="Shop Banner" 
          fill 
          className="object-cover opacity-50"
        />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-black font-medium text-[32px] sm:text-[40px] lg:text-[48px] mb-1">Shop</h1>
        <div className="flex items-center gap-1.5">
          <a href="/" className="text-black font-medium text-[14px] sm:text-[16px] hover:text-[#B88E2F]">Home</a>
          <div className="w-4 h-4 sm:w-5 sm:h-5 -rotate-90">
            <Image src={imgBreadcrumbArrow} alt=">" width={20} height={20} />
          </div>
          <span className="text-black font-light text-[14px] sm:text-[16px]">Shop</span>
        </div>
      </div>
    </div>
  );
}

function FilterBar() {
  return (
    <div className="bg-[#F9F1E7] py-4 sm:py-6 lg:h-[100px] flex items-center justify-between px-4 sm:px-8 lg:px-[98px]">
      {/* Mobile/Tablet: Stacked Layout */}
      <div className="w-full lg:hidden">
        {/* Top Row - Filter & Results */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Image src={imgFilterIcon} alt="Filter" width={20} height={20} className="sm:w-[25px] sm:h-[25px]" />
            <span className="text-black font-normal text-[16px] sm:text-[18px]">Filter</span>
          </div>
          <span className="text-black font-normal text-[12px] sm:text-[14px]">Showing 1–16 of 32</span>
        </div>

        {/* Bottom Row - Show & Sort */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-black font-normal text-[14px] sm:text-[16px]">Show</span>
            <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <span className="text-[#9F9F9F] font-normal text-[14px] sm:text-[16px]">16</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-black font-normal text-[14px] sm:text-[16px]">Sort</span>
            <div className="bg-white px-3 sm:px-4 h-10 sm:h-12 flex items-center">
              <span className="text-[#9F9F9F] font-normal text-[14px] sm:text-[16px]">Default</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Original Horizontal Layout */}
      <div className="hidden lg:flex w-full items-center justify-between">
        {/* Left Section - Filter & View Options */}
        <div className="flex items-center gap-[37px]">
          {/* Filter */}
          <div className="flex items-center gap-3">
            <Image src={imgFilterIcon} alt="Filter" width={25} height={25} />
            <span className="text-black font-normal text-[20px]">Filter</span>
          </div>

          {/* View Icons */}
          <Image src={imgViewGrid} alt="Grid View" width={28} height={28} className="cursor-pointer" />
          <Image src={imgViewList} alt="List View" width={24} height={24} className="cursor-pointer" />

          {/* Divider */}
          <div className="w-0.5 h-[37px] bg-[#9F9F9F]"></div>

          {/* Results Count */}
          <span className="text-black font-normal text-[16px]">Showing 1–16 of 32 results</span>
        </div>

        {/* Right Section - Show & Sort */}
        <div className="flex items-center gap-[29px]">
          {/* Show */}
          <div className="flex items-center gap-[17px]">
            <span className="text-black font-normal text-[20px]">Show</span>
            <div className="bg-white w-[55px] h-[55px] flex items-center justify-center">
              <span className="text-[#9F9F9F] font-normal text-[20px]">16</span>
            </div>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-[17px]">
            <span className="text-black font-normal text-[20px]">Short by</span>
            <div className="bg-white w-[188px] h-[55px] flex items-center px-[30px]">
              <span className="text-[#9F9F9F] font-normal text-[20px]">Default</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-[38px] py-8 sm:py-10 lg:py-[60px] px-4">
      <button className="bg-[#B88E2F] text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] rounded-[10px] font-normal text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#9f7a28]">
        1
      </button>
      <button className="bg-[#F9F1E7] text-black w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] rounded-[10px] font-normal text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#B88E2F] hover:text-white">
        2
      </button>
      <button className="bg-[#F9F1E7] text-black w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] rounded-[10px] font-normal text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#B88E2F] hover:text-white">
        3
      </button>
      <button className="bg-[#F9F1E7] text-black w-16 h-12 sm:w-20 sm:h-14 lg:w-[98px] lg:h-[60px] rounded-[10px] font-light text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#B88E2F] hover:text-white">
        Next
      </button>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: imgTrophy,
      title: "High Quality",
      description: "crafted from top materials"
    },
    {
      icon: imgGuarantee,
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      icon: imgShipping,
      title: "Free Shipping",
      description: "Order over 150 $"
    },
    {
      icon: imgSupport,
      title: "24 / 7 Support",
      description: "Dedicated support"
    }
  ];

  return (
    <div className="bg-[#FAF3EA] py-12 sm:py-16 lg:py-[100px]">
      <div className="max-w-[1334px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:flex lg:items-center lg:justify-between px-4 sm:px-8 lg:px-[53px]">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 lg:gap-2.5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] relative shrink-0">
              <Image src={feature.icon} alt={feature.title} fill className="object-contain" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[#242424] font-semibold text-[18px] sm:text-[20px] lg:text-[25px] leading-tight lg:leading-[37.5px]">{feature.title}</p>
              <p className="text-[#898989] font-medium text-[14px] sm:text-[16px] lg:text-[20px] leading-tight lg:leading-[30px]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Shop() {
  // Show 16 products (duplicate the 8 products to make 16)
  const products = [...productsData, ...productsData];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <ShopHero />
      <FilterBar />
      
      {/* Products Grid */}
      <div className="py-4 sm:py-6 lg:py-[17px] px-4 sm:px-8 lg:px-[99px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 sm:gap-x-8 lg:gap-x-8 lg:gap-y-10 justify-items-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      <Pagination />
      <Features />
      <Footer />
    </div>
  );
}