import FavoriteDeeds from "./FavoriteDeeds";
import { HeaderSection } from "./HeaderSection";
import TabSection from "./TabContents";

const AiPractice: React.FC = () => (
    <div id="study-process" className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F2F0F5] flex flex-col items-center relative z-[11] w-[96%] m-auto rounded-b-[52px]">
        <HeaderSection
            topic="AI Practice"
            text="Feel the True Meaning <br> of Each Page"
            sub="Read the Quran with a deep understanding of all the nuances of the Arabic language and consolidate it with our AI tools"
        />
        <TabSection />
        <FavoriteDeeds />
    </div>
);

export default AiPractice;