import Hero from '@/components/home/Hero';
import Vision from '@/components/home/Vision';
import TechnologyGrid from '@/components/home/TechnologyGrid';
import Stats from '@/components/home/Stats';
import HowItWorks from '@/components/home/HowItWorks';
import Products from '@/components/home/Products';
import Roadmap from '@/components/home/Roadmap';
import CTA from '@/components/home/CTA';

const Home = () => {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Vision Section */}
      <Vision />

      {/* Technology Grid */}
      <TechnologyGrid />

      {/* Stats Section */}
      <Stats />

      {/* How it Works Section */}
      <HowItWorks />

      {/* Products Section */}
      <Products />

      {/* Roadmap Section */}
      <Roadmap />

      {/* Final CTA Section */}
      <CTA />
    </div>
  );
};

export default Home;
