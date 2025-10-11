import { motion } from "framer-motion"
import { AppStore, GooglePlay, menuBlocks } from "./Header"
import { FaArrowRight } from "react-icons/fa"

const Footer = () => {
    return (
        <div className=" bg-white w-full hidden xs1000:flex justify-center relative z-[11] m-auto pt-[150px]">


            <div className={`w-full transition-all duration-500 overflow-hidden max-w-[1542px]`}>
                <div className="px-[40px] pb-[40px]">

                    <div className="flex w-full gap-[20px]">
                        {menuBlocks.map((block) => (
                            <motion.div
                                key={block.id}
                                className="min-w-[200px] xs1167:min-w-[230px] xs1350:min-w-[280px] xs1500:min-w-[320px] h-auto aspect-[320/400] rounded-[32px] p-[20px] xs1500:p-[30px] relative overflow-hidden cursor-pointer"
                                style={{ backgroundColor: block.bgColor }}
                                // onClick={() => scrollToSection(block.anchor)}
                                whileHover="hover"
                                initial="initial"
                                variants={{
                                    initial: { opacity: 1 },
                                    hover: { opacity: 1 }
                                }}
                            >
                                <img src={block.image} className="absolute w-full left-0 bottom-0" />

                                <div className="flex h-full relative justify-end z-[2] flex-col">
                                    <p className={`text-[20px] xs1167:text-[26px] xs1500:text-[36px] font-semibold ${block.textColor}`}>
                                        {block.title}
                                    </p>
                                    <motion.div
                                        className={`text-[15px] xs1167:text-[18px] xs1500:text-[24px] flex items-center ${block.textColor} gap-[10px]`}
                                        initial={{ opacity: 1 }}
                                        variants={{
                                            initial: { opacity: 1 },
                                            hover: { opacity: 0.8 }
                                        }}
                                    >
                                        <motion.span className="relative">
                                            Read
                                            <motion.div
                                                className="absolute bottom-0 left-0 w-full h-[2px] bg-current"
                                                initial={{ scaleX: 0, originX: 0 }}
                                                variants={{
                                                    initial: { scaleX: 0 },
                                                    hover: { scaleX: 1, transition: { duration: 0.3, ease: "easeInOut" } }
                                                }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            />
                                        </motion.span>
                                        <motion.div
                                            initial={{ x: 0 }}
                                            variants={{
                                                initial: { x: 0 },
                                                hover: { x: 2, transition: { duration: 0.3 } }
                                            }}
                                        >
                                            <FaArrowRight size={20} />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="w-full flex justify-center ">
                            <div >
                                <div className="flex flex-col pl-[20px]">
                                    <p className="text-primary font-semibold text-[28px] mt-[20px]">Media</p>
                                    <div className="flex flex-col text-op1 mt-[20px] text-[20px] font-medium gap-[20px]">
                                        <p>Name of Article</p>
                                        <p>Name of Article</p>
                                        <p>Name of Article</p>
                                    </div>
                                </div>

                                <motion.button
                                    className="
                                btn
                                    rounded-[20px] font-medium 
                                    cursor-pointer text-primary 
                                    text-[20px]!
                                    bg-secondary outline-none hover:bg-primary 
                                    hover:text-white transition-colors duration-200 mt-[20px] flex items-center gap-[10px]"

                                    transition={{ duration: 0.2 }}
                                >
                                    Explore more
                                    <motion.div
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaArrowRight size={20} />
                                    </motion.div>
                                </motion.button>
                            </div>
                        </div>
                    </div>


                    <div className="w-max flex mt-[60px] flex-row gap-[16px]">
                        <AppStore />
                        <GooglePlay />
                    </div>


                    <div className="w-full flex items-center justify-between mt-[20px]">
                        <div className="flex rounded-[20px] p-[10px] bg-[#19191908] w-max text-[20px]">
                            <button className="text-op1 p-[10px] rounded-[10px] cursor-pointer w-[50px] aspect-square">RU</button>
                            <button className="bg-white p-[10px] rounded-[10px] cursor-pointer w-[50px] aspect-square">EN</button>
                        </div>


                        <div className="flex gap-[20px]">
                            <img className="w-[50px] cursor-pointer" src="/media/header/tg.svg" />
                            <img className="w-[50px] cursor-pointer" src="/media/header/ins.svg" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer