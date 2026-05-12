'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Search, Menu, X, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-deep flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:rotate-6 border border-champagne/20">
            <span className="text-champagne font-serif text-xl font-bold">L</span>
          </div>
          <span className={cn(
            "text-2xl font-serif font-bold tracking-tighter transition-colors",
            isScrolled ? "text-emerald-deep" : "text-white sm:text-emerald-deep lg:text-white"
          )}>
            LuxeEstate
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about-us' },
            { name: 'Properties', path: '/properties' },
            { 
              name: 'Services', 
              path: '/luxury-services',
              submenu: [
                { name: 'Residential', path: '/residential-properties' },
                { name: 'Commercial', path: '/commercial-properties' },
                { name: 'Projects', path: '/projects' },
              ]
            },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Testimonials', path: '/testimonials' },
            { name: 'FAQ', path: '/faq' },
            { name: 'Contact Us', path: '/contact' },
          ].map((item) => (
            <div key={item.name} className="relative group/nav">
              <Link
                href={item.path}
                className={cn(
                  "text-[11px] uppercase tracking-widest font-bold hover:text-champagne-dark transition-colors whitespace-nowrap block py-2",
                  isScrolled ? "text-emerald-deep" : "text-white sm:text-emerald-deep lg:text-white"
                )}
              >
                {item.name}
              </Link>
              
              {item.submenu && (
                <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-emerald-deep border border-champagne/20 rounded-xl py-3 shadow-2xl min-w-[180px]">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        className="block px-6 py-2 text-[10px] uppercase tracking-widest font-bold text-champagne/80 hover:text-champagne hover:bg-white/5 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className={cn(
            "p-2 rounded-full transition-colors",
            isScrolled ? "hover:bg-emerald-deep/10 text-emerald-deep" : "hover:bg-white/10 text-white sm:text-emerald-deep lg:text-white"
          )}>
            <Search size={18} />
          </button>
          <button className={cn(
            "hidden lg:flex items-center gap-2 px-4 py-2 border rounded-full text-[10px] uppercase tracking-widest font-bold transition-all",
            isScrolled 
              ? "border-emerald-deep text-emerald-deep hover:bg-emerald-deep hover:text-white" 
              : "border-white text-white hover:bg-white hover:text-emerald-deep sm:border-emerald-deep sm:text-emerald-deep sm:hover:bg-emerald-deep sm:hover:text-white lg:border-white lg:text-white lg:hover:bg-white lg:hover:text-emerald-deep"
          )}>
            <User size={14} />
            Sign In
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-emerald-deep" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 xl:hidden flex flex-col gap-3 shadow-xl max-h-[80vh] overflow-y-auto"
        >
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about-us' },
            { name: 'Properties', path: '/properties' },
            { 
              name: 'Services', 
              path: '/luxury-services',
              submenu: [
                { name: 'Residential', path: '/residential-properties' },
                { name: 'Commercial', path: '/commercial-properties' },
                { name: 'Projects', path: '/projects' },
              ]
            },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Testimonials', path: '/testimonials' },
            { name: 'FAQ', path: '/faq' },
            { name: 'Contact Us', path: '/contact' },
          ].map((item) => (
            <div key={item.name} className="flex flex-col gap-2">
              <Link
                href={item.path}
                className="text-sm font-bold uppercase tracking-wider text-emerald-deep border-b border-emerald-deep/5 pb-2 hover:pl-2 transition-all flex justify-between items-center"
                onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="pl-4 flex flex-col gap-2 mb-2 border-l-2 border-champagne/20">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.path}
                      className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-emerald-deep transition-all py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-deep text-white rounded-lg font-bold mt-4 uppercase tracking-widest text-xs">
            <User size={18} />
            Sign In
          </button>
        </motion.div>
      )}
    </header>
  );
}
