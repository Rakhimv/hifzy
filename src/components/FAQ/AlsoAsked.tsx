import { motion } from "framer-motion";

type Quest = {
    question: string;
    answer: string;
};

type Props = {
    items: Quest[];
    onQuestionClick: (question: string, answer: string) => void;
};

const AlsoAsked = ({ items, onQuestionClick }: Props) => {
    return (
        <div>
            <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                }}
                style={{transformOrigin: "left"}}
                className="text-[32px] text-[#44474ecc] font-medium">AlsoAsked</motion.p>

            <div className="flex flex-col gap-[20px] mt-[30px]">



                {items.map((item, i) => (
                    <motion.button
                        key={i}
                        onClick={() => onQuestionClick(item.question, item.answer)}
                        className="px-[32px] w-max border-[2px] border-[#E4E4E4] py-[20px] outline-none rounded-[32px] text-[28px] cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                            duration: 0.4,
                            delay: i * 0.1,
                            ease: "easeOut",
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {item.question}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default AlsoAsked;
