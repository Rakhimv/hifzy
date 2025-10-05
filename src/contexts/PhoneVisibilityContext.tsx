import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface PhoneVisibilityContextType {
    isPhoneVisible: boolean;
    hidePhone: () => void;
    showPhone: () => void;
}

const PhoneVisibilityContext = createContext<PhoneVisibilityContextType | undefined>(undefined);

export const PhoneVisibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isPhoneVisible, setIsPhoneVisible] = useState(true);

    const hidePhone = () => setIsPhoneVisible(false);
    const showPhone = () => setIsPhoneVisible(true);

    return (
        <PhoneVisibilityContext.Provider value={{ isPhoneVisible, hidePhone, showPhone }}>
            {children}
        </PhoneVisibilityContext.Provider>
    );
};

export const usePhoneVisibility = () => {
    const context = useContext(PhoneVisibilityContext);
    if (context === undefined) {
        throw new Error('usePhoneVisibility must be used within a PhoneVisibilityProvider');
    }
    return context;
};
