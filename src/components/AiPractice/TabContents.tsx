import { AnimatePresence, motion } from "framer-motion";
import Equalizer from "./Equalizer";
import { useState } from "react";

const ChatBotTab: React.FC = () => (
  <div className="w-full h-full mt-[20px] xs1700:mt-[40px] flex flex-col items-center gap-[20px]">
    <div className="w-full flex justify-end">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="
          px-[20px] xs1700:px-[30px]
          py-[15px] xs1700:py-[20px]
          opacity-[.7] bg-black/10 rounded-[40px]"
      >
        <p className="text-[18px] xs1700:text-[24px] text-white">Where was the Quran first revealed?</p>
      </motion.div>
    </div>
    <div className="w-full flex justify-start">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
        className="
          px-[20px] xs1700:px-[30px]
          py-[15px] xs1700:py-[20px]
        w-[80%] bg-black/10 rounded-[40px]"
      >
        <p className="text-[18px] xs1700:text-[24px] text-white">
          The Quran was revealed in a blessed and significant night, specifically the Night of Decree or Night of Power (Laylat al-Qadr) during the month of Ramadan.
        </p>
      </motion.div>
    </div>
    <motion.div
      initial={{ scale: 1, y: 30, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-black/20 shadow-lg flex gap-[16px] items-center justify-center mt-[40px] 
      py-[15px] px-[20px] xs1700:px-[30px]
      rounded-[26px]"
    >
      <img src="/media/aipractice/ai.svg" className="w-[25px] opacity-[.7]" />
      <p className="text-[18px] xs1700:text-[24px] font-semibold text-[#ffffff] opacity-[.7]">Ask Hifzy AI a question</p>
      <img src="/media/aipractice/array.svg" className="w-[35px] opacity-[.9]" />
    </motion.div>
  </div>
);

const SpellCheckTab: React.FC = () => (
  <div className="w-full flex flex-col items-center">
    <motion.p
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="text-white font-medium text-[35px] xs1700:text-[40px]"
    >
      Quran pages
    </motion.p>
    <motion.div
      initial={{ y: 10, scale: 0.7, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full flex flex-col items-end p-[20px] rounded-[40px] mt-[30px] xs1700:mt-[40px] bg-[#00000020] relative"
    >
      <p className="flex items-center justify-end 
      text-[35px] xs1700:text-[40px]
      gap-[10px] bg-gradient-to-r from-transparent from-[-40%] to-white to-[80%] text-transparent bg-clip-text">
        <Equalizer />
        <span> ٱلْحَمْدُ</span>
        <img className="w-[40px]" src="/media/aipractice/icon.svg" />
        بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
      </p>
      <p className="
      text-[35px] xs1700:text-[40px]
font-bold bg-gradient-to-r from-transparent to-white to-[150%] text-transparent bg-clip-text">
        لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ
      </p>
    </motion.div>
    <motion.div
      initial={{ y: 30, scale: 0.5, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="
      h-[90px] xs1700:h-[120px]
      w-[90px] xs1700:w-[120px] 
      rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center mt-[40px]"
    >
      <img src="/media/aipractice/micro.svg" />
    </motion.div>
    <motion.p
      initial={{ y: 30, scale: 0.5, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="text-[20px] xs1700:text-[24px] font-medium mt-[12px] text-[#ffffffcb]"
    >
      Tap to start
    </motion.p>
  </div>
);

const MahrajTab: React.FC = () => (
  <div className="w-full flex flex-col items-center">
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mt-[20px] w-full flex justify-center"
    >
      <img className="w-[50%]" src="/media/aipractice/bigb.svg" />
    </motion.div>
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-black/20 shadow-lg flex gap-[6px] items-center justify-center mt-[40px] 
        px-[20px] xs1700:px-[30px]
          py-[10px] xs1700:py-[16px]
      rounded-[40px]"
    >
      <p className="text-[20px] xs1700:text-[24px] font-semibold text-[#ffffff]">Check</p>
      <img src="/media/aipractice/ai.svg" className="w-[25px]" />
    </motion.div>
  </div>
);

const TabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabsData: any[] = [
    {
      bg: ["#70A9E9", "#97CEEB"],
      content: <ChatBotTab />,
      bottom: "Try out all our artificial intelligence features and take your Arabic to a new level while reading the Quran",
    },
    {
      bg: ["#5CCABA", "#AADFCD"],
      content: <SpellCheckTab />,
      bottom: "Try out all our artificial intelligence features and take your Arabic to a new level while reading the Quran",
    },
    {
      bg: ["#FE6B42", "#F59667"],
      content: <MahrajTab />,
      bottom: "Try out all our artificial intelligence features and take your Arabic to a new level while reading the Quran",
    },
  ];

  return (
    <div
      className="relative 
      w-[600px] xs1700:w-[720px]
      py-[25px] xs1700:py-[40px] 
      px-[60px] s1700:px-[100px] 

      aspect-[848/900] mt-[70px] rounded-[52px]  flex flex-col justify-between"
      style={{
        "--color-from": tabsData[activeTab].bg[0],
        "--color-to": tabsData[activeTab].bg[1],
      } as React.CSSProperties}
    >
      <motion.div
        className="absolute inset-0 rounded-[52px]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          background: `linear-gradient(to bottom, var(--color-from), var(--color-to))`,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <div className="relative flex flex-col justify-between h-full">
        <div className="flex justify-center gap-2 w-full text-[18px] xs1700:text-[23px] text-white">
          {["Chat Bot", "Spell Check", "Mahraj"].map((label, index) => (
            <button
              key={index}
              className={`px-[24px] py-[12px] rounded-[40px] cursor-pointer transition-all duration-300 ${activeTab === index ? "bg-[#ffffff33]" : "hover:bg-[#ffffff20]"
                }`}
              onClick={() => setActiveTab(index)}
            >
              {label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col justify-between h-full pt-[40px]"
          >
            {tabsData[activeTab].content}
          </motion.div>
        </AnimatePresence>
        <motion.p
          className="text-[#ffffffcb] font-medium text-[16px] xs1700:text-[20px] text-center mt-[20px] leading-[1.3]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {tabsData[activeTab].bottom}
        </motion.p>
      </div>
    </div>
  );
};

export default TabSection;