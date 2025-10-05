import React from 'react';
import { motion } from "framer-motion"
const AiPractice: React.FC = () => {

    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center  relative z-[11]">
            <motion.div
                className="flex flex-col justify-center items-center pt-[120px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            >
                <div className="mb-[20px] text-[22px]">
                    <button className="px-[32px] border-[2px] border-[#E4E4E4] py-[20px] cursor-pointer outline-none rounded-[22px]">AI Practice</button>
                </div>
                <div className="text-[92px] flex flex-col gap-[10px] text-primary max-w-[900px]">
                    <p className="leading-[1] text-center font-semibold">Feel the True Meaning of Each Page</p>
                </div>



                <p className="text-op2 font-medium text-[28px] max-w-[730px] text-center mt-[20px] leading-[1.3]">
                    Read the Quran with a deep understanding of all the nuances
                    of the Arabic language and consolidate it with our AI tools
                </p>
            </motion.div>





        </div>
    );
};

export default AiPractice;