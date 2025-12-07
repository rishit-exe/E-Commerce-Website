'use client';
import Image from "next/image";
import React from "react";
import { useState } from 'react';
import productsData from '@/data/products.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

// Local Image paths
const imgHeroBanner = "/home/hero-banner.jpg";
const imgCategoryDining = "/home/category-dining.jpg";
const imgCategoryLiving = "/home/category-living.jpg";
const imgCategoryBedroom = "/home/category-bedroom.jpg";
const imgRoomInnerPeace = "/home/room-inner-peace.jpg";
const imgRoom2 = "/home/room-2.jpg";
const imgRoom3 = "/home/room-3.jpg";
const imgIconArrowRight = "/home/icon-arrow-right.svg";
const imgNextArrow = "/home/Right-24px.svg";
const imgGallery1 = "/home/gallery-1.jpg";
const imgGallery2 = "/home/gallery-2.jpg";
const imgGallery3 = "/home/gallery-3.jpg";
const imgGallery4 = "/home/gallery-4.jpg";
const imgGallery5 = "/home/gallery-5.jpg";
const imgGallery6 = "/home/gallery-6.jpg";
const imgGallery7 = "/home/gallery-7.jpg";
const imgGallery8 = "/home/gallery-8.jpg";
const imgGallery9 = "/home/gallery-9.jpg";

function HeroBanner() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[calc(100vh-100px)] lg:min-h-[600px] lg:max-h-[900px]">
      <Image 
        src={imgHeroBanner} 
        alt="Hero Background" 
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end px-4 sm:px-8 lg:pr-[58px]">
        <div className="bg-[#FFF3E3] rounded-[10px] p-6 sm:p-8 lg:p-[43px_39px] max-w-[643px] w-full mx-4 sm:mx-0">
          <p className="text-[#333333] font-semibold text-[12px] sm:text-[14px] lg:text-[16px] tracking-[2px] lg:tracking-[3px] mb-1">New Arrival</p>
          <h1 className="text-[#B88E2F] font-bold text-[28px] sm:text-[36px] lg:text-[52px] leading-tight lg:leading-[65px] mb-3 lg:mb-[17px]">
            Discover Our<br />New Collection
          </h1>
          <p className="text-[#333333] font-medium text-[14px] sm:text-[16px] lg:text-[18px] leading-6 mb-6 lg:mb-[46px] max-w-[546px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] text-white font-bold text-[14px] sm:text-[16px] px-8 sm:px-12 lg:px-[72px] py-3 sm:py-4 lg:py-[25px] hover:bg-[#9f7a28] transition-colors uppercase w-full sm:w-auto">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

function BrowseRange() {
  return (
    <section className="py-8 sm:py-10 lg:py-14 px-4 sm:px-8 lg:px-[100px]">
      <div className="text-center mb-8 sm:mb-10 lg:mb-[62px]">
        <h2 className="text-[#333333] font-bold text-[24px] sm:text-[28px] lg:text-[32px] mb-0.5">Browse The Range</h2>
        <p className="text-[#666666] font-normal text-[16px] sm:text-[18px] lg:text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-5">
        <div className="text-center">
          <div className="relative h-[300px] sm:h-[380px] lg:h-[480px] mb-5 sm:mb-6 lg:mb-[30px] overflow-hidden rounded-lg">
            <Image src={imgCategoryDining} alt="Dining" fill className="object-cover" />
          </div>
          <p className="text-[#333333] font-semibold text-[20px] sm:text-[22px] lg:text-[24px]">Dining</p>
        </div>

        <div className="text-center">
          <div className="relative h-[300px] sm:h-[380px] lg:h-[480px] mb-5 sm:mb-6 lg:mb-[30px] overflow-hidden rounded-lg">
            <Image src={imgCategoryLiving} alt="Living" fill className="object-cover" />
          </div>
          <p className="text-[#333333] font-semibold text-[20px] sm:text-[22px] lg:text-[24px]">Living</p>
        </div>

        <div className="text-center">
          <div className="relative h-[300px] sm:h-[380px] lg:h-[480px] mb-5 sm:mb-6 lg:mb-[30px] overflow-hidden rounded-lg">
            <Image src={imgCategoryBedroom} alt="Bedroom" fill className="object-cover" />
          </div>
          <p className="text-[#333333] font-semibold text-[20px] sm:text-[22px] lg:text-[24px]">Bedroom</p>
        </div>
      </div>
    </section>
  );
}

function OurProducts() {
  return (
    <section className="py-8 sm:py-10 lg:py-14 px-4 sm:px-8 lg:px-[102px]">
      <h2 className="text-[#3A3A3A] font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-center mb-6 lg:mb-8">Our Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8 justify-items-center">
        {productsData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="border border-[#B88E2F] text-[#B88E2F] font-semibold text-[14px] sm:text-[16px] px-12 sm:px-16 lg:px-[82px] py-3 hover:bg-[#B88E2F] hover:text-white transition-colors">
          Show More
        </button>
      </div>
    </section>
  );
}

function Inspirations() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: imgRoomInnerPeace, title: 'Inner Peace', category: 'Bed Room', number: '01' },
    { image: imgRoom2, title: 'Cozy Corner', category: 'Living Room', number: '02' },
    { image: imgRoom3, title: 'Modern Space', category: 'Dining Room', number: '03' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-[#FCF8F3] py-8 sm:py-10 lg:py-11 relative overflow-hidden">
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden px-4 sm:px-8 pb-8">
        {/* Text Content */}
        <div className="mb-6">
          <h2 className="text-[#3A3A3A] font-bold text-[28px] sm:text-[32px] leading-tight mb-2">
            50+ Beautiful rooms<br />inspiration
          </h2>
          <p className="text-[#616161] font-medium text-[14px] sm:text-[16px] leading-6 mb-4">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <button className="bg-[#B88E2F] text-white font-semibold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 hover:bg-[#9f7a28] transition-colors">
            Explore More
          </button>
        </div>

        {/* Mobile Featured Image with overlay */}
        <div className="relative w-full h-[400px] sm:h-[500px]">
          <Image 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title} 
            fill 
            className="object-cover rounded-lg" 
          />
          
          {/* Content Overlay */}
          <div className="absolute bottom-4 left-4 bg-white/72 backdrop-blur-[1.5px] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#616161] font-medium text-[14px]">{slides[currentSlide].number}</span>
              <div className="w-6 h-px bg-[#616161]"></div>
              <span className="text-[#616161] font-medium text-[14px]">{slides[currentSlide].category}</span>
            </div>
            <h3 className="text-[#3A3A3A] font-semibold text-[20px] sm:text-[24px]">{slides[currentSlide].title}</h3>
          </div>

          {/* Arrow Button on featured image */}
          <button 
            onClick={nextSlide}
            className="absolute bottom-4 right-4 bg-[#B88E2F] w-12 h-12 flex items-center justify-center hover:bg-[#9f7a28] transition-colors rounded"
          >
            <Image src={imgIconArrowRight} alt="Next" width={20} height={20} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex gap-4 justify-center mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-[#B88E2F] w-7' 
                  : 'bg-[#D8D8D8] w-2.5 hover:bg-[#B88E2F]/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative h-[670px]">
        {/* Left Content */}
        <div className="absolute left-[100px] top-[179px] max-w-[422px]">
          <h2 className="text-[#3A3A3A] font-bold text-[40px] leading-12 mb-[7px]">
            50+ Beautiful rooms<br />inspiration
          </h2>
          <p className="text-[#616161] font-medium text-[16px] leading-6 mb-[25px] max-w-[368px]">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <button className="bg-[#B88E2F] text-white font-semibold text-[16px] px-9 py-3 hover:bg-[#9f7a28] transition-colors">
            Explore More
          </button>
        </div>

        {/* Images Container */}
        <div className="absolute left-[580px] top-11">
          {/* Main Featured Image with overlay */}
          <div className="absolute left-0 top-0 w-[404px] h-[582px]">
            <Image 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              fill 
              className="object-cover" 
            />
            
            {/* Content Overlay */}
            <div className="absolute bottom-6 left-6 bg-white/72 backdrop-blur-[1.5px] w-[217px] h-[130px] flex flex-col justify-end pb-8 px-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#616161] font-medium text-[16px]">{slides[currentSlide].number}</span>
                <div className="w-[27px] h-px bg-[#616161]"></div>
                <span className="text-[#616161] font-medium text-[16px]">{slides[currentSlide].category}</span>
              </div>
              <h3 className="text-[#3A3A3A] font-semibold text-[28px] leading-[33.6px]">{slides[currentSlide].title}</h3>
            </div>

            {/* Arrow Button on featured image */}
            <button 
              onClick={nextSlide}
              className="absolute bottom-6 right-6 bg-[#B88E2F] w-12 h-12 flex items-center justify-center hover:bg-[#9f7a28] transition-colors"
            >
              <Image src={imgIconArrowRight} alt="Next" width={24} height={24} />
            </button>
          </div>

          {/* Second Image */}
          <div className="absolute left-[428px] top-0 w-[372px] h-[486px]">
            <Image 
              src={slides[(currentSlide + 1) % slides.length].image} 
              alt="Next" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Third Image*/}
          <div className="absolute left-[824px] top-0 w-[372px] h-[486px]">
            <Image 
              src={slides[(currentSlide + 2) % slides.length].image} 
              alt="Next" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Carousel Indicators */}
          <div className="absolute left-[428px] bottom-[43px] flex gap-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-[11px] rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-[#B88E2F] w-[27px]' 
                    : 'bg-[#D8D8D8] w-[11px] hover:bg-[#B88E2F]/50'
                }`}
              />
            ))}
          </div>

          {/* Right Arrow Navigation Circle */}
          <button 
            onClick={nextSlide}
            className="absolute left-[752px] top-[267px] w-12 h-12 rounded-full bg-white shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <div className="relative w-6 h-6">
              <Image src={imgNextArrow} alt="Next" fill className="object-contain" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

function ShareSetup() {
  return (
    <section className="relative py-8 sm:py-10 lg:py-[67px] overflow-hidden">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-[59px] px-4">
        <p className="text-[#616161] font-semibold text-[16px] sm:text-[18px] lg:text-[20px] mb-2">Share your setup with</p>
        <h2 className="text-[#3A3A3A] font-bold text-[28px] sm:text-[32px] lg:text-[40px]">#FuniroFurniture</h2>
      </div>
      
      {/* Images Gallery*/}
      <div className="relative h-auto sm:h-[500px] lg:h-[720px] w-full max-w-[1440px] mx-auto px-4 sm:px-0">
        {/* Mobile/Tablet: Simple 2-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
          <div className="relative h-[200px] sm:h-[250px]"><Image src={imgGallery1} alt="Setup 1" fill className="object-cover rounded-lg" /></div>
          <div className="relative h-[200px] sm:h-[250px]"><Image src={imgGallery2} alt="Setup 2" fill className="object-cover rounded-lg" /></div>
          <div className="relative h-[200px] sm:h-[250px]"><Image src={imgGallery3} alt="Setup 3" fill className="object-cover rounded-lg" /></div>
          <div className="relative h-[200px] sm:h-[250px]"><Image src={imgGallery4} alt="Setup 4" fill className="object-cover rounded-lg" /></div>
          <div className="relative h-[200px] sm:h-[250px]"><Image src={imgGallery5} alt="Setup 5" fill className="object-cover rounded-lg" /></div>
          <div className="relative h-[200px] sm:h-[250px]"><Image src={imgGallery6} alt="Setup 6" fill className="object-cover rounded-lg" /></div>
        </div>

        {/* Desktop: Absolute positioned masonry layout */}
        <div className="hidden lg:block">
          {/* Left column - Image 1 (tall) */}
          <div className="absolute left-0 top-0 w-[274px] h-[382px]">
            <Image src={imgGallery1} alt="Setup 1" fill className="object-cover" />
          </div>

          {/* Left column - Image 6 (bottom) */}
          <div className="absolute left-0 top-[398px] w-[381px] h-[323px]">
            <Image src={imgGallery6} alt="Setup 6" fill className="object-cover" />
          </div>

          {/* Middle-left - Image 2 (wide, top) */}
          <div className="absolute left-[290px] top-[70px] w-[451px] h-[312px]">
            <Image src={imgGallery2} alt="Setup 2" fill className="object-cover" />
          </div>

          {/* Middle-left - Image 7 (bottom) */}
          <div className="absolute left-[290px] top-[398px] w-[344px] h-[242px]">
            <Image src={imgGallery7} alt="Setup 7" fill className="object-cover" />
          </div>

          {/* Center - Image 4 (tall) */}
          <div className="absolute left-[561px] top-[156px] w-[295px] h-[392px]">
            <Image src={imgGallery4} alt="Setup 4" fill className="object-cover" />
          </div>

          {/* Middle-right - Image 5 (tall) */}
          <div className="absolute left-[872px] top-[99px] w-[290px] h-[348px]">
            <Image src={imgGallery5} alt="Setup 5" fill className="object-cover" />
          </div>

          {/* Middle-right bottom - Image 8 */}
          <div className="absolute left-[872px] top-[463px] w-[178px] h-[242px]">
            <Image src={imgGallery8} alt="Setup 8" fill className="object-cover" />
          </div>

          {/* Middle-right bottom - Image 9 */}
          <div className="absolute left-[1066px] top-[463px] w-[258px] h-[196px]">
            <Image src={imgGallery9} alt="Setup 9" fill className="object-cover" />
          </div>

          {/* Right column - Image 3 (tallest) */}
          <div className="absolute left-[1178px] top-3.5 w-[425px] h-[433px]">
            <Image src={imgGallery3} alt="Setup 3" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <HeroBanner />
      <BrowseRange />
      <OurProducts />
      <Inspirations />
      <ShareSetup />
      <Footer />
    </div>
  );
}
