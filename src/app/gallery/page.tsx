import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Naincy Career School',
  description: 'View photos of campus life, events, and student activities.',
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-50">
      <section className="py-20 bg-emerald-100 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-5xl mb-4 block">📸</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-950 mb-6 tracking-tight">
            Campus <span className="text-pink-500 underline decoration-yellow-400 decoration-wavy">Gallery</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            Take a peek into the vibrant daily life and exciting events at our school!
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Placeholder Image Cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-slate-200 border-4 border-slate-300 rounded-[24px] flex flex-col items-center justify-center text-slate-400 p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                <span className="text-4xl mb-2">🖼️</span>
                <p className="font-medium text-sm">Replace with your image in the codebase</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
