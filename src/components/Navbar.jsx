import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection, cartCount, onCartClick, onBookingClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Specialities', href: '#specialities' },
    { label: 'Popular', href: '#popular' },
    { label: 'Menu', href: '#menu' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? 'top-0 py-3' : 'top-0 md:top-8 py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            scrolled ? 'glass-surface rounded-2xl md:rounded-full px-4 md:px-8 py-3 shadow-2xl shadow-black/50' : ''
          }`}>

            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-2 md:gap-3 group select-none">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-primary-500/50 group-hover:border-primary-500 transition-colors duration-500 flex-shrink-0">
                <img src="/image/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-lg md:text-2xl font-bold font-serif text-white tracking-tight">
                Wow <span className="text-primary-500">Food</span>
              </h2>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6 xl:gap-8 font-medium text-sm">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`relative py-2 tracking-wide transition-all duration-300 ${
                          isActive ? 'text-primary-500' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                <button
                  onClick={onCartClick}
                  className="relative group text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[9px] font-bold text-surface-900 ring-2 ring-surface-900">
                      {cartCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={onBookingClick}
                  className="bg-primary-500 hover:bg-primary-400 text-surface-900 px-5 xl:px-6 py-2.5 rounded-full text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
                >
                  Book Table
                </button>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-3">
              <button onClick={onCartClick} className="relative text-neutral-300 p-1">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[9px] font-bold text-surface-900">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-300 focus:outline-none p-1"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-surface-900/95 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden"
          >
            <ul className="flex flex-col gap-6 text-center text-2xl font-serif">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`${activeSection === link.href.slice(1) ? 'text-primary-500' : 'text-neutral-300'}`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setIsOpen(false); onBookingClick(); }}
              className="mt-10 bg-primary-500 text-surface-900 px-10 py-4 rounded-full text-lg font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Book A Table
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
