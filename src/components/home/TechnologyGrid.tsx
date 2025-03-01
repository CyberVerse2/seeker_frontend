import { FaArrowRight } from "react-icons/fa6";
import {motion} from 'motion/react'

export default function TechnologyGrid() {
  return (
    <section className="py-32 border-b border-secondary-light">
      <div className="max-w-7xl mx-auto px-4 border-x border-secondary-light">
        <div className="grid md:grid-cols-2 gap-px bg-secondary-light">
          {[
            {
              title: 'Autonomous Agents',
              description:
                'AI-powered agents that independently search, verify, and cross-reference information'
            },
            {
              title: 'Real-time Verification',
              description: 'Instant validation of information through our decentralized network'
            },
            {
              title: 'Developer Tools',
              description:
                'Comprehensive API and SDK for seamless integration into your applications'
            },
            {
              title: 'Custom Solutions',
              description: 'Tailored verification systems for your specific use cases'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[rgb(252,252,253)] p-12 group hover:bg-primary-light transition-colors duration-300"
            >
              <h3 className="text-3xl font-[Bricolage_Grotesque] font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 mb-8 group-hover:text-secondary transition-colors duration-300">
                {item.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-secondary-light group-hover:bg-primary group-hover:w-24 transition-all duration-300"></div>
                <FaArrowRight className="opacity-0 group-hover:opacity-100 text-primary transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
