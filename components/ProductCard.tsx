import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function ProductCard({ image, title, description, price, oldPrice, discount, isNew }: ProductCardProps) {
  return (
    <div className="group relative bg-[#F4F5F7] overflow-hidden w-full max-w-[285px]">
      <Link href="/single-product" className="block">
        <div className="relative h-[250px] sm:h-[280px] lg:h-[301px] bg-gray-200">
          <Image src={image} alt={title} fill className="object-cover" />
          
          {/* Label */}
          {(discount || isNew) && (
            <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6">
              {discount && (
                <div className="bg-[#E97171] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <span className="text-white font-medium text-[14px] sm:text-[16px]">{discount}</span>
                </div>
              )}
              {isNew && !discount && (
                <div className="bg-[#2EC1AC] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <span className="text-white font-medium text-[14px] sm:text-[16px]">New</span>
                </div>
              )}
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-72 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 lg:gap-6">
            <button className="bg-white text-[#B88E2F] font-semibold text-[14px] sm:text-[16px] px-8 sm:px-10 lg:px-[52px] py-2 sm:py-3 hover:bg-gray-100">
              Add to cart
            </button>
            <div className="flex gap-3 sm:gap-4 lg:gap-5 text-white text-[14px] sm:text-[16px]">
              <button className="flex items-center gap-1 font-semibold hover:text-gray-300">
                <Image src={imgIconShare} alt="Share" width={14} height={14} className="sm:w-4 sm:h-4" />
                Share
              </button>
              <a 
                href="/product-comparison" 
                className="flex items-center gap-1 font-semibold hover:text-gray-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={imgIconCompare} alt="Compare" width={14} height={14} className="sm:w-4 sm:h-4" />
                Compare
              </a>
              <button className="flex items-center gap-1 font-semibold hover:text-gray-300">
                <Image src={imgIconLike} alt="Like" width={14} height={14} className="sm:w-4 sm:h-4" />
                Like
              </button>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-3 sm:p-4">
        <Link href="/single-product">
          <h3 className="text-[#3A3A3A] font-semibold text-[18px] sm:text-[20px] lg:text-[24px] mb-2 hover:text-[#B88E2F] transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>
        <p className="text-[#898989] font-medium text-[14px] sm:text-[16px] mb-2">{description}</p>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-[#3A3A3A] font-semibold text-[16px] sm:text-[18px] lg:text-[20px]">{price}</span>
          {oldPrice && (
            <span className="text-[#B0B0B0] font-normal text-[14px] sm:text-[16px] line-through">{oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
