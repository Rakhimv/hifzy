import PhoneScrollAnimation from "../components/PhoneAnimation/PhoneScrollAnimation"
import Header from "../components/Header"
import InnerW from "../hooks/innerWidth"
import LearningPath from "../components/LearningPath/LearningPath"
import AiPractice from "../components/LearningPath/AiPractice"

const Home: React.FC = () => {
    return (
        <div className="w-full flex justify-center overflow-x-hidden">
            <div className="w-full relative overflow-hidden">
                <Header />
                <PhoneScrollAnimation />
                <LearningPath />
                <AiPractice />
                <InnerW />
            </div>
        </div>
    )
}

export default Home