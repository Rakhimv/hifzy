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
    1000: {
      initial: { y: 590, rotateX: 55, scale: 1.8 },
      anim1: { rotateX: 0, scale: 1, y: 200 },
      anim2: { rotateX: 0, scale: 1, y: 0 },
      exit: { rotateX: 0, scale: 1, opacity: 0, y: -250 },
    },
    1300: {
      initial: { y: 550, rotateX: 55, scale: 1.8 },
      anim1: { rotateX: 0, scale: 1, y: 270 },
      anim2: { rotateX: 0, scale: 1, y: 0 },
      exit: { rotateX: 0, scale: 1, opacity: 0, y: -250 },
    },
    1396: {
      initial: { y: 550, rotateX: 55, scale: 2.2 },
      anim1: { rotateX: 0, scale: 1, y: 200 },
      anim2: { rotateX: 0, scale: 1, y: 0 },
      exit: { rotateX: 0, scale: 1, opacity: 0, y: -250 },
    },
    1536: {
      initial: { y: 550, rotateX: 55, scale: 2 },
      anim1: { rotateX: 0, scale: 1, y: 170 },
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
    return CONFIGS[1536];
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
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [perspective:500px] [transform-style:preserve-3d] [will-change:transform] phone-container pointer-events-none"
    >
      <motion.div
        className="z-10 relative w-[250px] xs1300:w-[300px] xs1700:w-[350px] aspect-[430/888]"
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
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
      >

        <motion.img
          src="/media/ip15.svg"
          alt="Phone"
          className="relative w-full h-full rounded-[20px] xs1500:rounded-[40px]"
        />
        <div className="absolute w-auto h-auto bg-black top-0 left-[1.5%] right-[1.7%] bottom-[4px] rounded-[42px] xs1500:rounded-[35px] xs1700:rounded-[50px] overflow-hidden p-[10px]">
          <motion.img
            src="/media/ip15cam.svg"
            alt="Phone camera"
            className="absolute z-[2] left-[50%] translate-x-[-50%] top-[28px] w-[25%]"
          />
          <div className="relative bg-white w-full h-full rounded-[35px] xs1550:rounded-[50px]">
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