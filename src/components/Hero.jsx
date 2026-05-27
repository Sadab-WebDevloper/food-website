import { UtensilsCrossed, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onBookingClick }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden select-none"
    >
      {/* Background Image with Parallax / Zoom effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-surface-900/80 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/60 to-transparent z-10" />
        <img 
          src="/image/hero_bg.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 text-center text-white mt-10 md:mt-0">
        
        {/* Animated badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-primary-500/30 bg-surface-800/40 backdrop-blur-md px-4 py-2 rounded-full mb-8 text-primary-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
          Best Culinary Experience in NY
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-serif leading-tight mb-6"
        >
          Feeling <span className="text-primary-500 text-glow">Hungry?</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-2xl font-light font-serif text-neutral-300 max-w-3xl mx-auto italic mb-10 px-2"
        >
          "There is no sincerer love than the love of food."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto"
        >
          <a
            href="#menu"
            className="group relative flex items-center justify-center gap-3 bg-primary-500 text-surface-900 font-bold px-8 py-4 md:px-10 md:py-5 rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <UtensilsCrossed className="w-5 h-5 relative z-10" />
            <span className="relative z-10 tracking-wide uppercase text-xs md:text-sm">Explore Menu</span>
          </a>

          <button
            onClick={onBookingClick}
            className="group flex items-center justify-center gap-3 bg-transparent text-white font-bold px-8 py-4 md:px-10 md:py-5 rounded-full border border-white/20 hover:border-primary-500 hover:text-primary-500 transition-all duration-300 w-full sm:w-auto hover:bg-primary-500/10 backdrop-blur-sm"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="tracking-wide uppercase text-xs md:text-sm">Book Table</span>
          </button>
        </motion.div>

        {/* Core USP icons bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mt-16 md:mt-24 pt-10 md:pt-12 border-t border-white/10 text-neutral-400 text-[10px] md:text-xs font-medium uppercase tracking-wider"
        >
          <div className="flex flex-col items-center group cursor-default">
            <span className="text-2xl md:text-4xl font-serif font-bold text-white mb-2 group-hover:text-primary-500 transition-colors duration-500">100%</span>
            <span className="text-center">Organic & Fresh<br className="hidden sm:block"/>Ingredients</span>
          </div>
          <div className="flex flex-col items-center group cursor-default">
            <span className="text-2xl md:text-4xl font-serif font-bold text-white mb-2 group-hover:text-primary-500 transition-colors duration-500">4.9★</span>
            <span className="text-center">Customer Rating<br className="hidden sm:block"/>(5k+ Reviews)</span>
          </div>
          <div className="flex flex-col items-center group cursor-default">
            <span className="text-2xl md:text-4xl font-serif font-bold text-white mb-2 group-hover:text-primary-500 transition-colors duration-500">45 Min</span>
            <span className="text-center">Guaranteed<br className="hidden sm:block"/>Hot Delivery</span>
          </div>
          <div className="flex flex-col items-center group cursor-default">
            <span className="text-2xl md:text-4xl font-serif font-bold text-white mb-2 group-hover:text-primary-500 transition-colors duration-500">Top 10</span>
            <span className="text-center">Best NY Eatery<br className="hidden sm:block"/>Awards</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
