import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import ButtonContent from './ButtonContent';

const LearningPath: React.FC = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [expandedButtons, setExpandedButtons] = useState<Set<number>>(new Set([0]));

    const buttons: ButtonContent[] = [
        {
            id: 'gamification',
            title: 'Gamification',
            description: 'Progress, educational games, and the best memorization formats',
            image: '/media/screen1.png',
            icons: (
                <div className="flex mt-4">
                    <motion.div
                        className='w-[57px] aspect-square bg-white rounded-2xl flex items-center justify-center'
                    >
                        <img src='/media/learning/1/1.svg' />
                    </motion.div>
                    <motion.div
                        className='w-[57px] ml-[-10px] aspect-square bg-white rounded-2xl flex items-center justify-center'
                    >
                        <img src='/media/learning/1/3.svg' />
                    </motion.div>
                    <motion.div
                        className='w-[57px] aspect-square bg-white rounded-2xl flex items-center justify-center'
                    >
                        <img src='/media/learning/1/2.svg' />
                    </motion.div>
                </div>
            ),
            content: (
                <div className="flex gap-2 mt-4">
                 
                </div>
            ),
        },
        {
            id: 'deep-learning',
            title: 'Deep Learning',
            description: 'Advanced memorization techniques and cognitive enhancement',
            image: '/media/screen2.png',
            icons: (
                <div className="mt-4 space-y-2">
                  
                </div>
            ),
            content: (
                <div className="mt-4 space-y-2">
                   
                </div>
            ),
        },
        {
            id: 'ai-tools',
            title: 'AI Tools',
            description: 'Intelligent assistance and personalized learning paths',
            image: '/media/screen3.png',
            icons: (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  
                </div>
            ),
            content: (
                <div className="mt-4 grid grid-cols-2 gap-2">
                    
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
        <div className="w-full h-screen bg-gradient-to-b from-[#FFFFFF] to-[#EEF0F6] flex items-center justify-center relative z-10">
            <div className="w-full max-w-[90%] mx-auto px-8 flex items-center gap-12">
                <div className="flex justify-between w-full">
                    <div className="relative flex items-center gap-[40px]">
                        <div className="flex flex-col gap-[20px] min-w-[60px]">
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
                        </div>
                        <div className="flex flex-col gap-[20px] w-[500px]">
                            {buttons.map((button, index) => (
                                <ButtonContent
                                    key={button.id}
                                    button={button}
                                    index={index}
                                    isActive={activeSection === index}
                                    isExpanded={expandedButtons.has(index)}
                                    toggleButton={toggleButton}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-[500px] relative">
                    <div className="relative w-full h-96 overflow-hidden border-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ x: 300, scale: 0.8, opacity: 0 }}
                                animate={{ x: 0, scale: 1, opacity: 1 }}
                                exit={{ x: -300, scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="relative w-full h-full">{buttons[activeSection].content}</div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningPath;