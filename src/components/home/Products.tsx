import { motion } from 'motion/react';
import { FaArrowRight, FaChrome, FaRobot, FaTerminal } from 'react-icons/fa6';

export default function Products() {
  return (
    <section id="products" className="py-32 border-b border-secondary-light bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 border-x border-secondary-light">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl font-[Bricolage_Grotesque] font-bold mb-6">Products</h2>
          <div className="h-[1px] w-24 bg-primary"></div>
        </motion.div>

        <div className="space-y-px">
          {[
            {
              icon: <FaTerminal className="w-8 h-8" />,
              title: 'Seeker Terminal',
              description:
                'Your command center for truth-seeking. Manage queries, monitor agent activity, and integrate with decentralized apps.',
              features: ['Query Management', 'Agent Monitoring', 'dApp Integration']
            },
            {
              icon: <FaRobot className="w-8 h-8" />,
              title: 'Agent of Truth',
              description:
                'An AI oracle that delivers verified answers through decentralized consensus.',
              features: ['Real-time Verification', 'Multi-source Analysis', 'Consensus Building']
            },
            {
              icon: <FaChrome className="w-8 h-8" />,
              title: 'Seeker Extension',
              description:
                'Bring truth to your browsing. Get real-time verification of web content.',
              features: ['Instant Fact-checking', 'Website Analysis', 'Content Verification']
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[rgb(252,252,253)] group hover:bg-white transition-all duration-300"
            >
              <div className="max-w-7xl mx-auto">
                <div
                  className={`grid md:grid-cols-2 items-center ${
                    index % 2 === 0 ? '' : 'md:grid-flow-dense'
                  }`}
                >
                  <div className={`p-12 md:p-24 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="text-primary mb-8">{product.icon}</div>
                    <h3 className="text-4xl font-[Bricolage_Grotesque] font-bold mb-6">
                      {product.title}
                    </h3>
                    <p className="text-xl text-gray-500 mb-12">{product.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-4 py-2 bg-primary-light text-secondary rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-12">
                      <div className="h-[1px] w-12 bg-secondary-light group-hover:bg-primary group-hover:w-24 transition-all duration-300"></div>
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 text-primary transition-opacity duration-300" />
                    </div>
                  </div>
                  <div
                    className={`hidden md:block bg-primary/5 h-full aspect-square ${
                      index % 2 === 1 ? 'md:col-start-1' : ''
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {product.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
