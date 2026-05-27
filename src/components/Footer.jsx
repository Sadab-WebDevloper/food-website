import { MapPin, Phone, Mail, ChefHat } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-surface-900 text-neutral-400 pt-16 md:pt-24 pb-12 px-4 md:px-8 border-t border-white/5 select-none relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-primary-500/50">
              <img src="/image/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-white font-serif font-bold text-xl md:text-2xl leading-none">
                Wow <span className="text-primary-500">Food</span>
              </h3>
            </div>
          </div>
          <p className="text-xs md:text-sm leading-relaxed md:leading-loose text-neutral-400">
            A premium dining sanctuary since 2012. We merge heritage recipes with state-of-the-art culinary practices to give you a sensational gastronomy experience.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3 md:gap-4 pt-2 md:pt-4">
            <a href="#" className="p-2.5 md:p-3 rounded-full bg-surface-800 border border-white/5 hover:border-primary-500/50 hover:bg-primary-500 text-neutral-400 hover:text-surface-900 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="p-2.5 md:p-3 rounded-full bg-surface-800 border border-white/5 hover:border-primary-500/50 hover:bg-primary-500 text-neutral-400 hover:text-surface-900 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="p-2.5 md:p-3 rounded-full bg-surface-800 border border-white/5 hover:border-primary-500/50 hover:bg-primary-500 text-neutral-400 hover:text-surface-900 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-xs md:text-sm tracking-[0.15em] uppercase mb-6 md:mb-8">Useful Links</h4>
          <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium text-neutral-400">
            <li><a href="#home" className="hover:text-primary-500 transition-colors">Home Page</a></li>
            <li><a href="#specialities" className="hover:text-primary-500 transition-colors">Our Specialities</a></li>
            <li><a href="#specialities-week" className="hover:text-primary-500 transition-colors">Chef Weekly Specials</a></li>
            <li><a href="#menu" className="hover:text-primary-500 transition-colors">Interactive MenuCard</a></li>
            <li><a href="#popular" className="hover:text-primary-500 transition-colors">Customer Favorites</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-xs md:text-sm tracking-[0.15em] uppercase mb-6 md:mb-8">Get In Touch</h4>
          <div className="space-y-4 md:space-y-5 text-xs md:text-sm">
            <div className="flex items-start gap-3 md:gap-4">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary-500 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed text-neutral-400">321 B 4th St, New York, NY, USA</span>
            </div>
            <a href="tel:+918973878636" className="flex items-center gap-3 md:gap-4 text-neutral-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary-500 flex-shrink-0" />
              <span>+91 89738 78636</span>
            </a>
            <a href="mailto:contact@wowfood.com" className="flex items-center gap-3 md:gap-4 text-neutral-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary-500 flex-shrink-0" />
              <span>contact@wowfood.com</span>
            </a>
          </div>
        </div>

        {/* Column 4: Hours */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-xs md:text-sm tracking-[0.15em] uppercase mb-6 md:mb-8">Opening Hours</h4>
          <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-neutral-400">
            <div className="flex justify-between border-b border-white/5 pb-2 md:pb-3">
              <span>Monday - Friday</span>
              <span className="text-white font-bold">8:00 AM - 9:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2 md:pb-3">
              <span>Saturday</span>
              <span className="text-white font-bold">9:00 AM - 9:00 PM</span>
            </div>
            <div className="flex justify-between pt-1 md:pt-2">
              <span>Sunday</span>
              <span className="text-primary-500 font-bold flex items-center gap-1.5 md:gap-2">
                <ChefHat className="w-3.5 h-3.5 md:w-4 md:h-4" /> Bookings Only
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom copy banner */}
      <div className="max-w-7xl mx-auto mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500 text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase text-center sm:text-left">
        <span>© {currentYear} Wow Food Restaurant. All Rights Reserved.</span>
        <span>Premium Design Aesthetic</span>
      </div>
    </footer>
  );
};

export default Footer;
