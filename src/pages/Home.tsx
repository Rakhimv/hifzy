import PhoneScrollAnimation from "../components/PhoneAnimation/PhoneScrollAnimation"
import Header from "../components/Header"
import InnerW from "../hooks/innerWidth"
import LearningPath from "../components/LearningPath/LearningPath"
import AiPractice from "../components/AiPractice/AiPractice"
import FAQ from "../components/FAQ/FAQ"
import Footer from "../components/Footer"
import Hero from "../components/Mobile/Hero"

const Home: React.FC = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full relative">
                <Header />
                <div className="pt-[120px] hidden xs1000:block">
                    <PhoneScrollAnimation />
                    <LearningPath />
                    <AiPractice />
                    <FAQ />
                </div>

                <div className="block xs1000:hidden">
                    <Hero />
                </div>
                <Footer />
                <InnerW />
            </div>
        </div>
    )
}

export default Home