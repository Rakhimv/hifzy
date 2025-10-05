import React from 'react';
import IconCard from './IconCard';

interface IconData {
    src: string;
    size: 'small' | 'medium' | 'large';
    rotation: number;
    delay: number;
    className?: string;
}

interface IconStackProps {
    icons: IconData[];
    className?: string;
}

const IconStack: React.FC<IconStackProps> = ({ icons, className = '' }) => {
    return (
        <div className={`flex items-center mt-[25px] ${className}`}>
            {icons.map((icon, index) => (
                <IconCard
                    key={index}
                    src={icon.src}
                    size={icon.size}
                    rotation={icon.rotation}
                    delay={icon.delay}
                    className={icon.className}
                />
            ))}
        </div>
    );
};

export default IconStack;
