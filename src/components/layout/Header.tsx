import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import {  FaGithub, FaXTwitter } from 'react-icons/fa6';
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <header className="fixed w-full z-50">
      <nav className="w-full max-w-7xl mx-auto px-4 md:px-2 mt-2 md:mt-6">
        <div className="flex gap-2 h-12 justify-between md:justify-center items-center">
          <div className={`flex-shrink-0 ${isMenuOpen? '': 'px-8'}`}>
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
                  onClick={(e) => handleNavClick(e, item.href)}
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
              className="text-secondary-light hover:text-primary p-2"
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
                      staggerChildren: 0.05,
                      staggerDirection: -1
                    }
                  }
                }}
              >
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: -10 }
                    }}
                  >
                    <Link
                      to={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-3 py-4 text-base font-[Bricolage_Grotesque] font-medium text-secondary hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
