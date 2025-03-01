import { motion } from 'motion/react';

export default function Stats() {
  return (
    <section className="py-32 border-b border-secondary-light text-secondary">
      <div className="max-w-7xl mx-auto px-4 border-x border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12"
        >
          {[
            { number: '98.7%', label: 'Accuracy Rate' },
            { number: '<50ms', label: 'Response Time' },
            { number: '∞', label: 'Scalability' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-[Bricolage_Grotesque] font-bold mb-4">
                {stat.number}
              </div>
              <div className="text-xl text-secondary/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
