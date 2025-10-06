import { motion } from "framer-motion";

const bars = [0, 1, 2, 3, 4];

export default function Equalizer() {
  return (
    <div className="flex items-center justify-center gap-1 mr-[10px] scale-[.8]">
      {bars.map((i) => {
        const max = 1 + Math.random() * 1.5; // от 1 до 2.5
        const duration = 0.5 + Math.random() * 1; // от 0.5 до 1.5 сек
        return (
          <motion.div
            key={i}
            className="w-1 h-3 bg-white rounded origin-center"
            initial={{ scaleY: 0.3 }}
            animate={{ scaleY: [0.3, max, 0.3] }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
