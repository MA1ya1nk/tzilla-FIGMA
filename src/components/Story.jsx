import React from 'react';

const StorySection = () => {
  return (
    <section 
      className="relative bg-white mx-auto overflow-hidden font-['Lato']" 
      style={{ width: '1440px', height: '1015px' }}
    >
      {/* Heading: Our Story */}
      <h2 
        style={{ 
          width: '202px', 
          height: '58px', 
          top: '50px', 
          left: '619px',
          fontWeight: '800',
          fontSize: '46px',
          lineHeight: '58px',
          color: '#1C594A'
        }} 
        className="absolute text-center"
      >
        Our Story
      </h2>

      {/* Video Container */}
      <div 
        style={{ 
          width: '1170px', 
          height: '694px', 
          top: '137px', 
          left: '135px',
          borderRadius: '16px'
        }} 
        className="absolute overflow-hidden shadow-2xl group cursor-pointer"
      >
        {/* Thumbnail Image */}
        <img 
          src="/story.png" 
          alt="Our Story Video" 
          className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-[#FF4B4B] rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Button: Support Now */}
      <button 
        style={{ 
          width: '181px', 
          height: '50px', 
          top: '881px', 
          left: '630px',
          backgroundColor: '#C5E17A',
          borderRadius: '12px'
        }} 
        className="absolute flex items-center justify-center text-[#1C594A] font-bold hover:bg-[#b4d45d] transition-colors shadow-sm"
      >
        <span className="text-[16px]">Support Now</span>
      </button>
    </section>
  );
};

export default StorySection;