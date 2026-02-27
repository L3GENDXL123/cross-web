
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'How it Works' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollTo('home')}>
            {/* Sophisticated Interlocking Tech Cross Logo */}
            <div className="relative w-11 h-11 flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transition-all duration-700 group-hover:scale-110">
                <defs>
                  <linearGradient id="vertGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="horizGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                {/* Horizontal Bar with rounded tech ends */}
                <rect x="5" y="42" width="90" height="16" rx="8" fill="url(#horizGrad)" />
                {/* Vertical Bar with rounded tech ends and a small overlap effect */}
                <rect x="42" y="5" width="16" height="90" rx="8" fill="url(#vertGrad)" className="opacity-95" />
                {/* Center 'Core' Node - making it feel connected and techy */}
                <rect x="42" y="42" width="16" height="16" rx="4" fill="#0f172a" />
                <circle cx="50" cy="50" r="3" fill="#60a5fa" className="animate-pulse" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#0f172a] tracking-tight leading-none">Cross<span className="text-blue-600">.web</span></span>
              <span className="text-[9px] font-black text-slate-400 tracking-[0.4em] uppercase mt-1">Systems Engineer</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-bold tracking-tight transition-all relative group ${
                  activeSection === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-[#0f172a]'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full ${activeSection === item.id ? 'w-full' : ''}`}></span>
              </button>
            ))}
          </nav>
          <div className="flex items-center">
            <a
              href="https://wa.me/2348028713828"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f172a] text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-100 flex items-center gap-2 group"
            >
              <span>Build Today</span>
              <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
