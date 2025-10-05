import { motion, AnimatePresence, useTransform } from 'framer-motion';
import { SCREENSHOTS } from './PhoneScrollAnimation';

export const AnimatedPhone = ({ currentScreenshot, direction, y, rotateX, scale, endY, endOpacity }: any) => {

  const combinedY = useTransform([y, endY], ([y1, y2]: number[]) => y1 + y2);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        perspective: '500px',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        opacity: endOpacity,
      }}
      className="phone-container pointer-events-none"
    >
      <motion.div
        className="z-10 relative w-[350px] aspect-[430/888]"
        style={{ y: combinedY, rotateX, scale }}
        //   initial={{ rotateX: 60, y: 800, scale: 2.2 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], type: 'spring', stiffness: 50, damping: 20 }}
      >
        <motion.img
          src="/media/ip15.svg"
          alt="Phone"
          className="relative w-full h-full rounded-[40px]"
        />
        <div
          style={{
            position: 'absolute',
            width: 'auto',
            height: 'auto',
            background: '#000000',
            top: 0,
            left: 6,
            right: 8,
            bottom: 4,
            borderRadius: 50,
            overflow: 'hidden',
            padding: 10,
          }}
        >
          <motion.img
            src="/media/ip15cam.svg"
            alt="Phone camera"
            className="absolute z-[2] left-[50%] translate-x-[-50%] top-[28px] w-[25%]"
          />
          <div className="relative bg-white w-full h-full rounded-[50px]">
            <AnimatePresence initial={false} custom={direction} mode="sync">
              {SCREENSHOTS.map((src, index) =>
                index === currentScreenshot && (
                  <motion.img
                    key={index}
                    src={src}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 45,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  />
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
};