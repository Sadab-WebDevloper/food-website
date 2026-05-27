import { useState } from 'react';
import { X, Calendar, Clock, Users, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    seating: 'Indoor Cozy'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setBookingRef('WOW-' + Math.floor(100000 + Math.random() * 900000));
    }, 2000);
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData({
      name: '', email: '', phone: '', date: '', time: '', guests: '2', seating: 'Indoor Cozy'
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-surface-900/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-surface-800 w-full max-w-lg rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-10 border border-white/10 flex flex-col max-h-[95vh] md:max-h-[90vh]"
          >
            
            <div className="px-6 md:px-8 py-5 md:py-6 bg-surface-900/50 border-b border-white/5 flex justify-between items-center flex-shrink-0">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white font-serif tracking-tight">Table Reservation</h2>
                <p className="text-[9px] md:text-[10px] text-primary-500 font-bold tracking-[0.2em] uppercase mt-1">Secure your perfect spot</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-surface-700 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 md:p-8">
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4 md:py-6"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-primary-500/30 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                    <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 stroke-[2]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-2">Reservation Confirmed!</h3>
                  <p className="text-[9px] md:text-[10px] text-primary-500 font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">Reference No: {bookingRef}</p>
                  
                  <div className="bg-surface-900 border border-white/5 rounded-2xl md:rounded-[1.5rem] p-5 md:p-6 text-left max-w-sm mx-auto space-y-3 md:space-y-4 mb-8 md:mb-10 shadow-inner">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-neutral-500">Guest Name</span>
                      <span className="font-bold text-white truncate max-w-[150px]">{formData.name}</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-neutral-500">Guests Count</span>
                      <span className="font-bold text-white">{formData.guests} Persons</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-neutral-500">Date & Time</span>
                      <span className="font-bold text-white">{formData.date} at {formData.time}</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-neutral-500">Seating Choice</span>
                      <span className="font-bold text-primary-500">{formData.seating}</span>
                    </div>
                  </div>

                  <p className="text-neutral-400 text-[10px] md:text-xs leading-relaxed max-w-xs mx-auto mb-8 md:mb-10">
                    * We have sent an email receipt containing access codes. Please arrive 10 minutes prior to your booking time.
                  </p>
                  
                  <button
                    onClick={handleReset}
                    className="w-full bg-primary-500 text-surface-900 py-4 md:py-4.5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-primary-400 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  >
                    Close & Return
                  </button>
                </motion.div>

              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  
                  <div>
                    <label className="block text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-2 pl-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g., Sadab Developer"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-surface-900 border border-white/10 px-4 md:px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium text-white placeholder-neutral-600 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label className="block text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-2 pl-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="contact@wowfood.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-surface-900 border border-white/10 px-4 md:px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium text-white placeholder-neutral-600 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-2 pl-1">Mobile Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 89738 78636"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-surface-900 border border-white/10 px-4 md:px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium text-white placeholder-neutral-600 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
                    <div>
                      <label className="block text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-2 pl-1">Select Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-4.5 md:h-4.5 text-neutral-500 pointer-events-none" />
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-surface-900 border border-white/10 pl-10 md:pl-11 pr-3 md:pr-4 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium text-white outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner custom-calendar-icon"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-2 pl-1">Select Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3.5 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-4.5 md:h-4.5 text-neutral-500 pointer-events-none" />
                        <input
                          type="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-surface-900 border border-white/10 pl-10 md:pl-11 pr-3 md:pr-4 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium text-white outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-2 pl-1">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3.5 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-4.5 md:h-4.5 text-neutral-500 pointer-events-none" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full bg-surface-900 border border-white/10 pl-10 md:pl-11 pr-3 md:pr-4 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold text-white outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner appearance-none"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="4">4 Persons</option>
                          <option value="6">6 Persons</option>
                          <option value="8">8 Persons</option>
                          <option value="10">10+ Persons</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-2 md:mb-3 pl-1">Seating Preference</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                      {['Indoor Cozy', 'Window View', 'Terrace Luxury'].map((seating) => {
                        const isSelected = formData.seating === seating;
                        return (
                          <button
                            key={seating}
                            type="button"
                            onClick={() => setFormData({ ...formData, seating })}
                            className={`py-3 md:py-4 px-2 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold transition-all border ${
                              isSelected
                                ? 'bg-primary-500/10 text-primary-500 border-primary-500 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                                : 'bg-surface-900 text-neutral-400 border-white/10 hover:border-primary-500/50 hover:text-white'
                            }`}
                          >
                            {seating}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-start gap-2 md:gap-3 bg-surface-900/50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5 text-[10px] md:text-xs text-neutral-500 font-medium leading-relaxed">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>Zero Booking Fees. Cancel anytime up to 2 hours before schedule without penalties. Your table is reserved for 15 minutes past slot.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary-500 hover:bg-primary-400 disabled:bg-neutral-700 text-surface-900 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm flex items-center justify-center gap-2 md:gap-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95 transition-all duration-300 mt-2 md:mt-4"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 md:w-5 md:h-5 border-2 border-surface-900 border-t-transparent rounded-full animate-spin" />
                        <span>Reserving Table...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Live Booking</span>
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
