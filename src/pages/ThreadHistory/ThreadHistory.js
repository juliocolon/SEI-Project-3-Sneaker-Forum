import NavBar from "../../components/NavLoggedIn/NavBar"
import Slider from "../../components/Carousel/Slider"
import Footer from "../../components/Footer/Footer"
import ThreadHistoryThreadCard from "../../components/ThreadHistoryThreadCard/ThreadHistoryThreadCard"

export default function ThreadHistory({user, setUser}){
    return (
        <>
            <NavBar user={user} setUser={setUser} />
            <Slider />
            <ThreadHistoryThreadCard />
            <footer>
                <Footer />
            </footer>
        </>
    )
}