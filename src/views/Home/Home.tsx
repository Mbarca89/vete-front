import "./Home.css"
import Landing from "../landing/Landing"
import ServicesHome from "../../components/ServicesHome/ServicesHome"
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return (
        <>
        <div className="h-100 w-100 position-absolute">
            <Landing/>
            <ServicesHome/>
            <Footer/>
        </div>
        </>
    )
}

export default Home