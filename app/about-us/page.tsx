import * as React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-champagne/20">
              <Image 
                src="https://picsum.photos/seed/luxury_estate_heritage/1000/1000" 
                alt="Our Heritage" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-deep mb-4 block underline decoration-champagne decoration-2 underline-offset-4">Our Heritage</span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-emerald-deep mb-8 leading-tight">
                Decades of <br />
                <span className="text-slate-400 italic font-normal">Excellence.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Founded on the principles of integrity and architectural appreciation, LuxeEstate has grown into a global leader in premium real estate. We don&apos;t just facilitate transactions; we build lasting legacies.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-emerald-deep/5">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-emerald-deep mb-1">1992</h3>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Founded</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold text-emerald-deep mb-1">24+</h3>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Global Offices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
