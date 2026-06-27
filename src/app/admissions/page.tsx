import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions | Naincy Career School',
  description: 'Join Naincy Career School. Find information on our admissions process and fee structure.',
};

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-50">
      <section className="py-20 bg-pink-100 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-5xl mb-4 block">🎓</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-950 mb-6 tracking-tight">
            Join Our <span className="text-indigo-600 underline decoration-yellow-400 decoration-wavy">Family</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            Everything you need to know about becoming a part of Naincy Career School.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="playful-card border-4 border-indigo-200 rounded-[32px] p-8 sm:p-12 bg-white shadow-sm mb-12">
            <h2 className="text-3xl font-bold text-indigo-950 mb-6 text-center">Admission Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Submit Inquiry</h4>
                  <p className="text-slate-600">[Placeholder: Fill out our online inquiry form or visit the campus.]</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Campus Tour & Interaction</h4>
                  <p className="text-slate-600">[Placeholder: Meet our teachers, tour the facilities, and have a friendly chat.]</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Enrollment</h4>
                  <p className="text-slate-600">[Placeholder: Submit documents and complete the fee payment to secure the seat.]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/#contact" className="playful-btn bg-indigo-600 hover:bg-indigo-700 text-white font-header font-bold text-xl px-10 py-5 rounded-full inline-flex items-center justify-center gap-2">
              Start Application ✨
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
