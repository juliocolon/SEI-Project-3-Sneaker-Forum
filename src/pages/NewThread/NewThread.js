import NavBar from "../../components/NavLoggedIn/NavBar"
import ThreadForm from "../../components/Form/Form"
import Footer from "../../components/Footer/Footer"
import NewThreadCard from "../../components/NewThreadCard/NewThreadCard"



export default function NewThread({ user, setUser, refresh, setRefresh }) {

    
return (
    <div>

            <NavBar user={user} setUser={setUser} />
            <ThreadForm user={user} refresh={refresh} setRefresh={setRefresh}  />
            <NewThreadCard user={user} refresh={refresh} setRefresh={setRefresh}/>
            <footer>
                <Footer />
            </footer>
     </div >    
)

    

} 