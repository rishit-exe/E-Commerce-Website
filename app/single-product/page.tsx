'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';

// Product Images
const imgAsgaardMain = "/single-product/asgaard-main.jpg";
const imgOutdoorSofa1 = "/single-product/outdoor-sofa-1.jpg";
const imgOutdoorSofa2 = "/single-product/outdoor-sofa-2.jpg";
const imgStuartSofa = "/single-product/stuart-sofa.jpg";
const imgMayaSofa = "/single-product/maya-sofa.jpg";

// Icons
const imgArrow = "/single-product/arrow.svg";
const imgStarFilled = "/single-product/star-filled.svg";
const imgStarHalf = "/single-product/star-half.svg";
const imgFacebook = "/single-product/facebook.svg";
const imgTwitter = "/single-product/twitter.svg";
const imgLinkedin = "/single-product/linkedin.svg";

// Description Images
const imgCloudSofa1 = "/single-product/cloud-sofa-1.jpg";
const imgCloudSofa2 = "/single-product/cloud-sofa-2.jpg";

function Breadcrumb() {
  return (
    <div className="bg-[#F9F1E7] h-[70px] sm:h-[80px] lg:h-[100px] flex items-center px-4 sm:px-8 lg:px-[99px]">
      <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-[6px] overflow-x-auto">
        <a href="/" className="text-[#9F9F9F] font-normal text-[14px] sm:text-[16px] hover:text-[#B88E2F] whitespace-nowrap">Home</a>
        <div className="w-4 h-4 sm:w-5 sm:h-5 rotate-90">
          <Image src={imgArrow} alt=">" width={20} height={20} />
        </div>
        <a href="/shop" className="text-[#9F9F9F] font-normal text-[14px] sm:text-[16px] hover:text-[#B88E2F] whitespace-nowrap">Shop</a>
        <div className="w-4 h-4 sm:w-5 sm:h-5 rotate-90">
          <Image src={imgArrow} alt=">" width={20} height={20} />
        </div>
        <div className="w-0 h-6 sm:h-8 lg:h-[37px] border-l-2 border-[#9F9F9F]"></div>
        <span className="text-black font-normal text-[14px] sm:text-[16px] ml-2 sm:ml-3 lg:ml-[18px] truncate">Asgaard sofa</span>
      </div>
    </div>
  );
}

function ProductGallery() {
  const thumbnails = [imgOutdoorSofa1, imgOutdoorSofa2, imgStuartSofa, imgMayaSofa];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[32px]">
      {/* Thumbnails */}
      <div className="flex sm:flex-col gap-3 sm:gap-4 lg:gap-[32px] overflow-x-auto sm:overflow-visible">
        {thumbnails.map((thumb, index) => (
          <div
            key={index}
            className={`bg-[#F9F1E7] rounded-[10px] w-16 h-16 sm:w-[76px] sm:h-20 flex items-center justify-center cursor-pointer overflow-hidden shrink-0 ${
              selectedImage === index ? 'ring-2 ring-[#B88E2F]' : ''
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative w-full h-full">
              <Image src={thumb} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="bg-[#F9F1E7] rounded-[10px] w-full sm:w-[350px] md:w-[400px] lg:w-[423px] h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <Image src={imgAsgaardMain} alt="Asgaard Sofa" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('#816DFA');

  return (
    <div className="flex flex-col">
      <h1 className="text-black font-normal text-[28px] sm:text-[36px] lg:text-[42px] mb-3 lg:mb-[16px]">Asgaard sofa</h1>
      <p className="text-[#9F9F9F] font-medium text-[20px] sm:text-[22px] lg:text-[24px] mb-3 lg:mb-[16px]">Rs. 250,000.00</p>

      {/* Rating */}
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-[22px] mb-3 lg:mb-[13px]">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <Image src={imgStarFilled} alt="Star" width={18} height={18} className="sm:w-5 sm:h-5" />
          <Image src={imgStarFilled} alt="Star" width={18} height={18} className="sm:w-5 sm:h-5" />
          <Image src={imgStarFilled} alt="Star" width={18} height={18} className="sm:w-5 sm:h-5" />
          <Image src={imgStarFilled} alt="Star" width={18} height={18} className="sm:w-5 sm:h-5" />
          <Image src={imgStarHalf} alt="Half Star" width={18} height={18} className="sm:w-5 sm:h-5" />
        </div>
        <div className="w-0 h-6 sm:h-[30px] border-l border-[#9F9F9F]"></div>
        <span className="text-[#9F9F9F] font-normal text-[12px] sm:text-[13px]">5 Customer Review</span>
      </div>

      {/* Description */}
      <p className="text-black font-normal text-[12px] sm:text-[13px] leading-relaxed mb-4 lg:mb-[22px] max-w-full lg:max-w-[424px]">
        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
      </p>

      {/* Size */}
      <div className="mb-4 lg:mb-[18px]">
        <p className="text-[#9F9F9F] font-normal text-[13px] sm:text-[14px] mb-2 lg:mb-3">Size</p>
        <div className="flex gap-3 sm:gap-4">
          {['L', 'XL', 'XS'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-8 h-8 sm:w-[30px] sm:h-[30px] rounded-[5px] font-normal text-[12px] sm:text-[13px] ${
                selectedSize === size
                  ? 'bg-[#B88E2F] text-white'
                  : 'bg-[#F9F1E7] text-black'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="mb-6 lg:mb-[32px]">
        <p className="text-[#9F9F9F] font-normal text-[13px] sm:text-[14px] mb-2 lg:mb-3">Color</p>
        <div className="flex gap-3 sm:gap-4">
          {[
            { color: '#816DFA', name: 'Purple' },
            { color: '#000000', name: 'Black' },
            { color: '#B88E2F', name: 'Gold' }
          ].map((colorOption) => (
            <button
              key={colorOption.color}
              onClick={() => setSelectedColor(colorOption.color)}
              className={`w-8 h-8 sm:w-[30px] sm:h-[30px] rounded-full ${
                selectedColor === colorOption.color ? 'ring-2 ring-offset-2 ring-[#B88E2F]' : ''
              }`}
              style={{ backgroundColor: colorOption.color }}
              aria-label={colorOption.name}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-[18px] mb-6 lg:mb-[40px]">
        {/* Quantity */}
        <div className="flex items-center justify-between border border-[#9F9F9F] rounded-[10px] w-full sm:w-[100px] lg:w-[123px] h-12 sm:h-14 lg:h-[64px] px-3 sm:px-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-black font-normal text-[16px]"
          >
            -
          </button>
          <span className="text-black font-medium text-[16px]">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-black font-normal text-[16px]"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button className="border border-black rounded-[15px] w-full sm:flex-1 lg:w-[215px] h-12 sm:h-14 lg:h-[64px] text-black font-normal text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-black hover:text-white transition-colors">
          Add To Cart
        </button>

        {/* Compare */}
        <a href="/product-comparison" className="border border-black rounded-[15px] w-full sm:flex-1 lg:w-[215px] h-12 sm:h-14 lg:h-[64px] flex items-center justify-center gap-2 lg:gap-[10px] text-black font-normal text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-black hover:text-white transition-colors cursor-pointer">
          <span className="text-[20px] sm:text-[23px]">+</span>
          <span>Compare</span>
        </a>
      </div>

      {/* Divider */}
      <div className="w-full lg:max-w-[605px] h-[1px] bg-[#D9D9D9] mb-6 lg:mb-[41px]"></div>

      {/* Meta Info */}
      <div className="space-y-2 sm:space-y-3 text-[14px] sm:text-[16px]">
        <div className="flex gap-2 sm:gap-3">
          <span className="text-[#9F9F9F] font-normal w-16 sm:w-[75px]">SKU</span>
          <span className="text-[#9F9F9F] font-medium">:</span>
          <span className="text-[#9F9F9F] font-normal">SS001</span>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <span className="text-[#9F9F9F] font-normal w-16 sm:w-[75px]">Category</span>
          <span className="text-[#9F9F9F] font-medium">:</span>
          <span className="text-[#9F9F9F] font-normal">Sofas</span>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <span className="text-[#9F9F9F] font-normal w-16 sm:w-[75px]">Tags</span>
          <span className="text-[#9F9F9F] font-medium">:</span>
          <span className="text-[#9F9F9F] font-normal">Sofa, Chair, Home, Shop</span>
        </div>
        <div className="flex gap-2 sm:gap-3 items-center">
          <span className="text-[#9F9F9F] font-normal w-16 sm:w-[75px]">Share</span>
          <span className="text-[#9F9F9F] font-medium">:</span>
          <div className="flex gap-4 sm:gap-[25px]">
            <Image src={imgFacebook} alt="Facebook" width={18} height={18} className="cursor-pointer sm:w-5 sm:h-5" />
            <Image src={imgTwitter} alt="Twitter" width={22} height={22} className="cursor-pointer sm:w-[25px] sm:h-[25px]" />
            <Image src={imgLinkedin} alt="LinkedIn" width={18} height={18} className="cursor-pointer sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DescriptionSection() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-white border-t border-[#D9D9D9]">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-[53px] pt-6 sm:pt-8 lg:pt-[48px] pb-5 sm:pb-6 lg:pb-[37px] px-4">
        <button
          onClick={() => setActiveTab('description')}
          className={`font-normal text-[16px] sm:text-[20px] lg:text-[24px] ${
            activeTab === 'description' ? 'text-black font-medium' : 'text-[#9F9F9F]'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('additional')}
          className={`font-normal text-[16px] sm:text-[20px] lg:text-[24px] ${
            activeTab === 'additional' ? 'text-black font-medium' : 'text-[#9F9F9F]'
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`font-normal text-[16px] sm:text-[20px] lg:text-[24px] ${
            activeTab === 'reviews' ? 'text-black font-medium' : 'text-[#9F9F9F]'
          }`}
        >
          Reviews [5]
        </button>
      </div>

      {/* Content */}
      {activeTab === 'description' && (
        <div className="px-4 sm:px-8 lg:px-[207px] pb-8 sm:pb-12 lg:pb-[61px]">
          <p className="text-[#9F9F9F] font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-6 text-justify mb-5 sm:mb-6 lg:mb-[30px]">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-6 text-justify mb-6 sm:mb-8 lg:mb-[36px]">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>

          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 lg:gap-[29px]">
            <div className="bg-[#F9F1E7] rounded-[10px] w-full sm:w-1/2 h-[250px] sm:h-[300px] lg:h-[348px] flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <Image src={imgCloudSofa1} alt="Cloud Sofa 1" fill className="object-cover" />
              </div>
            </div>
            <div className="bg-[#F9F1E7] rounded-[10px] w-full sm:w-1/2 h-[250px] sm:h-[300px] lg:h-[348px] flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <Image src={imgCloudSofa2} alt="Cloud Sofa 2" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RelatedProducts() {
  const products = productsData.slice(0, 4);

  return (
    <div className="bg-white py-8 sm:py-10 lg:py-[55px] border-t border-[#D9D9D9]">
      <h2 className="text-black font-medium text-[24px] sm:text-[30px] lg:text-[36px] text-center mb-6 lg:mb-[26px] px-4">Related Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center px-4 sm:px-8 lg:px-0 mb-8 lg:mb-[44px]">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="flex justify-center px-4">
        <button className="border border-[#B88E2F] bg-white text-[#B88E2F] font-semibold text-[14px] sm:text-[16px] w-full sm:w-[245px] h-12 hover:bg-[#B88E2F] hover:text-white transition-colors">
          Show More
        </button>
      </div>
    </div>
  );
}

export default function SingleProduct() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Breadcrumb />
      
      {/* Product Section */}
      <div className="bg-white py-6 sm:py-8 lg:py-[35px] px-4 sm:px-8 lg:px-[99px]">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 lg:gap-[105px]">
          <ProductGallery />
          <ProductDetails />
        </div>
      </div>

      <DescriptionSection />
      <RelatedProducts />
      <Footer />
    </div>
  );
}