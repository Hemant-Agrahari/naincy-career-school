'use client';
import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    quote: "Naincy Career School changed how my son thinks about learning! He doesn't just study for exams; he spends hours designing coding puzzles.",
    author: "Sarah J. (Mother of Grade 5)",
    icon: "👩‍👦",
  },
  {
    quote: "The combination of hands-on space laboratories and solid core subjects is fantastic. The teachers treat every student like an explorer.",
    author: "Dr. David L. (Father of Grade 8)",
    icon: "👨‍🔬",
  },
  {
    quote: "We were looking for a school that valued creativity as much as academics. The drama programs have brought our daughter out of her shell!",
    author: "Elena R. (Mother of Grade 4)",
    icon: "🎨",
  },
  {
    quote: "The best decision we made for our child's education. The interactive learning approach makes all the difference.",
    author: "Michael T. (Father of Grade 2)",
    icon: "🌟",
  },
  {
    quote: "I am amazed by the robotics club. My daughter is already programming her own robots at age 10!",
    author: "Priya S. (Mother of Grade 5)",
    icon: "🤖",
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Responsive layout: 3 items on desktop, 1 on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the maximum index we can slide to without showing empty space
  const maxIndex = Math.max(0, testimonialsData.length - itemsToShow);

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000); 
    
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="w-full relative px-2">
      {/* Slider Track Container */}
      <div className="overflow-hidden w-full py-4">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {testimonialsData.map((test, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 px-4 h-full" 
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <div className="playful-card border-4 border-yellow-300 rounded-[32px] p-6 sm:p-8 bg-amber-50/30 flex flex-col shadow-sm h-full min-h-[260px]">
                <div className="text-4xl mb-4 text-center">{test.icon}</div>
                <p className="text-slate-700 font-body font-medium italic leading-relaxed text-base text-center mb-6 flex-grow">
                  "{test.quote}"
                </p>
                <div className="border-t border-yellow-200 pt-4 text-center mt-auto">
                  <h4 className="font-header text-sm font-bold text-indigo-950">{test.author}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'bg-pink-500 w-6' : 'bg-pink-200 hover:bg-pink-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
