import NavBar from "../../components/NavLoggedIn/NavBar"
import Slider from "../../components/Carousel/Slider"


export default function ThreadHistory({user, setUser}){
    return (
        <>
            <NavBar user={user} setUser={setUser} />
            <Slider />
        </>
    )
}