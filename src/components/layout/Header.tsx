import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import { FaArrowRight, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Products', href: '#products' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'About', href: '#about' },
    { name: 'Use Cases', href: '/use-cases' }
  ];

  return (
    <header className="fixed w-full z-50">
      <nav className="w-full max-w-7xl mx-auto px-4 md:px-2 mt-2 md:mt-6">
        <div className="flex gap-2 h-12 justify-between md:justify-center items-center">
          <div className={`flex-shrink-0 bg-primary-light ${isMenuOpen? '': 'px-8'}`}>
            <Link to="/" className="flex items-center h-12 gap-1">
              <img src="logo.svg" alt="seeker logo" className="h-5" />
              <span className="text-secondary font-[Bricolage_Grotesque] tracking-tight font-semibold text-xl transition-colors">
                Seeker
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block h-full">
            <div className="flex h-full gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-secondary flex items-center h-full bg-primary-light hover:text-secondary px-12 text-sm font-[Bricolage_Grotesque] tracking-tight uppercase font-semibold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="https://github.com/seeker-ai"
                className="bg-primary px-4 hover:bg-primary-light flex items-center justify-center text-white hover:text-black text-lg py-4 font-medium transition-all transform animate-slide-up"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                to="https://twitter.com/seeker_ai"
                className="bg-primary px-4 hover:bg-primary-light flex items-center justify-center text-white hover:text-black text-lg py-4 font-medium transition-all transform animate-slide-up"
              >
                <FaXTwitter size={20} />
              </Link>
              <Link
                to="https://twitter.com/seeker_ai"
                className="bg-primary px-4 hover:bg-primary-light group flex items-center justify-center py-4 transition-all transform animate-slide-up"
              >
                <img
                  src="/dexscreener_logo.svg"
                  alt="dexscreener logo"
                  className="w-[20px] h-[20px] group-hover:invert"
                />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-light bg-primary-light hover:text-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute h-screen top-full left-0 w-full bg-white backdrop-blur-sm border-t border-secondary-light"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <motion.div
                className="px-2 pt-4 pb-3 sm:px-3"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.5,
                      staggerDirection: 1
                    }
                  }
                }}
              >
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -100 }
                    }}
                    className="hover:bg-primary-light transition-colors duration-300"
                  >
                    <Link
                      to={item.href}
                      className="text-secondary-light flex items-center group hover:text-primary py-6 transition-colors duration-150 px-3 text-3xl font-[Bricolage_Grotesque] tracking-tight font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mr-auto">{item.name}</span>
                      <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:-rotate-45 transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                >
                  <Link
                    to="#get-started"
                    className="block w-full px-3 py-4 text-xl font-[Bricolage_Grotesque] font-medium text-center text-white bg-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Waitlist
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
