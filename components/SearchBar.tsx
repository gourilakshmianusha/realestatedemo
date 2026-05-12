'use client';

import * as React from 'react';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';
import { uniqueCities, uniqueRegions } from '@/lib/properties';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  initialQuery?: string;
  initialType?: string;
  initialCity?: string;
  initialRegion?: string;
  onSearch?: (query: string, type: string, city: string, region: string) => void;
}

export function SearchBar({ 
  initialQuery = '', 
  initialType = 'All Types', 
  initialCity = 'All Cities',
  initialRegion = 'All Locations',
  onSearch 
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState(initialQuery);
  const [type, setType] = React.useState(initialType);
  const [city, setCity] = React.useState(initialCity);
  const [region, setRegion] = React.useState(initialRegion);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, type, city, region);
    } else {
      const params = new URLSearchParams();
      if (query) params.set('q', query);
      if (type !== 'All Types') params.set('type', type);
      if (city !== 'All Cities') params.set('city', city);
      if (region !== 'All Locations') params.set('region', region);
      
      router.push(`/properties?${params.toString()}`);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-[2.5rem] shadow-2xl"
    >
      <div className="flex flex-col xl:flex-row gap-4">
        {/* Search Input - Kept for keyword search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-champagne/60" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Property name or details..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 text-white placeholder:text-white/40 focus:bg-white/10 transition-all outline-none"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:flex gap-4">
          {/* Region Dropdown */}
          <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3 min-w-[160px]">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest font-bold text-champagne/60 leading-none mb-1">Location</span>
              <select 
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="bg-transparent text-white font-bold text-sm outline-none cursor-pointer appearance-none p-0 border-none"
              >
                <option className="bg-emerald-deep">All Locations</option>
                {uniqueRegions.map(r => (
                  <option key={r} value={r} className="bg-emerald-deep">{r}</option>
                ))}
              </select>
            </div>
          </div>

          {/* City Dropdown */}
          <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3 min-w-[160px]">
             <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest font-bold text-champagne/60 leading-none mb-1">City</span>
              <select 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent text-white font-bold text-sm outline-none cursor-pointer appearance-none p-0 border-none"
              >
                <option className="bg-emerald-deep">All Cities</option>
                {uniqueCities.map(c => (
                  <option key={c} value={c} className="bg-emerald-deep">{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Type Dropdown */}
          <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3 min-w-[160px]">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest font-bold text-champagne/60 leading-none mb-1">Type</span>
              <select 
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="bg-transparent text-white font-bold text-sm outline-none cursor-pointer appearance-none p-0 border-none"
              >
                <option className="bg-emerald-deep">All Types</option>
                <option className="bg-emerald-deep">House</option>
                <option className="bg-emerald-deep">Villa</option>
                <option className="bg-emerald-deep">Apartment</option>
                <option className="bg-emerald-deep">Penthouse</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="bg-champagne text-emerald-deep rounded-2xl px-10 py-5 font-bold hover:bg-white transition-all flex items-center justify-center gap-2 group uppercase tracking-widest text-xs min-w-[140px]"
          >
            Search
            <SlidersHorizontal size={16} className="transition-transform group-hover:rotate-12" />
          </button>
        </div>
      </div>
    </form>
  );
}
