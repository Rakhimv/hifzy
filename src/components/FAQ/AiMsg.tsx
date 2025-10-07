import { motion } from "framer-motion"


type Props = {
    text: string;
}

const AiMsg = (props: Props) => {
    return (

        <div className="w-full flex justify-end gap-[20px] items-end">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                style={{ transformOrigin: "center" }}
                className="bg-[#F5F3F7] rounded-[40px] p-[40px] max-w-[75%]">
                <p className="text-[28px] text-right text-transform text-[#66696E] font-medium">
                    {props.text}
                </p>
            </motion.div>
            <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                style={{ transformOrigin: "center" }}
                src="/media/faq/ava.svg" className="w-[64px] aspect-ratio" />
        </div>
    )
}

export default AiMsg