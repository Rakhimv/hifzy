import PhoneScrollAnimation from "../components/Hero/PhoneScrollAnimation"
import Header from "../components/Header"
import Hero from "../components/Hero/Hero"

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <PhoneScrollAnimation />
        </div>
    )
}

export default Home