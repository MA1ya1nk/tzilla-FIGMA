import React from 'react';

const FundraiserHero = () => {
  return (
    <div className="relative overflow-hidden font-['Lato']" style={{ width: '1440px', height: '1200px' }}>
      
      {/* Background Image Wrapper */}
      <div 
        className="absolute w-full overflow-hidden" 
        style={{ height: '650px', top: '95px', opacity: 1 }}
      >
        <img 
          src="fundraiser/kid-group.jpg" 
          alt="Fundraiser Background" 
          className="w-full h-full object-cover"
        />
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-8">
          <button className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md">‹</button>
          <button className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md">›</button>
        </div>
      </div>

      {/* Main Data Box */}
      <div 
        className="absolute bg-[#2B3B5C]/95 rounded-[20px] shadow-2xl text-white backdrop-blur-sm"
        style={{ width: '1170px', height: '526px', top: '436px', left: '135px' }}
      >
        {/* Center Icon Wrapper */}
        <div 
          className="absolute bg-[#2B3B5C] rounded-2xl flex items-center justify-center"
          style={{ width: '110px', height: '110px', top: '25px', left: '530px', borderWidth: '3px', borderColor: '#FFFFFF' }}
        >
          <img src="logo_placeholder.png" alt="Logo" className="w-16 h-16 rounded-full" />
        </div>

        {/* Labels and Titles */}
        <div className="absolute text-center" style={{ width: '150px', height: '26px', top: '142px', left: '510px', fontWeight: 400, fontSize: '20px', textTransform: 'capitalize' }}>
          Fundraiser Name
        </div>

        <h1 className="absolute text-center" style={{ width: '449px', height: '49px', top: '166px', left: '361px', fontWeight: 800, fontSize: '38px' }}>
          Canyon View Coyots 2021
        </h1>

        <div className="absolute text-center opacity-80" style={{ width: '200px', top: '230px', left: '485px', fontSize: '16px' }}>
          Beneficiary
        </div>

        <h2 className="absolute text-center" style={{ width: '269px', height: '36px', top: '254px', left: '451px', fontWeight: 800, fontSize: '28px' }}>
          Poway Dance Ptoject
        </h2>

        {/* Raised Section */}
        <div className="absolute w-full flex flex-col items-center" style={{ top: '320px' }}>
          <span style={{ fontWeight: 600, fontSize: '24px' }}>Raised:</span>
          <span className="text-[48px] font-black mt-1">$ 5, 987</span>
          {/* Progress Bar */}
          <div className="w-[790px] h-3 bg-white/20 rounded-full mt-4 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full bg-[#FF4B4B]" style={{ width: '35%' }}></div>
          </div>
        </div>

        {/* Goal, End Date, Contributors */}
        <div 
          className="absolute flex justify-between items-center border-t border-white/20 pt-6"
          style={{ width: '790px', height: '67px', top: '437px', left: '190px' }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">👛</span>
            <div>
              <p className="text-sm opacity-80">Goal</p>
              <p className="font-bold">$ 30 000</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-x border-white/20 px-12">
            <span className="text-2xl">📅</span>
            <div>
              <p className="text-sm opacity-80">End date</p>
              <p className="font-bold">June 21, 2021</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">👥</span>
            <div>
              <p className="text-sm opacity-80">Contributors</p>
              <p className="font-bold">6 720</p>
            </div>
          </div>
        </div>
      </div>

      {/* End Descriptive Text */}
      <div 
        className="absolute text-center flex flex-col items-center"
        style={{ width: '1071px', height: '144px', bottom: '50px', left: '185px', fontWeight: 500, fontSize: '22px', lineHeight: '36px', color: '#4A5568' }}
      >
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        </p>
        <button className="text-[#FF4B4B] font-bold mt-2 cursor-pointer">Read More</button>
      </div>

    </div>
  );
};

export default FundraiserHero;