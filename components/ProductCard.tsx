import React from 'react';
import Image from 'next/image';

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
