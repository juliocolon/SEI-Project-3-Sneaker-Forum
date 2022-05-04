import NavBar from "../../components/Nav/NavBar"; 
import Slider from "../../components/Carousel/Slider";
import AuthPageCard from "../../components/AuthPageCard/AuthPageCard";



export default function AuthPage( {setUser}){
    return (
        <>
        <NavBar setUser={setUser} />
        <Slider />
        <AuthPageCard />
        </>
    )
}