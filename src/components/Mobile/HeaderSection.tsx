import { motion } from "framer-motion";

export const HeaderSection: React.FC<{ topic: string; text: React.ReactNode; sub?: string }> = ({
    topic,
    text,
    sub,
}) => (
    <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        
    >
        <div className="mb-[20px] text-[19px]">
            <button className="p-[20px] py-[15px] border-[2px] border-[#E4E4E4]  outline-none rounded-[22px]">
                {topic}
            </button>
        </div>
        <div className="text-[40px] flex flex-col gap-[10px] text-primary max-w-[900px]" >
            <p className="leading-[1] text-center font-semibold" >{text}</p>
        </div>
        {sub && (
            <p className="text-op2 font-medium 
            text-[20px] 
            xs1700:text-[24px] 
            xs1900:text-[28px] max-w-[60%]
            text-center mt-[20px] leading-[1.3]">
                {sub}
            </p>
        )}
    </motion.div>
);
