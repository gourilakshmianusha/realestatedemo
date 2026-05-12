'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { properties } from '@/lib/properties';
import { motion } from 'motion/react';
import { 
  MapPin, BedDouble, Bath, Maximize, 
  Share2, Heart, ArrowLeft, Phone, 
  Mail, Calendar, ChevronRight, Star, ArrowRight
} from 'lucide-react';

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <Link href="/properties" className="text-slate-600 underline">Back to listings</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs & Actions */}
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Back to Search
            </button>
            <div className="flex gap-4">
              <button className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
                <Share2 size={18} className="text-slate-600" />
              </button>
              <button className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
                <Heart size={18} className="text-slate-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content (2/3) */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8 shadow-xl"
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                      {property.type} for Sale
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">{property.title}</h1>
                    <div className="flex items-center gap-2 text-slate-500 mt-2">
                      <MapPin size={18} />
                      {property.location}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900">
                    ${property.price.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-slate-100">
                  {[
                    { icon: BedDouble, val: property.beds, label: 'Bedrooms' },
                    { icon: Bath, val: property.baths, label: 'Bathrooms' },
                    { icon: Maximize, val: property.sqft.toLocaleString(), label: 'Square Ft' },
                    { icon: Calendar, val: '2023', label: 'Year Built' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <item.icon size={24} className="text-slate-400" />
                      <div className="text-center">
                        <div className="font-bold text-slate-900 uppercase tracking-tight">{item.val}</div>
                        <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">About this Property</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {property.description}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg mt-4">
                    Experience luxury living at its finest. This property has been meticulously designed with the modern homeowner in mind, combining elegant aesthetics with smart functionality. The open-concept living area flows seamlessly into the gourmet kitchen, which boasts state-of-the-art appliances and custom cabinetry.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-8 rounded-3xl">
                    <h4 className="font-bold text-slate-900 mb-6">Key Amenities</h4>
                    <ul className="grid grid-cols-2 gap-4">
                      {['Smart Home', 'Wine Cellar', 'Infinity Pool', 'Home Gym', 'Guest Suite', '4-Car Garage'].map((amenity) => (
                        <li key={amenity} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl">
                    <h4 className="font-bold text-slate-900 mb-6">Location Highlights</h4>
                    <ul className="grid grid-cols-1 gap-4">
                      {['Private Gated Community', '15 Min to City Center', 'Top-Rated School District', 'Near Exclusive Golf Club'].map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-slate-600">
                          <ChevronRight size={14} className="text-slate-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar (1/3) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 flex flex-col gap-8">
                {/* Agent Card */}
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100">
                      <Image
                        src={property.agent.image}
                        alt={property.agent.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-slate-900">{property.agent.name}</h4>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Global Advisor</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mb-8">
                    <button className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                      <Phone size={18} />
                      Call Agent
                    </button>
                    <button className="flex items-center justify-center gap-2 w-full py-4 border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                      <Mail size={18} />
                      Message
                    </button>
                  </div>

                  <form className="flex flex-col gap-4 pt-8 border-t border-slate-50">
                    <h5 className="font-bold text-sm text-slate-900 mb-2">Inquire About This Property</h5>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-slate-50 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-slate-900 transition-all outline-none"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-slate-50 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-slate-900 transition-all outline-none"
                    />
                    <textarea 
                      placeholder="I'm interested in viewing this property..." 
                      rows={4}
                      className="w-full bg-slate-50 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-slate-900 transition-all outline-none resize-none"
                    ></textarea>
                    <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                      Send Inquiry
                    </button>
                  </form>
                </div>

                {/* Promotional Banner */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white">
                  <Star className="text-white/20 mb-4" size={32} fill="currentColor" />
                  <h4 className="font-serif font-bold text-xl mb-4">Mortgage Calculator</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Estimate your monthly payments and explore financing options with our preferred partners.
                  </p>
                  <button className="text-white font-bold text-sm flex items-center gap-2 hover:opacity-70 transition-opacity">
                    Calculate Now <ArrowRight size={16} />
                  </button>
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

