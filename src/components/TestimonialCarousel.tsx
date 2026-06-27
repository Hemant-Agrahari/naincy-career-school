'use client';
import React from 'react';

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
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((test, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <div className="playful-card border-4 border-yellow-300 rounded-[32px] p-6 sm:p-8 bg-amber-50/30 flex flex-col shadow-sm h-full hover:scale-105 transition-transform duration-300 min-h-[280px]">
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
