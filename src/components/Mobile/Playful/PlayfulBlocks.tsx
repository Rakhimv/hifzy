import { motion, AnimatePresence } from "framer-motion"

const PlayfulBlocks = ({
    blocks,
    activeBlocks,
}: {
    blocks: {
        title: string,
        sub: string,
        subcolor: string,
        bg: string;
        content: React.ReactNode
    }[]
    activeBlocks: boolean[]
}) => {
    const targetYPositions = [-60, -20, 20, 60]

    return (
        <>
            {blocks.map((block, i) => (
                <AnimatePresence key={i}>
                    {activeBlocks[i] && (
                        <motion.div
                            initial={{ y: targetYPositions[i] + 300, opacity: 0 }}
                            animate={{ y: targetYPositions[i], opacity: 1 }}
                            exit={{ y: targetYPositions[i] + 300, opacity: 0 }}
                            transition={{
                                duration: 1,
                                ease: "linear",
                                opacity: { duration: 0.3, ease: "linear" }
                            }}
                            style={{ background: block.bg, position: "absolute" }}
                            className="relative max-w-[400px] w-[90%] aspect-[388/400] rounded-2xl flex items-center shadow-xl flex-col overflow-hidden"
                        >
                            <p
                                style={{
                                    fontSize: "clamp(16px, 8vw, 38px)"
                                }}
                                className={`
                                capitalize font-medium mt-[8%]
                            ${i === 0 ? "text-primary" : "text-white"}`}>{block.title}</p>
                            <p
                                style={{
                                    color: block.subcolor,
                                    fontSize: "clamp(12px, 4vw, 19px)"
                                }}
                                className="text-[#C5C3C9] max-w-[58%] text-center">{block.sub}</p>
                            {block.content}
                        </motion.div>
                    )}
                </AnimatePresence>
            ))}
        </>
    )
}

export default PlayfulBlocks
