import PhoneScrollAnimation from "../components/PhoneAnimation/PhoneScrollAnimation"
import Header from "../components/Header"
import InnerW from "../hooks/innerWidth"
import LearningPath from "../components/LearningPath/LearningPath"

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <PhoneScrollAnimation />
            <LearningPath />
            <InnerW />
        </div>
    )
}

export default Home