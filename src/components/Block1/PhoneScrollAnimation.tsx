import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

const PhoneScrollAnimation = () => {
    const ref = useRef(null);



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
        offset: ['start end', 'end start'],
    });



    const rotateY = useTransform(scrollYProgress, [0, 1], [30, -15]); 
    const rotateX = useTransform(scrollYProgress, [0, 1], [-10, 0]);  
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);       
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);    

    return (
        <div ref={ref} style={{ height: '600vh', position: 'relative' }}>
            <div style={{ height: '100vh', position: 'relative' }}>
                <motion.div
                    style={{
                        position: 'fixed', 
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)', 
                        perspective: '1000px', 
                        transformStyle: 'preserve-3d',
                        willChange: 'transform', 
                    }}
                    className="phone-container"
                >
                    <motion.img
                        src="https://www.ixbt.com/img/n1/news/2019/3/0/iqoo.jpg"
                        alt="Phone"
                        style={{
                            width: 300,
                            height: 600,
                            borderRadius: 40,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            y,
                            rotateX,
                            rotateY,
                            scale,
                        }}
                        initial={{ rotateY: 30, rotateX: -10, y: 0, scale: 1 }}
                        transition={{
                            duration: 3, 
                            ease: [0.23, 1, 0.32, 1], 
                            type: 'spring', 
                            stiffness: 50, 
                            damping: 20, 
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default PhoneScrollAnimation;