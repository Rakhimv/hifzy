import { useEffect, useState, type RefObject } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

type Config = {
  top: any[];
};

const CONFIGS: Record<number, Config> = {
  1000: {
    top: ["25vh", "10vh"],
  },
  1300: {
    top: ["22vh", "24vh"],
  },
  1500: {
    top: ["25vh", "10vh"],
  },
  1700: {
    top: [170, 148],
  },
  1920: {
    top: [230, 148],
  },
};

const getConfigByResolution = (width: number) => {
  const thresholds = Object.keys(CONFIGS)
    .map(Number)
    .sort((a, b) => b - a);
  for (const thresh of thresholds) {
    if (width >= thresh) {
      return CONFIGS[thresh];
    }
  }
  return CONFIGS[1500];
};

export const useScrollProgress = (ref: RefObject<HTMLDivElement | null>) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const config = getConfigByResolution(width) ?? CONFIGS[1536];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const progress = scrollYProgress as MotionValue<number>;
  const top = useTransform(progress, [0, 0.08], config.top);

  return {
    scrollYProgress: progress,
    top,
  };
};