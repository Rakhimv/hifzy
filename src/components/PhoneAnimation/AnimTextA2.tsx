import { motion } from 'framer-motion';

export const AnimatedTextA2 = ({ showA2 }: { showA2: boolean }) => (
  <motion.div
    className="absolute z-[2] left-[50%] translate-x-[-50%] top-[50%] -translate-y-[160%] flex flex-col items-center "
    initial={{ opacity: 0, y: 0 }}
    animate={showA2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
  >
    <div className="mb-[20px] text-[22px]">
      <button className="px-[32px] border-[2px] border-[#E4E4E4] py-[20px] cursor-pointer outline-none rounded-[22px]">Ease and Playful</button>
    </div>
    <div className="text-[72px] flex flex-col gap-[10px] text-primary max-w-[650px]">
      <p className="leading-[1] text-center font-semibold">Master Reading: Sight and Sound</p>
    </div>
  </motion.div>
);