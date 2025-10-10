import { useState, useEffect } from "react";
import { useScroll } from "../contexts/ScrollContext";

export const menuBlocks = [
    {
        id: 1,
        title: "Features",
        bgColor: "#8DC0B6",
        textColor: "text-white",
        image: "/media/header/h1.png",
        anchor: "features",
    },
    {
        id: 2,
        title: "Study process",
        bgColor: "#FAA259",
        textColor: "text-white",
        image: "/media/header/h2.png",
        anchor: "study-process",
    },
    {
        id: 3,
        title: "FAQ",
        bgColor: "#F5F3F7",
        textColor: "text-primary",
        image: "/media/header/h3.svg",
        anchor: "faq",
    },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isProgrammaticScroll, setIsProgrammaticScroll, lenis } = useScroll();

    const menu = [
        { text: "Features", anchor: "features" },
        { text: "Study process", anchor: "study-process" },
        { text: "FAQ", anchor: "faq" },
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


                    if (currentScrollY < 100) {
                        setIsScrolled(false);
                    } else if (currentScrollY >= 100) {
                        setIsScrolled(true);
                        setIsMobileMenuOpen(false);
                    }

                    setLastScrollY(currentScrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isProgrammaticScroll]);

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
        } else if (element) {
            const headerHeight = 120;
            const elementPosition = element.offsetTop - headerHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
            setTimeout(() => setIsProgrammaticScroll(false), 1200);
        }
    };

    return (
        <header
            className={`xs1000:fixed top-0 left-0 right-0 z-[50] w-full transition-all duration-300 ${isScrolled ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
                }`}
        >
            <div
                className={`max-w-[1542px] w-full ${lastScrollY < 400 && !isMobileMenuOpen ? "" : ""
                    } bg-white ${isMobileMenuOpen ? "rounded-[32px]" : "rounded-[32px]"} transition-all mx-auto relative`}
            >
                <div className="p-[24px] xs1000:p-[40px] flex w-full justify-between">
                    <div className="flex items-center w-full rounded-[36px] bg-[#F5F5F6] xs1000:bg-transparent xs1000:w-auto justify-between px-[24px] py-[20px] xs1000:rounded-none xs1000:px-0 xs1000:py-0">
                        <img
                            src="/full-logo.svg"
                            className="w-[70px] xs1000:w-[100px] mr-[30px] xs1230:mr-[52px]"
                            alt="Logo"
                        />

                        <div
                            className="cursor-pointer xs1000:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                        </div>

                        <div
                            className={`hidden xs1000:flex items-center gap-[10px] xs1230:gap-[20px] transition-all duration-500 ${isMobileMenuOpen
                                    ? "opacity-0 transform translate-x-[-20px]"
                                    : "opacity-100 transform translate-x-0"
                                }`}
                        >
                            {menu.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.anchor)}
                                    className="px-[16px] h-[50px] xs1230:px-[24px] xs1230:h-[68px] xs1230:py-[20px] rounded-[20px] font-medium cursor-pointer text-primary text-xl xs1230:text-2xl bg-secondary outline-none hover:bg-primary hover:text-white transition-colors duration-200"
                                >
                                    {item.text}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div
                        className={`desktop-menu-content hidden xs1000:flex gap-[10px] xs1230:gap-[16px] transition-all duration-500 ${isMobileMenuOpen
                                ? "opacity-0 transform translate-x-[20px]"
                                : "opacity-100 transform translate-x-0"
                            }`}
                    >
                        <button className="px-[20px] h-[50px] xs1230:px-[24px] xs1230:h-[68px] xs1230:py-[20px] rounded-[20px] font-medium cursor-pointer bg-secondary text-primary text-xl xs1230:text-2xl outline-none flex transition-colors duration-200 items-center">
                            Hifzy for Android
                            <img
                                src="/media/googleplay.svg"
                                className="ml-[12px] w-[24px]"
                                alt="Google Play"
                            />
                        </button>

                        <button className="px-[20px] h-[50px]  xs1230:px-[24px] xs1230:h-[68px] xs1230:py-[20px] rounded-[20px] font-medium cursor-pointer bg-primary text-white text-xl xs1230:text-2xl outline-none flex transition-colors duration-200 items-center">
                            Hifzy for iOS
                            <img
                                src="/media/appstore.svg"
                                className="ml-[12px] w-[24px]"
                                alt="App Store"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;