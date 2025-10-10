import { motion } from "framer-motion"

type Props = {
    text: string;
}

const MyMsg = (props: Props) => {
    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4}}
            style={{ transformOrigin: "center" }}
            className="w-full flex justify-start">
            <div className="bg-[#434449] 
            rounded-[40px] 
            p-[30px] xs1700:p-[40px] 
            max-w-[50%]">
                <p className="text-[23px] xs1700:text-[28px] text-transform text-[#FFFFFF] font-medium">
                    {props.text}
                </p>
            </div>
        </motion.div>
    )
}

export default MyMsg