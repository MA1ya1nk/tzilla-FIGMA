import React from 'react';

const ActivitySlider = () => {
  const activities = [
    {
      amount: "+ $105",
      author: "by Eddie Agirra",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut commodo😆😘",
      date: "Febuary 21st"
    },
    {
      amount: "+ $35",
      author: "by Hanna Growl",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      date: "Febuary 21st"
    },
    {
      amount: "+ $10",
      author: "by John Frost",
      text: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!",
      date: "Febuary 21st"
    }
  ];

  return (
    <section 
      className="relative bg-[#F9FAFB] flex flex-col items-center overflow-hidden font-['Lato']" 
      style={{ width: '1440px', height: '532px' }}
    >
      {/* Section Title */}
      <h2 className="mt-16 text-[48px] font-[800] text-[#1C594A] capitalize">
        Activity
      </h2>

      {/* Slider Container */}
      <div className="relative mt-[48px] flex items-center justify-center gap-8 w-full px-12">
        
        {/* Left Arrow */}
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#1C594A] hover:bg-gray-50 transition-colors">
          <span className="text-2xl">‹</span>
        </button>

        {/* Cards Wrapper */}
        <div className="flex gap-[30px]">
          {activities.map((item, index) => (
            <div 
              key={index}
              style={{ width: '370px', height: '267px' }}
              className="bg-white rounded-[24px] shadow-lg p-6 relative flex flex-col"
            >
              {/* Amount Badge */}
              <div className="bg-[#C5E17A] text-[#1C594A] px-3 py-1 rounded-[4px] text-[14px] font-bold w-fit mb-4">
                {item.amount}
              </div>

              {/* Author */}
              <h4 
                style={{ 
                  width: '237px', height: '24px', 
                  fontSize: '20px', fontWeight: '800', 
                  lineHeight: '100%', color: '#1C594A' 
                }}
                className="mb-3"
              >
                {item.author}
              </h4>

              {/* Activity Text */}
              <p 
                style={{ 
                  width: '322px', height: '84px', 
                  fontSize: '18px', fontWeight: '400', 
                  lineHeight: '28px', color: '#667085' 
                }}
              >
                {item.text}
              </p>

              {/* Date */}
              <span className="absolute bottom-6 right-6 text-[#1C594A] font-bold text-[16px]">
                {item.date}
              </span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#1C594A] hover:bg-gray-50 transition-colors">
          <span className="text-2xl">›</span>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-12">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-[#C5E17A]"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
};

export default ActivitySlider;