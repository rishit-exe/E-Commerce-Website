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
    <div className="relative w-full h-[316px]">
      <div className="absolute inset-0 blur-[3px]">
        <Image 
          src={imgShopBanner} 
          alt="Shop Banner" 
          fill 
          className="object-cover opacity-50"
        />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center">
        <h1 className="text-black font-medium text-[48px] mb-[4px]">Shop</h1>
        <div className="flex items-center gap-[6px]">
          <a href="/" className="text-black font-medium text-[16px]">Home</a>
          <div className="w-[20px] h-[20px] rotate-[-90deg]">
            <Image src={imgBreadcrumbArrow} alt=">" width={20} height={20} />
          </div>
          <span className="text-black font-light text-[16px]">Shop</span>
        </div>
      </div>
    </div>
  );
}

function FilterBar() {
  return (
    <div className="bg-[#F9F1E7] h-[100px] flex items-center justify-between px-[98px]">
      {/* Left Section - Filter & View Options */}
      <div className="flex items-center gap-[37px]">
        {/* Filter */}
        <div className="flex items-center gap-[12px]">
          <Image src={imgFilterIcon} alt="Filter" width={25} height={25} />
          <span className="text-black font-normal text-[20px]">Filter</span>
        </div>

        {/* View Icons */}
        <Image src={imgViewGrid} alt="Grid View" width={28} height={28} className="cursor-pointer" />
        <Image src={imgViewList} alt="List View" width={24} height={24} className="cursor-pointer" />

        {/* Divider */}
        <div className="w-[2px] h-[37px] bg-[#9F9F9F]"></div>

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
  );
}

function Pagination() {
  return (
    <div className="flex items-center justify-center gap-[38px] py-[60px]">
      <button className="bg-[#B88E2F] text-white w-[60px] h-[60px] rounded-[10px] font-normal text-[20px] hover:bg-[#9f7a28]">
        1
      </button>
      <button className="bg-[#F9F1E7] text-black w-[60px] h-[60px] rounded-[10px] font-normal text-[20px] hover:bg-[#B88E2F] hover:text-white">
        2
      </button>
      <button className="bg-[#F9F1E7] text-black w-[60px] h-[60px] rounded-[10px] font-normal text-[20px] hover:bg-[#B88E2F] hover:text-white">
        3
      </button>
      <button className="bg-[#F9F1E7] text-black w-[98px] h-[60px] rounded-[10px] font-light text-[20px] hover:bg-[#B88E2F] hover:text-white">
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
    <div className="bg-[#FAF3EA] py-[100px]">
      <div className="max-w-[1334px] mx-auto flex items-center justify-between px-[53px]">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-[10px]">
            <div className="w-[60px] h-[60px] relative flex-shrink-0">
              <Image src={feature.icon} alt={feature.title} fill className="object-contain" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[#242424] font-semibold text-[25px] leading-[37.5px]">{feature.title}</p>
              <p className="text-[#898989] font-medium text-[20px] leading-[30px]">{feature.description}</p>
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
      <div className="py-[17px] px-[99px]">
        <div className="grid grid-cols-4 gap-x-[32px] gap-y-[40px]">
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