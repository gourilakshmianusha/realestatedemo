'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MapPin, BedDouble, Bath, Maximize, ArrowRight } from 'lucide-react';
import { Property } from '@/lib/properties';

interface PropertyCardProps {
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      <Link href={`/properties/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-deep text-champagne text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] border border-champagne/20">
            {property.type}
          </span>
        </div>
        <div className="absolute inset-0 bg-emerald-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white">
            <ArrowRight size={20} />
          </div>
        </div>
      </Link>

      <div className="p-8">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-serif font-bold text-emerald-deep group-hover:text-slate-600 transition-colors">
            {property.title}
          </h3>
          <span className="text-lg font-bold text-emerald-deep">
            ₹{property.price >= 10000000 
              ? `${(property.price / 10000000).toFixed(2)} Cr` 
              : `${(property.price / 100000).toFixed(2)} L`}
          </span>
        </div>
        
        <div className="flex items-center gap-1 text-slate-500 text-sm mb-6">
          <MapPin size={14} className="text-slate-400" />
          {property.location}
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-50">
          <div className="flex flex-col items-center gap-1">
            <BedDouble size={18} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-900">{property.beds} Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bath size={18} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-900">{property.baths} Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Maximize size={18} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-900">{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
