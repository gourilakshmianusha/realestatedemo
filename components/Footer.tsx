import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-deep text-white pt-20 pb-10 px-8 border-t border-champagne/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-champagne flex items-center justify-center rounded-sm">
                <span className="text-emerald-deep font-serif text-lg font-bold">L</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tighter text-champagne">
                LuxeEstate
              </span>
            </Link>
            <p className="text-champagne-dark/60 text-sm leading-relaxed mb-6">
              Redefining luxury real estate with curated listings and exceptional service. Your dream home awaits in the world&apos;s most exclusive locations.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <Link key={idx} href="#" className="p-2 border border-champagne/10 rounded-full text-champagne hover:bg-champagne hover:text-emerald-deep transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-champagne">Portfolio</h4>
            <ul className="space-y-4 text-champagne-dark/50 text-xs font-bold uppercase tracking-widest">
              <li><Link href="/residential-properties" className="hover:text-champagne transition-colors">Residential</Link></li>
              <li><Link href="/commercial-properties" className="hover:text-champagne transition-colors">Commercial</Link></li>
              <li><Link href="/projects" className="hover:text-champagne transition-colors">New Projects</Link></li>
              <li><Link href="/gallery" className="hover:text-champagne transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-champagne">Client Care</h4>
            <ul className="space-y-4 text-champagne-dark/50 text-xs font-bold uppercase tracking-widest">
              <li><Link href="/about-us" className="hover:text-champagne transition-colors">About Us</Link></li>
              <li><Link href="/testimonials" className="hover:text-champagne transition-colors">Testimonials</Link></li>
              <li><Link href="/faq" className="hover:text-champagne transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-champagne transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-champagne">Newsletter</h4>
            <p className="text-champagne-dark/60 text-sm mb-6">
              Join our exclusive circle for private previews and market insights.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-1 focus:ring-champagne transition-all outline-none"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-champagne text-emerald-deep rounded-md hover:scale-105 transition-transform">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-champagne-dark/30 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2024 LuxeEstate Elite. Crafted for the extraordinary.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-champagne transition-colors">Terms</Link>
            <Link href="#" className="hover:text-champagne transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-champagne transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
