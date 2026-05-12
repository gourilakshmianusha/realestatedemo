import * as React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    { q: 'How do I schedule a private viewing?', a: 'You can schedule a viewing by contacting the dedicated agent for the property via the inquiry form or direct phone number listed on the property page.' },
    { q: 'Are all listings publicly available?', a: 'No, we provide access to an exclusive collection of off-market properties that are not listed on public platforms. Contact us to learn more.' },
    { q: 'What services do you offer for international buyers?', a: 'We provide end-to-end relocation services, including legal consultation, currency exchange support, and cultural orientation for global moves.' },
    { q: 'Do you handle property rentals?', a: 'Yes, we have a specialized division for ultra-luxury long-term and seasonal rentals in key global destinations.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 relative">
             <div className="relative w-24 h-24 mx-auto mb-8 rounded-2xl overflow-hidden border border-champagne/20">
               <Image 
                 src="https://picsum.photos/seed/customer_support_luxury/200/200" 
                 alt="Assistance" 
                 fill 
                 className="object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>
             <span className="text-xs uppercase tracking-widest font-bold text-emerald-deep mb-4 block">Knowledge Base</span>
             <h1 className="text-5xl font-serif font-bold text-emerald-deep mb-6">Frequently Asked Questions</h1>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl border border-transparent open:border-champagne/40 open:bg-white transition-all duration-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-emerald-deep pr-8">{faq.q}</h3>
                  <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform" size={24} />
                </summary>
                <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-20 p-12 bg-emerald-deep rounded-[3rem] text-center text-white relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-3xl font-serif font-bold mb-4">Still have questions?</h3>
               <p className="text-champagne-dark mb-8 max-w-lg mx-auto opacity-70">Our concierge team is available 24/7 to assist with your specific requirements.</p>
               <button className="px-8 py-4 bg-champagne text-emerald-deep rounded-xl font-bold hover:scale-105 transition-transform">
                 Contact Concierge
               </button>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
