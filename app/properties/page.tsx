'use client';

import * as React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PropertyCard } from '@/components/PropertyCard';
import { SearchBar } from '@/components/SearchBar';
import { properties } from '@/lib/properties';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PropertiesContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialType = searchParams.get('type') || 'All Types';
  const initialCity = searchParams.get('city') || 'All Cities';
  const initialRegion = searchParams.get('region') || 'All Locations';

  const [searchQuery, setSearchQuery] = React.useState(initialQuery);
  const [filterType, setFilterType] = React.useState(initialType === 'All Types' ? 'All' : initialType);
  const [filterCity, setFilterCity] = React.useState(initialCity);
  const [filterRegion, setFilterRegion] = React.useState(initialRegion);
  
  const handleSearch = (q: string, t: string, c: string, r: string) => {
    setSearchQuery(q);
    setFilterType(t === 'All Types' ? 'All' : t);
    setFilterCity(c);
    setFilterRegion(r);
  };

  const filteredProperties = properties.filter(p => {
    const matchesType = filterType === 'All' || p.type === filterType;
    const matchesQuery = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = filterCity === 'All Cities' || p.city === filterCity;
    const matchesRegion = filterRegion === 'All Locations' || p.region === filterRegion;

    return matchesType && matchesQuery && matchesCity && matchesRegion;
  });

  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-deep mb-4 block underline decoration-champagne decoration-2 underline-offset-4">Luxury Inventory</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-deep mb-6">Explore Our Collection</h1>
          <p className="text-slate-500 max-w-2xl mb-10">
            Browse through our meticulously selected inventory of high-end residences, from urban penthouses to oceanfront villas.
          </p>
          <div className="w-full flex flex-col items-center gap-8">
            <SearchBar 
              initialQuery={searchQuery} 
              initialType={filterType === 'All' ? 'All Types' : filterType} 
              initialCity={filterCity}
              initialRegion={filterRegion}
              onSearch={handleSearch} 
            />
            
            <div className="flex flex-wrap justify-center gap-4">
              {['All', 'House', 'Villa', 'Apartment', 'Penthouse'].map((type) => (
                <button 
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                    filterType === type 
                      ? 'bg-emerald-deep border-emerald-deep text-champagne shadow-lg' 
                      : 'bg-white border-emerald-deep/10 text-emerald-deep hover:border-emerald-deep/40'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, idx) => (
              <PropertyCard key={property.id} property={property} index={idx} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-500 italic">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Suspense fallback={<div className="pt-32 pb-20 px-8 text-center text-emerald-deep font-serif italic">Curating results...</div>}>
        <PropertiesContent />
      </Suspense>
      <Footer />
    </main>
  );
}
