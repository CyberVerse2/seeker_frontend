import { motion } from 'motion/react';
import { FaCode, FaRobot, FaTerminal } from 'react-icons/fa6';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-32 border-b border-secondary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 border-x border-secondary-light">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl font-[Bricolage_Grotesque] font-bold mb-6">Our Journey Ahead</h2>
          <div className="h-[1px] w-24 bg-primary"></div>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0"></div>

          {[
            {
              icon: <FaTerminal className="w-6 h-6" />,
              quarter: 'Q1 2025',
              title: 'Seeker Terminal',
              description: 'Launch of our flagship command center for truth verification',
              align: 'right'
            },
            {
              icon: <FaRobot className="w-6 h-6" />,
              quarter: 'Q2 2025',
              title: 'Agent of Truth',
              description:
                'An AI oracle that delivers verified answers through decentralized consensus.',
              align: 'left'
            },
            {
              icon: <FaCode className="w-6 h-6" />,
              quarter: 'Q3 2025',
              title: 'Developer API',
              description: 'Empowering developers to build on our verification network',
              align: 'right'
            },
            {
              icon: <FaRobot className="w-6 h-6" />,
              quarter: 'Q4 2025',
              title: 'Network Expansion',
              description: 'Scaling our AI network for enhanced verification accuracy',
              align: 'left'
            }
          ].map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: milestone.align === 'right' ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative grid md:grid-cols-2 gap-8 mb-24 md:mb-32 group ${
                milestone.align === 'right' ? 'md:text-right' : ''
              }`}
            >
              <div
                className={`
                  ${milestone.align === 'right' ? 'md:col-start-2' : ''}
                  ${milestone.align === 'right' ? 'md:pr-16' : 'md:pl-16'}
                `}
              >
                <div
                  className={`flex items-center gap-4 mb-6 ${
                    milestone.align === 'right' ? 'md:justify-end' : ''
                  }`}
                >
                  <div className="text-primary">{milestone.icon}</div>
                  <div className="text-sm font-medium text-primary">{milestone.quarter}</div>
                </div>
                <h3 className="text-3xl font-[Bricolage_Grotesque] font-bold mb-4">
                  {milestone.title}
                </h3>
                <p className="text-xl text-gray-500">{milestone.description}</p>
              </div>

              {/* Timeline Node */}
              <div
                className={`absolute left-0 md:left-1/2 top-0 -translate-y-3 ${
                  milestone.align === 'right' ? '-translate-x-1/2' : 'translate-x-1/2'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-[rgb(252,252,253)] border-2 border-primary hidden md:block relative z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-300">
                  <div className="absolute inset-0.5 rounded-full bg-primary-light group-hover:bg-white transition-colors duration-300"></div>
                </div>
              </div>

              {/* Connecting Arrow */}
              <div
                className={`hidden md:block absolute top-0 ${
                  milestone.align === 'right'
                    ? 'left-1/2 translate-x-6'
                    : 'right-1/2 -translate-x-6'
                }`}
              >
                <div
                  className={`w-8 h-[1px] bg-primary/20 group-hover:bg-primary group-hover:w-12 transition-all duration-300 ${
                    milestone.align === 'right' ? '' : 'ml-auto'
                  }`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
