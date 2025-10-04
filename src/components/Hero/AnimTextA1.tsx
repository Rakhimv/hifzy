import { motion } from 'framer-motion';

export const AnimatedTextA1 = ({ showA1 }: {showA1: boolean}) => (
  <motion.div
    className="relative z-[4] flex flex-col items-center"
    initial={{ opacity: 1, y: 0 }}
    animate={showA1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
  >
    <div className="text-[72px] flex flex-col gap-[10px] text-primary max-w-[650px]">
      <p className="leading-[1] text-center font-semibold">
        Discover <span className="text-op1">the</span> Quran{" "}
        <span className="text-op1">with a </span>Fun Approach
      </p>
    </div>
    <p className="text-op2 font-medium text-[24px] max-w-[534px] text-center mt-[20px] leading-[1.3]">
      Memorize more effectively with the help of our tools and deepen your knowledge in theory
    </p>
    <div className="flex mt-[32px] gap-[16px] text-[22px]">
      <div className="relative inline-block h-max rounded-[22px] overflow-hidden">
        <button className="relative px-[32px] py-[20px] cursor-pointer outline-none rounded-[22px] text-white bg-gradient-to-b from-[#90C6B6] to-[#7BAF9D]">
          <p className="z-[3]">Start using</p>
        </button>
        <div className="absolute z-2 left-1/2 -translate-x-1/2 -translate-y-2 w-[100%] h-[50px] rounded-full bg-[#A9FCE2] blur-xl opacity-[1]"></div>
      </div>
      <button className="px-[32px] border-[2px] border-[#E4E4E4] py-[20px] cursor-pointer outline-none rounded-[22px]">Read more</button>
    </div>
  </motion.div>
);