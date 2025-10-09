import { motion } from 'framer-motion';

export const AnimatedItems = ({ showA3 }: any) => (
  <motion.div
    className="absolute z-[2] top-[5%] w-full xs850:w-[90%] xs1230:w-[85%] xs1350:w-[80%] xs1550:w-[80%] left-[50%] translate-x-[-50%]"
    initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    animate={showA3 ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: .5, filter: "blur(10px)" }}
    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
  >
    <div className='w-full flex justify-between'>
      <div className='grid grid-cols-2 grid-rows-3 gap-y-[60px] xs1700:gap-y-[100px] w-max xs1230:w-[200px] xs1700:w-[240px] h-auto'>
        {["", "i1", "i2", "", "", "i3"].map((item, index) => (
          <div key={index} className='w-[80px] xs1230:w-[100px] xs1500:w-[100px] xs1700:w-[120px] aspect-square flex items-center justify-center'>
            {item &&
              <img className='shadow-[-7.61px_8.56px_40.73px_0px_#7d8085ab] rounded-[28px] xs1700:rounded-[35px]' src={`/media/popups/${item}.png`} />
            }
          </div>
        ))}
      </div>


      <div className='grid grid-cols-2 grid-rows-3 gap-y-[60px] xs1700:gap-y-[100px] w-max xs1230:w-[200px] xs1700:w-[240px] h-auto'>
        {["i4", "", "", "i5", "i6", "",].map((item, index) => (
          <div key={index} className='w-[80px] xs1230:w-[100px] xs1500:w-[100px] aspect-square flex items-center justify-center '>
            {item &&
              <img className='shadow-[-7.61px_8.56px_40.73px_0px_#7d8085ab] rounded-[28px] xs1700:rounded-[35px]' src={`/media/popups/${item}.png`} />
            }
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);