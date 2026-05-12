import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/lib/properties';
import { ArrowRight, Star, Shield, Smartphone } from 'lucide-react';

export default function HomePage() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/ultra_luxury_mansion_exterior/1920/1080"
            alt="Luxury Home"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-deep/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl text-white font-serif font-bold leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              The Art of <br />
              <span className="text-champagne italic">Luxury Living.</span>
            </h1>
            <p className="text-xl text-champagne-dark/60 mb-12 max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Discover a curated collection of the world&apos;s most prestigious properties. We redefine real estate through bespoke service and architectural excellence.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <SearchBar />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-champagne/40 text-[10px] uppercase tracking-[0.3em] font-bold animate-pulse">
          Scroll to explore
          <div className="h-10 w-px bg-champagne/20" />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-deep mb-4 block underline decoration-champagne decoration-2 underline-offset-4">Featured Collection</span>
              <h2 className="text-4xl md:text-5xl text-emerald-deep leading-tight font-serif font-bold">
                Curated Spaces for <br /> Distinguished Lifestyles
              </h2>
            </div>
            <Link 
              href="/properties" 
              className="group flex items-center gap-2 text-emerald-deep font-bold hover:text-slate-600 transition-colors uppercase tracking-widest text-xs"
            >
              View All Properties <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProperties.map((property, idx) => (
              <PropertyCard key={property.id} property={property} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-champagne/20">
                <Image
                  src="https://picsum.photos/seed/luxury_concierge_service/800/1000"
                  alt="Personalized Service"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-emerald-deep p-12 rounded-[2.5rem] hidden md:block shadow-2xl border border-champagne/10">
                <blockquote className="text-2xl font-serif text-white italic max-w-[280px] leading-relaxed">
                  &quot;Exceptional detail in every transaction, defining a new standard.&quot;
                </blockquote>
                <p className="text-champagne mt-4 text-[10px] font-bold uppercase tracking-widest opacity-60">— Julian Vance, Founder</p>
              </div>
            </div>

            <div className="flex flex-col gap-12 lg:pl-10">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-deep mb-4 block">Our Commitment</span>
                <h2 className="text-4xl md:text-5xl text-emerald-deep mb-8 font-serif font-bold">Elevating Every <br /> Experience</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  We don’t just sell homes; we curate lifestyles. Our team of experts provides end-to-end luxury services tailored to your unique requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: Star, title: 'Bespoke Search', desc: 'Customized property matching based on your lifestyle.' },
                  { icon: Shield, title: 'Secure Transactions', desc: 'Complete confidentiality and legal expertise.' },
                  { icon: Smartphone, title: 'Concierge App', desc: 'Monitor your portfolio and manage viewings on the go.' },
                  { icon: ArrowRight, title: 'Exclusive Access', desc: 'Off-market listings not available to the public.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4 group">
                    <div className="w-14 h-14 bg-emerald-deep/5 flex items-center justify-center rounded-2xl group-hover:bg-emerald-deep group-hover:text-champagne transition-all duration-300">
                      <item.icon size={24} className="transition-colors" />
                    </div>
                    <h4 className="font-bold text-emerald-deep text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 bg-emerald-deep text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-12 relative z-10">
          {[
            { label: 'Active Listings', val: '1,200+' },
            { label: 'Total Sales', val: '₹8,500 Cr+' },
            { label: 'Happy Clients', val: '1,500+' },
            { label: 'Cities Covered', val: '12' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start">
              <span className="text-5xl md:text-6xl font-serif font-bold mb-2 text-champagne">{stat.val}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-champagne/40">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute -top-24 -left-24 w-96 h-96 border border-white rounded-full" />
           <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-white rounded-full" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
