import { motion, Variants } from 'motion/react';
import ScrambleButton from '../ScrambleButton';

export default function Hero() {
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
            Leverage decentralized AI agents to access verified, unbiased information in real-time.
          </motion.p>

          <ScrambleButton
            text="Join Waitlist"
            className="bg-primary text-white px-12 py-3 font-medium flex items-center gap-1 hover:opacity-90 transition-opacity"
          />
        </div>

        <div className="relative hidden md:block w-full md:w-1/2 px-4">
          <div className="w-full">
            <video src="/videos/seeker.mp4" autoPlay loop muted></video>
            {/* <NetworkAnimation /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
