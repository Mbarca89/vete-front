import "./Home.css"
import Landing from "../landing/Landing"
import ServicesHome from "../../components/ServicesHome/ServicesHome"
import Footer from "../../components/Footer/Footer"
import ChipHome from "../../components/ChipHome/ChipHome"

const Home = () => {
    return (
        <>
            <div className="position-fixed z-0 w-100 bg-dark" style={{height:"100vh"}}>
                <img className="w-100 h-100 object-fit-cover" src="/images/airport2.webp" alt="" />
            </div>
            <div className="h-100 w-100 position-absolute">
                <Landing />
                <ServicesHome />
                <ChipHome />
                <Footer />
            </div>
        </>
    )
}

export default Home