import NavBar from "../../components/NavLoggedIn/NavBar"
import Slider from "../../components/Carousel/Slider"
import Footer from "../../components/Footer/Footer"

export default function ThreadHistory({user, setUser}){
    return (
        <>
            <NavBar user={user} setUser={setUser} />
            <Slider />
            <footer>
                <Footer />
            </footer>
        </>
    )
}