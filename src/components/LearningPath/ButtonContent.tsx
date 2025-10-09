import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';


interface ButtonContent {
    id: string;
    title: string;
    description: string;
    image: string;
    icons: React.ReactNode;
    content: React.ReactNode;
    initial: any,
    animate: any,
    transition: any,
}


interface ButtonContentProps {
    button: ButtonContent;
    index: number;
    isActive: boolean;
    isExpanded: boolean;
    toggleButton: (index: number) => void;
}

const ButtonContent: React.FC<ButtonContentProps> = ({ button, index, isExpanded, toggleButton }) => {




    type AnimConfig = {
        height1: string;
        height2: string;
        width: string;
        widthX: number;
    };

    const CONFIGS: Record<number, AnimConfig> = {
        1000: {
            height1: '230px',
            height2: '78px',
            width: '380px',
            widthX: -36
        },
        1500: {
            height1: '290px',
            height2: '106px',
            width: '457px',
            widthX: -50
        },

    };

    const getConfigByResolution = (width: number) => {
        const thresholds = Object.keys(CONFIGS)
            .map(Number)
            .sort((a, b) => b - a);
        for (const thresh of thresholds) {
            if (width >= thresh) return CONFIGS[thresh];
        }
        return CONFIGS[1500];
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
            className={`max-w-[350px] xs1500:max-w-[457px] relative overflow-hidden rounded-[40px] bg-[#35323B0D]`}
            layout
            initial={{ width: "max-content" }}
            animate={{
                width: isExpanded ? deviceConfig.width : 'max-content',
                height: isExpanded ? deviceConfig.height1 : deviceConfig.height2,
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    mass: 0.2,
                    duration: 1,
                },
            }}
        >

            <div className="relative w-full min-w-max flex flex-col items-center p-[20px] xs1500:p-[32px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className='flex w-full items-center justify-start '>

                    <motion.button
                        onClick={() => toggleButton(index)}
                        className={`relative w-[20px] h-[20px] xs1500:w-[36px] mr-[16px] xs1500:h-[36px] border-2 border-[#E5E4E7] rounded-full cursor-pointer`}
                        animate={{
                            transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
                            opacity: isExpanded ? 0 : 1,
                            // width: isExpanded ? 0 : 36,
                            // marginRight: isExpanded ? 0 : 16,
                            // visibility: isExpanded ? "hidden" : "visible",
                            transition: { duration: 0.4 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className='w-[12px] h-[2px] xs1500:w-[15px] xs1500:h-[3px] bg-[#888990] absolute
                        left-[50%] translate-x-[-50%] rotate-90 rounded-[3px]' />
                        <div className='w-[12px] h-[2px] xs1500:w-[15px] xs1500:h-[3px] bg-[#888990] absolute
                        left-[50%] translate-x-[-50%] rounded-[3px]' />
                    </motion.button>
                    <motion.h3
                        initial={{ x: 0 }}
                        animate={
                            { x: isExpanded ? deviceConfig.widthX : 0 }
                        }
                        className="text-[23px] xs1500:text-[28px] text-primary font-medium">{button.title}</motion.h3>
                </motion.div>






                <div className="w-full h-full relative">
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    height: "auto",
                                    y: 0,
                                    transition: { duration: 0.2, ease: "easeInOut", delay: 0.4 },
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                    y: 10,
                                    transition: { duration: 0.1, ease: "easeInOut", delay: 0 },
                                }}
                                className="absolute top-[22px] w-full"
                            >
                                <motion.p
                                    className="text-op0 text-[20px] w-full xs1500:text-[24px] xs1500:w-[95%] font-medium"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'tween',
                                        duration: 0.6,
                                        delay: 0.4,
                                        ease: 'easeOut',
                                    }}
                                >
                                    {button.description}
                                </motion.p>

                                {button.icons && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: 'tween',
                                            duration: 0.6,
                                            delay: 0.4,
                                            ease: 'easeOut',
                                        }}
                                    >
                                        {button.icons}
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>



            </div>

        </motion.div>
    );
};

export default ButtonContent;