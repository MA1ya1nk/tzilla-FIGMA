import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#217849] to-[#69A84E] py-16 px-10 font-['Lato'] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content Area */}
        <div className="flex-1">
          {/* Header Section */}
          <div className="flex items-center gap-4 mb-6">
            <div style={{ width: '80px', height: '80px' }} className="flex-shrink-0">
              <img src="/coyotes-logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <p style={{ width: '135px', height: '24px' }} className="text-[18px] font-[500] leading-[24px] capitalize opacity-90">
                Fundraiser Name
              </p>
              <h1 style={{ width: '426px', height: '40px' }} className="text-[36px] font-[800] leading-[40px]">
                Canyon View Coyotes 2021
              </h1>
            </div>
          </div>

          {/* Progress Section */}
          <div className="mt-10 mb-8 relative">
             <div className="mb-2 text-center" style={{ width: '351px' }}>
                <p className="text-[13px] font-[400] leading-[100%] opacity-80 uppercase">Now</p>
                <p className="text-[20px] font-[700]">$3,106</p>
             </div>

             <div className="flex items-center gap-6">
                {/* Progress Bar (The 31% Long Pipe) */}
                <div style={{ width: '351px', height: '28px' }} className="bg-white rounded-full overflow-hidden flex">
                    <div className="bg-[#C5E17A] h-full flex items-center justify-center text-[#1D2939] text-[12px] font-bold" style={{ width: '31%' }}>
                        31%
                    </div>
                </div>

                {/* Help Now Button */}
                <button 
                    style={{ width: '181px', height: '50px' }} 
                    className="bg-[#C5E17A] hover:bg-[#b4d45d] text-[#1D2939] font-bold rounded-[12px] transition-colors"
                >
                    Help Now
                </button>
             </div>

             {/* Stats Row */}
             <div className="flex justify-between mt-2" style={{ width: '351px' }}>
                <p className="text-[14px] opacity-90">Contributors: <span className="font-bold">6720</span></p>
                <p className="text-[14px] opacity-90">Our Goal: <span className="font-bold">$10,000</span></p>
             </div>
          </div>

          {/* Bottom Info Box */}
          <div 
            style={{ width: '390px', height: '44px' }} 
            className="flex items-center gap-[35px] mt-12"
          >
            {/* Beneficiary */}
            <div className="flex items-center gap-3">
               <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-[12px]">👤</div>
               <div>
                  <p className="text-[14px] font-[400] leading-[20px] opacity-80">Beneficiary</p>
                  <p className="text-[16px] font-[700]">Poway Dance Project</p>
               </div>
            </div>

            {/* End Date */}
            <div className="flex items-center gap-3">
               <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center text-[12px]">📅</div>
               <div>
                  <p className="text-[14px] font-[400] leading-[20px] opacity-80">End date</p>
                  <p className="text-[16px] font-[700]">June 21, 2021</p>
               </div>
            </div>
          </div>
        </div>

        {/* Right Image Stack (Reference image_02773d.png) */}
        <div className="relative">
            {/* Background stack effect */}
            <div className="absolute top-4 -right-4 w-full h-full bg-white/20 rounded-[24px] transform translate-x-4"></div>
            <div className="absolute top-2 -right-2 w-full h-full bg-white/40 rounded-[24px] transform translate-x-2"></div>
            
            {/* Main Image */}
            <div 
                style={{ width: '526px', height: '350px' }} 
                className="relative rounded-[24px] overflow-hidden border-4 border-white shadow-2xl"
            >
                <img 
                    src="/Hero/Group.png" 
                    alt="Canyon View Coyotes Team" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-3 h-3 rounded-full bg-[#C5E17A]"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;