import { motion, AnimatePresence } from "framer-motion"

const PlayfulBlocks = ({
    blocks,
    activeBlocks,
}: {
    blocks: { bg: string; content: React.ReactNode }[]
    activeBlocks: boolean[]
}) => {
    const targetYPositions = [-20, 20, 60, 100]

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
                            style={{ background: block.bg }}
                            className="absolute w-[388px] aspect-[388/400] rounded-2xl flex items-center justify-center shadow-xl"
                        >
                            {block.content}
                        </motion.div>
                    )}
                </AnimatePresence>
            ))}
        </>
    )
}

export default PlayfulBlocks
