import PhoneScrollAnimation from "../components/Hero/PhoneScrollAnimation"
import Header from "../components/Header"
import Hero from "../components/Hero/Hero"
import InnerW from "../hooks/innerWidth"

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <PhoneScrollAnimation />

           <InnerW />
        </div>
    )
}

export default Home