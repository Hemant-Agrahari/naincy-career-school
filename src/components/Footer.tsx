import React from "react";
import Mascot from "./Mascot";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-slate-900 text-white mt-16 overflow-hidden">
      {/* Playful Wave Divider at top of footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 bg-transparent">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[40px] fill-white"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-6">
          
          {/* Brand/Logo Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mascot width={50} height={50} interactive={false} />
              <div className="flex flex-col">
                <span className="font-header text-xl font-bold tracking-tight text-yellow-300">
                  Naincy
                </span>
                <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase -mt-1">
                  Career School
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 font-body max-w-xs">
              Where curious minds discover their potential and blast off towards bright, exciting future careers! 🚀
            </p>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="font-header text-lg font-bold text-sky-400 mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 font-body text-sm text-slate-300">
              <li>
                <a href="#hero" className="hover:text-yellow-300 transition-colors">🚀 Adventure Home</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-yellow-300 transition-colors">📚 Study Path</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-yellow-300 transition-colors">✨ Career Explorer</a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-yellow-300 transition-colors">📝 Admissions Office</a>
              </li>
            </ul>
          </div>

          {/* Information & Fun Column */}
          <div>
            <h4 className="font-header text-lg font-bold text-yellow-300 mb-4">Fun Activities</h4>
            <ul className="flex flex-col gap-2 font-body text-sm text-slate-300">
              <li>Science & Coding Lab</li>
              <li>Space & Astronomy Club</li>
              <li>Creative Arts & Design</li>
              <li>Super Sports Arena</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-header text-lg font-bold text-pink-400 mb-4">Contact Office</h4>
            <address className="not-italic text-sm text-slate-300 font-body flex flex-col gap-2">
              <p>📍 123 Learning Boulevard, Educity</p>
              <p>📞 Phone: +1 (234) 567-890</p>
              <p>✉️ Email: hello@naincycareer.edu</p>
              <p>⏰ Office Hours: 8:00 AM - 4:00 PM</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-400 font-body text-center sm:text-left">
            &copy; {currentYear} Naincy Career School. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="#"
              className="group relative w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 hover:shadow-[0_8px_16px_-6px_rgba(37,99,235,0.5)] transition-all duration-300"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            {/* Twitter */}
            <a
              href="#"
              className="group relative w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-400 hover:-translate-y-1 hover:shadow-[0_8px_16px_-6px_rgba(14,165,233,0.5)] transition-all duration-300"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            
            {/* Instagram */}
            <a
              href="#"
              className="group relative w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:border-pink-400 hover:-translate-y-1 hover:shadow-[0_8px_16px_-6px_rgba(236,72,153,0.5)] transition-all duration-300"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
