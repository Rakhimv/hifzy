import { useState, useEffect } from "react";
import { useScroll } from "../contexts/ScrollContext";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    const menuBlocks = [
        {
            id: 1,
            title: "Features",
            bgColor: "#8DC0B6",
            textColor: "text-white",
            image: "/media/header/h1.png",
            anchor: "features"
        },
        {
            id: 2,
            title: "Study process",
            bgColor: "#FAA259",
            textColor: "text-white",
            image: "/media/header/h2.png",
            anchor: "study-process"
        },
        {
            id: 3,
            title: "FAQ",
            bgColor: "#F5F3F7",
            textColor: "text-primary",
            image: "/media/header/h3.svg",
            anchor: "faq"
        }
    ];

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;


                    if (isProgrammaticScroll) {
                        setIsScrolled(false);
                        setLastScrollY(currentScrollY);
                        ticking = false;
                        return;
                    }

                    if (currentScrollY < lastScrollY || currentScrollY < 100) {
                        setIsScrolled(false);
                    } else if (currentScrollY > 100) {
                        setIsScrolled(true);
                        setIsMobileMenuOpen(false);
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
        setIsMobileMenuOpen(false);

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[50] w-full transition-all duration-300 ${isScrolled
                ? 'transform -translate-y-full '
                : ''
                }`}
        >
            <div className={`max-w-[1542px] w-full ${(lastScrollY < 400 && !isMobileMenuOpen) ? "" : "shadow-lg"} bg-white ${isMobileMenuOpen ? "rounded-[32px]" : "rounded-[32px]"} transition-all mx-auto relative `}>
                <div className="p-[40px] flex justify-between">
                    <div className="flex">
                        <img src="/full-logo.svg" className="w-[100px] mr-[52px]" />
                        <div className={`desktop-menu-content flex items-center gap-[20px] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 transform translate-x-[-20px]' : 'opacity-100 transform translate-x-0'}`}>
                            {menu.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.anchor)}
                                    className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer text-primary text-2xl bg-secondary outline-none hover:bg-primary hover:text-white transition-colors duration-200"
                                >
                                    {item.text}
                                </button>
                            ))}
                        </div>


                        {!isMobileMenuOpen &&

                            <button
                                onClick={toggleMobileMenu}
                                className="mobile-menu-content group px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer text-primary text-2xl bg-secondary outline-none hover:bg-primary hover:text-white transition-colors duration-200 ml-[20px]"
                            >
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
                        }

                    </div>

                    <div className={`desktop-menu-content flex gap-[16px] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 transform translate-x-[20px]' : 'opacity-100 transform translate-x-0'}`}>
                        <button className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer bg-secondary text-primary text-2xl outline-none flex  transition-colors duration-200">
                            Hifzy for Android
                            <img src="/media/googleplay.svg" className="ml-[12px] w-[24px]" />
                        </button>

                        <button className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer bg-primary text-white text-2xl outline-none flex  transition-colors duration-200">
                            Hifzy for IOS
                            <img src="/media/appstore.svg" className="ml-[12px] w-[24px]" />
                        </button>
                    </div>


                    <div className={`mobile-menu-content absolute right-[40px] top-[40px] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-0'}`}>
                        <button
                            onClick={toggleMobileMenu}
                            className="w-[68px] h-[68px] rounded-[20px] cursor-pointer bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="stroke-current"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 6L6 18M6 6L18 18"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>






                <div className={`mobile-menu-content transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[650px] opacity-100' : 'max-h-0 opacity-0'} `}>
                    <div className="px-[40px] pb-[40px]">

                        <div className="flex w-full gap-[20px]">
                            {menuBlocks.map((block) => (
                                <motion.div
                                    key={block.id}
                                    className="min-w-[320px] h-auto aspect-[320/400] rounded-[32px] p-[30px] relative overflow-hidden cursor-pointer"
                                    style={{ backgroundColor: block.bgColor }}
                                    onClick={() => scrollToSection(block.anchor)}
                                    whileHover="hover" 
                                    initial="initial"
                                    variants={{
                                        initial: { opacity: 1 },
                                        hover: { opacity: 1 }
                                    }}
                                >
                                    <img src={block.image} className="absolute w-full left-0 top-0" />

                                    <div className="flex h-full relative justify-end z-[2] flex-col">
                                        <p className={`text-[36px] font-semibold ${block.textColor}`}>
                                            {block.title}
                                        </p>
                                        <motion.div
                                            className={`text-[24px] flex items-center ${block.textColor} gap-[10px]`}
                                            initial={{ opacity: 1 }}
                                            variants={{
                                                initial: { opacity: 1 },
                                                hover: { opacity: 0.8 } 
                                            }}
                                        >
                                            <motion.span className="relative">
                                                Read
                                                <motion.div
                                                    className="absolute bottom-0 left-0 w-full h-[2px] bg-current"
                                                    initial={{ scaleX: 0, originX: 0 }}
                                                    variants={{
                                                        initial: { scaleX: 0 },
                                                        hover: { scaleX: 1, transition: { duration: 0.3, ease: "easeInOut" } }
                                                    }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                />
                                            </motion.span>
                                            <motion.div
                                                initial={{ x: 0 }}
                                                variants={{
                                                    initial: { x: 0 },
                                                    hover: { x: 2, transition: { duration: 0.3 } }
                                                }}
                                            >
                                                <FaArrowRight size={20} />
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                            <div className="w-full flex justify-center ">
                                <div >
                                    <div className="flex flex-col pl-[20px]">
                                        <p className="text-primary font-semibold text-[32px] mt-[20px]">Media</p>
                                        <div className="flex flex-col text-op1 mt-[10px] text-[24px] font-medium gap-[20px]">
                                            <p>Name of Article</p>
                                            <p>Name of Article</p>
                                            <p>Name of Article</p>
                                        </div>
                                    </div>

                                    <motion.button
                                        className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer text-primary text-2xl bg-secondary outline-none hover:bg-primary hover:text-white transition-colors duration-200 mt-[20px] flex items-center gap-[10px]"

                                        transition={{ duration: 0.2 }}
                                    >
                                        Explore more
                                        <motion.div
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <FaArrowRight size={20} />
                                        </motion.div>
                                    </motion.button>
                                </div>
                            </div>
                        </div>


                        <div className="w-max flex mt-[60px] flex-row gap-[16px]">
                            <motion.button
                                className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer bg-primary text-white text-2xl outline-none flex items-center justify-center transition-colors duration-200"

                                transition={{ duration: 0.2 }}
                            >
                                Hifzy for IOS
                                <img src="/media/appstore.svg" className="ml-[12px] w-[24px]" />
                            </motion.button>

                            <motion.button
                                className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer bg-secondary text-primary text-2xl outline-none flex items-center justify-center transition-colors duration-200"

                                transition={{ duration: 0.2 }}
                            >
                                Hifzy for Android
                                <img src="/media/googleplay.svg" className="ml-[12px] w-[24px]" />
                            </motion.button>
                        </div>


                        <div className="w-full flex items-center justify-between mt-[20px]">
                            <div className="flex rounded-[20px] p-[10px] bg-[#19191908] w-max text-[20px]">
                                <button className="text-op1 p-[10px] rounded-[10px] cursor-pointer w-[50px] aspect-square">RU</button>
                                <button className="bg-white p-[10px] rounded-[10px] cursor-pointer w-[50px] aspect-square">EN</button>
                            </div>


                            <div className="flex gap-[20px]">
                                <img className="w-[50px] cursor-pointer" src="/media/header/tg.svg" />
                                <img className="w-[50px] cursor-pointer" src="/media/header/ins.svg" />
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </header >
    )
}

export default Header