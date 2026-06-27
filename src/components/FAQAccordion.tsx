'use client';
import React, { useState } from 'react';

const faqData = [
  {
    question: "What are the school timings?",
    answer: "Our regular school hours are from 8:00 AM to 2:30 PM, Monday through Friday. We also offer extended day care until 5:00 PM for working parents.",
    borderColor: "border-indigo-200"
  },
  {
    question: "Do you provide transportation?",
    answer: "Yes! We have a fleet of safe, GPS-tracked buses covering most major routes in the city. Each bus has a dedicated attendant.",
    borderColor: "border-pink-200"
  },
  {
    question: "What is the student-teacher ratio?",
    answer: "We maintain a strict 15:1 student-to-teacher ratio to ensure personalized attention and optimal learning for every child.",
    borderColor: "border-yellow-200"
  },
  {
    question: "What extracurricular activities do you offer?",
    answer: "We offer a wide range of activities including arts & crafts, robotics, music, dance, and various sports like basketball, football, and skating to foster holistic development.",
    borderColor: "border-emerald-200"
  },
  {
    question: "How can I apply for admission?",
    answer: "You can start the process by clicking the \"Explore Admissions\" button in the hero section, or by filling out the inquiry form in the Admissions section below. We will then schedule a campus tour for you!",
    borderColor: "border-purple-200"
  }
];

export default function FAQAccordion() {
  // Only the first one is open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if clicking the already open one
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {faqData.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`playful-card border-4 ${faq.borderColor} rounded-[32px] p-6 bg-white shadow-sm text-left cursor-pointer transition-all duration-300 ${isOpen ? 'ring-4 ring-sky-100 ring-offset-2' : 'hover:scale-[1.02]'}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center gap-4">
              <h3 className={`font-header text-xl font-bold text-indigo-950 transition-all ${isOpen ? 'mb-4' : 'mb-0'}`}>
                {faq.question}
              </h3>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-slate-100' : 'bg-slate-50'}`}>
                {isOpen ? '❌' : '➕'}
              </div>
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-600 font-medium pt-4 border-t border-slate-100">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
