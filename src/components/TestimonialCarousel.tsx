'use client';
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Naincy Career School changed how my son thinks about learning! He doesn't just study for exams; he spends hours designing coding puzzles. He loves it here!",
    author: "Sarah J. (Mother of Grade 5 Pupil)",
    icon: "👩‍👦",
  },
  {
    quote: "The combination of hands-on space laboratories and solid core subjects is fantastic. The teachers encourage curiosity and treat every student like an explorer.",
    author: "Dr. David L. (Father of Grade 8 Student)",
    icon: "👨‍🔬",
  },
  {
    quote: "We were looking for a school that valued creativity as much as academics. The fine arts and drama programs here have brought our daughter out of her shell!",
    author: "Elena R. (Mother of Grade 4 Pupil)",
    icon: "🎨",
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Optional: Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto px-4 sm:px-12">
      <div className="overflow-hidden relative pb-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((test, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-2 sm:px-4 h-full">
              <div className="playful-card border-4 border-yellow-300 rounded-[32px] p-6 sm:p-8 bg-amber-50/30 flex flex-col shadow-sm h-full min-h-[280px]">
                <div className="text-4xl mb-4 text-center">{test.icon}</div>
                <p className="text-slate-700 font-body font-medium italic leading-relaxed text-base sm:text-lg text-center mb-6 flex-grow">
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
      
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white border-4 border-indigo-200 text-indigo-900 rounded-full flex items-center justify-center hover:scale-110 hover:border-indigo-400 transition-all z-10 font-bold shadow-md"
        aria-label="Previous Testimonial"
      >
        ←
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white border-4 border-indigo-200 text-indigo-900 rounded-full flex items-center justify-center hover:scale-110 hover:border-indigo-400 transition-all z-10 font-bold shadow-md"
        aria-label="Next Testimonial"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === idx ? 'bg-pink-500' : 'bg-pink-200 hover:bg-pink-300'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
