import Image from "next/image";
import Logo from "@/app/assets/Logo.png"
const Navbar = () => {
  return (
    <div className="w-full py-4 px-6 md:px-[220px] bg-[#043873] flex flex-col md:flex-row justify-between items-center">
      {/* Logo Section */}
      <div className="w-[191px] h-[34px] mb-4 md:mb-0">
        <Image src={Logo} alt="Logo" className="w-full h-auto" />
      </div>

      {/* Navbar Links and Login Button */}
      <div className="flex items-center w-full justify-between md:w-auto">
        {/* Navbar Links */}
        <div className="flex-grow">
          <ul className="flex flex-col md:flex-row text-white gap-6 md:gap-10 justify-center md:justify-start">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Prices</li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="w-[126px] h-[60px] ml-[200px] md:mt-0">
          <button className="px-10 py-4 rounded-lg bg-[#FFE492]">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
