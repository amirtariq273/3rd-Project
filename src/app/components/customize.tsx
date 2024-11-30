import React from "react";
import Image from "next/image";
import Icon from "@/app/assets/Icon.png";
import Blank from "@/app/assets/Blank.png";

export default function Customize() {
  return (
    <>
      {/* First Section: Use as Extension */}
      <div className="py-[140px] px-[20px] md:px-[220px] bg-[#043873]">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Text Section */}
          <div className="w-full md:w-[697px] h-auto mb-8 md:mb-0 text-center md:text-left">
            <h1 className="font-bold text-[48px] md:text-[72px] text-white leading-[60px] md:leading-[87.14px] tracking-[-0.02em]">
              Use as Extension
            </h1>
            <p className="text-[16px] md:text-[18px] text-white leading-[28px] md:leading-[30px] mt-6 md:mt-7">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <button className="rounded-lg w-full md:w-[172px] h-[63px] text-[16px] md:text-[18px] py-[20px] bg-[#4F9CF9] text-white px-[40px] leading-[23px] tracking-[-0.02em] flex items-center justify-center gap-3 mt-[60px] md:mt-[75px]">
              Let&apos;s Go {/* Escaping the apostrophe */}
              <Image src={Icon} alt="Icon" />
            </button>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-[686px] h-auto mt-8 md:mt-0 flex justify-center ml-11">
            <Image src={Blank} alt="Extension" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Second Section: Customize it to your needs */}
      <div className="py-[140px] px-[20px] md:px-[220px]">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Image Section */}
          <div className="w-full md:w-[714px] h-auto mb-8 md:mb-0 flex justify-center">
            <Image src={Blank} alt="Customise" className="w-full h-auto" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[669px] h-auto md:ml-[65px] text-center md:text-left">
            <h1 className="font-bold text-[48px] md:text-[72px] text-black leading-[60px] md:leading-[87.14px] tracking-[-0.02em] mt-10 md:mt-0">
              Customise it to your needs
            </h1>
            <p className="text-[16px] md:text-[18px] text-black leading-[28px] md:leading-[30px] mt-6 md:mt-8">
              Customise th. with plugins, custom themes, and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
            <button className="rounded-lg w-full md:w-[180px] h-[63px] py-[20px] px-[40px] text-[16px] md:text-[18px] bg-[#4F9CF9] text-white leading-[23px] tracking-[-0.02em] flex items-center justify-center gap-3 mt-[60px] md:mt-[75px]">
              Let&apos;s Go {/* Escaping the apostrophe */}
              <Image src={Icon} alt="Icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
