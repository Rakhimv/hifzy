import { motion } from "framer-motion";

export const HeaderSection: React.FC<{ topic: string; text: string; sub?: string }> = ({
    topic,
    text,
    sub,
}) => (
    <motion.div
        className="flex flex-col justify-center items-center pt-[120px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.5 }}
    >
        <div className="mb-[20px] text-[22px]">
            <button className="px-[32px] border-[2px] border-[#E4E4E4] py-[20px] outline-none rounded-[22px]">
                {topic}
            </button>
        </div>
        <div className="text-[92px] flex flex-col gap-[10px] text-primary max-w-[900px]">
            <p className="leading-[1] text-center font-semibold">{text}</p>
        </div>
        {sub && (
            <p className="text-op2 font-medium text-[28px] max-w-[730px] text-center mt-[20px] leading-[1.3]">
                {sub}
            </p>
        )}
    </motion.div>
);
