import * as React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, LifeBuoy, Plane, Zap, Home, Search } from 'lucide-react';

export default function LuxuryServicesPage() {
  const services = [
    {
      title: 'Private Acquisitions',
      description: 'Discreet and exclusive access to off-market properties worldwide.',
      icon: Search,
      image: 'https://picsum.photos/seed/luxury_search_concierge/800/600'
    },
    {
      title: 'Property Management',
      description: 'Comprehensive care for your estate, from maintenance to leasing.',
      icon: Home,
      image: 'https://picsum.photos/seed/luxury_estate_management/800/600'
    },
    {
      title: 'Relocation Services',
      description: 'Seamless transitions across borders with personalized logistics.',
      icon: Plane,
      image: 'https://picsum.photos/seed/private_jet_travel/800/600'
    },
    {
      title: 'Interior Design',
      description: 'Collaborating with world-class designers to craft your perfect space.',
      icon: Zap,
      image: 'https://picsum.photos/seed/interior_design_luxury/800/600'
    },
    {
      title: 'Legal & Escrow',
      description: 'Secure and transparent processing of your high-value transactions.',
      icon: Shield,
      image: 'https://picsum.photos/seed/legal_contract_luxury/800/600'
    },
    {
      title: 'Lifestyle Concierge',
      description: '24/7 support for travel, events, and exclusive access.',
      icon: LifeBuoy,
      image: 'https://picsum.photos/seed/luxury_lifestyle_concierge/800/600'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <div className="relative pt-32 pb-40 px-8 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://picsum.photos/seed/abstract_luxury_lines/1920/1080" 
            alt="Pattern" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-6 block">The Luxe Advantage</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Beyond Real Estate.</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We provide a comprehensive ecosystem of services designed to simplify and elevate the experience of owning luxury property.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-8 -mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-slate-200 transition-all duration-500 flex flex-col group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-deep/20" />
                <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-deep shadow-lg">
                  <service.icon size={24} strokeWidth={2} />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <button className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-slate-500 hover:border-slate-300 transition-all">
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-24 px-8 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4 block">White Glove Service</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Personalized Attention <br /> at Every Touchpoint.</h2>
              <div className="space-y-8">
                {[
                  { title: 'Global Coverage', desc: 'Active in over 40 countries with local specialized partners.' },
                  { title: 'Data Driven', desc: 'Predictive analytics for investment and market timing.' },
                  { title: 'Privacy Guaranteed', desc: 'Strict NDAs and secure data handling for high-net-worth individuals.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6">
                    <div className="w-2 h-2 rounded-full bg-slate-900 mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/luxury_white_glove_service/1000/1000" 
                alt="Luxury Lifestyle" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
