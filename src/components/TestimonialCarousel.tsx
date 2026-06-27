'use client';
import React from 'react';

const testimonials = [
  {
    quote: "Naincy Career School changed how my son thinks about learning! He doesn't just study for exams; he spends hours designing coding puzzles. He loves it here!",
    author: "Sarah J. (Mother of Grade 5)",
    icon: "👩‍👦",
  },
  {
    quote: "The combination of hands-on space laboratories and solid core subjects is fantastic. The teachers encourage curiosity and treat every student like an explorer.",
    author: "Dr. David L. (Father of Grade 8)",
    icon: "👨‍🔬",
  },
  {
    quote: "We were looking for a school that valued creativity as much as academics. The fine arts and drama programs here have brought our daughter out of her shell!",
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
  return (
    <div className="w-full overflow-hidden relative py-4">
      {/* Container for the scrolling marquee */}
      {/* We pause the animation on hover so parents can read the quote */}
      <div className="flex gap-6 md:gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
        {/* We map twice to create the infinite loop effect seamlessly */}
        {[...testimonials, ...testimonials].map((test, idx) => (
          <div key={idx} className="w-[300px] md:w-[400px] flex-shrink-0">
            <div className="playful-card border-4 border-yellow-300 rounded-[32px] p-6 sm:p-8 bg-amber-50/30 flex flex-col shadow-sm h-full min-h-[280px]">
              <div className="text-4xl mb-4 text-center">{test.icon}</div>
              <p className="text-slate-700 font-body font-medium italic leading-relaxed text-base sm:text-lg text-center mb-6 flex-grow whitespace-normal">
                "{test.quote}"
              </p>
              <div className="border-t border-yellow-200 pt-4 text-center mt-auto">
                <h4 className="font-header text-sm font-bold text-indigo-950 whitespace-normal">{test.author}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
