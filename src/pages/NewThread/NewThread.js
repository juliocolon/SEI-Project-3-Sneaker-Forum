import NavBar from "../../components/NavLoggedIn/NavBar"
import ThreadForm from "../../components/Form/Form"
import Footer from "../../components/Footer/Footer"
import NewThreadCard from "../../components/NewThreadCard/NewThreadCard"



export default function NewThread( {user, setUser} ) {
    return (
        <>
            <NavBar user={user} setUser={setUser} />
            <ThreadForm />
            <NewThreadCard />
            <footer>
                <Footer />
            </footer>
        </>
    )
}