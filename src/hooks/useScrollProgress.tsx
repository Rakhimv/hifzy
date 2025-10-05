import { useEffect, useState, type RefObject } from 'react';
import { useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';

type Config = {
    rotateX: number[];
    rawY: number[];
    scale: number[];
    top: number[];
};

const CONFIGS: Record<number, Config> = {
    1536: {
        rotateX: [55, 0],
        rawY: [800, 365, 365, 0],
        scale: [2, 1],
        top: [258, 148]
    },
    1700: {
        rotateX: [55, 0],
        rawY: [780, 320, 320, 0],
        scale: [2.2, 1],
        top: [258, 148]
    },
    1920: {
        rotateX: [55, 0],
        rawY: [700, 240, 240, 0],
        scale: [2.2, 1],
        top: [230, 148]
    },

};

const getConfigByResolution = (width: number) => {
    const thresholds = Object.keys(CONFIGS).map(Number).sort((a, b) => b - a);
    for (const thresh of thresholds) {
        if (width >= thresh) {
            return CONFIGS[thresh];
        }
    }
    return CONFIGS[700];
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

    const rotateX = useTransform(progress, [0, 0.08], config.rotateX);
    const rawY = useTransform(progress, [0, 0.08, 0.2, 0.2], config.rawY);
    const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 1 });
    const scale = useTransform(progress, [0, 0.08], config.scale);
    const rawTop = useTransform(scrollYProgress, [0, 0.02], config.top);
    const top = useSpring(rawTop, { stiffness: 60, damping: 20, mass: 1 });
    return {
        scrollYProgress: progress,
        rotateX,
        y,
        scale,
        top
    };
};
