import React from "react";


const Footer = () => {
  return (
    <footer className="bg-[#295c4a] text-gray-200 px-6 py-12">
      
      {/* Top Section */}
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-4">
          KeenKeeper
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <p className="text-sm mb-3">Social Links</p>

        <div className="flex justify-center gap-4 mb-8">
          <div className="bg-white text-black p-2 rounded-full">
            <img src="/src/image/Instagram.png" alt="" />
          </div>
          <div className="bg-white text-black p-2 rounded-full">
            <img src="/src/image/Facebook.png" alt="" />
          </div>
          <div className="bg-white text-black p-2 rounded-full">
            <img src="/src/image/Twitter.png" alt="" />
          </div>
        </div>

        <hr className="border-gray-400 opacity-30" />
      </div>

      {/* Bottom Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-xs text-gray-300">
        
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white">Terms of Service</span>
          <span className="cursor-pointer hover:text-white">Cookies</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;