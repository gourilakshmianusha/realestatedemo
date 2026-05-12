import * as React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, MessageSquare, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Column */}
            <div className="flex flex-col gap-12">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 border border-emerald-deep/10 shadow-lg">
                <Image 
                  src="https://picsum.photos/seed/luxury_real_estate_office/800/450" 
                  alt="Our Office" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-deep mb-4 block underline decoration-champagne decoration-2 underline-offset-4">Get in Touch</span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-emerald-deep mb-8 leading-tight">
                  We&apos;d love to <br />
                  <span className="text-slate-400 italic">hear from you.</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  Whether you&apos;re looking for your next investment or have a question about our collections, our team is here to provide exceptional service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Phone, title: 'Call Us', val: '+91 22 4000 8000', sub: 'Mon - Sat, 9am - 7pm' },
                  { icon: Mail, title: 'Email', val: 'concierge@luxeestate.in', sub: 'Typical response within 2h' },
                  { icon: MapPin, title: 'Office', val: 'One World Centre, Worli', sub: 'Mumbai, Maharashtra 400013' },
                  { icon: MessageSquare, title: 'Chat', val: 'Live Support', sub: 'Available on our app' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="w-10 h-10 bg-emerald-deep/5 flex items-center justify-center rounded-lg">
                      <item.icon size={20} className="text-emerald-deep" />
                    </div>
                    <h4 className="font-bold text-emerald-deep">{item.title}</h4>
                    <div>
                      <p className="text-emerald-deep font-medium">{item.val}</p>
                      <p className="text-sm text-slate-400">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-12 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Follow Us</span>
                <div className="flex gap-4">
                  {[Twitter, Instagram, Linkedin].map((Icon, idx) => (
                    <Link key={idx} href="#" className="p-2 bg-slate-50 rounded-full hover:bg-slate-900 hover:text-white transition-all text-slate-600">
                      <Icon size={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-emerald-deep rounded-[40px] p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-champagne/60 ml-1">First Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-champagne transition-all outline-none"
                      />
                    </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-champagne/60 ml-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-champagne transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-champagne/60 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-champagne transition-all outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-champagne/60 ml-1">Topic</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-champagne transition-all outline-none appearance-none">
                    <option className="bg-emerald-deep">General Inquiry</option>
                    <option className="bg-emerald-deep">Property Inquiry</option>
                    <option className="bg-emerald-deep">Listing Service</option>
                    <option className="bg-emerald-deep">Media Consultation</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-champagne/60 ml-1">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-champagne transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-champagne text-emerald-deep rounded-xl font-bold text-lg hover:bg-white transition-all mt-4 tracking-tight">
                  Send Message
                </button>
              </form>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mb-32 pointer-events-none" />
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
