import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';


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
    return (
        <motion.div
            className={`max-w-[457px] relative overflow-hidden rounded-[40px] bg-bg1`}
            layout
            initial={{ width: "max-content" }}
            animate={{
                width: isExpanded ? '457px' : 'max-content',
                height: isExpanded ? '300px' : '106px',
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    mass: 0.2,
                    duration: 1,
                },
            }}
        >

            <div className="relative w-full min-w-max flex flex-col items-center p-[32px]">
                <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3, delay: 0.3}}
                className='flex w-full items-center justify-between gap-[16px]'>
                    <h3 className="text-[28px] text-primary font-medium">{button.title}</h3>
                    <motion.button
                        onClick={() => toggleButton(index)}
                        className={`relative w-[36px] h-[36px] border-2 border-[#E5E4E7] rounded-full cursor-pointer`}
                        animate={{
                            transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
                            transition: { duration: 0.4 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className='w-[15px] h-[3px] bg-[#888990] absolute
                        left-[50%] translate-x-[-50%] rotate-90 rounded-[3px]' />
                        <div className='w-[15px] h-[3px] bg-[#888990] absolute
                        left-[50%] translate-x-[-50%] rounded-[3px]' />
                    </motion.button>

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
                                    className="text-op0 text-[24px] w-[95%] font-medium"
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