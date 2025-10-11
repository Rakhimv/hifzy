import { motion } from "framer-motion"


const path = "/media/mobile/playful"

export const blocks = [
    {
        bg: "#F5F3F7",
        title: "effective methods",
        sub: "Games for Practicing Ayahs: lots of quizzes",
        subcolor: "#C5C3C9",
        content: <div className="absolute w-full bottom-0">
            <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="origin-bottom-left z-[2] absolute bottom-[-50px] w-[50%] rotate-[15deg]"
                src={`${path}/1/img1.webp`} />


            <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="origin-bottom-right right-0 absolute bottom-[-30px] w-[50%] rotate-[-10deg]"
                src={`${path}/1/img2.webp`} />


        </div>
    },
    {
        bg: "linear-gradient(to bottom, #4D5159, #292B31)",
        title: "User motivation",
        sub: "Leaderboards, notifications and streaks",
        subcolor: "#C5C3C9",
        content: <div className="absolute w-full h-full bottom-0">
            <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="origin-bottom absolute w-[80%] z-[2] left-1/2 -translate-x-1/2 top-[45%]"
                src={`${path}/2/img1.svg`} />
        </div>
    },
    {
        bg: "#8ECBB9",
        title: "Memory games",
        sub: "Games for Practicing Ayahs: lots of quizzes",
        subcolor: "#FFFFFFB3",
        content: <div className="absolute w-full h-full bottom-0">
            <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="origin-center absolute w-[80%] z-[2] left-1/2 -translate-x-1/2 top-[45%]"
                src={`${path}/3/img1.svg`} />
            <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="origin-bottom absolute w-[100%] left-0 bottom-0"
                src={`${path}/3/img2.svg`} />
        </div>
    },
    {
        bg: "linear-gradient(to bottom, #F9855A, #FDAA5F)",
        title: "Step by step",
        sub: "Word by word Ayahs Learning",
        subcolor: "#FFFFFFB3",
        content: <div className="absolute w-full h-full bottom-0">
            <motion.img
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="origin-bottom absolute w-[60%] z-[2] left-1/2 -translate-x-1/2 top-[38%]"
                src={`${path}/4/img1.webp`} />
            <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="origin-bottom z-[2] absolute w-[70%] left-1/2 -translate-x-1/2 bottom-0"
                src={`${path}/4/img2.webp`} />

            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
                className="origin-center  absolute w-[100%] left-1/2 -translate-x-1/2 top-[50%]"
                src={`${path}/4/line.svg`} />
        </div>
    },
]