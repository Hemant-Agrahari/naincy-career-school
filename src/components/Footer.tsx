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
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-slate-400 font-body">
            &copy; {currentYear} Naincy Career School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
