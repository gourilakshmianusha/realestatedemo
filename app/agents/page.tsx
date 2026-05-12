import * as React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { properties } from '@/lib/properties';
import { Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function AgentsPage() {
  // Extract unique agents from properties
  const agents = Array.from(new Set(properties.map(p => p.agent.name))).map(name => {
    return properties.find(p => p.agent.name === name)!.agent;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4 block">Our Elite Team</span>
            <h1 className="text-5xl font-serif font-bold text-slate-900 mb-6">Expert Guidance. Exceptional Results.</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our advisors are local market experts with global reaching networks, dedicated to providing a bespoke experience for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {agents.map((agent, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <div key={i} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all cursor-pointer">
                          <Icon size={18} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">{agent.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Global Real Estate Advisor</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-slate-600">
                      <Phone size={16} className="text-slate-400" />
                      <span className="text-sm">{agent.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Mail size={16} className="text-slate-400" />
                      <span className="text-sm">{agent.email}</span>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                    View Portfolio
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
