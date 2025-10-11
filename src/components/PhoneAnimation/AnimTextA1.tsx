import { motion } from 'framer-motion';

export const AnimatedTextA1 = ({ showA1 }: { showA1: boolean }) => (
  <motion.div
    className="relative z-[4] flex flex-col items-center"
    initial={{ opacity: 1, y: 0 }}
    animate={showA1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
  >
    <div className="text-[40px] xs1167:text-[57px] xs1700:text-[72px] flex flex-col gap-[10px] text-primary max-w-[650px]">
      <p className="leading-[1] text-center font-semibold">
        Discover <span className="text-op1">the</span> <br className='xs1000:hidden' /> Quran{" "} <br className='hidden xs1000:block' />
        <span className="text-op1">with a </span> <br className='xs1000:hidden' />Fun Approach
      </p>
    </div>
    <p className="text-op2 font-medium  text-[15px] xs1167:text-[20px] xs1700:text-[24px] max-w-[534px] text-center mt-[20px] leading-[1.3]">
      Memorize more effectively with the help of our <br className='xs1000:hidden' /> tools and <br className='hidden xs1000:block xs1500:hidden' /> deepen your knowledge in theory
    </p>



    <div className="flex mt-[32px] gap-[16px] text-[16px] xs1000:text-[22px]">
      <div className="relative inline-block h-max rounded-[15px] xs1000:rounded-[22px] overflow-hidden">
        <button className="relative 
        px-[18px] py-[12px]
        xs1000:px-[25px] xs1000:py-[15px] 
        xs1700:px-[32px] xs1700:py-[20px] 
        cursor-pointer outline-none 
        rounded-[18px] xs1000:rounded-[22px] text-white bg-gradient-to-b from-[#90C6B6] to-[#7BAF9D] shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.73)]">
          <p className="z-[3] relative">Start using</p>
        </button>
        <div className="absolute z-2 left-1/2 -translate-x-1/2 -translate-y-2 w-[80%] h-[50px] rounded-full bg-[#A9FCE2] blur-xl opacity-[1]"></div>
      </div>
      <button className="
        px-[18px] py-[12px]
        xs1000:px-[25px] xs1000:py-[15px] 
        xs1700:px-[32px] xs1700:py-[20px]
        border-[2px] border-[#E4E4E4] cursor-pointer outline-none 
        rounded-[18px] xs1000:rounded-[22px]">Read more</button>
    </div>


  </motion.div>
);