import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { AnimatedTextA1 } from './AnimTextA1';
import { AnimatedTextA2 } from './AnimTextA2';
import { AnimatedPhone } from './AnimPhone';
import { AnimatedItems } from './AnimatedItems';
import { SideBlocks } from './SideBlocks';
import { motion } from 'framer-motion';
import { useScroll } from '../../contexts/ScrollContext';

export const SCREENSHOTS = [
    '/media/screen1.png',
    '/media/screen2.png',
    '/media/screen3.png',
    '/media/screen4.png',
];

export const SCREEN_THRESHOLDS = [0.35, 0.50, 0.65, 0.80];




export default function PhoneScrollAnimation() {
    const lenisRef = useRef<Lenis | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const [currentScreenshot, setCurrentScreenshot] = useState(0);
    const [direction, setDirection] = useState(1);
    const [showA1, setShowA1] = useState(true);
    const [showA2, setShowA2] = useState(false);
    const [showA3, setShowA3] = useState(true);
    const [phoneAnim, setPhoneAnim] = useState<number>(0);
    const [currentProgress, setCurrentProgress] = useState(0);
    const { setLenis } = useScroll();
    const { scrollYProgress, top } = useScrollProgress(ref);


    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        setCurrentScreenshot(0);
        setDirection(1);
        setShowA1(true);
        setShowA2(false);
        setShowA3(true);
        setPhoneAnim(0);
        setCurrentProgress(0);

        const lenis = new Lenis({
            lerp: 0.05,
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
        });

        lenisRef.current = lenis; 
        setLenis(lenis);

        const raf = (time: any) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, [setLenis]);



    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((progress) => {
            setCurrentProgress(progress);
            const index = SCREEN_THRESHOLDS.findIndex((threshold) => progress < threshold);
            const screenIndex = index === -1 ? SCREEN_THRESHOLDS.length - 1 : index;
            setCurrentScreenshot(screenIndex);
            setDirection(1);
            setShowA1(progress <= 0.08);
            setShowA2(progress > 0.08 && progress < 0.2);
            setShowA3(progress <= 0.08);
            if (progress > 0.08 && progress < 0.2) {
                setPhoneAnim(1);
            } else if (progress >= 0.2) {
                setPhoneAnim(2);
            } else {
                setPhoneAnim(0);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div ref={ref} className="h-[800vh]  relative">
            <div className="h-[100vh] sticky top-0">
                <motion.div
                    style={{ top }}
                    className="fixed w-[96%] ml-[2%] rounded-[52px] inset-0 flex justify-center"
                    initial={{ background: "linear-gradient(to bottom, white, white, #ECEAF3)" }}
                    animate={
                        showA3
                            ? { background: "linear-gradient(to bottom, white, white, #ECEAF3)" }
                            : { background: "white" }
                    }
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <motion.div
                        className="absolute inset-0 bg-[url('/media/set.svg')] bg-no-repeat bg-top"
                        initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        animate={
                            showA3
                                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                                : { opacity: 0, scale: 0.5, filter: "blur(10px)" }
                        }
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />


                    <div className='max-w-[1920px] w-full relative'>
                        <AnimatedTextA1 showA1={showA1} />
                        <AnimatedTextA2 showA2={showA2} />
                        <AnimatedItems showA3={showA3} />
                    </div>
                </motion.div>
                <AnimatedPhone
                    currentScreenshot={currentScreenshot}
                    direction={direction}
                    anim={phoneAnim}
                    scrollProgress={currentProgress}
                />
                <motion.div
                    // initial={{ y: 0, opacity: 1 }}
                    // style={{ y: endY, opacity: endOpacity }}
                    // transition={{ duration: 2 }}
                    className="w-full flex justify-center">
                    <div className="relative max-w-[1920px] w-full">
                        <SideBlocks
                            scrollProgress={currentProgress}
                            currentScreenshot={currentScreenshot}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}