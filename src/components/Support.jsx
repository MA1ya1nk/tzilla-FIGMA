import React from 'react';

const Support = () => {
  return (
    <section 
      className="w-full flex flex-col items-center justify-center font-['Lato']" 
      style={{ 
        backgroundColor: '#C1E274', 
        height: '250px' // Provides padding for the 134px top-offset icon container
      }}
    >
      {/* Text: We Needs Your Support, Share Away */}
      <h2 
        style={{ 
          width: '528px', 
          height: '48px', 
          fontWeight: '800', 
          fontSize: '32px', 
          lineHeight: '48px' 
        }} 
        className="text-[#1D4D3F] text-center capitalize mb-8"
      >
        We Needs Your Support, Share Away
      </h2>

      {/* Three Icons Container */}
      <div 
        style={{ 
          width: '260px', 
          height: '60px' 
        }} 
        className="flex justify-between items-center"
      >
        {/* Instagram Icon Box */}
        <div 
          style={{ width: '60px', height: '60px' }} 
          className="flex items-center justify-center cursor-pointer"
        >
          <img 
            src="/support/instagram.png" 
            alt="Instagram" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Facebook Icon Box */}
        <div 
          style={{ width: '60px', height: '60px' }} 
          className="flex items-center justify-center cursor-pointer"
        >
          <img 
            src="/support/facebook.png" 
            alt="Facebook" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Twitter Icon Box */}
        <div 
          style={{ width: '60px', height: '60px' }} 
          className="flex items-center justify-center cursor-pointer"
        >
          <img 
            src="/support/twitter.png" 
            alt="Twitter" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Support;