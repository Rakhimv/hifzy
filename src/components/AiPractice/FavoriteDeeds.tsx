import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FavoriteDeeds: React.FC = () => {

    const [isVisibleTitle, setIsVisibleTitle] = useState(false);
    const [isVisibleButton, setIsVisibleButton] = useState(false);
    const [isVisibleImages, setIsVisibleImages] = useState(false);
    const [hasAnimated, setHasAnimated] = useState({
        title: false,
        button: false,
        images: false,
    });

    const titleRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const createObserver = (
            ref: React.RefObject<HTMLDivElement | null>,
            setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
            key: keyof typeof hasAnimated
        ) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !hasAnimated[key]) {
                        setIsVisible(true);
                        setHasAnimated((prev) => ({ ...prev, [key]: true }));
                    }
                },
                { threshold: 0.5 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        };

        const cleanupTitle = createObserver(titleRef, setIsVisibleTitle, "title");
        const cleanupButton = createObserver(buttonRef, setIsVisibleButton, "button");
        const cleanupImages = createObserver(imagesRef, setIsVisibleImages, "images");

        return () => {
            cleanupTitle();
            cleanupButton();
            cleanupImages();
        };
    }, [hasAnimated]);

    return (
        <div className="relative flex flex-col items-center mt-[200px]">

            <div
                ref={titleRef}
                className="w-full flex flex-col items-center text-center font-bold text-[50px] xs1500:text-[60px] xs1700:text-[70px] xs1900:text-[80px] text-primary"
            >
                <p>Allah's Favorite Deeds</p>

                <div className="flex gap-[24px] items-center">
                    <p>Done Regularly</p>

                    <motion.div
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: isVisibleTitle ? 1 : 0.1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#434449] py-[10px] px-[25px] rounded-[32px] flex items-center gap-[16px] relative overflow-hidden"
                    >
                        <motion.p
                            initial={{ x: 100 }}
                            animate={{ x: isVisibleTitle ? 0 : 100 }}
                            transition={{ duration: 0.8, ease: [0.69, 0.4, 0.18, 0.69] }}
                            className="text-white"
                        >
                            first verse now
                        </motion.p>


                        <motion.div
                            initial={{ x: -550, rotate: -180 }}
                            animate={{
                                x: isVisibleTitle ? 0 : -550,
                                rotate: isVisibleTitle ? 0 : -180,
                            }}
                            transition={{ duration: 0.8, ease: [0.69, 0.4, 0.18, 0.69] }}
                            className="relative"
                        >


                            <motion.div
                                className="absolute"
                                initial={{
                                    display: "hidden",
                                    opacity: 0
                                }}
                                animate={{
                                    display: isVisibleTitle ? "block" : "hidden",
                                    opacity: isVisibleTitle ? 1 : 0
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 1.8
                                }}
                            >
                                <img src="/media/aipractice/hfinal.svg" />
                            </motion.div>



                            <motion.img
                                initial={{
                                    opacity: 1
                                }}
                                animate={{
                                    opacity: isVisibleTitle ? 0 : 1
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: 2.8
                                }}
                                src="/media/aipractice/hourglass.svg" />

                            <motion.div
                                initial={{
                                    opacity: 1
                                }}
                                animate={{
                                    opacity: isVisibleTitle ? 0 : 1
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: 2.8
                                }}
                            >
                                <motion.img
                                    initial={{ top: "7%", scale: 1, scaleX: 1 }}
                                    animate={{
                                        top: isVisibleTitle ? "17%" : "7%",
                                        scale: isVisibleTitle ? 0.4 : 1,
                                        scaleX: isVisibleTitle ? 1.5 : 1,
                                    }}
                                    transition={{ duration: 0.4, delay: 1, ease: "easeInOut" }}
                                    className="absolute top-[7%] left-1/2 -translate-x-1/2"
                                    src="/media/aipractice/h1.svg"
                                />
                                <motion.img
                                    initial={{ bottom: "20%", opacity: 0, scaleY: 0.4 }}
                                    animate={{
                                        bottom: isVisibleTitle ? "3%" : "20%",
                                        opacity: isVisibleTitle ? 1 : 0,
                                        scaleY: isVisibleTitle ? 1 : 0.4,
                                    }}
                                    transition={{ duration: 0.4, delay: 1.1, ease: "easeInOut" }}
                                    className="absolute bottom-[7%] left-1/2 -translate-x-1/2"
                                    src="/media/aipractice/h2.svg"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="relative inline-block">
                    <motion.p
                        className="textanim"
                        initial={{ backgroundPosition: "100% 0" }}
                        animate={{
                            backgroundPosition: isVisibleTitle ? "0% 0" : "100% 0",
                        }}
                        transition={{
                            duration: 1.3,
                            delay: 0.8,
                            ease: [0.37, -0.02, 0, 1],
                        }}
                    >
                        One more Verse Tomorrow
                    </motion.p>
                </div>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisibleButton ? 1 : 0, y: isVisibleButton ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                ref={buttonRef}
                className="relative text-[30px] xs1700:text-[34px] inline-block h-max rounded-[22px] overflow-hidden transition-all duration-400 hover:scale-105"
            >
                <button
                    className="relative 
                    px-[25px] py-[15px] xs1700:px-[32px] xs1700:py-[20px]
                    cursor-pointer outline-none rounded-[30px] xs1700:rounded-[36px] mt-[56px] text-white bg-gradient-to-b from-[#90C6B6] to-[#7BAF9D] shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.73)] flex items-center gap-[10px]"
                >
                    <p className="z-[3]">Get Started</p>
                    <img src="/media/aipractice/array2.svg" />
                </button>
                <div className="absolute z-2 left-1/2 -translate-x-1/2 -translate-y-2 w-[80%] h-[50px] rounded-full bg-[#A9FCE2] blur-xl opacity-[1]"></div>
            </motion.div>





            <div className="w-full overflow-hidden">
                <motion.div
                    ref={imagesRef}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{
                        opacity: isVisibleImages ? 1 : 0,
                        y: isVisibleImages ? 0 : 50,
                        scale: isVisibleImages ? 1 : 0.95,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.8,
                        type: "spring",
                    }}
                    className="mt-[100px] w-full relative flex justify-center overflow-hidden"
                >
                    <img
                        src="/media/aipractice/a.webp"
                        className="w-[40%] relative z-[3] rounded-t-[18%]"
                    />
                    <motion.img
                        initial={{ x: 50 }}
                        animate={{ x: isVisibleImages ? 0 : 50 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        src="/media/aipractice/b1.webp"
                        className="w-[35%] absolute z-[2] bottom-0 right-1/2 translate-x-[10%] rounded-t-[18%]"
                    />
                    <motion.img
                        initial={{ x: -50 }}
                        animate={{ x: isVisibleImages ? 0 : -50 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        src="/media/aipractice/b2.webp"
                        className="w-[35%] absolute z-[2] bottom-0 left-1/2 translate-x-[-10%] rounded-t-[18%]"
                    />
                    <motion.img
                        initial={{ x: 50 }}
                        animate={{ x: isVisibleImages ? 0 : 50 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        src="/media/aipractice/b3.webp"
                        className="w-[30%] absolute z-[1] bottom-0 right-1/2 translate-x-[-40%] rounded-t-[18%]"
                    />
                    <motion.img
                        initial={{ x: -50 }}
                        animate={{ x: isVisibleImages ? 0 : -50 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        src="/media/aipractice/b4.webp"
                        className="w-[30%] absolute z-[1] bottom-0 left-1/2 translate-x-[40%] rounded-t-[18%]"
                    />
                </motion.div>
            </div>

        </div >
    );
};

export default FavoriteDeeds;