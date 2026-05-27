import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const delivery = subtotal > 40 ? 0 : 5.00;
  const grandTotal = subtotal + tax + delivery;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      onClearCart();
    }, 2000);
  };

  const handleReset = () => {
    setCheckoutSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden select-none">
          {/* Dark overlay backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-surface-900/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-y-0 right-0 max-w-full flex w-full md:w-auto md:pl-10"
          >
            <div className="w-full md:w-[28rem] bg-surface-900 border-l border-white/10 shadow-2xl flex flex-col h-full">
              
              {/* Header Panel */}
              <div className="px-4 md:px-6 py-4 md:py-6 border-b border-white/5 flex justify-between items-center bg-surface-800">
                <h2 className="text-lg md:text-xl font-bold font-serif text-white flex items-center gap-2 md:gap-3">
                  <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-primary-500" />
                  <span>Your Gourmet Cart</span>
                  {cartItems.length > 0 && (
                    <span className="bg-primary-500/20 border border-primary-500/50 text-primary-400 text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full">
                      {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items
                    </span>
                  )}
                </h2>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-surface-700 text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Contents */}
              <div className="flex-grow overflow-y-auto px-4 md:px-6 py-4 md:py-6 flex flex-col bg-surface-900">
                
                {checkoutSuccess ? (
                  /* Success Checkout Screen */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-grow flex flex-col items-center justify-center text-center px-4"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center mb-6 md:mb-8 border border-primary-500/30 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                      <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 stroke-[2]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-white mb-3 md:mb-4">Order Confirmed!</h3>
                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-8 md:mb-10 max-w-xs">
                      Your kitchen has already received your order. We are preparing it fresh and hot. Look out for the delivery rider in 30-45 minutes!
                    </p>
                    <button
                      onClick={handleReset}
                      className="w-full bg-primary-500 text-surface-900 py-4 rounded-xl font-bold uppercase tracking-wider text-[10px] md:text-xs shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] transition-transform duration-300"
                    >
                      Close Cart
                    </button>
                  </motion.div>

                ) : cartItems.length > 0 ? (
                  /* Items List */
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div 
                        key={item.id}
                        className="flex items-center gap-3 md:gap-4 bg-surface-800 border border-white/5 p-3 md:p-4 rounded-[1.5rem] shadow-lg"
                      >
                        {/* Item Thumbnail */}
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-surface-900 flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Details */}
                        <div className="flex-grow">
                          <h4 className="text-sm md:text-base font-bold text-white leading-tight mb-1 line-clamp-1">{item.name}</h4>
                          <p className="text-[10px] md:text-xs text-primary-500 font-bold mb-2 md:mb-3">${item.price.toFixed(2)} each</p>
                          
                          {/* Quantity Toggles */}
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className="flex items-center bg-surface-900 border border-white/10 rounded-lg overflow-hidden">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-1.5 md:p-2 hover:bg-surface-700 text-neutral-400 transition-colors"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-6 md:w-8 text-center text-xs md:text-sm font-bold text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-1.5 md:p-2 hover:bg-surface-700 text-neutral-400 transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            {/* Trash Remove Button */}
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-neutral-500 hover:text-red-500 p-1.5 md:p-2 rounded-lg hover:bg-red-500/10 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Total item cost */}
                        <div className="text-right flex-shrink-0">
                          <span className="font-bold text-base md:text-lg text-white">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                ) : (
                  /* Empty Cart Screen */
                  <div className="flex-grow flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-surface-800 border border-white/5 rounded-full flex items-center justify-center mb-6 text-neutral-600">
                      <ShoppingBag className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold font-serif text-white">Your cart is empty</h3>
                    <p className="text-neutral-400 text-xs md:text-sm mt-2 md:mt-3 max-w-[200px] leading-relaxed">Browse our dishes and add items to your basket!</p>
                    <button
                      onClick={onClose}
                      className="mt-6 md:mt-8 bg-surface-800 border border-primary-500/30 text-primary-500 hover:bg-primary-500 hover:text-surface-900 text-[10px] md:text-xs uppercase tracking-widest font-bold px-6 md:px-8 py-3 rounded-full transition-colors duration-300"
                    >
                      Continue Shopping
                    </button>
                  </div>
                )}
              </div>

              {/* Checkout Footer Details */}
              {!checkoutSuccess && cartItems.length > 0 && (
                <div className="border-t border-white/5 px-4 md:px-6 py-6 md:py-8 bg-surface-800">
                  
                  {/* Financial Calculation Panel */}
                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-xs md:text-sm text-neutral-400 font-medium">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (8%)</span>
                      <span className="font-bold text-white">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className="font-bold text-white">
                        {delivery === 0 ? <span className="text-primary-500">FREE</span> : `$${delivery.toFixed(2)}`}
                      </span>
                    </div>
                    {delivery > 0 && (
                      <p className="text-[9px] md:text-[10px] text-primary-500 uppercase tracking-widest pt-2">
                        * Add ${(40 - subtotal).toFixed(2)} more for free delivery
                      </p>
                    )}
                    <div className="border-t border-white/10 mt-4 pt-4 md:pt-6 flex justify-between items-end">
                      <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-300">Grand Total</span>
                      <span className="text-2xl md:text-3xl font-bold font-serif text-primary-500">${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Checkout Actions */}
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full bg-primary-500 hover:bg-primary-400 disabled:bg-neutral-600 text-surface-900 py-4 md:py-4.5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-2 md:gap-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95 transition-all duration-300"
                  >
                    {isCheckingOut ? (
                      <>
                        <span className="w-4 h-4 md:w-5 md:h-5 border-2 border-surface-900 border-t-transparent rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Place Order</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </>
                    )}
                  </button>

                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
