import * as React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/lib/properties';

export default function ResidentialPropertiesPage() {
  const residential = properties.filter(p => p.type === 'House' || p.type === 'Villa' || p.type === 'Apartment' || p.type === 'Penthouse');

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-deep mb-4 block">Residential Collection</span>
            <h1 className="text-5xl font-serif font-bold text-emerald-deep mb-6">Masterpiece Residences</h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              From contemporary apartments to magnificent estates, explore our curated selection of homes designed for ultimate living.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residential.map((property, idx) => (
              <PropertyCard key={property.id} property={property} index={idx} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
