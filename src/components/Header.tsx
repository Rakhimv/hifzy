const Header = () => {
    const menu = [
        {
            text: "Features",
        },
        {
            text: "Study process",
        },
        {
            text: "FAQ",
        },
    ]



    return (
        <header className="relative z-[10] w-full h-auto flex justify-center">
            <div className="max-w-[1542px] w-full p-[40px] flex justify-between">
                <div className="flex">
                    <img src="/full-logo.svg" className="w-[100px] mr-[52px]" />
                    <div className="flex items-center gap-[20px]">
                        {menu.map((item) =>
                            <button className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer text-primary text-2xl bg-secondary  outline-none">{item.text}</button>
                        )}
                        <button className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer text-primary text-2xl bg-secondary  outline-none">
                            <img src="/media/Menu_Duo_LG.svg" className="w-[24px]" />
                        </button>
                    </div>
                </div>


                <div className="flex gap-[16px]">

                    <button className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer bg-secondary text-primary text-2xl outline-none flex">
                        Hifzy for Android
                        <img src="/media/googleplay.svg" className="ml-[12px] w-[24px]" />
                    </button>

                    <button className="px-[24px] h-[68px] py-[20px] rounded-[20px] font-medium cursor-pointer bg-primary text-white text-2xl outline-none flex">
                        Hifzy for IOS
                        <img src="/media/appstore.svg" className="ml-[12px] w-[24px]" />
                    </button>
                </div>
            </div>
        </header >
    )
}

export default Header