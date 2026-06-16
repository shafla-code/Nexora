import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Share2, TrendingUp, Cpu, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';
import { IMAGES } from '../data';

export default function HeroIllustration() {
  const [conversionRate, setConversionRate] = useState(3.4);
  const [activeUsers, setActiveUsers] = useState(1284);

  // Simple active dashboard tickers
  useEffect(() => {
    const interval = setInterval(() => {
      setConversionRate((prev) => {
        const diff = (Math.random() - 0.45) * 0.1;
        return parseFloat(Math.max(2.8, Math.min(4.8, prev + diff)).toFixed(2));
      });
      setActiveUsers((prev) => {
        const diff = Math.floor((Math.random() - 0.4) * 8);
        return Math.max(1210, prev + diff);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero-illustration" className="relative w-full max-w-xl mx-auto lg:max-w-none aspect-square md:aspect-[1.1] flex items-center justify-center p-4">
      
      {/* Immersive backdrop glow ring */}
      <div className="absolute inset-0 bg-gradient-to-tr from-nexora-teal/25 to-nexora-lime/10 rounded-full blur-[80px] select-none pointer-events-none" />

      {/* Main glass frame wrapper */}
      <div className="relative w-full h-full glass-panel rounded-[24px] overflow-hidden shadow-2xl flex flex-col justify-between p-6 group transition-all duration-700 hover:border-nexora-lime/30">
        
        {/* Background generated hero imagery layered beautifully behind */}
        <div className="absolute inset-0 opacity-[0.45] mix-blend-lighten pointer-events-none">
          <img 
            src={IMAGES.hero} 
            alt="Futuristic Marketing Dashboard Background" 
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Top bar simulating browser controls */}
        <div className="relative flex items-center justify-between border-b border-white/5 pb-3 z-10">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="h-5 px-3 bg-white/5 rounded-full flex items-center justify-center text-[10px] font-mono text-slate-400">
            https://agency.nexora.digital/growth_tracker
          </div>
          <div className="w-6" />
        </div>

        {/* Dashboard inner content */}
        <div className="relative grid grid-cols-12 gap-4 my-auto z-10 w-full">
          
          {/* Main Analytics Graph Area */}
          <div className="col-span-12 md:col-span-8 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/5 shadow-inner">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Real-time Campaign ROI</span>
              <span className="text-xs font-semibold text-nexora-lime flex items-center gap-1 font-mono">
                <TrendingUp className="w-3 h-3" /> +28.4%
              </span>
            </div>

            {/* Pulsing graphic chart paths */}
            <div className="h-28 relative flex items-end">
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#007D87" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#007D87" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Underlay area */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  d="M 0 90 Q 40 40, 80 60 T 160 30 T 240 10 T 320 25 L 320 110 L 0 110 Z"
                  fill="url(#chartGlow)"
                />

                {/* Main animated stroke */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  d="M 0 90 Q 40 40, 80 60 T 160 30 T 240 10 T 320 25"
                  fill="none"
                  stroke="#007D87"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Secondary Target Tracker Stroke */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2, ease: "easeOut" }}
                  d="M 0 80 Q 50 60, 100 80 T 180 50 T 260 40 T 320 15"
                  fill="none"
                  stroke="#A3D635"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  strokeLinecap="round"
                />

                {/* Bouncing graph pointer nodes */}
                <motion.circle
                  cx="320"
                  cy="25"
                  r="5"
                  fill="#007D87"
                  animate={{ r: [5, 8, 5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                <motion.circle
                  cx="320"
                  cy="15"
                  r="4"
                  fill="#A3D635"
                  animate={{ r: [4, 7, 4] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                />
              </svg>

              <div className="flex w-full justify-between text-[9px] font-mono text-slate-500 mt-2">
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
              </div>
            </div>
          </div>

          {/* AI Neural Circle / Circular Metric */}
          <div className="col-span-12 md:col-span-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/5 flex flex-col justify-between items-center text-center">
            <div className="w-full flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">AI Neural Engine</span>
              <Cpu className="w-3.5 h-3.5 text-nexora-lime animate-spin-slow" />
            </div>

            <div className="relative w-20 h-20 flex items-center justify-center my-2">
              <svg className="absolute w-full h-full rotate-[-90deg]">
                <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="none" />
                <motion.circle 
                  cx="40" 
                  cy="40" 
                  r="32" 
                  stroke="#A3D635" 
                  strokeWidth="6" 
                  fill="none"
                  strokeDasharray={2 * Math.PI * 32}
                  initial={{ strokeDashoffset: 2 * Math.PI * 32 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 32 * (1 - 0.78) }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-white font-mono">78%</span>
                <span className="text-[8px] uppercase tracking-widest text-slate-500">Match</span>
              </div>
            </div>

            <span className="text-[11px] font-mono text-nexora-teal leading-tight">Optimizing Bid Budget</span>
          </div>

          {/* Live Action Conversion Metric */}
          <div className="col-span-6 bg-slate-900/85 backdrop-blur-md p-3.5 rounded-xl border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-nexora-teal/15 text-nexora-teal">
              <Share2 className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest font-mono text-slate-500">Live Conv. Rate</p>
              <h4 className="text-lg font-bold text-white font-mono">{conversionRate}%</h4>
            </div>
          </div>

          {/* Active Campaigns List Card */}
          <div className="col-span-6 bg-slate-900/85 backdrop-blur-md p-3.5 rounded-xl border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-nexora-lime/15 text-nexora-lime">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest font-mono text-slate-500">Engaged Users</p>
              <h4 className="text-lg font-bold text-white font-mono">{activeUsers}</h4>
            </div>
          </div>
          
        </div>

        {/* Floating animated social media nodes showcasing omnichannel reach */}
        <div className="absolute inset-x-0 bottom-6 flex justify-around items-center px-4 select-none pointer-events-none z-10">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="p-2.5 rounded-full bg-slate-800/90 border border-white/10 text-pink-500 shadow-lg glow-teal pointer-events-auto"
            title="Instagram Marketing"
          >
            <Instagram className="w-5 h-5" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            className="p-2.5 rounded-full bg-slate-800/90 border border-white/10 text-blue-400 shadow-lg glow-lime pointer-events-auto"
            title="LinkedIn Campaigns"
          >
            <Linkedin className="w-5 h-5" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="p-2.5 rounded-full bg-slate-800/90 border border-white/10 text-red-500 shadow-lg glow-teal pointer-events-auto"
            title="YouTube Campaigns"
          >
            <Youtube className="w-5 h-5" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
            className="p-2.5 rounded-full bg-slate-800/90 border border-white/10 text-blue-600 shadow-lg glow-lime pointer-events-auto"
            title="Facebook Advertising"
          >
            <Facebook className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <div className="relative border-t border-white/5 pt-3 mt-4 flex items-center justify-between z-10">
          <span className="text-[10px] text-slate-500 font-mono">Nexora Engine © 2026</span>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-nexora-lime animate-ping" />
            <span className="text-[10px] text-nexora-lime font-mono">Live Sync</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
