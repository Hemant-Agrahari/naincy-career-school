import React from 'react';

export default function TickerTape() {
  return (
    <div className="w-full bg-indigo-950 text-white py-4 overflow-hidden flex whitespace-nowrap border-y-4 border-yellow-400 select-none">
      <div className="animate-marquee flex gap-12 font-header text-xl sm:text-2xl tracking-widest font-bold">
        {/* Render multiple sets to ensure seamless infinite scrolling */}
        {[1, 2, 3, 4].map((set) => (
          <React.Fragment key={set}>
            <span>⭐ ROBOTICS CLUB</span>
            <span>🎨 FINE ARTS</span>
            <span>💻 CODING LABS</span>
            <span>🚀 SPACE EXPLORATION</span>
            <span>🏆 SPORTS</span>
            <span>🔬 SCIENCE FAIR</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
