import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import ButtonContent from './ButtonContent';
import IconStack from './IconStack';

const LearningPath: React.FC = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [expandedButtons, setExpandedButtons] = useState<Set<number>>(new Set());
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasAnimated]);

    const iconData = {
        gamification: [
            { src: '/media/learning/1/1.svg', size: 'small' as const, rotation: 5, delay: 0.4 },
            { src: '/media/learning/1/3.svg', size: 'medium' as const, rotation: 4, delay: 0.6, className: 'ml-[-10px] relative z-[2]' },
            { src: '/media/learning/1/2.svg', size: 'small' as const, rotation: -5, delay: 0.8, className: 'ml-[-10px]' }
        ],
        deepLearning: [
            { src: '/media/learning/2/1.svg', size: 'small' as const, rotation: 5, delay: 0.4 },
            { src: '/media/learning/2/2.svg', size: 'medium' as const, rotation: 4, delay: 0.6, className: 'ml-[-10px] relative z-[2]' },
            { src: '/media/learning/2/3.svg', size: 'small' as const, rotation: -5, delay: 0.8, className: 'ml-[-10px]' }
        ],
        aiTools: [
            { src: '/media/learning/3/1.svg', size: 'small' as const, rotation: 5, delay: 0.4 }
        ]
    };

    const buttons: ButtonContent[] = [



        {
            id: 'gamification',
            title: 'Gamification',
            description: 'Progress, educational games, and the best memorization formats',
            image: '/media/screen1.png',
            icons: <IconStack icons={iconData.gamification} />,
            initial: {opacity: .3, y: 130},
            animate: {opacity: 1, y: 0},
            transition: {duration: 0.5, delay: 0.3},
            content: (
                <div className="w-full relative">
                    <img src='/media/learning/steps/content.svg' />


                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: .5,
                            duration: 0.6
                        }}
                        style={{ position: "absolute" }}
                        className='relative top-[32%] left-[29%] shadow-[0_7.35px_29.41px_0_rgba(149,157,175,0.2)] px-[23px] py-[17px] rounded-[18px] bg-white flex flex-col items-center gap-1.5'>

                        <div className='flex items-center gap-[6px]'>
                            <img src='/media/learning/steps/square.svg' />
                            <p className='font-medium text-op1 text-[21px]'>3 ayahs</p>
                        </div>


                        <p className='text-center font-semibold text-[24px]'>The Divine Support</p>

                        <div className='absolute left-1/2 -translate-y-1/2
                         top-full'>
                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.715 13.5453C12.5761 15.4687 9.79252 15.4687 8.65361 13.5452L0.735823 0.172985L21.6328 0.172983L13.715 13.5453Z" fill="white" />
                            </svg>
                        </div>

                    </motion.div>
                </div>
            ),
        },
        {
            id: 'deep-learning',
            title: 'Deep Learning',
            description: 'Advanced memorization techniques and cognitive enhancement',
            image: '/media/screen2.png',
            icons: <IconStack icons={iconData.deepLearning} />,
            initial: {opacity: .3, scale: .8},
            animate: {opacity: 1, scale: 1},
            transition: {duration: 0.5, delay: 0.4},
            content: (
                <div className="w-full flex justify-center">
                    <div className='grid grid-cols-3 grid-rows-3 w-full max-w-[562px] gap-[32px] rotate-[3deg]'>
                        {Array.from({ length: 9 }).map((_, index) =>
                            <motion.div
                                key={index}
                                className='w-full aspect-square'
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5, y: -20 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 15,
                                    delay: 0.1 * index,
                                    duration: 0.4,
                                }}
                            >
                                <img
                                    style={{
                                        boxShadow: "-19.21px 19.21px 38.7px -9.15px rgba(57,59,65,0.05)"
                                    }}
                                    className='w-full rounded-[30px] aspect-square'
                                    src={`/media/learning/grid/${index + 1}.svg`}
                                    loading="lazy"
                                />
                            </motion.div>
                        )}
                    </div>
                </div>
            ),
        },
        {
            id: 'ai-tools',
            title: 'AI Tools',
            description: 'Intelligent assistance and personalized learning paths',
            image: '/media/screen3.png',
            icons: <IconStack icons={iconData.aiTools} />,
            initial: {opacity: .3, y: -130},
            animate: {opacity: 1, y: 0},
            transition: {duration: 0.5, delay: 0.3},
            content: (
                <div className="w-full flex items-center justify-center relative">
                    <motion.img
                        initial={{ scale: .5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='absolute z-0'
                        src='/media/learning/quran/bg.svg' />
                    <div className='relative z-[10] rotate-[-3deg]'>
                        <img
                            className=''
                            src='/media/learning/quran/page.svg' />

                        <div className='absolute w-[70%] left-[50%] translate-x-[-50%] top-[61.5%] flex justify-center'>
                            <motion.img
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className='w-full'
                                src='/media/learning/quran/line.svg'
                            />
                            <motion.img
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: .4, delay: 0.5 }}
                                className='absolute top-[50%] translate-y-[-50%] left-1/2 -translate-x-1/2'
                                src='/media/learning/quran/ai.svg'
                            />
                        </div>

                    </div>
                </div>
            ),
        },
    ];

    const nextSection = () => {
        if (activeSection < buttons.length - 1) {
            setActiveSection((prev) => prev + 1);
            setExpandedButtons(new Set([activeSection + 1]));
        }
    };

    const prevSection = () => {
        if (activeSection > 0) {
            setActiveSection((prev) => prev - 1);
            setExpandedButtons(new Set([activeSection - 1]));
        }
    };

    const toggleButton = (index: number) => {
        setActiveSection(index);
        setExpandedButtons((prev) => {
            const newSet = new Set<number>();
            if (!prev.has(index)) {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <div ref={containerRef} className="w-full h-screen bg-gradient-to-b from-[#FFFFFF] to-[#EEF0F6] flex items-center justify-center relative z-10">
            <div className='w-full h-[200px] bg-gradient-to-b from-transparent to-white absolute bottom-full left-0' />
            <div className="w-full max-w-[1920px] py-[100px]  mx-auto flex items-center justify-between">
                <div className="flex mx-[120px] justify-between">
                    <div className="relative flex items-center gap-[40px]">
                        <motion.div 
                            className="flex flex-col gap-[20px] min-w-[60px]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                        >
                            <motion.button
                                onClick={prevSection}
                                disabled={activeSection === 0}
                                className={`bg-bg1 p-[18px] rotate-180 cursor-pointer rounded-full flex items-center justify-center transition-colors ${activeSection === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-bg1'}`}
                                whileHover={activeSection === 0 ? {} : { scale: 1.05 }}
                                whileTap={activeSection === 0 ? {} : { scale: 0.95 }}
                            >
                                <img src="/media/array.svg" className="w-[24px] h-[24px]" alt="Previous" />
                            </motion.button>
                            <motion.button
                                onClick={nextSection}
                                disabled={activeSection === buttons.length - 1}
                                className={`bg-bg1 p-[18px] cursor-pointer rounded-full flex items-center justify-center transition-colors ${activeSection === buttons.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-bg1'}`}
                                whileHover={activeSection === buttons.length - 1 ? {} : { scale: 1.05 }}
                                whileTap={activeSection === buttons.length - 1 ? {} : { scale: 0.95 }}
                            >
                                <img src="/media/array.svg" className="w-[24px] h-[24px]" alt="Next" />
                            </motion.button>
                        </motion.div>
                        <div className="flex flex-col gap-[20px] w-[500px] relative">
                            {buttons.map((button, index) => (
                                <motion.div
                                    key={button.id}
                                    initial={button.initial}
                                    animate={isVisible ? button.animate : button.initial}
                                    style={{transformOrigin: "left center"}}
                                    transition={{
                                        ...button.transition,
                                    
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                >
                                    <ButtonContent
                                        button={button}
                                        index={index}
                                        isActive={activeSection === index}
                                        isExpanded={expandedButtons.has(index)}
                                        toggleButton={toggleButton}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full h-full relative">
                    <div className="relative w-full flex items-center justify-center h-screen overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ x: 300, scale: 0.8, opacity: 0 }}
                                animate={isVisible ? { x: 0, scale: 1, opacity: 1 } : { x: 300, scale: 0.8, opacity: 0 }}
                                exit={{ x: -300, scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="relative w-full h-full flex items-center justify-center">{buttons[activeSection].content}</div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningPath;