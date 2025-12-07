import Image from "next/image";

const imgLogo = "/home/logo.png";
const imgIconAccount = "/home/icon-account.svg";
const imgIconSearch = "/home/icon-search.svg";
const imgIconHeart = "/home/icon-heart.svg";
const imgIconCart = "/home/icon-cart.svg";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={`bg-white ${className || ''}`}>
      <div className="container mx-auto px-[54px] h-[100px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-[5px] cursor-pointer">
          <Image src={imgLogo} alt="Logo" width={50} height={32} className="object-contain" />
          <span className="font-bold text-[34px] text-black font-['Montserrat']">Furniro</span>
        </a>

        {/* Navigation */}
        <nav className="flex gap-[75px]">
          <a href="/" className="font-medium text-[16px] text-black hover:text-[#B88E2F]">Home</a>
          <a href="/shop" className="font-medium text-[16px] text-black hover:text-[#B88E2F]">Shop</a>
          <a href="/about" className="font-medium text-[16px] text-black hover:text-[#B88E2F]">About</a>
          <a href="/contact" className="font-medium text-[16px] text-black hover:text-[#B88E2F]">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex gap-[45px] items-center">
          <Image src={imgIconAccount} alt="Account" width={28} height={28} className="cursor-pointer" />
          <Image src={imgIconSearch} alt="Search" width={28} height={28} className="cursor-pointer" />
          <Image src={imgIconHeart} alt="Wishlist" width={28} height={28} className="cursor-pointer" />
          <a href="/cart">
            <Image src={imgIconCart} alt="Cart" width={28} height={28} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </header>
  );
}
