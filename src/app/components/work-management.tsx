import React from "react";
import Image from "next/image";
import Icon from "@/app/assets/Icon.png";
import Blank from "@/app/assets/Blank.png";
import Work from "@/app/assets/Work.png";

export default function WorkManagement() {
  return (
    <div className="py-[140px] px-[20px] md:px-[220px] bg-[#F5F5F5]">
      {/* First Section: Project Management */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="w-full md:w-[672px] text-center md:text-left">
          <h1 className="font-bold text-[48px] md:text-[72px] leading-[60px] md:leading-[87.14px] tracking-[-0.02em]">
            Project Management
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] mt-6 md:mt-8">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with
            the mobile app and save them to a note.
          </p>
          <div className="mt-8">
            <button className="rounded-lg w-full md:w-[201px] h-[63px] text-white py-[20px] px-[40px] text-[18px] bg-[#4F9CF9] leading-[23px] tracking-[-0.02px] flex items-center gap-3 mt-[80px]">
              Get Started
              <Image src={Icon} alt="Icon" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[748px] mt-8 md:mt-0 flex justify-center ml-11">
          <Image src={Blank} alt="Project Management Image" className="w-full h-auto" />
        </div>
      </div>

      {/* Second Section: Work Together */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-[122px]">
        {/* Image Section */}
        <div className="w-full md:w-[710px] mb-8 md:mb-0 flex justify-center md:mr-[110px]">
          <Image src={Work} alt="Work Together" className="w-full h-auto" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[670px] text-center md:text-left">
          <h1 className="font-bold text-[48px] md:text-[72px] leading-[60px] md:leading-[87.14px] tracking-[-0.02em]">
            Work together
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] mt-6 md:mt-8">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet
            and share the URL with others.
          </p>
          <div className="mt-8">
            <button className="rounded-lg w-full md:w-[186px] h-[63px] py-[20px] px-[40px] text-[18px] leading-[23px] tracking-[-0.02px] bg-[#4F9CF9] text-white flex items-center gap-3 mt-[80px]">
              Try it now
              <Image src={Icon} alt="Icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
