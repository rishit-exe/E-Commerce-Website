'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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

// Product Card Icons
const imgIconShare = "/home/icon-share.svg";
const imgIconCompare = "/home/icon-compare.svg";
const imgIconLike = "/home/icon-like.svg";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  isNew?: boolean;
}

function ProductCard({ image, title, description, price, oldPrice, discount, isNew }: ProductCardProps) {
  return (
    <div className="group relative bg-[#F4F5F7] overflow-hidden w-[285px]">
      <div className="relative h-[301px] bg-gray-200">
        <Image src={image} alt={title} fill className="object-cover" />
        
        {/* Label */}
        {(discount || isNew) && (
          <div className="absolute top-[24px] right-[24px]">
            {discount && (
              <div className="bg-[#E97171] rounded-full w-[48px] h-[48px] flex items-center justify-center">
                <span className="text-white font-medium text-[16px]">{discount}</span>
              </div>
            )}
            {isNew && !discount && (
              <div className="bg-[#2EC1AC] rounded-full w-[48px] h-[48px] flex items-center justify-center">
                <span className="text-white font-medium text-[16px]">New</span>
              </div>
            )}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-72 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-[24px]">
          <button className="bg-white text-[#B88E2F] font-semibold text-[16px] px-[52px] py-[12px] hover:bg-gray-100">
            Add to cart
          </button>
          <div className="flex gap-[20px] text-white">
            <button className="flex items-center gap-[2px] font-semibold text-[16px] hover:text-gray-300">
              <Image src={imgIconShare} alt="Share" width={16} height={16} />
              Share
            </button>
            <button className="flex items-center gap-[2px] font-semibold text-[16px] hover:text-gray-300">
              <Image src={imgIconCompare} alt="Compare" width={16} height={16} />
              Compare
            </button>
            <button className="flex items-center gap-[2px] font-semibold text-[16px] hover:text-gray-300">
              <Image src={imgIconLike} alt="Like" width={16} height={16} />
              Like
            </button>
          </div>
        </div>
      </div>

      <div className="p-[16px]">
        <h3 className="text-[#3A3A3A] font-semibold text-[24px] mb-[8px]">{title}</h3>
        <p className="text-[#898989] font-medium text-[16px] mb-[8px]">{description}</p>
        <div className="flex items-center gap-[16px]">
          <span className="text-[#3A3A3A] font-semibold text-[20px]">{price}</span>
          {oldPrice && (
            <span className="text-[#B0B0B0] font-normal text-[16px] line-through">{oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="bg-[#F9F1E7] h-[100px] flex items-center px-[99px]">
      <div className="flex items-center gap-[6px]">
        <a href="/" className="text-[#9F9F9F] font-normal text-[16px]">Home</a>
        <div className="w-[20px] h-[20px] rotate-90">
          <Image src={imgArrow} alt=">" width={20} height={20} />
        </div>
        <a href="/shop" className="text-[#9F9F9F] font-normal text-[16px]">Shop</a>
        <div className="w-[20px] h-[20px] rotate-90">
          <Image src={imgArrow} alt=">" width={20} height={20} />
        </div>
        <div className="w-0 h-[37px] border-l-2 border-[#9F9F9F]"></div>
        <span className="text-black font-normal text-[16px] ml-[18px]">Asgaard sofa</span>
      </div>
    </div>
  );
}

function ProductGallery() {
  const thumbnails = [imgOutdoorSofa1, imgOutdoorSofa2, imgStuartSofa, imgMayaSofa];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-[32px]">
      {/* Thumbnails */}
      <div className="flex flex-col gap-[32px]">
        {thumbnails.map((thumb, index) => (
          <div
            key={index}
            className={`bg-[#F9F1E7] rounded-[10px] w-[76px] h-[80px] flex items-center justify-center cursor-pointer overflow-hidden ${
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
      <div className="bg-[#F9F1E7] rounded-[10px] w-[423px] h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative w-[481px] h-[391px]">
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
      <h1 className="text-black font-normal text-[42px] mb-[16px]">Asgaard sofa</h1>
      <p className="text-[#9F9F9F] font-medium text-[24px] mb-[16px]">Rs. 250,000.00</p>

      {/* Rating */}
      <div className="flex items-center gap-[22px] mb-[13px]">
        <div className="flex items-center gap-[6px]">
          <Image src={imgStarFilled} alt="Star" width={20} height={20} />
          <Image src={imgStarFilled} alt="Star" width={20} height={20} />
          <Image src={imgStarFilled} alt="Star" width={20} height={20} />
          <Image src={imgStarFilled} alt="Star" width={20} height={20} />
          <Image src={imgStarHalf} alt="Half Star" width={20} height={20} />
        </div>
        <div className="w-0 h-[30px] border-l border-[#9F9F9F]"></div>
        <span className="text-[#9F9F9F] font-normal text-[13px]">5 Customer Review</span>
      </div>

      {/* Description */}
      <p className="text-black font-normal text-[13px] leading-[19.5px] mb-[22px] w-[424px]">
        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
      </p>

      {/* Size */}
      <div className="mb-[18px]">
        <p className="text-[#9F9F9F] font-normal text-[14px] mb-[12px]">Size</p>
        <div className="flex gap-[16px]">
          {['L', 'XL', 'XS'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-[30px] h-[30px] rounded-[5px] font-normal text-[13px] ${
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
      <div className="mb-[32px]">
        <p className="text-[#9F9F9F] font-normal text-[14px] mb-[12px]">Color</p>
        <div className="flex gap-[16px]">
          {[
            { color: '#816DFA', name: 'Purple' },
            { color: '#000000', name: 'Black' },
            { color: '#B88E2F', name: 'Gold' }
          ].map((colorOption) => (
            <button
              key={colorOption.color}
              onClick={() => setSelectedColor(colorOption.color)}
              className={`w-[30px] h-[30px] rounded-full ${
                selectedColor === colorOption.color ? 'ring-2 ring-offset-2 ring-[#B88E2F]' : ''
              }`}
              style={{ backgroundColor: colorOption.color }}
              aria-label={colorOption.name}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-[18px] mb-[40px]">
        {/* Quantity */}
        <div className="flex items-center justify-between border border-[#9F9F9F] rounded-[10px] w-[123px] h-[64px] px-[15px]">
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
        <button className="border border-black rounded-[15px] w-[215px] h-[64px] text-black font-normal text-[20px] hover:bg-black hover:text-white transition-colors">
          Add To Cart
        </button>

        {/* Compare */}
        <button className="border border-black rounded-[15px] w-[215px] h-[64px] flex items-center justify-center gap-[10px] text-black font-normal text-[20px] hover:bg-black hover:text-white transition-colors">
          <span className="text-[23px]">+</span>
          <span>Compare</span>
        </button>
      </div>

      {/* Divider */}
      <div className="w-[605px] h-[1px] bg-[#D9D9D9] mb-[41px]"></div>

      {/* Meta Info */}
      <div className="space-y-[13px] text-[16px]">
        <div className="flex gap-[12px]">
          <span className="text-[#9F9F9F] font-normal w-[75px]">SKU</span>
          <span className="text-[#9F9F9F] font-medium">:</span>
          <span className="text-[#9F9F9F] font-normal">SS001</span>
        </div>
        <div className="flex gap-[12px]">
          <span className="text-[#9F9F9F] font-normal w-[75px]">Category</span>
          <span className="text-[#9F9F9F] font-medium">:</span>
          <span className="text-[#9F9F9F] font-normal">Sofas</span>
        </div>
        <div className="flex gap-[12px]">
          <span className="text-[#9F9F9F] font-normal w-[75px]">Tags</span>
          <span className="text-[#9F9F9F] font-medium">:</span>
          <span className="text-[#9F9F9F] font-normal">Sofa, Chair, Home, Shop</span>
        </div>
        <div className="flex gap-[12px] items-center">
          <span className="text-[#9F9F9F] font-normal w-[75px]">Share</span>
          <span className="text-[#9F9F9F] font-medium">:</span>
          <div className="flex gap-[25px]">
            <Image src={imgFacebook} alt="Facebook" width={20} height={20} className="cursor-pointer" />
            <Image src={imgTwitter} alt="Twitter" width={25} height={25} className="cursor-pointer" />
            <Image src={imgLinkedin} alt="LinkedIn" width={20} height={20} className="cursor-pointer" />
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
      <div className="flex justify-center gap-[53px] pt-[48px] pb-[37px]">
        <button
          onClick={() => setActiveTab('description')}
          className={`font-normal text-[24px] ${
            activeTab === 'description' ? 'text-black font-medium' : 'text-[#9F9F9F]'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('additional')}
          className={`font-normal text-[24px] ${
            activeTab === 'additional' ? 'text-black font-medium' : 'text-[#9F9F9F]'
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`font-normal text-[24px] ${
            activeTab === 'reviews' ? 'text-black font-medium' : 'text-[#9F9F9F]'
          }`}
        >
          Reviews [5]
        </button>
      </div>

      {/* Content */}
      {activeTab === 'description' && (
        <div className="px-[207px] pb-[61px]">
          <p className="text-[#9F9F9F] font-normal text-[16px] leading-[24px] text-justify mb-[30px]">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] font-normal text-[16px] leading-[24px] text-justify mb-[36px]">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>

          {/* Images */}
          <div className="flex gap-[29px]">
            <div className="bg-[#F9F1E7] rounded-[10px] w-[605px] h-[348px] flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <Image src={imgCloudSofa1} alt="Cloud Sofa 1" fill className="object-cover" />
              </div>
            </div>
            <div className="bg-[#F9F1E7] rounded-[10px] w-[605px] h-[348px] flex items-center justify-center overflow-hidden">
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
    <div className="bg-white py-[55px] border-t border-[#D9D9D9]">
      <h2 className="text-black font-medium text-[36px] text-center mb-[26px]">Related Products</h2>
      
      <div className="flex gap-[32px] justify-center mb-[44px]">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="border border-[#B88E2F] bg-white text-[#B88E2F] font-semibold text-[16px] w-[245px] h-[48px] hover:bg-[#B88E2F] hover:text-white transition-colors">
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
      <div className="bg-white py-[35px] px-[99px]">
        <div className="flex gap-[105px]">
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