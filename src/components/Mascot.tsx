"use client";

import React from "react";

interface MascotProps {
  className?: string;
  width?: number;
  height?: number;
  interactive?: boolean;
}

export default function Mascot({ className = "", width = 120, height = 120, interactive = true }: MascotProps) {
  return (
    <div 
      className={`relative inline-block select-none ${className} ${interactive ? "hover:scale-105 transition-transform duration-300 cursor-pointer" : ""}`}
      style={{ width, height }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Glow behind mascot */}
        <circle cx="100" cy="108" r="75" fill="url(#mascotGlow)" opacity="0.4" />

        {/* Graduation Cap Tassel (hangs down side) */}
        <path
          d="M 60,35 Q 40,45 45,65"
          stroke="#FBBF24"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-tassel-swing origin-[60px_35px]"
        />
        <circle cx="45" cy="65" r="6" fill="#F59E0B" />

        {/* Owl Body */}
        <path
          d="M 100,45 C 50,45 40,75 40,115 C 40,155 60,175 100,175 C 140,175 160,155 160,115 C 160,75 150,45 100,45 Z"
          fill="url(#owlBodyGrad)"
          stroke="#4F46E5"
          strokeWidth="5"
        />

        {/* Belly plate */}
        <path
          d="M 100,95 C 70,95 60,115 60,135 C 60,155 75,168 100,168 C 125,168 140,155 140,135 C 140,115 130,95 100,95 Z"
          fill="#FFFBEB"
          stroke="#E0E7FF"
          strokeWidth="2"
        />

        {/* Belly feather marks */}
        <path d="M 85,115 Q 100,122 115,115" stroke="#C7D2FE" strokeWidth="3" strokeLinecap="round" />
        <path d="M 80,130 Q 100,138 120,130" stroke="#C7D2FE" strokeWidth="3" strokeLinecap="round" />
        <path d="M 85,145 Q 100,152 115,145" stroke="#C7D2FE" strokeWidth="3" strokeLinecap="round" />

        {/* Eyes background (White circles) */}
        <circle cx="75" cy="90" r="24" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="4" />
        <circle cx="125" cy="90" r="24" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="4" />

        {/* Pupils (Big black circles with animatable lids) */}
        <g className="animate-eye-blink origin-[100px_90px]">
          {/* Left pupil */}
          <circle cx="75" cy="90" r="14" fill="#1E1B4B" />
          <circle cx="70" cy="84" r="5" fill="#FFFFFF" /> {/* Left eye shine 1 */}
          <circle cx="80" cy="94" r="2.5" fill="#FFFFFF" /> {/* Left eye shine 2 */}

          {/* Right pupil */}
          <circle cx="125" cy="90" r="14" fill="#1E1B4B" />
          <circle cx="120" cy="84" r="5" fill="#FFFFFF" /> {/* Right eye shine 1 */}
          <circle cx="130" cy="94" r="2.5" fill="#FFFFFF" /> {/* Right eye shine 2 */}
        </g>

        {/* Cute blushing cheeks */}
        <circle cx="56" cy="112" r="7" fill="#FDA4AF" opacity="0.75" />
        <circle cx="144" cy="112" r="7" fill="#FDA4AF" opacity="0.75" />

        {/* Beak */}
        <path
          d="M 100,92 L 92,104 C 95,110 105,110 108,104 Z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Wings */}
        {/* Left Wing */}
        <path
          d="M 42,90 C 20,95 10,120 25,140 C 35,150 42,140 42,125 Z"
          fill="#6366F1"
          stroke="#4F46E5"
          strokeWidth="4"
          strokeLinejoin="round"
          className="animate-left-wing origin-[42px_90px]"
        />

        {/* Right Wing */}
        <path
          d="M 158,90 C 180,95 190,120 175,140 C 165,150 158,140 158,125 Z"
          fill="#6366F1"
          stroke="#4F46E5"
          strokeWidth="4"
          strokeLinejoin="round"
          className="animate-right-wing origin-[158px_90px]"
        />

        {/* Graduation Cap (atop head) */}
        <path
          d="M 50,35 L 100,15 L 150,35 L 100,55 Z"
          fill="#1E1B4B"
          stroke="#4F46E5"
          strokeWidth="3"
        />
        {/* Cap base/band */}
        <path
          d="M 75,37 C 75,46 125,46 125,37 L 120,48 C 115,54 85,54 80,48 Z"
          fill="#312E81"
          stroke="#1E1B4B"
          strokeWidth="2"
        />

        {/* Feet */}
        <path d="M 75,172 C 75,185 85,185 85,172 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="3" />
        <path d="M 125,172 C 125,185 115,185 115,172 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="3" />

        {/* Definitions for gradients */}
        <defs>
          <radialGradient id="mascotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A5B4FC" />
            <stop offset="100%" stopColor="#A5B4FC" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="owlBodyGrad" x1="100" y1="45" x2="100" y2="175" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
