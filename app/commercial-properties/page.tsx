import * as React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Building2, Landmark, Factory, Store } from 'lucide-react';

export default function CommercialPropertiesPage() {
  const categories = [
    { name: 'Office Spaces', icon: Building2, count: 42, image: 'https://picsum.photos/seed/luxury_office_skyscraper/600/400' },
    { name: 'Retail Units', icon: Store, count: 18, image: 'https://picsum.photos/seed/high_street_boutique/600/400' },
    { name: 'Industrial', icon: Factory, count: 12, image: 'https://picsum.photos/seed/modern_warehouse_tech/600/400' },
    { name: 'Institutional', icon: Landmark, count: 8, image: 'https://picsum.photos/seed/monumental_architecture/600/400' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-deep mb-4 block">Commercial Portfolio</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-emerald-deep mb-6">Strategic Real Estate Solutions</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Unlock value with our exclusive inventory of prime commercial properties, from Grade-A office towers to high-street retail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-emerald-deep/60 flex flex-col justify-end p-10 text-white">
                  <cat.icon size={40} className="text-champagne mb-4" />
                  <h3 className="text-3xl font-serif font-bold mb-2">{cat.name}</h3>
                  <p className="text-champagne-dark font-bold uppercase tracking-widest text-xs">{cat.count} Available Listings</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
