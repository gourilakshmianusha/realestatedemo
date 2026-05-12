import * as React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function GalleryPage() {
  const gallerySeeds = [
    'luxury_mansion_pool', 'modern_kitchen_design', 'minimalist_living_room',
    'skyscraper_view_night', 'exclusive_beach_villa', 'elegant_dining_space',
    'private_home_theater', 'infinity_pool_sunset', 'architectural_staircase'
  ];
  const images = gallerySeeds.map((seed) => `https://picsum.photos/seed/${seed}/800/800`);

  return (
    <main className="min-h-screen bg-emerald-deep text-white">
      <Header />
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest font-bold text-champagne mb-4 block">Visual Experience</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">The Gallery</h1>
            <p className="text-lg text-champagne-dark max-w-2xl mx-auto opacity-70">
              A visual journey through our most breathtaking properties and architectural details.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((src, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl border border-white/10">
                <Image 
                  src={src} 
                  alt={`Gallery ${idx}`} 
                  width={800} 
                  height={800} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-deep">
                     <span className="font-bold">+</span>
                   </div>
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
