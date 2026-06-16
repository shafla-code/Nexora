import { useState } from 'react';
import { MapPin, Search, Plus, Minus, Navigation, Info } from 'lucide-react';

interface OfficeBranch {
  name: string;
  city: string;
  coordinates: string;
  address: string;
  phone: string;
  x: string; // approximate coordinate on the visual container map
  y: string;
}

const BRANCHES: OfficeBranch[] = [
  {
    name: 'Nexora global Innovation Hub',
    city: 'Silicon Valley',
    coordinates: '37.7749° N, 122.4194° W',
    address: '100 Infinite Loop, Cupertino, CA 95014, USA',
    phone: '+1 (415) 555-0182',
    x: '22%',
    y: '38%'
  },
  {
    name: 'Nexora Europe Headquarters',
    city: 'London',
    coordinates: '51.5074° N, 0.1278° W',
    address: '32 Shoreditch High St, Hackney, London E1 6PG, UK',
    phone: '+44 20 7946 0192',
    x: '48%',
    y: '28%'
  },
  {
    name: 'Nexora Asia-Pacific Hub',
    city: 'Singapore',
    coordinates: '1.3521° N, 103.8198° E',
    address: '25 Marina Boulevard, Marina Bay Link, Singapore 018976',
    phone: '+65 6789 0112',
    x: '76%',
    y: '68%'
  }
];

export default function InteractiveMap() {
  const [selectedBranch, setSelectedBranch] = useState<OfficeBranch>(BRANCHES[0]);
  const [zoom, setZoom] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBranches, setFilteredBranches] = useState<OfficeBranch[]>(BRANCHES);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (!val.trim()) {
      setFilteredBranches(BRANCHES);
    } else {
      setFilteredBranches(
        BRANCHES.filter(
          (b) =>
            b.city.toLowerCase().includes(val.toLowerCase()) ||
            b.name.toLowerCase().includes(val.toLowerCase())
        )
      );
    }
  };

  const selectExact = (branch: OfficeBranch) => {
    setSelectedBranch(branch);
    setSearchQuery(branch.city);
    setFilteredBranches(BRANCHES);
  };

  return (
    <div id="interactive-office-map-container" className="glass-panel p-5 rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl h-full flex flex-col justify-between">
      
      {/* Absolute top grid banner with search bar inside the map card */}
      <div className="relative mb-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 z-10">
        <div>
          <span className="text-[10px] tracking-widest font-mono text-nexora-lime uppercase flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-nexora-lime animate-ping" />
            Active Agency Nodes
          </span>
          <h4 className="text-lg font-display font-semibold text-white">Global Presence Map</h4>
        </div>

        {/* Mini styled search input inside map */}
        <div className="relative min-w-[200px]">
          <input
            type="text"
            className="w-full bg-slate-900/90 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-nexora-teal font-sans transition"
            placeholder="Search city..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <Search className="w-4.5 h-4.5 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Visual Canvas Representation */}
      <div className="relative w-full h-64 md:h-72 rounded-2xl bg-slate-950/90 border border-white/5 overflow-hidden group">
        
        {/* Retro blueprint grid backdrop */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `
              radial-gradient(#007D87 1px, transparent 1px),
              linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '15px 15px',
          }}
        />

        {/* Stylized custom geographic coordinate lines vector design */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <path d="M 0,100 L 800,100" stroke="rgba(0,125,135,0.15)" strokeWidth="1" />
          <path d="M 0,200 L 800,200" stroke="rgba(0,125,135,0.15)" strokeWidth="1" />
          <path d="M 300,0 L 300,400" stroke="rgba(0,125,135,0.15)" strokeWidth="1" />
          <path d="M 500,0 L 500,400" stroke="rgba(0,125,135,0.15)" strokeWidth="1" />
          
          {/* Linked nodes */}
          <path 
            d="M 220,150 L 480,110 L 760,270" 
            fill="none" 
            stroke="url(#mapLinkGradient)" 
            strokeWidth="1.5" 
            strokeDasharray="5,5" 
            className="animate-[dash_10s_linear_infinite]"
          />
          <defs>
            <linearGradient id="mapLinkGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#007D87" />
              <stop offset="100%" stopColor="#A3D635" />
            </linearGradient>
          </defs>
        </svg>

        {/* Global branch location pins mapped based on percentages */}
        {filteredBranches.map((item) => {
          const isSelected = item.city === selectedBranch.city;
          return (
            <button
              key={item.city}
              onClick={() => setSelectedBranch(item)}
              style={{ left: item.x, top: item.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20 focus:outline-none"
            >
              {/* Radar pulse expander */}
              <span className={`absolute -inset-4 rounded-full scale-110 opacity-75 blur-sm transition-all duration-300 ${isSelected ? 'bg-nexora-lime/20 animate-ping' : 'bg-transparent'}`} />

              <div className={`p-2 rounded-full border shadow-lg transition-all duration-300 ${isSelected ? 'bg-nexora-lime text-slate-900 border-none scale-125' : 'bg-slate-900 text-nexora-teal border-white/10 hover:border-nexora-lime/60'}`}>
                <MapPin className="w-5 h-5" />
              </div>

              {/* Tooltip city name hover feedback */}
              <span className="absolute left-1/2 -translate-x-1/2 top-10 pointer-events-none opacity-0 group-hover/pin:opacity-100 bg-slate-900 border border-white/10 text-[10px] text-white px-2 py-1 rounded-md font-mono whitespace-nowrap transition duration-200 shadow-xl">
                {item.city}
              </span>
            </button>
          );
        })}

        {/* Map functional controllers */}
        <div className="absolute right-3.5 bottom-3.5 flex flex-col gap-1.5 z-30">
          <button 
            onClick={() => setZoom((z) => Math.min(3, z + 0.2))} 
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-nexora-teal hover:text-white border border-white/10 text-slate-400 transition"
            title="Zoom In"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setZoom((z) => Math.max(0.6, z - 0.2))} 
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-nexora-teal hover:text-white border border-white/10 text-slate-400 transition"
            title="Zoom Out"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Overlay showing selected coordinates info */}
        <div className="absolute left-3.5 bottom-3.5 bg-slate-900/95 border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2 z-30 shadow-lg font-mono text-[9px] text-slate-400">
          <Navigation className="w-3.5 h-3.5 text-nexora-lime animate-pulse" />
          <span>COORD: {selectedBranch.coordinates}</span>
        </div>
      </div>

      {/* Selected location context info sheet */}
      <div className="bg-slate-900/60 rounded-2xl border border-white/5 p-4 mt-4 transition duration-300">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h5 className="font-display font-semibold text-white text-sm">{selectedBranch.name}</h5>
            <p className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <span>{selectedBranch.city}</span> | <span>{selectedBranch.coordinates}</span>
            </p>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ONLINE
          </span>
        </div>

        <div className="space-y-1.5 text-xs text-slate-300">
          <p className="flex items-start gap-1.5">
            <span className="text-nexora-teal font-medium min-w-[50px] font-mono">Location:</span>
            <span>{selectedBranch.address}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <span className="text-nexora-teal font-medium min-w-[50px] font-mono">Phone:</span>
            <span>{selectedBranch.phone}</span>
          </p>
        </div>

        {/* Direct Selector buttons */}
        <div className="grid grid-cols-3 gap-2 mt-3.5 border-t border-white/5 pt-3">
          {BRANCHES.map((b) => (
            <button
              key={b.city}
              onClick={() => selectExact(b)}
              className={`py-1 rounded-lg text-[10px] font-mono border transition ${
                b.city === selectedBranch.city
                  ? 'bg-nexora-teal/20 text-white border-nexora-teal'
                  : 'bg-transparent text-slate-400 border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              {b.city}
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
}
