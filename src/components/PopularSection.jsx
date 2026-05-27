import { Heart, Star, Sparkles, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

const PopularSection = () => {
  return (
    <section id="popular" className="py-20 md:py-32 bg-surface-900 select-none relative overflow-hidden">
      {/* Dynamic Background Shapes */}
      <div className="absolute top-1/2 left-1/2 md:left-1/3 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary-500/5 rounded-full blur-[100px] md:blur-[150px] -z-10 pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        
        {/* Animated Icon Circle */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-surface-800 text-primary-500 rounded-full mb-8 md:mb-12 shadow-[0_0_40px_rgba(212,175,55,0.15)] border border-primary-500/20"
        >
          <Heart className="w-6 h-6 md:w-8 md:h-8 fill-current" />
          <div className="absolute inset-0 rounded-full border border-primary-500/30 scale-[1.3] animate-[spin_10s_linear_infinite]" />
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-primary-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4">Customer Choice</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white tracking-tight mb-6 md:mb-8 leading-tight">
            Most Popular Dish Highlight
          </h2>
          
          {/* Divider bar */}
          <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-primary-500/50" />
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary-500" />
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-primary-500/50" />
          </div>

          <p className="text-lg sm:text-xl md:text-3xl text-neutral-400 font-serif italic max-w-3xl mx-auto leading-relaxed mb-8 px-2">
            "So long as you have food in your mouth, you have solved all questions about food."
          </p>

          <div className="inline-block bg-surface-800 border border-primary-500/20 px-6 py-3 rounded-full text-[10px] md:text-xs font-bold text-primary-400 tracking-[0.15em] uppercase mb-12 md:mb-16 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            Featured Signature • 28. October, Wednesday
          </div>
        </motion.div>

        {/* Interactive Feature: Chef Highlight Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-800/80 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 md:gap-8 text-center sm:text-left transition-all duration-500 hover:border-primary-500/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          
          {/* Chef Image / Avatar */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 bg-surface-900 border border-white/10 mx-auto sm:mx-0">
            <img 
              src="/image/logo.jpg" 
              alt="Chef Avatar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <ChefHat className="absolute bottom-3 right-3 w-5 h-5 md:w-6 md:h-6 text-primary-500" />
          </div>

          {/* Chef details */}
          <div className="flex-grow">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 md:gap-2 text-primary-500 mb-3">
              <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
              <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
              <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
              <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
              <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
              <span className="text-neutral-400 text-[10px] md:text-xs font-bold ml-2 tracking-wider">(4.9/5)</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold font-serif text-white mb-2 md:mb-3">Chef Marc D. Signature Platter</h4>
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed md:leading-loose">
              "We slow-cook our dishes using organic farm-sourced ingredients, ensuring that the culinary heritage of Italian and Indian recipes are perfectly preserved in our modern kitchen."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PopularSection;
