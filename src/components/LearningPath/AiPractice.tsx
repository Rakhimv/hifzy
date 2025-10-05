import React, { useState } from 'react';
import { motion } from "framer-motion"

const AiPractice: React.FC = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabsData = [
        {
            bg: 'from-[#97CEEB] to-[#70A9E9]',
            content: (
                <div>
                    
                </div>
            ),
            bottom: 'Try out all our artificial intelligence features and take your Arabic to a new level while reading the Quran'
        },
        {
            bg: 'from-[#5CCABA] to-[#AADFCD]',
            content: (
                <div className='w-full flex flex-col items-center'>
                    <p className='text-white font-medium text-[40px]'>
                        Quran pages
                    </p>



                    <div className='w-full p-[28px] rounded-[40px] mt-[80px] bg-[#00000020]'>
                        <p> ٱلرَّحِيمِ
بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ</p>
                    </div>
                </div>
            ),
            bottom: 'Try out all our artificial intelligence features and take your Arabic to a new level while reading the Quran'
        },
        {
            bg: 'from-[#F59667] to-[#FE6B42]',
            content: (
                <></>
            ),
            bottom: 'Try out all our artificial intelligence features and take your Arabic to a new level while reading the Quran'
        }
    ];





    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center  relative z-[11] pb-[50px]">
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





            <motion.div
                className={`w-[700px] aspect-[848/900] bg-gradient-to-b ${tabsData[activeTab].bg} mt-[70px] rounded-[52px] py-[40px] px-[100px] flex flex-col justify-between`}
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
                <div className='flex justify-center gap-2 w-full text-[23px] text-white'>
                    <button
                        className={`px-[24px] py-[12px] rounded-[40px] cursor-pointer transition-all duration-300 ${activeTab === 0 ? 'bg-[#ffffff33]' : 'hover:bg-[#ffffff20]'
                            }`}
                        onClick={() => setActiveTab(0)}
                    >
                        Chat Bot
                    </button>
                    <button
                        className={`px-[24px] py-[12px] rounded-[40px] cursor-pointer transition-all duration-300 ${activeTab === 1 ? 'bg-[#ffffff33]' : 'hover:bg-[#ffffff20]'
                            }`}
                        onClick={() => setActiveTab(1)}
                    >
                        Spell Check
                    </button>
                    <button
                        className={`px-[24px] py-[12px] rounded-[40px] cursor-pointer transition-all duration-300 ${activeTab === 2 ? 'bg-[#ffffff33]' : 'hover:bg-[#ffffff20]'
                            }`}
                        onClick={() => setActiveTab(2)}
                    >
                        Mahraj
                    </button>
                </div>


                {tabsData[activeTab].content}



                <motion.p
                    className="text-[#ffffffcb] font-medium text-[20px] text-center mt-[20px] leading-[1.3]"
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    {tabsData[activeTab].bottom}
                </motion.p>
            </motion.div>


        </div>
    );
};

export default AiPractice;