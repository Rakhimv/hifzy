import { useState, useEffect, useRef } from "react"
import { HeaderSection } from "../HeaderSection"
import { Blocks } from "./Blocks"
import { motion, AnimatePresence } from "framer-motion"
import { FaPlay } from "react-icons/fa"
import { IoPause } from "react-icons/io5"





const Features = () => {
    const [contentIndex, setContentIndex] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [progress, setProgress] = useState<number>(0)
    const intervalRef = useRef<number | null>(null)
    const progressIntervalRef = useRef<number | null>(null)

    const slideDuration = 4000
    const progressUpdateInterval = 50

    const clearIntervals = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
        }
    };

    const startIntervals = () => {
        clearIntervals()

        intervalRef.current = window.setInterval(() => {
            setContentIndex(prev => (prev + 1) % Blocks.length)
            setProgress(0)
        }, slideDuration)

        progressIntervalRef.current = window.setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + (progressUpdateInterval / slideDuration)
                return newProgress >= 1 ? 1 : newProgress
            })
        }, progressUpdateInterval)
    }

    useEffect(() => {
        if (isPlaying) {
            startIntervals();
        } else {
            clearIntervals();
        }


        return () => {
            clearIntervals();
        };
    }, [isPlaying]);
    const goToSlide = (index: number) => {
        clearIntervals()
        setContentIndex(index)
        setProgress(0)
        if (isPlaying) startIntervals()
    }


    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }



    return (
        <div className="h-screen flex flex-col items-center bg-white relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={`h${contentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                    <HeaderSection
                        topic="Features"
                        text={<>
                            {Blocks[contentIndex].title}
                        </>}
                    />
                </motion.div>
            </AnimatePresence>


            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[90%] relative max-w-[400px] bg-[#F5F3F7] rounded-[32px] aspect-[388/580] flex flex-col items-center overflow-hidden"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                    className="absolute left-1/2 -translate-x-1/2 z-[3] scale-120 top-[2%]"
                        key={`icons-${contentIndex}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {Blocks[contentIndex].icons}
                    </motion.div>

                    <motion.div
                        key={`content-${contentIndex}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        {Blocks[contentIndex].content}
                    </motion.div>
                </AnimatePresence>


                <p className="text-center text-[#66696ECC] text-[16px] mb-[20px]">
                    Progress, educational games, <br /> and the best memorization formats
                </p>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-[40px] flex items-center gap-[9px]"
            >
                <div className="bg-black/20 h-[44px] rounded-full w-[120px] flex items-center justify-center gap-[12px]">
                    {Blocks.map((_, index) => (

                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="relative flex items-center justify-center"
                        >
                            <motion.div
                                className="bg-white/20 rounded-full overflow-hidden"
                                animate={
                                    index === contentIndex
                                        ? { width: 32, height: 4, borderRadius: "9999px" }
                                        : { width: 6, height: 6, borderRadius: "50%" }
                                }
                                transition={{ duration: 0.4, ease: "easeOut", borderRadius: { delay: index !== contentIndex ? 0.4 : 0 } }}
                            >
                                {index === contentIndex && (
                                    <motion.div
                                        key={`progress-${contentIndex}`}
                                        className="h-full bg-white rounded-full"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${progress * 100}%` }}
                                        transition={{ duration: 0.3, ease: "linear" }}
                                    />
                                )}
                            </motion.div>

                        </motion.button>
                    ))}
                </div>




                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlayPause}
                    className="w-[44px] h-[44px] bg-black/20 rounded-full flex items-center justify-center 
                    text-white cursor-pointer transition-colors"
                >
                    {isPlaying ? (
                        <IoPause size={22} />
                    ) : (
                        <FaPlay size={16} />
                    )}
                </motion.button>
            </motion.div>
        </div>
    )
}

export default Features