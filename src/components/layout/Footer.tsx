import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrambleButton from '../ScrambleButton';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const navigation = {
    company: [
      { name: 'About Seeker', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ],
    social: [
      {
        name: 'Twitter',
        href: 'https://x.com/SeekerOracle',
        icon: FaXTwitter
      },
      {
        name: 'GitHub',
        href: 'https://github.com/CyberVerse2/seeker_frontend',
        icon: Github
      }
    ]
  };

  return (
    <footer className="relative border-t border-secondary-light overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[rgb(252,252,253)]"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 border-x border-secondary-light">
          {/* Left Section */}
          <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-secondary-light">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="inline-block mb-12">
                <img src="/logo.svg" alt="Seeker" className="h-8" />
              </Link>

              <h3 className="text-3xl font-[Bricolage_Grotesque] font-bold mb-6">Stay Updated</h3>
              <p className="text-gray-500 mb-8 text-lg">
                Join our newsletter to get the latest updates on decentralized information
                verification.
              </p>
              <ScrambleButton
                text="Subscribe"
                className="text-secondary hover:text-primary font-medium px-12 py-3 border border-secondary hover:border-primary flex items-center justify-center transition-colors"
                onClick={() => {}}
              />
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="p-12 md:p-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Navigation Grid */}
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="font-[Bricolage_Grotesque] font-bold mb-6">Company</h4>
                  <ul className="space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-secondary-light hover:text-primary transition-colors inline-flex items-center group"
                        >
                          <span>{item.name}</span>
                          <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-4 h-[1px] bg-primary"></div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-[Bricolage_Grotesque] font-bold mb-6">Legal</h4>
                  <ul className="space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-secondary-light hover:text-primary transition-colors inline-flex items-center group"
                        >
                          <span>{item.name}</span>
                          <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-4 h-[1px] bg-primary"></div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-[Bricolage_Grotesque] font-bold mb-6">Connect</h4>
                <div className="flex gap-6">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-secondary-light hover:text-primary transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{item.name}</span>
                      <div className="relative">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                        <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-x border-b border-secondary-light">
          <div className="px-12 py-6 text-center text-secondary-light text-sm">
            &copy; {new Date().getFullYear()} Seeker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
