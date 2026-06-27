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
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    // Automatically shift the cards every 4 seconds
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000); 
    
    return () => clearInterval(interval);
  }, []);

  // Calculate which 3 testimonials should be visible right now (wrapping around the array)
  const visibleTestimonials = [
    testimonialsData[(startIndex) % testimonialsData.length],
    testimonialsData[(startIndex + 1) % testimonialsData.length],
    testimonialsData[(startIndex + 2) % testimonialsData.length],
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleTestimonials.map((test, idx) => (
          <div key={`${startIndex}-${idx}`} className="w-full h-full animate-fade-in-up">
            <div className="playful-card border-4 border-yellow-300 rounded-[32px] p-6 sm:p-8 bg-amber-50/30 flex flex-col shadow-sm h-full hover:scale-105 transition-transform duration-300 min-h-[250px]">
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
  );
}
