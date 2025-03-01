import { motion } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa6';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 border-b border-secondary-light">
      <div className="max-w-7xl mx-auto px-4 border-x border-secondary-light">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-[Bricolage_Grotesque] font-bold mb-6">How Seeker Works</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A simple three-step process to access verified information
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: 'Pose Your Question',
              description: 'Input your query using Seeker Terminal or the Chrome Extension'
            },
            {
              title: 'AI Agents at Work',
              description:
                'A network of AI agents cross-verifies information from decentralized sources'
            },
            {
              title: 'Consensus and Delivery',
              description: 'Receive a reliable, consensus-based answer in real-time'
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 group"
            >
              <div className="text-8xl font-[Bricolage_Grotesque] font-bold text-primary/20 group-hover:text-primary/60 transition-colors duration-300 absolute -top-8 left-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-[Bricolage_Grotesque] font-bold mb-4 relative">
                {step.title}
              </h3>
              <p className="text-gray-500 relative">{step.description}</p>
              {index < 2 && (
                <FaArrowRight className="hidden md:block absolute top-1/2 -right-6 text-primary/20 group-hover:text-primary transition-colors duration-300" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
