import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faculty | Naincy Career School',
  description: 'Meet the dedicated teachers and staff at Naincy Career School.',
};

export default function FacultyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-50">
      <section className="py-20 bg-purple-100 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-5xl mb-4 block">👩‍🏫</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-950 mb-6 tracking-tight">
            Meet Our <span className="text-emerald-500 underline decoration-pink-400 decoration-wavy">Teachers</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            Our incredible faculty are mentors, guides, and lifelong learners dedicated to student success.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            {/* Placeholder Faculty Profile */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="playful-card border-4 border-indigo-200 rounded-[32px] p-6 bg-white shadow-sm flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full border-4 border-slate-300 mb-4 flex items-center justify-center text-3xl">👤</div>
                <h3 className="font-header text-lg font-bold text-indigo-950 mb-1">Teacher Name</h3>
                <p className="text-sm font-bold text-pink-500 mb-3">Subject / Role</p>
                <p className="text-xs text-slate-600">[Placeholder: Short bio about the teacher's experience and passion.]</p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
