import { motion } from 'framer-motion';
import React from 'react';

interface IconCardProps {
    src: string;
    size: 'small' | 'medium' | 'large';
    rotation: number;
    delay: number;
    className?: string;
}

const IconCard: React.FC<IconCardProps> = ({ 
    src, 
    size, 
    rotation, 
    delay, 
    className = '' 
}) => {
    const sizeClasses = {
        small: 'w-[57px] h-[57px]',
        medium: 'w-[70px] h-[70px]',
        large: 'w-[80px] h-[80px]'
    };

    return (
        <motion.div
            className={`${sizeClasses[size]} 
                shadow-[0px_7.9px_31.6px_rgba(149,157,175,0.37)]
                aspect-square bg-white rounded-2xl flex items-center justify-center
                ${className} rotate-[${rotation}deg]`}
            style={{ transform: `rotate(${rotation}deg)` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay,
                duration: 0.5,
            }}
        >
            <img className="w-[30px]" src={src} alt="Icon" />
        </motion.div>
    );
};

export default IconCard;
