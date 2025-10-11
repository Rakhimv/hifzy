import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
    "/media/popups/i1.webp",
    "/media/popups/i2.webp",
    "/media/popups/i3.webp",
    "/media/popups/i4.webp",
    "/media/popups/i5.webp",
    "/media/popups/i6.webp",
];

const AnimItemsMobile = () => {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleImages = () => {
        const i1 = images[index % images.length];
        const i2 = images[(index + 1) % images.length];
        const i3 = images[(index + 2) % images.length];
        return [i1, i2, i3];
    };

    const visible = getVisibleImages();

    return (
        <div className="w-full flex justify-center h-[160px]  mt-[40px]">
            <div className="relative w-[120px] aspect-[120/220] mx-auto">
                <div className="w-[100%] absolute scale-[.6] aspect-square bg-[#F3F2F5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[90%] rounded-[32px]"></div>
                {visible.map((src, i) => {

                    const scales = [1, 0.95, 0.8];
                    const offsets = [0, -15, -30];
                    const zIndexes = [3, 2, 1];
                    const isFront = i === 0;

                    return (
                        <AnimatePresence key={src}>
                            <motion.div
                                key={src}
                                className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[32px] overflow-hidden shadow-lg"
                                initial={{
                                    opacity: isFront ? 1 : 0.8,
                                    scale: scales[i],
                                    y: offsets[i],
                                }}
                                animate={{
                                    opacity: isFront ? [1, 0] : 1,
                                    scale: scales[i],
                                    y: offsets[i],
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    zIndex: zIndexes[i],
                                }}
                            >
                                <img
                                    src={src}
                                    className="w-full h-full object-cover rounded-[35px]"
                                />
                                <div className={`absolute inset-0  ${i === 2 ? "rounded-[32px] border-[16px] border-[#E3E0E6]" : "border-[6px] border-white/50 rounded-[35px]"}  pointer-events-none`} />
                            </motion.div>

                        </AnimatePresence>
                    );
                })}
            </div>
        </div>
    );
};

export default AnimItemsMobile;
