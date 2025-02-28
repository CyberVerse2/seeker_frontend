import NetworkAnimation from '../components/NetworkAnimation';
import '../components/NetworkAnimation.css';
import { motion, Variants } from 'framer-motion';
import ScrambleButton from '../components/ScrambleButton';
import { FaArrowRight, FaTerminal, FaRobot, FaChrome, FaCode } from 'react-icons/fa6';

const Home = () => {
  const textVariants: Variants = {
    hidden: { y: 100 },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 + i * 0.1,
        ease: [0.33, 1, 0.68, 1],
        repeat: Infinity,
        repeatDelay: 5,
        repeatType: 'loop' as const
      }
    })
  };

  return (
    <div className="relative bg-[rgb(252,252,253)]">
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen overflow-hidden border-b border-secondary-light">
        {/* Content */}
        <div className="max-w-7xl z-50 mx-auto flex flex-col gap-12 border-x border-secondary-light md:flex-row min-h-screen justify-center md:justify-between items-center">
          <div className="relative w-full md:w-1/2 pl-8 px-4">
            <motion.div className="mb-6">
              <h1 className="text-7xl md:text-[7rem] font-[Bricolage_Grotesque] mt-6 font-bold text-black overflow-hidden">
                <span className="overflow-hidden block">
                  {'Truth'.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      variants={textVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                <span className="block overflow-hidden">
                  {'Verified'.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial="hidden"
                      animate="visible"
                      custom={index + 'Truth'.length} // Add offset for second word
                      variants={textVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </motion.div>

            <motion.p className="text-lg sm:text-xl text-gray-500 mb-8 max-w-3xl">
              Leverage decentralized AI agents to access verified, unbiased information in
              real-time.
            </motion.p>

            <ScrambleButton
              text="Join Waitlist"
              className="bg-primary text-white px-12 py-3 font-medium flex items-center gap-1 hover:opacity-90 transition-opacity"
              onClick={() => {
                /* Add your waitlist logic here */
              }}
            />
          </div>

          <div className="relative hidden md:block w-full md:w-1/2 px-4">
            <div className="w-full h-[700px]">
              <NetworkAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 border-b border-secondary-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 border-x border-secondary-light">
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
                Our network of AI agents works together to verify information across multiple
                sources, ensuring accuracy and reliability in real-time.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-grow bg-secondary-light"></div>
                <span className="text-secondary font-medium">01</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-primary/5 absolute inset-0 animate-pulse"></div>
              <div className="relative z-10">
                <NetworkAnimation />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Grid */}
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

      {/* Stats Section */}
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
                <div className="text-xl text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 border-b border-secondary-light">
        <div className="max-w-7xl mx-auto px-4 border-x border-secondary-light">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-[Bricolage_Grotesque] font-bold mb-6">
              How Seeker Works
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              A simple three-step process to access verified information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Pose Your Question",
                description: "Input your query using Seeker Terminal or the Chrome Extension"
              },
              {
                title: "AI Agents at Work",
                description: "A network of AI agents cross-verifies information from decentralized sources"
              },
              {
                title: "Consensus and Delivery",
                description: "Receive a reliable, consensus-based answer in real-time"
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

      {/* Products Section */}
      <section className="py-32 border-b border-secondary-light bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 border-x border-secondary-light">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-5xl font-[Bricolage_Grotesque] font-bold mb-6">
              Our Products
            </h2>
            <div className="h-[1px] w-24 bg-primary"></div>
          </motion.div>

          <div className="space-y-px">
            {[
              {
                icon: <FaTerminal className="w-8 h-8" />,
                title: "Seeker Terminal",
                description: "Your command center for truth-seeking. Manage queries, monitor agent activity, and integrate with decentralized apps.",
                features: ["Query Management", "Agent Monitoring", "dApp Integration"]
              },
              {
                icon: <FaRobot className="w-8 h-8" />,
                title: "Agent of Truth",
                description: "An AI oracle that delivers verified answers through decentralized consensus.",
                features: ["Real-time Verification", "Multi-source Analysis", "Consensus Building"]
              },
              {
                icon: <FaChrome className="w-8 h-8" />,
                title: "Chrome Extension",
                description: "Bring truth to your browsing. Get real-time verification of web content.",
                features: ["Instant Fact-checking", "Website Analysis", "Content Verification"]
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
                  <div className={`grid md:grid-cols-2 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
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
                    <div className={`hidden md:block bg-primary/5 h-full aspect-square ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
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

      {/* Roadmap Section */}
      <section className="py-32 border-b border-secondary-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 border-x border-secondary-light">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-5xl font-[Bricolage_Grotesque] font-bold mb-6">
              Our Journey Ahead
            </h2>
            <div className="h-[1px] w-24 bg-primary"></div>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0"></div>

            {[
              {
                icon: <FaTerminal className="w-6 h-6" />,
                quarter: "Q1 2025",
                title: "Seeker Terminal",
                description: "Launch of our flagship command center for truth verification",
                align: "right"
              },
              {
                icon: <FaRobot className="w-6 h-6" />,
                quarter: "Q2 2025",
                title: "Social Integration",
                description: "Real-time fact-checking across major social platforms",
                align: "left"
              },
              {
                icon: <FaCode className="w-6 h-6" />,
                quarter: "Q3 2025",
                title: "Developer API",
                description: "Empowering developers to build on our verification network",
                align: "right"
              },
              {
                icon: <FaRobot className="w-6 h-6" />,
                quarter: "Q4 2025",
                title: "Network Expansion",
                description: "Scaling our AI network for enhanced verification accuracy",
                align: "left"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: milestone.align === "right" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-24 md:mb-32 group ${
                  milestone.align === "right" ? "md:text-right" : ""
                }`}
              >
                <div className={`
                  ${milestone.align === "right" ? "md:col-start-2" : ""}
                  ${milestone.align === "right" ? "md:pr-16" : "md:pl-16"}
                `}>
                  <div className={`flex items-center gap-4 mb-6 ${
                    milestone.align === "right" ? "md:justify-end" : ""
                  }`}>
                    <div className="text-primary">{milestone.icon}</div>
                    <div className="text-sm font-medium text-primary">{milestone.quarter}</div>
                  </div>
                  <h3 className="text-3xl font-[Bricolage_Grotesque] font-bold mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-xl text-gray-500">{milestone.description}</p>
                </div>

                {/* Timeline Node */}
                <div className={`absolute left-0 md:left-1/2 top-0 -translate-y-3 ${
                  milestone.align === "right" ? "-translate-x-1/2" : "translate-x-1/2"
                }`}>
                  <div className="w-6 h-6 rounded-full bg-[rgb(252,252,253)] border-2 border-primary hidden md:block relative z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-300">
                    <div className="absolute inset-0.5 rounded-full bg-primary-light group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Connecting Arrow */}
                <div className={`hidden md:block absolute top-0 ${
                  milestone.align === "right" 
                    ? "left-1/2 translate-x-6" 
                    : "right-1/2 -translate-x-6"
                }`}>
                  <div className={`w-8 h-[1px] bg-primary/20 group-hover:bg-primary group-hover:w-12 transition-all duration-300 ${
                    milestone.align === "right" ? "" : "ml-auto"
                  }`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Join our waitlist to be among the first to experience the future of information verification
            </p>
            <ScrambleButton
              text="Join Waitlist"
              className="bg-primary text-white px-12 py-4 text-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              onClick={() => {/* Add your waitlist logic here */}}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
