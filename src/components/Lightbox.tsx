import { X, ChevronLeft, ChevronRight, BarChart2 } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md transition-all duration-300">
      
      {/* Absolute background closer */}
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

      {/* Main Container */}
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl overflow-hidden shadow-2xl z-20 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Left Side: Images & Navigators */}
        <div className="relative md:w-3/5 bg-black/40 flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[400px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Navigators overlay */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 p-2 rounded-full bg-slate-900/85 hover:bg-nexora-teal/90 text-white border border-white/5 transition duration-200"
            title="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 p-2 rounded-full bg-slate-900/85 hover:bg-nexora-teal/90 text-white border border-white/5 transition duration-200"
            title="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Right Side: Case Study Description Meta */}
        <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between bg-slate-900 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-nexora-lime font-mono">
                {item.category}
              </span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 hover:bg-rose-500/85 hover:text-white text-slate-400 transition"
                title="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight">
              {item.title}
            </h3>

            <p className="text-sm font-semibold text-slate-400 mb-4 font-mono">
              Client: <span className="text-white">{item.client}</span>
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {item.description}
            </p>
          </div>

          <div>
            {/* Real metric growth card highlighted */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-nexora-teal/15 to-nexora-lime/15 border border-white/10 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-nexora-teal/20 text-nexora-lime">
                <BarChart2 className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-0.5">Campaign Growth Accomplishment</p>
                <h4 className="text-lg font-bold text-nexora-lime font-mono">{item.metrics}</h4>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-500 mt-4 text-center font-mono">
              Nexora Campaign Framework • Case Study
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
