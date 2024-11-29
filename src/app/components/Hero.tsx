import React from "react";
import Image from "next/image";
import Blank from "@/app/assets/Blank.png";
import Icon from "@/app/assets/Icon.png";

const Hero = () => {
  return (
    <div className="py-[140px] px-[20px] md:px-[220px] bg-[#043873] text-white flex flex-col md:flex-row items-center justify-center">
      {/* Text Section */}
      <div className="w-full md:w-[656px] text-center md:text-left mb-12 md:mb-0">
        <h2 className="font-bold text-[32px] md:text-[64px] leading-[40px] md:leading-[77.45px] tracking-[-0.02em]">
          Get More Done with whitepace
        </h2>
        <p className="font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] tracking-[-0.02em] mt-4 md:mt-8">
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
        </p>
        <div className="mt-6">
          <button className="rounded-lg w-full md:w-[253px] h-[69px] text-[16px] md:text-[18px] bg-[#4F9CF9] py-[16px] px-[40px] tracking-[-0.02em] leading-[23px] flex items-center justify-center gap-3 mt-[80px] mx-auto md:mx-0">
            Try Whitepace free
            <Image src={Icon} alt="Icon" />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[824px] h-auto flex justify-center md:justify-end ml-8">
        <Image src={Blank} alt="Blank" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
