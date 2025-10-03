import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

const PhoneScrollAnimation = () => {
    const ref = useRef(null);
    const [currentScreenshot, setCurrentScreenshot] = useState(0);
    const [direction, setDirection] = useState(1);

    const screenshots = [
        '/media/screen1.png',
        '/media/screen2.png',
        '/media/screen3.png',
        '/media/screen4.png',
    ];

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
        });

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.4], [60, 0, 0]);
    const y = useTransform(scrollYProgress, [0, 0.4], [800, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [2.2, 1]);


    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((progress) => {
            if (progress < 0.2) {
                setCurrentScreenshot(0);
                setDirection(1);
            } else if (progress >= 0.2 && progress < 0.4) {
                setCurrentScreenshot(1);
                setDirection(1);
            } else if (progress >= 0.4 && progress < 0.6) {
                setCurrentScreenshot(2);
                setDirection(1);
            } else if (progress >= 0.6) {
                setCurrentScreenshot(3);
                setDirection(1);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);





    return (
        <div ref={ref} style={{ height: '400vh', position: 'relative' }}>
            <div style={{ height: '100vh', position: 'relative' }}>
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
                    className="phone-container"
                >
                    <motion.div
                        style={{
                            position: 'relative',
                            width: 430, 
                            aspectRatio: '430 / 888',
                            y,
                            rotateX,
                            scale,
                        }}
                        initial={{ rotateX: 50, y: 800, scale: 2.2 }}
                        transition={{
                            duration: 1,
                            ease: [0.23, 1, 0.32, 1],
                            type: 'spring',
                            stiffness: 50,
                            damping: 20,
                        }}
                    >
                        <motion.img
                            src="/media/ip15.svg"
                            alt="Phone"
                            className='relative'
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 40,
                            }}
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
                                borderRadius: 60,
                                overflow: 'hidden',
                                padding: 10
                            }}

                        >

                            <motion.img
                                src="/media/ip15cam.svg"
                                alt="Phone"
                                className='absolute z-[2] left-[50%] translate-x-[-50%] top-[28px] w-[25%]'
                            />


                            <div className='relative bg-white w-full h-full rounded-[50px]'>


                                <AnimatePresence initial={false} custom={direction} mode="sync">
                                    {screenshots.map((src, index) =>
                                        index === currentScreenshot && (
                                            <motion.img
                                                key={index}
                                                src={src}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: 50,
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                }}
                                                initial={{ opacity: 0, filter: 'blur(10px)' }}
                                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                                exit={{ opacity: 0, filter: 'blur(10px)' }}
                                                transition={{
                                                    duration: 0.8,
                                                    ease: [0.23, 1, 0.32, 1],
                                                }}
                                            />
                                        )
                                    )}
                                </AnimatePresence>
                            </div>

                        </div>




                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default PhoneScrollAnimation;