import PhoneScrollAnimation from "../components/PhoneAnimation/PhoneScrollAnimation"
import Header from "../components/Header"
import InnerW from "../hooks/innerWidth"
import LearningPath from "../components/LearningPath/LearningPath"
import AiPractice from "../components/AiPractice/AiPractice"
import FAQ from "../components/FAQ/FAQ"
import Footer from "../components/Footer"

const Home: React.FC = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full relative">
                <Header />
                <div className="pt-[120px]">
                    <PhoneScrollAnimation />
                    <LearningPath />
                    <AiPractice />
                    <FAQ />

                </div>
                <Footer />
                <InnerW />
            </div>
        </div>
    )
}

export default Home