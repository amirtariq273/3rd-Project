import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-[#043873] text-white py-[140px] px-[220px]">
      <div className="max-w-screen-xl mx-auto">
        {/* Footer Content */}
        <div className="flex gap-[150px] flex-wrap md:flex-nowrap">
          {/* First Column (Company) */}
          <div className="w-[295px]">
            <p className="font-bold text-[18px]">Company</p>
            <p className="text-white text-[16px] mt-4">About us</p>
            <p className="text-white text-[16px] mt-4">Careers</p>
            <p className="text-white text-[16px] mt-4">Media kit</p>
          </div>

          {/* Second Column (Product) */}
          <div className="w-[295px] mt-4 md:mt-0">
            <p className="font-bold text-[18px]">Product</p>
            <p className="text-[#FFE492] text-[16px] mt-4">Overview</p>
            <p className="text-white text-[16px] mt-4">Pricing</p>
            <p className="text-white text-[16px] mt-4">Customer stories</p>
          </div>

          {/* Third Column (Resources) */}
          <div className="w-[295px] mt-4 md:mt-0">
            <p className="font-bold text-[18px]">Resources</p>
            <p className="text-white text-[16px] mt-4">Blog</p>
            <p className="text-white text-[16px] mt-4">Guides & tutorials</p>
            <p className="text-white text-[16px] mt-4">Help center</p>
          </div>

          {/* Fourth Column (Logo and Text) */}
          <div className="w-[295px] mt-4 md:mt-0">
            <div className="w-[191px] h-[34px]">
              <Image src={Logo} alt="Logo" className="w-full" />
            </div>
            <p className="text-[18px] leading-[30px] tracking-[-0.02em] mt-4">
              whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2E4E73] mt-[80px]"></div>

        {/* Copyright */}
        <div className="w-full text-center mt-9">
          <p className="text-[18px] leading-[20px]">©2021 Whitepace LLC.</p>
        </div>
      </div>
    </div>
  );
};


export default Footer;
