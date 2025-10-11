import { AnimatedTextA1 } from "../../PhoneAnimation/AnimTextA1"
import { motion } from "framer-motion"
import { SCREENSHOTS } from "../../PhoneAnimation/PhoneScrollAnimation"
import AnimItemsMobile from "./AnimItemsMobile"
const Hero = ({ showA3 = true }) => {
    return (
        <div className="flex justify-center">



            <motion.div
                className="w-[96%] rounded-[52px] inset-0 flex justify-center flex-col items-center 
                overflow-hidden"
                initial={{ background: "linear-gradient(to bottom, white, white, #ECEAF3)" }}
                animate={
                    showA3
                        ? { background: "linear-gradient(to bottom, white, white, #ECEAF3)" }
                        : { background: "white" }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >


                <AnimItemsMobile />

                <AnimatedTextA1 showA1={true} />

                <div className="w-full max-h-[400px] flex flex-col items-center">
                    <motion.div
                        className="z-10 relative w-[80%] max-w-[400px] aspect-[430/888] mt-[50px]"
                        initial={{ y: 600 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                    >

                        <motion.img
                            src="/media/ip15.svg"
                            alt="Phone"
                            className="relative w-full h-full rounded-[20px] xs1500:rounded-[40px]"
                        />
                        <div className="absolute w-auto h-auto bg-black top-0 left-[1.5%] right-[1.7%] bottom-[4px] rounded-[42px] xs1500:rounded-[35px] xs1700:rounded-[50px] overflow-hidden p-[10px]">
                            <motion.img
                                src="/media/ip15cam.svg"
                                alt="Phone camera"
                                className="absolute z-[2] left-[50%] translate-x-[-50%] top-[28px] w-[25%]"
                            />
                            <div className="relative bg-white w-full h-full rounded-[35px] xs1550:rounded-[50px]">

                                <motion.img
                                    src={SCREENSHOTS[0]}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 45,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                                />

                            </div>
                        </div>
                    </motion.div >

                </div>



            </motion.div>
        </div >
    )
}

export default Hero