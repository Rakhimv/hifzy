import { motion, AnimatePresence } from 'framer-motion';
import { SCREENSHOTS } from './PhoneScrollAnimation';
import { useEffect, useState } from 'react';







export const AnimatedPhone = ({ currentScreenshot, direction, anim, scrollProgress }: any) => {




  type PhoneConfig = {
    initial: any;
    anim1: any;
    anim2: any;
    exit: any;
  };

  const CONFIGS: Record<number, PhoneConfig> = {
    1536: {
      initial: { y: 700, rotateX: 55, scale: 1.8 },
      anim1: { rotateX: 0, scale: 1, y: 270 },
      anim2: { rotateX: 0, scale: 1, y: 0 },
      exit: { rotateX: 0, scale: 1, opacity: 0, y: -250 },
    },
    1700: {
      initial: { y: 700, rotateX: 55, scale: 2 },
      anim1: { rotateX: 0, scale: 1, y: 270 },
      anim2: { rotateX: 0, scale: 1, y: 0 },
      exit: { rotateX: 0, scale: 1, opacity: 0, y: -300 },
    },
    1920: {
      initial: { y: 700, rotateX: 55, scale: 2.2 },
      anim1: { rotateX: 0, scale: 1, y: 270 },
      anim2: { rotateX: 0, scale: 1, y: 0 },
      exit: { rotateX: 0, scale: 1, opacity: 0, y: -400 },
    },
  };

  const getConfigByResolution = (width: number) => {
    const thresholds = Object.keys(CONFIGS)
      .map(Number)
      .sort((a, b) => b - a);
    for (const thresh of thresholds) {
      if (width >= thresh) return CONFIGS[thresh];
    }
    return CONFIGS[1536]; // fallback
  };


  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const deviceConfig = getConfigByResolution(width);



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
      }}
      className="phone-container pointer-events-none"
    >
      <motion.div
        className="z-10 relative w-[350px] aspect-[430/888]"
        initial={deviceConfig.initial}
        animate={
          scrollProgress > 0.9
            ? deviceConfig.exit
            : anim === 1
              ? deviceConfig.anim1
              : anim === 2
                ? deviceConfig.anim2
                : deviceConfig.initial
        }
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
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