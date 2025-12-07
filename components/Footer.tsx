export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.17)] py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-[136px] mb-8 lg:mb-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-black font-bold text-[20px] sm:text-[24px] mb-6 lg:mb-[50px]">Funiro.</h3>
          <p className="text-[#9F9F9F] font-normal text-[14px] sm:text-[16px] leading-6">
            400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA
          </p>
        </div>

        <div>
          <h4 className="text-[#9F9F9F] font-medium text-[14px] sm:text-[16px] mb-6 lg:mb-[55px]">Links</h4>
          <ul className="space-y-4 lg:space-y-[46px]">
            <li><a href="/" className="text-black font-medium text-[14px] sm:text-[16px] hover:text-[#B88E2F]">Home</a></li>
            <li><a href="/shop" className="text-black font-medium text-[14px] sm:text-[16px] hover:text-[#B88E2F]">Shop</a></li>
            <li><a href="/about" className="text-black font-medium text-[14px] sm:text-[16px] hover:text-[#B88E2F]">About</a></li>
            <li><a href="/contact" className="text-black font-medium text-[14px] sm:text-[16px] hover:text-[#B88E2F]">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#9F9F9F] font-medium text-[14px] sm:text-[16px] mb-6 lg:mb-[55px]">Help</h4>
          <ul className="space-y-4 lg:space-y-[46px]">
            <li><a href="#" className="text-black font-medium text-[14px] sm:text-[16px] hover:text-[#B88E2F]">Payment Options</a></li>
            <li><a href="#" className="text-black font-medium text-[14px] sm:text-[16px] hover:text-[#B88E2F]">Returns</a></li>
            <li><a href="#" className="text-black font-medium text-[14px] sm:text-[16px] hover:text-[#B88E2F]">Privacy Policies</a></li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-[#9F9F9F] font-medium text-[14px] sm:text-[16px] mb-6 lg:mb-[55px]">Newsletter</h4>
          <div className="flex gap-2 sm:gap-[11px]">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="border-b border-black text-[12px] sm:text-[14px] text-[#9F9F9F] pb-[3px] flex-1 outline-none bg-transparent"
            />
            <button className="border-b border-black text-black font-medium text-[12px] sm:text-[14px] pb-[3px] hover:text-[#B88E2F] hover:border-[#B88E2F] whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(0,0,0,0.17)] pt-6 lg:pt-[35px]">
        <p className="text-black font-normal text-[14px] sm:text-[16px]">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}
