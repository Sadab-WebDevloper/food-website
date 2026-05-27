import { useState } from 'react';
import { Search, Star, Plus, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, categories } from '../data/foodData';

const Menu = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 md:py-32 bg-surface-900 select-none relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Exquisite Taste Card</span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-serif text-white mt-4 tracking-tight">
            Our Interactive <span className="text-primary-500 font-light font-sans italic block sm:inline">Menu</span>
          </h2>
          <p className="text-neutral-400 mt-4 md:mt-6 text-sm md:text-base leading-relaxed px-4">
            From the fiery tandoors of India to the gourmet ovens of Italy, explore our freshly prepared cuisines. Search or filter to find your favorite taste.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface-800 border border-white/5 rounded-3xl md:rounded-[2rem] p-4 md:p-6 mb-12 md:mb-16 flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 w-full lg:w-auto">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-5 py-2.5 md:px-8 md:py-3.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'text-surface-900 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                      : 'bg-surface-900 border border-white/10 text-neutral-400 hover:border-primary-500/50 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary-500"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-[400px] flex items-center mt-2 lg:mt-0">
            <div className="absolute left-4 md:left-5 text-neutral-500">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-900 border border-white/10 pl-12 pr-16 py-3.5 md:py-4 rounded-full text-xs md:text-sm font-medium placeholder-neutral-500 text-white outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-[9px] md:text-[10px] font-bold text-neutral-400 hover:text-primary-500 tracking-wider uppercase"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {filteredItems.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          >
            <AnimatePresence>
              {filteredItems.map((dish) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={dish.id}
                  className="group bg-surface-800 border border-white/5 rounded-3xl md:rounded-[2rem] overflow-hidden hover:border-primary-500/30 transition-all duration-500 flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-900">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    
                    <span className="absolute top-4 left-4 text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-surface-900/80 text-white backdrop-blur-md border border-white/10">
                      {dish.category}
                    </span>

                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-surface-900/90 text-white backdrop-blur-md px-2.5 md:px-3 py-1.5 rounded-xl text-[10px] md:text-xs font-bold border border-white/10">
                      <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary-500 fill-current" />
                      <span>{dish.rating}</span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold font-serif text-white group-hover:text-primary-500 transition-colors duration-300 leading-snug mb-3">
                      {dish.name}
                    </h3>
                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                      {dish.description}
                    </p>

                    <div className="flex justify-between items-center mt-auto pt-5 md:pt-6 border-t border-white/5">
                      <div>
                        <span className="block text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold mb-1">Price</span>
                        <span className="text-xl md:text-2xl font-bold font-serif text-white">${dish.price.toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => onAddToCart(dish)}
                        className="flex items-center gap-2 bg-surface-900 hover:bg-primary-500 border border-white/10 hover:border-primary-500 text-white hover:text-surface-900 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 active:scale-95"
                      >
                        <Plus className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 md:py-24 bg-surface-800 rounded-3xl md:rounded-[3rem] border border-dashed border-white/10 mx-4 md:mx-0"
          >
            <SlidersHorizontal className="w-12 h-12 md:w-16 md:h-16 text-neutral-600 mx-auto mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-bold font-serif text-white">No dishes match</h3>
            <p className="text-neutral-400 mt-2 mb-6 md:mb-8 text-sm md:text-base">Try adjusting your search terms.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="bg-primary-500 text-surface-900 font-bold tracking-wider uppercase text-[10px] md:text-xs px-8 md:px-10 py-3 md:py-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Menu;
