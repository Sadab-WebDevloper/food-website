import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SpecialDishes from './components/SpecialDishes';
import PopularSection from './components/PopularSection';
import Menu from './components/Menu';
import CartDrawer from './components/CartDrawer';
import BookingModal from './components/BookingModal';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('wow_food_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    localStorage.setItem('wow_food_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'specialities', 'specialities-week', 'popular', 'menu', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) { handleRemoveItem(id); return; }
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item)));
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => setCartItems([]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-surface-900 flex flex-col font-sans select-none antialiased relative overflow-x-hidden">
      {/* Noise Texture */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay z-0" />

      <Header />
      <Navbar
        activeSection={activeSection}
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
        onBookingClick={() => setIsBookingOpen(true)}
      />

      <main className="flex-grow relative z-10">
        <Hero onBookingClick={() => setIsBookingOpen(true)} />
        <Features />
        <SpecialDishes onAddToCart={handleAddToCart} />
        <PopularSection />
        <Menu onAddToCart={handleAddToCart} />
        <Subscribe />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;
