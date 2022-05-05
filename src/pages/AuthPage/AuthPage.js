import NavBar from "../../components/Nav/NavBar"; 
import Slider from "../../components/Carousel/Slider";
import PageCard from "../../components/PageCard/PageCard";
import Footer from "../../components/Footer/Footer"



export default function AuthPage( {setUser}){
    return (
        <>
        <NavBar setUser={setUser} />
        <Slider />
        <PageCard />
        <footer>
            <Footer /> 
        </footer>
       
        </>
    )
}