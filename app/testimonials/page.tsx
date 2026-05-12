import * as React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Alexander Merchant',
      role: 'Industrialist',
      text: 'LuxeEstate redefined what I thought was possible in real estate service. Their attention to detail is simply unmatched in the Indian luxury market.',
      image: 'https://picsum.photos/seed/indian_businessman_headshot/200/200'
    },
    {
      name: 'Elena Rao',
      role: 'Lead Architect',
      text: 'Working with LuxeEstate has been a masterclass in collaboration. They understand the soul of a home, not just its square footage.',
      image: 'https://picsum.photos/seed/indian_woman_headshot/200/200'
    },
    {
      name: 'Rohan Gupta',
      role: 'Tech Entrepreneur',
      text: 'Privacy and speed were my top priorities. LuxeEstate delivered an off-market masterpiece in Gurugram that checked every single box.',
      image: 'https://picsum.photos/seed/young_indian_executive/200/200'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-deep mb-4 block">Kind Words</span>
            <h1 className="text-5xl font-serif font-bold text-emerald-deep mb-6">Client Experiences</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from our global clientele about their journeys with LuxeEstate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-emerald-deep/5 relative group hover:-translate-y-2 transition-all duration-500">
                <Quote className="absolute top-8 right-8 text-champagne opacity-50" size={40} />
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-champagne/40">
                    <Image src={t.image} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-emerald-deep">{t.name}</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed text-lg underline decoration-champagne/20 decoration-4 underline-offset-4">
                  &quot;{t.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
