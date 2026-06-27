import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academics | Naincy Career School',
  description: 'Explore our curriculum and academic programs.',
};

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-50">
      <section className="py-20 bg-yellow-100 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-5xl mb-4 block">🧠</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-950 mb-6 tracking-tight">
            Our <span className="text-sky-500 underline decoration-pink-400 decoration-wavy">Academics</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            A curriculum designed to spark curiosity, build strong foundations, and prepare for the future.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Academic Level Card */}
            <div className="playful-card border-4 border-pink-200 rounded-[32px] p-8 bg-white shadow-sm flex flex-col h-full">
              <div className="text-4xl mb-4">🧸</div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-4">Kindergarten</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                [Placeholder: Describe your early years program, play-based learning, and foundational skills.]
              </p>
              <button className="playful-btn bg-pink-100 text-pink-700 font-bold py-2 px-4 rounded-full w-full hover:bg-pink-200 transition-colors">Learn More</button>
            </div>

            <div className="playful-card border-4 border-sky-200 rounded-[32px] p-8 bg-white shadow-sm flex flex-col h-full">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-4">Primary School</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                [Placeholder: Describe subjects, holistic development, and core competencies for Grades 1-5.]
              </p>
              <button className="playful-btn bg-sky-100 text-sky-700 font-bold py-2 px-4 rounded-full w-full hover:bg-sky-200 transition-colors">Learn More</button>
            </div>

            <div className="playful-card border-4 border-emerald-200 rounded-[32px] p-8 bg-white shadow-sm flex flex-col h-full">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-4">Middle School</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                [Placeholder: Describe advanced subjects, labs, career exploration, and critical thinking for Grades 6-8.]
              </p>
              <button className="playful-btn bg-emerald-100 text-emerald-700 font-bold py-2 px-4 rounded-full w-full hover:bg-emerald-200 transition-colors">Learn More</button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
