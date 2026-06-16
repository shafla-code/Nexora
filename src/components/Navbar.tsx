import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, ChevronDown, Share2 } from 'lucide-react';
import NexoraLogo from './NexoraLogo';

interface NavbarProps {
  isLightTheme: boolean;
  onThemeToggle: () => void;
}

export default function Navbar({ isLightTheme, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background adhesive transition
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Intersection checker for active nav indicator
      const sections = ['home', 'about', 'services', 'why-choose', 'portfolio', 'testimonials', 'contact'];
      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveItem(sect);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (id: string) => {
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Choose Us', id: 'why-choose' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      id="nexora-global-navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Identity Logotype with gradient */}
        <button
          onClick={() => smoothScrollTo('home')}
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-nexora-teal/30 rounded-xl py-1 transition-transform active:scale-95"
          aria-label="Nexora Home"
        >
          <NexoraLogo isLightTheme={isLightTheme} showTagline={false} height="32px" />
        </button>

        {/* Desktop Anchor Options */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => smoothScrollTo(link.id)}
              className={`text-sm font-medium tracking-wide transition duration-300 relative py-1.5 focus:outline-none ${
                activeItem === link.id
                  ? 'text-nexora-lime font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
              {activeItem === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-nexora-teal to-nexora-lime rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Functional Settings & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Light/Dark Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all focus:outline-none"
            title={isLightTheme ? 'Enable Dark Mode' : 'Enable Light Mode'}
          >
            {isLightTheme ? (
              <Moon className="w-4.5 h-4.5 text-nexora-teal" />
            ) : (
              <Sun className="w-4.5 h-4.5 text-nexora-lime" />
            )}
          </button>

          {/* Premium CTA anchor button */}
          <button
            onClick={() => smoothScrollTo('contact')}
            className="group px-4.5 py-2 rounded-xl bg-gradient-to-r from-[#007D87] to-[#A3D635] text-slate-950 font-semibold text-xs tracking-wide uppercase hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-1.5 shadow-lg shadow-nexora-teal/20"
          >
            <span>Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu and Switchers */}
        <div className="flex items-center lg:hidden gap-3">
          
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 transition"
            title="Toggle theme"
          >
            {isLightTheme ? <Moon className="w-4.5 h-4.5 text-nexora-teal" /> : <Sun className="w-4.5 h-4.5 text-nexora-lime" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white transition focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Slide-out drawer menu for Mobile viewports */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-slate-950/98 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 p-6 flex flex-col justify-between lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer top close button */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-display font-extrabold text-white">Nexora Portal</span>
              <span className="w-1.5 h-1.5 rounded-full bg-nexora-lime" />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl bg-white/5 text-slate-400 hover:text-white button-transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links pile */}
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => smoothScrollTo(link.id)}
                className={`text-left text-base font-semibold py-2 px-3 rounded-xl transition duration-250 ${
                  activeItem === link.id
                    ? 'bg-nexora-teal/15 text-nexora-lime border-l-2 border-nexora-lime'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="border-t border-white/5 pt-6 space-y-4">
          <p className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">
            Nexora Client Acquisition Engine
          </p>
          <button
            onClick={() => smoothScrollTo('contact')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-nexora-teal to-nexora-lime text-slate-950 font-bold tracking-wide uppercase text-xs text-center flex items-center justify-center gap-2"
          >
            <span>Talk with our strategist</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </nav>
  );
}
