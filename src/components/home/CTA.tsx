import { motion } from 'motion/react';
import ScrambleButton from '../ScrambleButton';

export default function CTA() {
  return (
    <section className="py-32 border-b border-secondary-light">
      <div className="max-w-7xl mx-auto px-4 border-x border-secondary-light">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-7xl font-[Bricolage_Grotesque] font-bold mb-8">
            Start Your Journey
            <br />
            With Seeker
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
            Join our waitlist to be among the first to experience the future of information
            verification
          </p>
          <ScrambleButton
            text="Join Waitlist"
            className="bg-primary text-white px-12 py-4 text-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          />
        </motion.div>
      </div>
    </section>
  );
}
