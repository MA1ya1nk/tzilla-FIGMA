import React from 'react';

const Leaderboard = () => {
  // Common container style for the leaderboard entries
  const cardStyle = {
    width: '400px',
    height: '116px',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const upcomingStarsData = Array(7).fill({
    name: "Hanna Jason",
    amount: "Amount raised: $1 987",
    img: "/Leaderboard/first-image.png" // Replace with image_0106e1.png assets
  });

  return (
    <div 
      className="relative mx-auto bg-white" 
      style={{ width: '1438px', height: '1054px', opacity: 1 }}
    >
      {/* Team Leaderboard Heading */}
      <h2 className="absolute text-center capitalize" style={{
        width: '399px', height: '62px', top: '56px', left: '520px',
        fontFamily: 'Lato', fontWeight: 800, fontSize: '48px',
        lineHeight: '130%', color: '#1D4D3F'
      }}>
        Team Leaderboard
      </h2>

      {/* Top Stars Heading */}
      <h3 className="absolute text-center capitalize" style={{
        width: '115px', height: '36px', top: '148px', left: '662px',
        fontFamily: 'Lato', fontWeight: 700, fontSize: '28px', lineHeight: '36px',
        color: '#1D4D3F'
      }}>
        Top Stars
      </h3>

      {/* Top 3 Container */}
      <div className="absolute flex flex-wrap justify-center" style={{
        width: '830px', height: '262px', top: '209px', left: '304px'
      }}>
        {/* Rank 1 (Centered Top) */}
        <div style={{ ...cardStyle, marginBottom: '30px', borderLeft: '6px solid #69A84E' }}>
          <span className="ml-6 text-[24px] font-bold text-[#1D4D3F]">1</span>
          <img src="/Leaderboard/first-image.png" alt="Hanna" className="rounded-full ml-4" style={{ width: '80px', height: '80px' }} />
          <div className="ml-4">
            <p style={{ width: '135px', height: '32px', fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px', lineHeight: '32px' }}>Hanna Jason</p>
            <p style={{ width: '153px', height: '20px', fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#667085' }}>Amount raised: $1 987</p>
          </div>
          <div className="absolute right-6 top-6 w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
        </div>

        {/* Rank 2 & 3 Row */}
        <div className="flex gap-[30px] w-full justify-center">
           {[2, 3].map((num) => (
             <div key={num} style={{ ...cardStyle, borderLeft: '6px solid #69A84E' }}>
               <span className="ml-6 text-[24px] font-bold text-[#1D4D3F]">{num}</span>
               <img src="/Leaderboard/first-image.png" alt="User" className="rounded-full ml-4" style={{ width: '80px', height: '80px' }} />
               <div className="ml-4">
                 <p style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px' }}>{num === 2 ? 'Eric Woo' : 'David Sornos'}</p>
                 <p style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', color: '#667085' }}>Amount raised: $1 987</p>
               </div>
               <div className="absolute right-6 top-6 w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center text-white text-xs font-bold">{num}</div>
             </div>
           ))}
        </div>
      </div>

      {/* Upcoming Stars Heading */}
      <h3 className="absolute text-center capitalize" style={{
        width: '196px', height: '36px', top: '516px', left: '621px',
        fontFamily: 'Lato', fontWeight: 700, fontSize: '28px', lineHeight: '36px',
        color: '#1D4D3F'
      }}>
        Upcoming Stars
      </h3>

      {/* Upcoming Stars (4-10) Grid Container */}
      <div className="absolute grid grid-cols-2 gap-x-[29px] gap-y-[16px]" style={{
        width: '829px', height: '402px', top: '577px', left: '305px'
      }}>
        {upcomingStarsData.map((star, index) => (
          <div 
            key={index} 
            style={{ 
              ...cardStyle, 
              borderLeft: '6px solid #C5E17A',
              gridColumn: index === 6 ? 'span 2' : 'auto',
              justifySelf: index === 6 ? 'center' : 'auto'
            }}
          >
            <span className="ml-6 text-[20px] font-bold text-[#1D4D3F]">{index + 4}</span>
            <img src={star.img} alt="User" className="rounded-full ml-4" style={{ width: '60px', height: '60px' }} />
            <div className="ml-4">
              <p style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px' }}>{star.name}</p>
              <p style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '13px', color: '#667085' }}>{star.amount}</p>
            </div>
            <div className="absolute right-4 text-[#C5E17A] text-[10px] font-extrabold border border-[#C5E17A] px-2 py-1 rounded-full">TOP 10</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;