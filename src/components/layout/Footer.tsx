import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'About Seeker', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    social: [
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter,
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: Linkedin,
      },
      {
        name: 'GitHub',
        href: '#',
        icon: Github,
      },
    ],
  };

  return (
    <footer className="bg-secondary mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        
        <div className="mt-8 flex flex-col items-center">
          <div className="max-w-md w-full">
            <h3 className="text-center text-white text-sm font-semibold mb-4">
              Stay informed with Seeker's latest updates
            </h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-4 py-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-primary hover:bg-primary-light rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          <p className="mt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Seeker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
