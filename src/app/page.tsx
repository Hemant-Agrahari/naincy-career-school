"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Mascot from "@/components/Mascot";
import EnquiryForm from "@/components/EnquiryForm";

export default function Home() {
  // Stats numbers state for animation
  const [counts, setCounts] = useState({
    kids: 0,
    teachers: 0,
    clubs: 0,
    fun: 0,
  });

  // Animate counters on load
  useEffect(() => {
    const targets = { kids: 500, teachers: 45, clubs: 15, fun: 100 };
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 fps
    const totalFrames = Math.round(duration / frameRate);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      
      setCounts({
        kids: Math.floor(easeProgress * targets.kids),
        teachers: Math.floor(easeProgress * targets.teachers),
        clubs: Math.floor(easeProgress * targets.clubs),
        fun: Math.floor(easeProgress * targets.fun),
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  const careerCards = [
    {
      title: "Space Explorer 🚀",
      description: "Blast off into astronomy, mathematics, and science! Learn how rockets fly and map out the shiny stars.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-900 hover:shadow-indigo-200",
      accent: "bg-indigo-500",
      emoji: "🌌",
      badge: "Astrophysics & Math",
    },
    {
      title: "Coding Wizard 💻",
      description: "Build games, direct robots, and solve puzzles! Our kid-friendly coding space turns logic into pure magic.",
      color: "bg-sky-50 border-sky-200 text-sky-900 hover:shadow-sky-200",
      accent: "bg-sky-500",
      emoji: "👾",
      badge: "Game Design & AI",
    },
    {
      title: "Creative Thinker 🎨",
      description: "Express your dreams through painting, sculpting, drama, and design! Bring colors and stories to life.",
      color: "bg-yellow-50 border-yellow-200 text-yellow-900 hover:shadow-yellow-200",
      accent: "bg-yellow-500",
      emoji: "🎭",
      badge: "Fine Arts & Drama",
    },
    {
      title: "Animal Friend 🐾",
      description: "Discover biology, chemistry, and environmental care! Learn all about amazing wildlife and veterinary medicine.",
      color: "bg-rose-50 border-rose-200 text-rose-900 hover:shadow-rose-200",
      accent: "bg-rose-500",
      emoji: "🦁",
      badge: "Biology & Eco-Care",
    },
    {
      title: "Future Leader 📢",
      description: "Master communication, history, and team building! Learn how to speak up, debate, and change the world.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-900 hover:shadow-emerald-200",
      accent: "bg-emerald-500",
      emoji: "🗣️",
      badge: "Speech & Leadership",
    },
  ];

  const academicPaths = [
    {
      level: "Kindergarten",
      age: "Ages 3-5",
      title: "Early Explorers 🎈",
      desc: "Play, create, and build social confidence! Learn letters and numbers through sensory play and colorful activities.",
      color: "bg-pink-100 border-pink-400 text-pink-900",
      btnColor: "bg-pink-500 hover:bg-pink-600",
    },
    {
      level: "Primary School",
      age: "Ages 6-10",
      title: "Creative Builders 🧱",
      desc: "Build strong reading, writing, and math bases. Dive into interactive science labs and discover first coding blocks.",
      color: "bg-amber-100 border-amber-400 text-amber-900",
      btnColor: "bg-amber-500 hover:bg-amber-600",
    },
    {
      level: "Middle School",
      age: "Ages 11-13",
      title: "Career Investigators 🔎",
      desc: "Connect subjects with real-world problems. Join clubs like Robotics, Debating, Arts, and Competitive Athletics.",
      color: "bg-sky-100 border-sky-400 text-sky-900",
      btnColor: "bg-sky-500 hover:bg-sky-600",
    },
    {
      level: "High School",
      age: "Ages 14-17",
      title: "Future Launchpad 🚀",
      desc: "Focus on customized career paths. Earn project-based credits, university preparation, and leadership certifications.",
      color: "bg-indigo-100 border-indigo-400 text-indigo-900",
      btnColor: "bg-indigo-500 hover:bg-indigo-600",
    },
  ];

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
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Naincy Career School",
    "url": "https://naincycareerschool.edu.in",
    "logo": "https://naincycareerschool.edu.in/icon.svg",
    "image": "https://naincycareerschool.edu.in/icon.svg",
    "description": "Welcome to Naincy Career School! We blend core academic excellence with fun, hands-on career exploration paths to help kids find their passions and build bright futures.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Learning Boulevard, Edu-District",
      "addressLocality": "Nainital",
      "addressRegion": "Uttarakhand",
      "postalCode": "263001",
      "addressCountry": "IN"
    },
    "telephone": "+91-123-456-7890",
    "email": "admissions@naincycareer.edu.in",
    "knowsAbout": [
      "Elementary Education",
      "Coding for Kids",
      "Robotics and Space Clubs",
      "Creative Arts Education"
    ]
  };

  return (
    <div className="w-full relative overflow-x-hidden">
      {/* Schema structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* BACKGROUND FLOATING BLOBS/SHAPES */}
      <div className="playful-blob bg-indigo-400 w-96 h-96 top-20 left-10 rounded-full"></div>
      <div className="playful-blob bg-pink-400 w-80 h-80 top-96 right-20 rounded-full"></div>
      <div className="playful-blob bg-yellow-300 w-96 h-96 bottom-80 left-20 rounded-full"></div>

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 bg-gradient-to-b from-indigo-50 via-white to-slate-50 overflow-hidden">
        
        {/* Floating clouds in hero */}
        <div className="absolute top-10 left-[5%] animate-float-slow opacity-60 hidden md:block">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="white">
            <path d="M 30,50 A 20,20 0 0,1 50,30 A 25,25 0 0,1 90,35 A 20,20 0 0,1 110,50 A 15,15 0 0,1 95,65 L 30,65 A 15,15 0 0,1 30,50 Z" />
          </svg>
        </div>
        <div className="absolute top-32 right-[10%] animate-float-medium opacity-50 hidden md:block">
          <svg width="150" height="90" viewBox="0 0 150 90" fill="white">
            <path d="M 40,60 A 25,25 0 0,1 65,35 A 30,30 0 0,1 115,40 A 25,25 0 0,1 140,60 A 20,20 0 0,1 120,80 L 40,80 A 20,20 0 0,1 40,60 Z" />
          </svg>
        </div>

        {/* Small floating rocket */}
        <div className="absolute bottom-20 left-[8%] animate-float-fast opacity-75 pointer-events-none">
          <span className="text-6xl select-none">🚀</span>
        </div>

        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          
          {/* Hero text */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col gap-6">
            <div className="inline-flex self-center lg:self-start items-center gap-2 bg-yellow-100 border-2 border-yellow-300 text-yellow-800 font-bold px-4 py-1.5 rounded-full text-sm animate-bounce">
              <span>🌟 Welcome to Naincy Career School</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-indigo-950">
              Where Big Dreams <br />
              <span className="text-pink-500 underline decoration-yellow-400 decoration-wavy">Take Off! 🚀</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium">
              We connect core science and letters with fun, hands-on career quests! Help your children discover their passions and fly high as future leaders.
            </p>

            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl px-5 py-3 text-slate-700 font-header font-bold text-center lg:text-left self-center lg:self-start flex items-center gap-3 animate-float-medium w-fit">
              <span className="text-2xl">💡</span>
              <div>
                <span className="text-xs text-indigo-500 uppercase tracking-widest block font-sans">Our Motto</span>
                <span className="text-indigo-950">“One who has the will has the skill!”</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#careers"
                className="playful-btn bg-indigo-600 hover:bg-indigo-700 text-white font-header font-bold text-lg px-8 py-4 rounded-full flex items-center justify-center gap-2"
              >
                Start Adventure! ✨
              </a>
              <a
                href="#admissions"
                className="playful-btn bg-yellow-400 hover:bg-yellow-500 text-indigo-950 font-header font-bold text-lg px-8 py-4 rounded-full flex items-center justify-center gap-2"
              >
                Inquire Today 📝
              </a>
            </div>
          </div>

          {/* Hero Mascot Graphic */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Playful background frame */}
            <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] bg-gradient-to-tr from-pink-300 via-yellow-200 to-sky-300 rounded-[50px] rotate-6 opacity-30 animate-pulse-slow"></div>
            <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] bg-gradient-to-bl from-indigo-300 via-sky-200 to-rose-200 rounded-[50px] -rotate-6 opacity-35"></div>
            
            <div className="relative animate-float-slow w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
              <Image
                src="/hero-mascot.png"
                alt="Cute School Book and Pencil Mascot"
                fill
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                priority
              />
              {/* Fun bubble next to mascot */}
              <div className="absolute -top-4 -right-4 sm:-right-8 bg-white border-4 border-indigo-600 text-indigo-950 font-header font-bold px-4 py-2.5 rounded-3xl shadow-lg -rotate-12 z-10">
                Hi! Let's explore! 👋
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CURRICULUM PATHWAY SECTION */}
      <section id="academics" className="py-24 bg-white border-y-8 border-indigo-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-pink-500 text-lg font-bold tracking-widest uppercase">Academic Journey</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-indigo-950">
              Our Magic learning Path 📚
            </h2>
            <p className="text-slate-600 font-medium">
              We make growing up a fun game board! Every step builds knowledge, critical thinking, and introduces children to actual careers.
            </p>
          </div>

          {/* Path Blocks */}
          <div className="game-path mt-12">
            {academicPaths.map((path, idx) => (
              <div
                key={path.level}
                className={`playful-card border-4 border-dashed rounded-3xl p-6 ${path.color} flex flex-col flex-1 gap-4 items-center text-center max-w-xs mx-auto md:mx-0 shadow-md relative`}
              >
                {/* Number Circle Badge */}
                <div className="absolute -top-6 w-12 h-12 bg-white border-4 border-indigo-600 text-indigo-900 rounded-full flex items-center justify-center font-header font-bold text-lg shadow-sm">
                  {idx + 1}
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold tracking-wider uppercase bg-white/70 px-3 py-1 rounded-full text-indigo-950 border border-indigo-200">
                    {path.level}
                  </span>
                </div>

                <h3 className="font-header text-xl font-bold mt-2">{path.title}</h3>
                <span className="text-sm font-semibold text-slate-500 -mt-1">{path.age}</span>
                <p className="text-sm text-slate-700 font-body leading-relaxed">
                  {path.desc}
                </p>

                <a
                  href="#admissions"
                  className={`mt-auto playful-btn ${path.btnColor} text-white font-header font-bold text-xs px-5 py-2 rounded-full w-full`}
                >
                  Explore Path ⚡
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CAREERS EXPLORATION ZONE */}
      <section id="careers" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative sparkles */}
        <div className="absolute top-20 right-10 text-4xl animate-bounce pointer-events-none">✨</div>
        <div className="absolute bottom-20 left-10 text-4xl animate-bounce pointer-events-none">⭐</div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-yellow-500 text-lg font-bold tracking-widest uppercase">Career Exploration</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-indigo-950">
              What Will You Be? Career Zone! 🌟
            </h2>
            <p className="text-slate-600 font-medium">
              We connect core skills to fun fields. Children don't just learn concepts—they explore and step into their future dream professions!
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {careerCards.map((card) => (
              <div
                key={card.title}
                className={`playful-card border-4 rounded-[32px] p-6 ${card.color} flex flex-col items-center text-center shadow-md relative`}
              >
                {/* Large Emoji Circle */}
                <div className={`w-16 h-16 rounded-2xl ${card.accent} flex items-center justify-center text-3xl shadow-sm text-white mb-4`}>
                  {card.emoji}
                </div>

                <h3 className="font-header text-lg font-bold mb-2">{card.title}</h3>
                
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white border text-slate-700 mb-3">
                  {card.badge}
                </span>

                <p className="text-xs text-slate-600 font-body leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STATISTICS STATS BANNER */}
      <section className="py-16 bg-indigo-600 text-white relative border-y-8 border-yellow-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="flex flex-col gap-1 items-center">
              <span className="text-5xl font-extrabold font-header text-yellow-300 animate-pulse">
                {counts.kids}+
              </span>
              <span className="text-sm sm:text-base font-bold text-indigo-100 uppercase tracking-widest">
                Happy Learners 🎒
              </span>
            </div>

            <div className="flex flex-col gap-1 items-center">
              <span className="text-5xl font-extrabold font-header text-pink-300 animate-pulse">
                {counts.teachers}+
              </span>
              <span className="text-sm sm:text-base font-bold text-indigo-100 uppercase tracking-widest">
                Star Teachers 👩‍🏫
              </span>
            </div>

            <div className="flex flex-col gap-1 items-center">
              <span className="text-5xl font-extrabold font-header text-sky-300 animate-pulse">
                {counts.clubs}+
              </span>
              <span className="text-sm sm:text-base font-bold text-indigo-100 uppercase tracking-widest">
                Fun Sports & Clubs ⚽
              </span>
            </div>

            <div className="flex flex-col gap-1 items-center">
              <span className="text-5xl font-extrabold font-header text-emerald-300 animate-pulse">
                {counts.fun}%
              </span>
              <span className="text-sm sm:text-base font-bold text-indigo-100 uppercase tracking-widest">
                Sparkly Fun! ✨
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* PRINCIPAL MESSAGE SECTION */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="border-4 border-indigo-600 rounded-[40px] p-8 sm:p-12 bg-indigo-50/50 shadow-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Principal Quote Text */}
            <div className="md:col-span-8 flex flex-col gap-4">
              <span className="text-3xl text-indigo-600 select-none">“</span>
              <p className="text-lg sm:text-xl font-medium text-slate-800 italic leading-relaxed -mt-4">
                At Naincy Career School, we believe every child is born with a special spark. Our job is not just to teach standard curriculum, but to help that spark grow into a bright, blazing career star! We play, we discover, we code, and we launch bright futures together.
              </p>
              <div className="mt-4">
                <h4 className="font-header text-lg font-bold text-indigo-950">Mrs. Naincy Kapoor</h4>
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">Founder & Head Owl 🦉</p>
              </div>
            </div>

            {/* Principal Picture / Mascot illustration */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center p-4 overflow-hidden">
                <Mascot width={160} height={160} interactive={false} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ENQUIRY FORM / ADMISSIONS */}
      <section id="admissions" className="py-24 bg-slate-50 relative border-t-8 border-indigo-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="bg-white border-4 border-pink-400 rounded-[40px] p-8 sm:p-12 shadow-lg relative overflow-hidden">
            
            {/* Sparkly graphics */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200 rounded-bl-[100px] opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-sky-200 rounded-tr-[80px] opacity-40"></div>

            <div className="text-center mb-8 relative z-10 flex flex-col gap-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-950">
                Start Your Career Adventure! 🚀
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Fill out our quick query card, and our friendly admissions owls will get back to you!
              </p>
            </div>

            <EnquiryForm />

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-16 flex flex-col gap-2">
            <span className="text-pink-500 text-lg font-bold tracking-widest uppercase">Testimonials</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-indigo-950">
              What Our Explorers' Parents Say ❤️
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="playful-card border-4 border-yellow-300 rounded-[32px] p-8 bg-amber-50/30 flex flex-col justify-between shadow-sm"
              >
                <div className="text-3xl mb-4">{test.icon}</div>
                <p className="text-slate-700 font-body font-medium italic leading-relaxed text-sm">
                  "{test.quote}"
                </p>
                <div className="mt-6 border-t border-yellow-200 pt-4">
                  <h4 className="font-header text-sm font-bold text-indigo-950">{test.author}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT MAP & INFO */}
      <section id="contact" className="py-24 bg-slate-50 relative border-t-8 border-indigo-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-sky-500 text-lg font-bold tracking-widest uppercase">Contact Us</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-indigo-950">
              Visit Our Launchpad! 📍
            </h2>
            <p className="text-slate-600 font-medium">
              Find our physical address below or send an email. We are always happy to welcome new explorers!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
            
            {/* Details Box */}
            <div className="lg:col-span-5 bg-white border-4 border-sky-400 rounded-[32px] p-8 flex flex-col gap-6 justify-center shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-xl shrink-0">📍</div>
                <div>
                  <h4 className="font-header text-base font-bold text-slate-800">Launchpad Address</h4>
                  <p className="text-sm font-body text-slate-600 mt-1">123 Learning Boulevard, Edu-District, Nainital, Uttarakhand, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-100 border border-pink-300 flex items-center justify-center text-xl shrink-0">📞</div>
                <div>
                  <h4 className="font-header text-base font-bold text-slate-800">Phone Numbers</h4>
                  <p className="text-sm font-body text-slate-600 mt-1">+91 (123) 456-7890<br />+91 (987) 654-3210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-xl shrink-0">✉️</div>
                <div>
                  <h4 className="font-header text-base font-bold text-slate-800">Electronic Mail</h4>
                  <p className="text-sm font-body text-slate-600 mt-1">admissions@naincycareer.edu.in<br />info@naincycareer.edu.in</p>
                </div>
              </div>
            </div>

            {/* Interactive Mock Map/Visual Area */}
            <div className="lg:col-span-7 bg-white border-4 border-indigo-600 rounded-[32px] overflow-hidden min-h-[300px] shadow-md relative flex items-center justify-center p-8 text-center bg-[radial-gradient(#e0e7ff_1.5px,transparent_1.5px)] [background-size:16px_16px]">
              
              {/* Fun visual representing campus layout / map */}
              <div className="flex flex-col items-center gap-4 relative z-10 max-w-md">
                <div className="w-20 h-20 bg-indigo-100 border-4 border-indigo-600 rounded-full flex items-center justify-center text-4xl animate-bounce">🏫</div>
                <h4 className="font-header text-xl font-bold text-indigo-950">Naincy Career Campus</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Located near the clean, serene hills of Nainital. Features full green sports yards, modern computing spaces, and customized laboratories for young creators!
                </p>
                <div className="text-xs text-indigo-600 font-bold bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Safe & Secure Smart Campus 🛡️
                </div>
              </div>

              {/* Decorative graphic paths representing roads */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,100 Q 200,80 400,150 T 800,120" fill="none" stroke="#4f46e5" strokeWidth="20" strokeLinecap="round" />
                <path d="M 100,0 Q 150,150 120,300" fill="none" stroke="#4f46e5" strokeWidth="15" strokeLinecap="round" />
                <path d="M 300,300 C 400,100 500,400 600,200" fill="none" stroke="#4f46e5" strokeWidth="10" strokeLinecap="round" />
              </svg>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
