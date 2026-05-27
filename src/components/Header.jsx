import { MapPin, Phone, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 80], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 60], [1, 0]);

  return (
    <motion.header
      style={{ y: headerY, opacity: headerOpacity }}
      className="hidden md:block fixed top-0 left-0 w-full z-50 bg-surface-900/95 backdrop-blur-md border-b border-white/5 text-neutral-400 py-2 px-4 md:px-8 text-[11px] font-medium tracking-wide uppercase select-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 group cursor-pointer">
          <MapPin className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
          <span className="group-hover:text-primary-400 transition-colors duration-300 truncate">
            321 B 4th St, New York, NY, USA
          </span>
        </motion.div>

        <div className="flex items-center gap-4 lg:gap-8">
          <motion.a
            whileHover={{ y: -2 }}
            href="tel:+918973878636"
            className="flex items-center gap-2 group hover:text-primary-400 transition-colors duration-300"
          >
            <Phone className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
            <span className="hidden lg:inline">+91 89738 78636</span>
          </motion.a>

          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
            <span className="hidden lg:inline">Mon-Sat: 8am-9pm</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
