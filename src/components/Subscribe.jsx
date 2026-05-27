import { useState } from 'react';
import { Mail, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 md:py-32 bg-surface-900 select-none relative z-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-800 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

          {/* Sparkles effect */}
          <div className="absolute top-8 right-8 md:top-10 md:right-16 text-primary-500/30 hidden sm:block">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 animate-pulse-subtle" />
          </div>

          <div className="relative z-10">
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto py-6 md:py-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary-500 text-surface-900 rounded-full mb-6 md:mb-8 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <Check className="w-8 h-8 md:w-10 md:h-10 stroke-[3]" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold font-serif text-white mb-3 md:mb-4">Welcome!</h3>
                <p className="text-neutral-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  Thank you for subscribing. We will send exclusive table coupon codes and chef recipe videos directly to your inbox shortly.
                </p>
                <button
                  onClick={() => setSubscribed(false)}
                  className="text-[10px] md:text-xs text-primary-500 hover:text-primary-400 uppercase tracking-widest font-bold transition-colors"
                >
                  Sign up another email
                </button>
              </motion.div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4 block">Weekly Privileges</span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-white leading-tight mb-4 md:mb-6 tracking-tight">
                  Subscribe to our Newsletter
                </h2>
                <p className="text-neutral-400 text-sm md:text-base mb-8 md:mb-12 leading-relaxed">
                  Join our elite culinary circle! Get weekly updates, secret menu codes, recipe guides, and priority notifications for reservation slots.
                </p>

                <form onSubmit={handleSubscribe} className="relative flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                  <div className="relative w-full flex items-center">
                    <Mail className="absolute left-5 w-4 h-4 md:w-5 md:h-5 text-neutral-500" />
                    <input
                      type="email"
                      required
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      className="w-full bg-surface-900 border border-white/10 text-white placeholder-neutral-500 pl-12 pr-4 md:pl-16 md:pr-6 py-4 md:py-5 rounded-full text-xs md:text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-primary-500 hover:bg-primary-400 text-surface-900 font-bold px-8 py-4 md:px-10 md:py-5 rounded-full text-xs md:text-sm tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] active:scale-95 transition-all duration-300 flex-shrink-0"
                  >
                    {loading ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
                </form>

                {errorMsg && (
                  <p className="text-red-400 text-[10px] md:text-xs font-bold text-left mt-3 md:mt-4 ml-4 md:ml-6">{errorMsg}</p>
                )}
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Subscribe;
