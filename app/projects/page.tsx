import * as React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function ProjectsPage() {
  const projects = [
    { title: 'The Emerald Heights', location: 'Navi Mumbai, India', status: 'Pre-Construction', image: 'https://picsum.photos/seed/mumbai_upcoming_architecture/800/600' },
    { title: 'Marina Vista', location: 'Vizag, India', status: 'Under Construction', image: 'https://picsum.photos/seed/vizag_coastal_condo/800/600' },
    { title: 'Himalayan Retreat', location: 'Rishikesh, India', status: 'Near Completion', image: 'https://picsum.photos/seed/rishikesh_luxury_stay/800/600' },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-deep mb-4 block">Current Developments</span>
            <h1 className="text-5xl font-serif font-bold text-emerald-deep mb-6">Upcoming Masterpieces</h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Be the first to experience the future of luxury living with our exclusive world-class developments.
            </p>
          </div>
          
          <div className="space-y-20">
            {projects.map((proj, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-2 border-champagne/10">
                  <Image src={proj.image} alt={proj.title} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <span className="bg-emerald-deep text-champagne text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                    {proj.status}
                  </span>
                  <h3 className="text-4xl font-serif font-bold text-emerald-deep mb-4">{proj.title}</h3>
                  <p className="text-slate-500 mb-6 flex items-center gap-2">
                    <span className="w-4 h-px bg-emerald-deep" /> {proj.location}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    An architectural marvel redefining the skyline, featuring sustainable design elements and unparalleled amenities for the modern global citizen.
                  </p>
                  <button className="px-8 py-4 bg-emerald-deep text-champagne rounded-xl font-bold hover:shadow-lg transition-all">
                    Register Interest
                  </button>
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
