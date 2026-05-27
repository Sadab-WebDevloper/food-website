import { Utensils, PartyPopper, CalendarRange, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const serviceCards = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Delicious Foods',
      desc: 'Savor rich flavors crafted with certified organic ingredients. Every bite is an explosion of culinary mastery.',
      active: true
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: 'Events & Celebration',
      desc: 'Host grand gatherings, anniversaries or private dining events. We provide premium catering and decor options.',
      active: false
    },
    {
      icon: <CalendarRange className="w-8 h-8" />,
      title: 'Easy Reservation',
      desc: 'Book your perfect table instantly via our online platform. Enjoy zero waiting times and special window seats.',
      active: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="specialities" className="py-20 md:py-32 bg-surface-900 relative select-none">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Our Specialities</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mt-4 tracking-tight">
            Beyond Premium Dining
          </h2>
          <p className="text-neutral-400 mt-4 md:mt-6 text-sm md:text-base leading-relaxed px-4">
            We don't just serve dishes; we curate delightful memories. Indulge in our tailored services designed to meet every culinary aspiration.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {serviceCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`group relative p-8 md:p-10 rounded-3xl transition-all duration-500 ${
                card.active 
                  ? 'bg-surface-800 border border-primary-500/30 shadow-[0_10px_40px_rgba(212,175,55,0.15)]' 
                  : 'bg-surface-800/50 border border-white/5 hover:border-primary-500/20 hover:bg-surface-800'
              }`}
            >
              {card.active && (
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500/20 to-transparent rounded-3xl blur opacity-50"></div>
              )}

              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center p-4 md:p-5 rounded-2xl mb-6 md:mb-8 transition-transform duration-500 ${
                  card.active 
                    ? 'bg-primary-500 text-surface-900 shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
                    : 'bg-surface-700 text-primary-500 group-hover:scale-110 group-hover:bg-primary-500/10'
                }`}>
                  {card.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white font-serif">
                  {card.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed md:leading-loose mb-6 md:mb-8">
                  {card.desc}
                </p>

                {/* Read More link */}
                <div className="flex items-center gap-3 cursor-pointer w-fit select-none">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-300 group-hover:text-primary-500 transition-colors duration-300">
                    Read More
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    card.active 
                      ? 'bg-primary-500 text-surface-900 translate-x-2' 
                      : 'bg-surface-700 text-neutral-400 group-hover:bg-primary-500 group-hover:text-surface-900 group-hover:translate-x-2'
                  }`}>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
