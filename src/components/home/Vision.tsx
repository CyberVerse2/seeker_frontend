import { motion } from 'motion/react';

export default function Vision() {
  return (
    <section id="use-cases" className="py-32 border-b border-secondary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 border-x border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-5xl font-[Bricolage_Grotesque] font-bold mb-8">
              Decentralized
              <br />
              Information
              <br />
              Verification
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Our network of AI agents works together to verify information across multiple sources,
              ensuring accuracy and reliability in real-time.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-grow bg-secondary-light"></div>
              <span className="text-secondary font-medium">01</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full bg-primary/5 absolute inset-0 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
