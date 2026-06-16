import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Send, 
  Sparkles, 
  Quote, 
  Star, 
  Briefcase, 
  ShieldCheck, 
  Lightbulb, 
  BarChart2, 
  MessageSquare, 
  Cpu, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook, 
  CheckCircle,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Flame,
  MousePointerClick
} from 'lucide-react';

// Data and Shared Components
import { SERVICES, STATS, MISSION_VISION, WHY_CHOOSE_FACTS, PORTFOLIO_ITEMS, TESTIMONIALS, IMAGES } from './data';
import { PortfolioItem, Service } from './types';
import Navbar from './components/Navbar';
import NexoraLogo from './components/NexoraLogo';
import Particles from './components/Particles';
import StatCounter from './components/StatCounter';
import HeroIllustration from './components/HeroIllustration';
import Lightbox from './components/Lightbox';
import InteractiveMap from './components/InteractiveMap';

export default function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [selectedPortfolioCategory, setSelectedPortfolioCategory] = useState('All');
  
  // Lightbox view state
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  // Testimonials Carousel Controls
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Service modal or active explanation overlay
  const [activeServiceExplanation, setActiveServiceExplanation] = useState<Service | null>(null);

  // Simulated live local notification ticker matching actual regional operations
  const [localTime, setLocalTime] = useState<string>('');

  // Form states
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Social Media Marketing',
    message: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Newsletter states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

  // Live conversion counters for premium engagement simulation
  const [visitorCount, setVisitorCount] = useState(eventRandomMultiplier(68, 120));

  function eventRandomMultiplier(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Update timezone clocks
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Soft loop simulation for active visitors
  useEffect(() => {
    const visitorInterval = setInterval(() => {
      setVisitorCount((prev) => Math.max(45, prev + eventRandomMultiplier(-4, 6)));
    }, 5000);
    return () => clearInterval(visitorInterval);
  }, []);

  // Theme Toggler
  const handleThemeToggle = () => {
    setIsLightTheme((prev) => {
      const nextTheme = !prev;
      if (nextTheme) {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
      }
      return nextTheme;
    });
  };

  // Form Submission Handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      setContactForm({
        name: '',
        email: '',
        phone: '',
        service: 'Social Media Marketing',
        message: ''
      });
    }, 5000);
  };

  // Newsletter submission handler
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsNewsletterSubmitted(true);
    setTimeout(() => {
      setIsNewsletterSubmitted(false);
      setNewsletterEmail('');
    }, 4000);
  };

  // Carousel navigation helper
  const handlePrevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Lightbox multi-navigation supports
  const filterPortfolioItems = selectedPortfolioCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedPortfolioCategory);

  const handlePrevLightbox = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filterPortfolioItems.findIndex(i => i.id === activeLightboxItem.id);
    const prevIndex = currentIndex === 0 ? filterPortfolioItems.length - 1 : currentIndex - 1;
    setActiveLightboxItem(filterPortfolioItems[prevIndex]);
  };

  const handleNextLightbox = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filterPortfolioItems.findIndex(i => i.id === activeLightboxItem.id);
    const nextIndex = currentIndex === filterPortfolioItems.length - 1 ? 0 : currentIndex + 1;
    setActiveLightboxItem(filterPortfolioItems[nextIndex]);
  };

  const smoothScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper mapping string representations to functional Lucide nodes
  const renderLucideByName = (name: string) => {
    switch(name) {
      case 'Share2': return <Briefcase className="w-6 h-6 text-pink-400 group-hover:scale-110 transition duration-300" />;
      case 'Search': return <ShieldCheck className="w-6 h-6 text-blue-400 group-hover:scale-110 transition duration-300" />;
      case 'TrendingUp': return <BarChart2 className="w-6 h-6 text-orange-400 group-hover:scale-110 transition duration-300" />;
      case 'Palette': return <Sparkles className="w-6 h-6 text-purple-400 group-hover:scale-110 transition duration-300" />;
      case 'Film': return <Quote className="w-6 h-6 text-red-400 group-hover:scale-110 transition duration-300" />;
      case 'Code': return <Cpu className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition duration-300" />;
      case 'Cpu': return <Flame className="w-6 h-6 text-nexora-lime group-hover:scale-110 transition duration-300" />;
      
      // Why Choses
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-nexora-teal" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-nexora-lime" />;
      case 'BarChart2': return <BarChart2 className="w-6 h-6 text-cyan-400" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-yellow-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-nexora-teal" />;
    }
  };

  // Categories list
  const portfolioCategories = ['All', 'Social Media Campaigns', 'Branding Projects', 'Website Designs', 'Video Production', 'SEO Case Studies'];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
      
      {/* Absolute Dynamic particles backdrop */}
      <Particles />

      {/* Styled Interactive Sticky Navbar */}
      <Navbar isLightTheme={isLightTheme} onThemeToggle={handleThemeToggle} />

      {/* Live status alert strip */}
      <div className="pt-24 pb-2 bg-slate-950/40 relative z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
            <span className="w-2 h-2 rounded-full bg-nexora-lime animate-ping" />
            <span>HQ LIVE TIME: {localTime} UTC-7</span>
            <span>|</span>
            <span className="text-white flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-nexora-teal" /> {visitorCount} active brand managers touring Nexora
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-nexora-lime">
            <span>🚀 NEW: GenAPI Integration Framework v3 Now Active</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header id="home" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6 text-left relative">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-lg select-none">
              <Sparkles className="w-4 h-4 text-nexora-lime animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-mono text-white font-bold">
                Driving Digital Growth
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] text-white">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-nexora-teal via-[#0EA5E9] to-nexora-lime bg-clip-text text-transparent glow-teal">
                Digital Excellence
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-sans font-light">
              Nexora helps businesses grow faster through innovative digital marketing, AI-powered strategies, creative content, and data-driven campaigns. Let's engineering your conversion lifespan today.
            </p>

            {/* Interaction Buttons Frame */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => smoothScrollTo('contact')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-nexora-teal to-[#14B8A6] text-slate-950 font-bold text-sm tracking-wide uppercase hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4.5 h-4.5 transition duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => smoothScrollTo('services')}
                className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-nexora-teal/40 text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View Our Services</span>
              </button>
            </div>

            {/* Micro client proof badges */}
            <div className="pt-6 border-t border-white/5 space-y-2">
              <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500">
                Co-Engineered Growth For Global Brands
              </div>
              <div className="flex flex-wrap items-center gap-5 opacity-40 grayscale hover:opacity-80 transition duration-300 select-none">
                <span className="font-display font-bold text-sm text-white">TECHFLOW</span>
                <span className="font-display font-black text-sm text-white">APEX CLOTHING</span>
                <span className="font-display font-extrabold text-sm text-white">STARRY.IO</span>
                <span className="font-display font-semibold text-sm text-white">ELEVATE DIGITAL</span>
              </div>
            </div>

          </div>

          {/* Right Visual 3D Dashboard Illustration Component */}
          <div className="lg:col-span-6 w-full">
            <HeroIllustration />
          </div>

        </div>
      </header>


      {/* Section: Who We Are / About Us */}
      <section id="about" className="py-20 bg-slate-950/60 relative z-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Premium photograph representation of the physical office */}
            <div className="lg:col-span-5 relative group">
              
              {/* Decorative backgrounds */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-nexora-teal/20 to-nexora-lime/10 rounded-[32px] blur-2xl opacity-60 group-hover:opacity-80 transition duration-500" />
              
              <div className="relative rounded-[24px] overflow-hidden border border-white/10 shadow-2xl glass-panel p-2 flex items-center justify-center">
                <img
                  src={IMAGES.team}
                  alt="Nexora Professional Strategy Collective"
                  className="w-full h-auto object-cover rounded-[18px] transition duration-700 group-hover:scale-[1.01] hover:contrast-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual watermark badge inside photo */}
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/90 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Nexora Core Lab</p>
                    <p className="text-xs font-semibold text-white">San Francisco HQ Co-Working Session</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-nexora-lime animate-pulse" />
                </div>
              </div>

            </div>

            {/* Right Side description & Mission and Vision cards */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-widest font-mono text-nexora-lime font-bold">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  We Engineer Digital Landmarks For Global Scale
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Nexora is a next-generation digital marketing agency dedicated to helping businesses thrive in the digital era. We combine creativity, technology, and strategic thinking to build powerful brands and deliver measurable results.
              </p>

              {/* Mission / Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {MISSION_VISION.map((box, i) => (
                  <div 
                    key={box.type}
                    id={`mission-card-${i}`}
                    className="glass-panel p-5 rounded-2xl border border-white/5 transition-all duration-300 hover:border-nexora-teal/30 hover:bg-slate-900/60"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-6 bg-gradient-to-b from-nexora-teal to-nexora-lime rounded-full" />
                      <h4 className="text-sm uppercase tracking-wider text-nexora-lime font-mono">{box.type}</h4>
                    </div>
                    <h5 className="font-display font-semibold text-white mb-2 text-base leading-tight">{box.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{box.description}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Staggered Animated Statistics counters bottom banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-6xl mx-auto">
            {STATS.map((stat) => (
              <StatCounter
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>

        </div>
      </section>


      {/* Section: Services List */}
      <section id="services" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 rounded-full bg-nexora-teal/15 text-nexora-teal border border-nexora-teal/20 text-xs tracking-widest uppercase font-mono font-bold inline-block">
              Scale our expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Bespoke Growth Offerings
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
              Deploy our modular strategic units designed to achieve direct-response attribution and lasting structural brand equity.
            </p>
          </div>

          {/* Cards Deck */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SERVICES.map((serv) => (
              <div
                key={serv.id}
                id={`service-card-${serv.id}`}
                className="glass-panel glass-panel-hover p-6 rounded-2xl text-left flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual card header */}
                <div>
                  
                  {/* Icon wrap with gradient backdrops */}
                  <div className="h-12 w-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-nexora-lime/50 transition duration-300 shadow-md">
                    {renderLucideByName(serv.iconName)}
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2 tracking-tight group-hover:text-nexora-lime transition duration-300">
                    {serv.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                    {serv.description}
                  </p>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => setActiveServiceExplanation(serv)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide text-nexora-teal hover:text-nexora-lime group-hover:gap-2.5 transition-all duration-300 uppercase focus:outline-none"
                >
                  <span>Inquire framework</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services explanation popup overlay */}
      {activeServiceExplanation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md glass-panel p-6 rounded-3xl border border-white/10 text-left relative overflow-hidden">
            <h3 className="text-xl font-display font-bold text-white mb-3 flex items-center gap-2">
              <span className="p-1 rounded bg-nexora-teal/20 text-nexora-lime">
                {renderLucideByName(activeServiceExplanation.iconName)}
              </span>
              <span>{activeServiceExplanation.title}</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Our {activeServiceExplanation.title} program utilizes proprietary predictive analytics frameworks, real-time feedback systems, and localized audience mapping to ensure continuous performance.
            </p>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1.5 mb-6 text-xs text-slate-400 font-mono">
              <p className="flex items-center gap-1 text-white">
                <CheckCircle className="w-3.5 h-3.5 text-nexora-lime" /> Deployment timeline: 7-14 Days
              </p>
              <p className="flex items-center gap-1 text-white">
                <CheckCircle className="w-3.5 h-3.5 text-nexora-lime" /> Dedicated Campaign Lead assigned
              </p>
              <p className="flex items-center gap-1 text-white">
                <CheckCircle className="w-3.5 h-3.5 text-nexora-lime" /> Fully integrated pipeline tracking included
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setContactForm({
                    ...contactForm,
                    service: activeServiceExplanation.title,
                    message: `Hi, I am interested in your ${activeServiceExplanation.title} services. Please contact me for a custom strategy.`
                  });
                  setActiveServiceExplanation(null);
                  smoothScrollTo('contact');
                }}
                className="flex-1 py-3 text-center bg-gradient-to-r from-nexora-teal to-nexora-lime text-slate-950 font-bold text-xs uppercase tracking-wide rounded-xl hover:opacity-90 transition"
              >
                Book consultation
              </button>
              <button
                onClick={() => setActiveServiceExplanation(null)}
                className="py-3 px-5 text-center bg-white/5 border border-white/10 text-white rounded-xl text-xs uppercase font-mono transition hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Section: Why Choose Nexora */}
      <section id="why-choose" className="py-20 bg-slate-950/60 relative z-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-nexora-lime font-bold">
              Engineering Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Why Global Leaders Select Nexora
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              We replace hand-wavey metrics with direct attribution models, rigorous planning, and design-led solutions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {WHY_CHOOSE_FACTS.map((fact, index) => (
              <div
                key={fact.id}
                id={`why-choose-card-${index}`}
                className="glass-panel p-6 rounded-2xl border border-white/5 relative group hover:border-[#007D87]/40 transition duration-300"
              >
                {/* Floating graphic element background */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-nexora-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-tr-2xl" />

                <div className="flex items-start gap-4">
                  
                  {/* Vector wrap */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-slate-400 group-hover:text-nexora-lime transition duration-300">
                    {renderLucideByName(fact.iconName)}
                  </div>

                  <div>
                    <h3 className="text-base font-display font-bold text-white mb-1">
                      {fact.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {fact.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Section: Portfolio */}
      <section id="portfolio" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-nexora-lime font-bold">
                Proven results
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                Selected Case Studies
              </h2>
            </div>

            {/* Filter Tabs scrollable on smaller screens */}
            <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto pb-2 scrollbar-none font-mono">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedPortfolioCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-[10px] uppercase font-bold tracking-wider transition-all duration-300 focus:outline-none select-none border whitespace-nowrap ${
                    selectedPortfolioCategory === cat
                      ? 'bg-gradient-to-r from-nexora-teal to-nexora-lime text-slate-950 border-none shadow-md shadow-nexora-teal/15 font-extrabold'
                      : 'bg-transparent text-slate-400 border-white/5 hover:text-white hover:border-white/10'
                  }`}
                >
                  {cat === 'All' ? 'View All' : cat.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout of portfolios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filterPortfolioItems.map((item) => (
              <div
                key={item.id}
                id={`portfolio-card-${item.id}`}
                onClick={() => setActiveLightboxItem(item)}
                className="group cursor-pointer glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-nexora-lime/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Visual Thumbnail */}
                <div className="relative overflow-hidden aspect-[4/3] bg-black">
                  
                  {/* Category Label Overlay */}
                  <span className="absolute top-4 left-4 z-25 bg-slate-950/80 backdrop-blur-md px-3 py-1 border border-white/5 text-[9px] uppercase tracking-widest font-mono text-white rounded-md">
                    {item.category}
                  </span>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-95 select-none"
                    referrerPolicy="no-referrer"
                  />

                  {/* Absolute Zoom Hover Layer */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center z-20">
                    <div className="text-white flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider bg-nexora-teal px-4 py-2 rounded-xl scale-75 group-hover:scale-100 transition duration-300">
                      <span>Inspect case study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Metadata content detail banner */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mb-1.5">{item.client}</p>
                    <h3 className="text-base font-display font-extrabold text-white group-hover:text-nexora-lime transition duration-300 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Highlight core growth KPI */}
                  <div className="mt-4 pt-3.5 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">Accomplishment:</span>
                    <span className="text-xs font-mono font-bold text-nexora-lime">{item.metrics}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Dynamic Lightbox Container */}
      <Lightbox
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />


      {/* Section: Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-950/60 relative z-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest font-mono text-nexora-lime font-bold">
              Shared satisfaction
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Client Appreciations
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Hear directly from operational partners who trusted Nexora to spearhead their digital presence models.
            </p>
          </div>

          {/* Testimonial Active Display wrapper */}
          <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-6 sm:p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 border border-white/10 shadow-2xl">
            
            {/* Ambient Watermark Quote */}
            <div className="absolute top-4 right-10 text-[100px] font-serif leading-none select-none pointer-events-none opacity-[0.05] text-slate-100">
              “
            </div>

            {/* Left: Client Avatar Image */}
            <div className="relative flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/10 p-1 bg-slate-900 shadow-xl self-center">
              <img
                src={TESTIMONIALS[activeTestimonialIndex].avatar}
                alt={TESTIMONIALS[activeTestimonialIndex].name}
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right: Actual Feedback copy and details */}
            <div className="flex-grow space-y-4">
              
              {/* Rating stars */}
              <div className="flex gap-1">
                {[...Array(TESTIMONIALS[activeTestimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Feedback Text quote style */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans italic">
                "{TESTIMONIALS[activeTestimonialIndex].text}"
              </p>

              {/* Author signature detail */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <h4 className="text-base font-display font-bold text-white">
                    {TESTIMONIALS[activeTestimonialIndex].name}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">
                    {TESTIMONIALS[activeTestimonialIndex].role} &middot; <span className="text-nexora-lime font-semibold">{TESTIMONIALS[activeTestimonialIndex].company}</span>
                  </p>
                </div>

                {/* Slider Buttons Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevTestimonial}
                    className="p-2 rounded-xl bg-white/5 hover:bg-nexora-teal hover:text-white border border-white/5 transition duration-200"
                    title="Prev appreciative feedback"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextTestimonial}
                    className="p-2 rounded-xl bg-white/5 hover:bg-nexora-teal hover:text-white border border-white/5 transition duration-200"
                    title="Next appreciative feedback"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Testimonial Select Dots Navigation bar */}
          <div className="flex justify-center gap-1.5 mt-6">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveTestimonialIndex(idx)}
                style={{ width: idx === activeTestimonialIndex ? '28px' : '8px' }}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  idx === activeTestimonialIndex ? 'bg-gradient-to-r from-nexora-teal to-nexora-lime' : 'bg-slate-700 hover:bg-slate-600'
                }`}
                title={`Goto index ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>


      {/* Section: Premium Contacts Grid */}
      <section id="contact" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Side: Brand details & Interactive Office Location Tracker Map */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="p-1 px-3.5 rounded-full bg-nexora-lime/10 border border-nexora-lime/20 text-xs font-mono text-nexora-lime font-bold">
                    Let's sync up
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  Driving Digital Growth
                </h2>
                <p className="text-xs text-slate-400 font-sans font-light leading-relaxed">
                  Start a dialogue with our strategy consultants. We analyze audience niches, formulate high-impact frameworks, and execute programmatic launches.
                </p>
              </div>

              {/* Physical details block list */}
              <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-4 text-xs font-sans text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-nexora-lime" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-wider block uppercase">Official Headquarters</span>
                    <span className="font-semibold text-white">100 Infinite Loop, Cupertino, CA 95014, USA</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-nexora-lime" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-wider block uppercase">Voice Connectivity</span>
                    <span className="font-mono text-white">+1 (415) 555-0182</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-nexora-lime" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-wider block uppercase">Electronic Correspondence</span>
                    <span className="text-nexora-teal font-medium hover:underline cursor-pointer">growth@nexora.digital</span>
                  </div>
                </div>
              </div>

              {/* Embedded Maps components showing interactive branches */}
              <div className="h-96">
                <InteractiveMap />
              </div>

            </div>

            {/* Right Side: High-End Interactive Contact Proposal Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-6 sm:p-10 rounded-[32px] border border-white/10 shadow-2xl relative h-full flex flex-col justify-between">
                
                <div>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2">
                    Request Custom Marketing Blueprint
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light mb-8">
                    Get an exhaustive audit of your brand's digital presence and custom recommendations within 24 hours. No sales pitch, just real analytics.
                  </p>

                  {isFormSubmitted ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-4 my-8">
                      <div className="w-12 h-12 bg-emerald-500/20 text-emerald-300 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-6 h-6 animate-bounce" />
                      </div>
                      <h4 className="text-lg font-display font-bold text-white">Success! Blueprint Proposal Received</h4>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Hi <span className="text-emerald-400 font-semibold">{contactForm.name}</span>, we have received your request regarding <span className="text-emerald-400 font-semibold">{contactForm.service}</span>. Our lead strategist is auditing your domain and will contact you via <span className="text-white font-semibold">{contactForm.email}</span> shortly.
                      </p>
                      <button
                        onClick={() => setIsFormSubmitted(false)}
                        className="text-xs font-mono font-bold uppercase text-nexora-teal hover:underline pt-2 inline-block focus:outline-none"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-5">
                      
                      {/* Name input */}
                      <div>
                        <label htmlFor="comp-contact-name" className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5">Full Name *</label>
                        <input
                          id="comp-contact-name"
                          type="text"
                          required
                          className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-nexora-teal font-sans transition"
                          placeholder="Your Name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        />
                      </div>

                      {/* Email and Phone side by side */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="comp-contact-email" className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5">Email Address *</label>
                          <input
                            id="comp-contact-email"
                            type="email"
                            required
                            className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-nexora-teal font-sans transition"
                            placeholder="you@company.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          />
                        </div>
                        <div>
                          <label htmlFor="comp-contact-phone" className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5">Phone Number</label>
                          <input
                            id="comp-contact-phone"
                            type="tel"
                            className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-nexora-teal font-sans transition"
                            placeholder="+1 (555) 000-0000"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      {/* Service Required Switcher */}
                      <div>
                        <label htmlFor="comp-contact-service" className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5 font-mono">Service Required *</label>
                        <select
                          id="comp-contact-service"
                          className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-nexora-teal font-mono transition"
                          value={contactForm.service}
                          onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Comprehensive message details */}
                      <div>
                        <label htmlFor="comp-contact-msg" className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5">Project Parameters & Message</label>
                        <textarea
                          id="comp-contact-msg"
                          rows={4}
                          className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-nexora-teal font-sans transition resize-none"
                          placeholder="Tell us about your brand targets, active challenges, or organic target scope."
                          value={contactForm.message}
                          onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        />
                      </div>

                      {/* Sticky Submit Trigger Button */}
                      <button
                        type="submit"
                        className="group w-full py-4 rounded-xl bg-gradient-to-r from-nexora-teal via-[#0E7490] to-nexora-lime text-slate-950 font-bold tracking-wider uppercase text-xs transition duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                      >
                        <span>Build Proposal Blueprint</span>
                        <Send className="w-3.5 h-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>

                    </form>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-500 gap-2">
                  <span>SSL SECURE ENCRYPTED CHANNEL</span>
                  <span>PREDICTIVE AUDIT REPORT &middot; 24HR DELIVERY</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Section: Premium Footer footer */}
      <footer className="bg-slate-950 text-white border-t border-white/10 pt-16 pb-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo & Pitch */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <NexoraLogo isLightTheme={isLightTheme} showTagline={false} height="36px" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Nexora drives digital growth. We build interactive digital landscapes, optimize paid acquisition attributes, and deploy state-of-the-art marketing solutions for ambitious global enterprises.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white" aria-label="Nexora Instagram"><Instagram className="w-4 h-4" /></button>
              <button className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white" aria-label="Nexora LinkedIn"><Linkedin className="w-4 h-4" /></button>
              <button className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white" aria-label="Nexora YouTube"><Youtube className="w-4 h-4" /></button>
              <button className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white" aria-label="Nexora Facebook"><Facebook className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Quick Links block */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold">Quick Links</h4>
            <div className="flex flex-col gap-2 text-xs font-sans text-slate-400">
              <button onClick={() => smoothScrollTo('home')} className="hover:text-white text-left">Home</button>
              <button onClick={() => smoothScrollTo('about')} className="hover:text-white text-left">About Us</button>
              <button onClick={() => smoothScrollTo('portfolio')} className="hover:text-white text-left">Portfolio Cases</button>
              <button onClick={() => smoothScrollTo('testimonials')} className="hover:text-white text-left">Testimonials</button>
              <button onClick={() => smoothScrollTo('contact')} className="hover:text-white text-left">Branch Map</button>
            </div>
          </div>

          {/* Services Quick links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold">Services</h4>
            <div className="flex flex-col gap-2 text-xs font-sans text-slate-400">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    smoothScrollTo('services');
                    const element = document.getElementById(`service-card-${s.id}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      element.classList.add('border-nexora-lime');
                      setTimeout(() => element.classList.remove('border-nexora-lime'), 2000);
                    }
                  }}
                  className="hover:text-white text-left text-[11px]"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter subscription form */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold">Stay Ahead Loop</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              Get our proprietary bi-weekly digital marketing research digests. Directly from Nexora Labs, no spam guaranteed.
            </p>

            {isNewsletterSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center text-xs text-white">
                <CheckCircle className="w-4 h-4 text-nexora-lime inline mr-1 animate-pulse" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-nexora-teal flex-grow font-sans"
                  placeholder="Enter email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-nexora-teal hover:bg-nexora-lime hover:text-slate-950 p-2 text-slate-950 rounded-lg transition"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom footer copyright rights info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-3">
          <span>&copy; 2026 Nexora. All Rights Reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer select-none">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer select-none">Terms of Service</span>
            <span className="hover:text-white cursor-pointer select-none">Cookie Policy</span>
          </div>
        </div>

      </footer>

    </div>
  );
}
