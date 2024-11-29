import React from "react";
import Image from "next/image";
import Icon from "@/app/assets/Icon.png"
import Apple from "@/app/assets/Apple.png";
import Microsoft from "@/app/assets/Microsoft.png";
import Slack from "@/app/assets/Slack.png";
import Google from "@/app/assets/Google.png";

export default function YourWork() {
  return (
    <>
      {/* First Section: Hero */}
      <div className="py-[140px] px-[20px] md:px-[220px] bg-[#043873] text-white flex flex-col items-center justify-center">
        <div className="w-full md:w-[1482px] text-center">
          <h1 className="font-bold text-[32px] md:text-[72px] leading-[40px] md:leading-[87.14px] tracking-[-0.02em]">
            Your work, everywhere you are
          </h1>
          <p className="mt-6 font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] tracking-[-0.02em] max-w-[1064px] mx-auto">
            Access your notes from your computer, phone, or tablet by synchronizing with various services, including whitepace, Dropbox, and OneDrive. Th. is available on Windows, macOS, Linux, Android, and iOS. A termina. is also available!
          </p>
          <div className="mt-6">
            <button className="rounded-lg w-[195px] h-[63px] py-[16px] px-[40px] text-white bg-[#4F9CF9] flex items-center justify-center gap-3 mx-auto mt-[72px]">
              Try Taskey
              <Image src= {Icon} alt="Icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Second Section: Sponsors */}
      <div className="w-full py-[140px] px-[20px] md:px-[220px]">
  <div className="text-center">
    <h1 className="font-bold text-[32px] md:text-[72px] leading-[40px] md:leading-[87.14px] tracking-[-0.02em]">
      Our Sponsors
    </h1>
  </div>
  <div className="mt-[50px] md:mt-[110px] flex flex-wrap justify-center gap-[200px]">
    <div className="flex justify-center">
      <Image src={Apple} alt="Apple" className="w-[55.47px] h-[68px]" />
    </div>
    <div className="flex justify-center">
      <Image src={Microsoft} alt="Microsoft" className="w-[287px] h-[62px]" />
    </div>
    <div className="flex justify-center">
      <Image src={Slack} alt="Slack" className="w-[280px] h-[71px]" />
    </div>
    <div className="flex justify-center">
      <Image src={Google} alt="Google" className="w-[211px] h-[69.81px]" />
    </div>
  </div>
</div>

    </>
  );
}
