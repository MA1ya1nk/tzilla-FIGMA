import React from 'react';

const HelpSection = () => {
  return (
    <div className="bg-[#F8F9FA] flex flex-col items-center py-20 font-['Lato']" style={{ width: '1440px', height: '1070px' }}>
      
      {/* Main Title */}
      <h2 style={{ 
        width: '399px', 
        height: '58px', 
        fontSize: '48px', 
        fontWeight: '700', 
        lineHeight: '58px' 
      }} className="text-[#217849] text-center capitalize mb-16">
        How You Can Help
      </h2>

      {/* Top Options Container */}
      <div className="flex gap-[30px] mb-12">
        {/* Option 1: Buy a Tee */}
        <div className="relative bg-white rounded-[24px] shadow-sm flex items-center p-8" style={{ width: '570px', height: '289px' }}>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-2 rounded-full shadow-md text-[#217849] font-bold">
            Option 1
          </div>
          <img 
            src="/Help/boy.png" 
            alt="Buy a Tee" 
            style={{ width: '188px', height: '220px' }}
            className="object-contain"
          />
          <div className="ml-10">
            <h3 style={{ width: '259px', height: '58px', fontSize: '24px', fontWeight: '800', lineHeight: '100%' }} className="text-[#217849] mb-8">
              Buy a Tee to Back the Cause
            </h3>
            <button style={{ width: '181px', height: '50px' }} className="bg-[#C5E17A] text-[#1D2939] font-bold rounded-[12px] hover:bg-[#b4d45d] transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        {/* Option 2: Donation */}
        <div className="relative bg-white rounded-[24px] shadow-sm flex items-center p-8" style={{ width: '570px', height: '289px' }}>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-2 rounded-full shadow-md text-[#217849] font-bold">
            Option 2
          </div>
          <img 
            src="/Help/girl.png" 
            alt="Donate" 
            style={{ width: '188px', height: '220px' }}
            className="object-contain"
          />
          <div className="ml-10">
            <h3 style={{ width: '259px', height: '58px', fontSize: '24px', fontWeight: '800', lineHeight: '100%' }} className="text-[#217849] mb-8">
              Make a Monetary Donation
            </h3>
            <button style={{ width: '181px', height: '50px' }} className="bg-[#C5E17A] text-[#1D2939] font-bold rounded-[12px] hover:bg-[#b4d45d] transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Option 3: Team Design Container */}
      <div className="relative bg-[#3A8360] rounded-[24px] flex flex-col items-center pt-20 pb-10" style={{ width: '1170px', height: '467px' }}>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-2 rounded-full shadow-md text-[#217849] font-bold">
          Option 3
        </div>

        <h3 style={{ width: '259px', fontSize: '24px', fontWeight: '800' }} className="text-white text-center mb-10">
          Buy a Team Design
        </h3>

        {/* Slider Area */}
        <div className="flex items-center gap-12 mb-10">
          {/* Left Arrow */}
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#217849] shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* T-Shirt Items */}
          <div className="flex gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} style={{ width: '200px', height: '200px' }} className="bg-white rounded-[20px] p-4 flex items-center justify-center shadow-sm">
                <img src="/Help/tshirt.png" alt="Team Design" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#217849] shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <button style={{ width: '181px', height: '50px' }} className="bg-[#C5E17A] text-[#1D2939] font-bold rounded-[12px] hover:bg-[#b4d45d] transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HelpSection;