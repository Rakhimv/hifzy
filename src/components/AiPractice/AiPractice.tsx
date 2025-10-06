import FavoriteDeeds from "./FavoriteDeeds";
import { HeaderSection } from "./HeaderSection";
import TabSection from "./TabContents";

const AiPractice: React.FC = () => (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F2F0F5] flex flex-col items-center relative z-[11] w-[96%] m-auto rounded-b-[52px]">
        <HeaderSection />
        <TabSection />
        <FavoriteDeeds />
    </div>
);

export default AiPractice;