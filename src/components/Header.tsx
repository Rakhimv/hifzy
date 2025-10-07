import { useState, useEffect } from "react";
import { useScroll } from "../contexts/ScrollContext";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { isProgrammaticScroll, setIsProgrammaticScroll, lenis } = useScroll();

    const menu = [
        {
            text: "Features",
            anchor: "features"
        },
        {
            text: "Study process",
            anchor: "study-process"
        },
        {
            text: "FAQ",
            anchor: "faq"
        },
    ];

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;


                    if (isProgrammaticScroll) {
                        // При программном скролле сбрасываем состояние header
                        setIsScrolled(false);
                        setLastScrollY(currentScrollY);
                        ticking = false;
                        return;
                    }

                    if (currentScrollY < lastScrollY || currentScrollY < 100) {
                        setIsScrolled(false);
                    } else if (currentScrollY > 100) {
                        setIsScrolled(true);
                    }

                    setLastScrollY(currentScrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (anchor: string) => {
        setIsProgrammaticScroll(true);

        const element = document.getElementById(anchor);
        if (element && lenis) {
            const headerHeight = 120;
            const elementPosition = element.offsetTop - headerHeight;

            lenis.scrollTo(elementPosition, {
                lerp: 0.1,
                duration: 1.2,
                easing: (t: number) => 1 - Math.pow(1 - t, 3),
                immediate: false,
                lock: true, 
                onComplete: () => {
                    setIsProgrammaticScroll(false); 
                },
            });
        } else {
          
            if (element) {
                const headerHeight = 120;
                const elementPosition = element.offsetTop - headerHeight;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth',
                });
            }
            setTimeout(() => setIsProgrammaticScroll(false), 1200); 
        }
    };


    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[50] w-full  transition-all duration-300 ${isScrolled
                ? 'transform -translate-y-full '
                : ''
                }`}
        >
            <div className={`max-w-[1542px] w-full ${lastScrollY > 400 ? "shadow-lg" : ""} bg-white rounded-[32px] transition-all mx-auto p-[40px] flex justify-between`}>
                <div className="flex">
                    <img src="/full-logo.svg" className="w-[100px] mr-[52px]" />
                    <div className="flex items-center gap-[20px]">
                        {menu.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(item.anchor)}
                                className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer text-primary text-2xl bg-secondary outline-none hover:bg-primary hover:text-white transition-colors duration-200"
                            >
                                {item.text}
                            </button>
                        ))}



                        <button className="group px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer text-primary text-2xl bg-secondary outline-none hover:bg-primary hover:text-white transition-colors duration-200">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="stroke-current text-[#434449] group-hover:stroke-white group-hover:fill-white group-hover:text-white transition-colors duration-200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 15H21M3 9H21"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                    </div>
                </div>


                <div className="flex gap-[16px]">
                    <button className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer bg-secondary text-primary text-2xl outline-none flex  transition-colors duration-200">
                        Hifzy for Android
                        <img src="/media/googleplay.svg" className="ml-[12px] w-[24px]" />
                    </button>

                    <button className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer bg-primary text-white text-2xl outline-none flex  transition-colors duration-200">
                        Hifzy for IOS
                        <img src="/media/appstore.svg" className="ml-[12px] w-[24px]" />
                    </button>
                </div>
            </div>
        </header >
    )
}

export default Header