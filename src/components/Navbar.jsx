import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-white flex items-center px-38 border-b border-gray-100 font-['Lato']">
      {/* Logo Section */}
      <div className="flex items-center">
        <div style={{ width: '94px', height: '36px' }} className="flex items-center justify-center">
          {/* Replace with your actual SVG or Image */}
          <img src="/tzilla-logo.svg" alt="tzilla" className="w-full h-full object-contain" />
        </div>
        
        {/* Vertical Divider */}
        <div className="h-8 w-[1px] bg-gray-200 mx-8"></div>
      </div>

      {/* Nav Links */}
      <div className="flex gap-8 items-center text-[#667085]">
        {['Categories', 'About Us', 'Contact Us'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '')}`}
            className="text-[16px] font-[400] leading-[24px] hover:text-black transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center">
        <div 
          style={{ width: '280px', height: '32px' }}
          className="bg-[#F2F4F7] rounded-[20px] flex items-center px-4 gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#98A2B3" strokeWidth="2">
            <circle cx="9" cy="9" r="7" />
            <path d="M14 14l4 4" />
          </svg>
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none text-[14px] w-full placeholder-[#98A2B3]"
          />
        </div>
      </div>

      {/* Right Side: Icons & Auth */}
      <div className="flex items-center gap-6">
        {/* Shopping Cart Icon */}
        <button className="p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#667085" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
            <path d="M3 6h18M16 10a4 4 0 01-8 0" />
          </svg>
        </button>

        {/* Vertical Divider */}
        <div className="h-8 w-[1px] bg-gray-200"></div>

        {/* Login Button */}
        <button className="text-[16px] font-[500] leading-[24px] text-[#667085] capitalize px-2">
          Log In
        </button>

        {/* Sign In Button */}
        <button 
          style={{ 
            width: '106px', 
            height: '44px',
            borderRadius: '12px',
            padding: '10px 20px'
          }}
          className="bg-[#C5E17A] hover:bg-[#b4d45d] flex items-center justify-center transition-colors"
        >
          <span className="text-[16px] font-[500] leading-[24px] text-[#1D2939] capitalize w-[48px] h-[24px] flex items-center justify-center">
            Sign In
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;