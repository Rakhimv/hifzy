import { HeaderSection } from "../HeaderSection"
import { useRef, useEffect, useState } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import PlayfulBlocks from "./PlayfulBlocks"

const Playful = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    })

    const [activeBlocks, setActiveBlocks] = useState([false, false, false, false])
    const [isHeaderHidden, setIsHeaderHidden] = useState(false)

    const thresholds = [0, 0.25, 0.5, 0.75]

    useEffect(() => {
        return scrollYProgress.onChange((progress) => {
            const newActiveBlocks = thresholds.map(threshold => progress >= threshold)
            setActiveBlocks(newActiveBlocks)
            setIsHeaderHidden(progress >= 0.1)
        })
    }, [scrollYProgress])

    const blocks = [
        { bg: "#F5F3F7", content: <div className="text-black font-bold text-3xl">Block 1</div> },
        { bg: "linear-gradient(to bottom, #4D5159, #292B31)", content: <div className="text-white font-bold text-3xl">Block 2</div> },
        { bg: "#8ECBB9", content: <div className="text-black font-bold text-3xl">Block 3</div> },
        { bg: "linear-gradient(to bottom, #F9855A, #FDAA5F)", content: <div className="text-black font-bold text-3xl">Block 4</div> },
    ]

    return (
        <div ref={ref} className="relative h-[400vh] bg-white">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                <motion.div 
                    className="absolute top-[40px]"
                    animate={{
                        opacity: isHeaderHidden ? 0 : 1,
                        y: isHeaderHidden ? -50 : 0
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                >
                    <HeaderSection
                        topic="Ease and Playful"
                        text={
                            <>
                                Master Reading <br />
                                Sight <span className="text-op1">and</span> Sound
                            </>
                        }
                    />
                </motion.div>

                <PlayfulBlocks blocks={blocks} activeBlocks={activeBlocks} />
            </div>
        </div>
    )
}

export default Playful
