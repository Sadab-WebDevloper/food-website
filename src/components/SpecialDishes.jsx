import { Star, Plus, Flame, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { specialDishes } from '../data/foodData';

const SpecialDishes = ({ onAddToCart }) => {
  return (
    <section id="specialities-week" className="py-20 md:py-32 bg-surface-800 text-white select-none relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-500/5 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-500/5 rounded-full blur-[100px] md:blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10 mb-16 md:mb-20"
        >
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Curated Weekly Menu</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif mt-4 tracking-tight leading-tight">
              Special Dishes <br className="hidden sm:block"/><span className="text-primary-500 font-light font-sans text-2xl md:text-5xl italic">of the week</span>
            </h2>
            <p className="text-neutral-400 mt-4 md:mt-6 text-sm md:text-base leading-relaxed px-4 lg:px-0">
              Sprinkles of freshly chopped coriander, local spices, slow simmered herbs, and high culinary craftsmanship. Taste the luxury in every spoonful.
            </p>
          </div>
          <div className="hidden md:flex bg-surface-900/50 border border-white/5 backdrop-blur-xl rounded-3xl p-6 gap-8 text-sm text-neutral-400 shadow-2xl shadow-black/50 mx-auto lg:mx-0">
            <div className="flex flex-col items-center">
              <span className="font-serif font-bold text-3xl text-primary-500 mb-1">4</span>
              <span className="uppercase tracking-widest text-[10px] font-bold">Signature Plates</span>
            </div>
            <div className="w-[1px] bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="font-serif font-bold text-3xl text-primary-500 mb-1">100%</span>
              <span className="uppercase tracking-widest text-[10px] font-bold">Authentic taste</span>
            </div>
          </div>
        </motion.div>

        {/* Special Dishes Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {specialDishes.map((dish, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={dish.id}
              className="group bg-surface-900 border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary-500/30 transition-all duration-500 flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-800">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent opacity-60" />
                
                {/* Floating Heart */}
                <button className="absolute top-4 right-4 p-2.5 rounded-full bg-surface-900/50 hover:bg-primary-500 hover:text-surface-900 text-white backdrop-blur-md transition-colors duration-300">
                  <Heart className="w-4 h-4" />
                </button>

                {/* Dietary Tags Overlay */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
                  {dish.tags.map((tag) => {
                    const isVeg = tag === 'Veg';
                    const isSpicy = tag === 'Spicy';
                    return (
                      <span
                        key={tag}
                        className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 ${
                          isVeg 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : isSpicy
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                        }`}
                      >
                        {isSpicy && <Flame className="w-3 h-3" />}
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                
                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 mb-3 md:mb-4 text-xs text-neutral-400 font-medium tracking-wide">
                  <div className="flex items-center text-primary-500">
                    <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
                  </div>
                  <span className="text-white font-bold">{dish.rating}</span>
                  <span>({dish.reviews} Reviews)</span>
                </div>

                {/* Dish Name */}
                <h3 className="text-lg md:text-xl font-bold font-serif text-white group-hover:text-primary-500 transition-colors duration-300 mb-2 md:mb-3">
                  {dish.name}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                  {dish.description}
                </p>

                {/* Price and Add to Cart Section */}
                <div className="flex justify-between items-end mt-auto pt-5 md:pt-6 border-t border-white/5">
                  <div>
                    <span className="block text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-widest font-bold mb-1">Price</span>
                    <span className="text-xl md:text-2xl font-serif font-bold text-primary-500">${dish.price.toFixed(2)}</span>
                  </div>

                  {/* Add to Cart CTA */}
                  <button
                    onClick={() => onAddToCart(dish)}
                    className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-surface-800 group-hover:bg-primary-500 text-primary-500 group-hover:text-surface-900 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="Add to cart"
                  >
                    <Plus className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialDishes;
