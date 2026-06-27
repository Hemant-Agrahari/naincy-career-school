import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Naincy Career School',
  description: 'Learn about the history, mission, and vision of Naincy Career School.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 bg-sky-100 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-5xl mb-4 block">📖</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-950 mb-6 tracking-tight">
            Our <span className="text-pink-500 underline decoration-yellow-400 decoration-wavy">Story</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            Discover how Naincy Career School became a launchpad for big dreams and bright futures.
          </p>
        </div>
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="playful-card border-4 border-indigo-200 rounded-[32px] p-8 sm:p-12 bg-white shadow-sm">
            <h2 className="text-3xl font-bold text-indigo-950 mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              [Placeholder: Write your school's mission statement here. E.g., To provide a nurturing, innovative environment where every child can discover their unique talents.]
            </p>

            <h2 className="text-3xl font-bold text-indigo-950 mb-6">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              [Placeholder: Write your school's vision statement here. E.g., To be a global leader in foundational education and career readiness.]
            </p>

            <h2 className="text-3xl font-bold text-indigo-950 mb-6">History</h2>
            <p className="text-slate-600 leading-relaxed">
              [Placeholder: Share the story of how and when the school was founded, key milestones, and achievements over the years.]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
