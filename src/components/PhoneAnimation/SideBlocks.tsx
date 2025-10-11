import { AnimatePresence, motion } from "framer-motion";

type SideBlocksProps = {
    currentScreenshot: number;
    scrollProgress: number;
    style?: any
};

export const SideBlocks = ({ currentScreenshot, scrollProgress, style }: SideBlocksProps) => {
    const blocks = [
        {
            id: 0,
            side: "left",
            top: "20%",
            minProgress: 0.2,
            img: "/media/popups/popup1.png",
            topic: "Science",
            title: "Effective Methods",
            sub: "Memorize the surah according to the verses",
        },
        {
            id: 1,
            side: "right",
            top: "32%",
            minProgress: 0,
            img: "/media/popups/popup2.svg",
            topic: "Gamification",
            title: "User motivation",
            sub: "Leaderboards, notifications and streaks",
        },
        {
            id: 2,
            side: "left",
            top: "44%",
            minProgress: 0,
            img: "/media/popups/popup3.png",
            topic: "Quizes",
            title: "Memory games",
            sub: "Games for Practicing Ayahs",
        },
        {
            id: 3,
            side: "right",
            top: "55%",
            minProgress: 0,
            img: "/media/popups/popup4.png",
            topic: "Listening",
            title: "Step by step",
            sub: "Word by word Ayahs Learning",
        },
    ];

    return (
        <>
            {blocks.map((block) => {
                const isVisible =
                    currentScreenshot === block.id && scrollProgress >= block.minProgress && scrollProgress < 0.9;

                return (
                    <AnimatePresence>
                        {isVisible && (
                            <motion.div
                                key={block.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{
                                    opacity: 0, y: -50, transition: {
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    }
                                }}

                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className={`  fixed ${block.side === "left" ?
                                    "left-[calc(50%-600px+2%)] xs1230:left-[calc(50%-700px+2%)] xs1700:left-[calc(50%-800px+2%)] xs1900:left-[calc(50%-900px+2%)] origin-right"
                                    :
                                    "right-[calc(50%-600px+2%)] xs1230:right-[calc(50%-700px+2%)] xs1700:right-[calc(50%-800px+2%)] xs1900:right-[calc(50%-900px+2%)] origin-left flex-row-reverse"}  
                                    bg-[#FBFBFC] flex items-center p-[20px] scale-[.8] xs1350:scale-100 rounded-[30px] gap-[24px]`}
                                style={{ top: block.top, ...style }}
                            >
                                <img src={block.img} alt={block.title} className="w-[150px] xs1700:w-[200px] xs1900:w-[240px]" />
                                <div className={`flex flex-col w-[250px] xs1900:w-[325px] ${block.side === "right" && "items-end"}`}>
                                    <span className="py-[4px] px-[10px] xs1900:px-[16px] xs1900:py-[12px] w-max  border-[2px] border-[#E4E4E4] rounded-[20px] text-[18px] xs1900:text-[24px]">
                                        {block.topic}
                                    </span>
                                    <h3 className={`text-primary text-[25px] xs1700:text-[30px] xs1900:text-[40px] font-semibold ${block.side === "right" && "text-right"}`}>{block.title}</h3>
                                    <p className={`text-op2 text-[16px] xs1700:text-[20px] xs1900:text-[24px] font-normal ${block.side === "right" && "text-right"}`}>{block.sub}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                );
            })}
        </>
    );
};
