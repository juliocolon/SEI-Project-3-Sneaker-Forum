import NavBar from "../../components/NavLoggedIn/NavBar"
import Footer from "../../components/Footer/Footer"
import UpdateForm from "../../components/UpdateForm/UpdateForm"
import axios from "axios"
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ShowPageThreadCard from "../../components/ShowPageThreadCard/ShowPageThreadCard"




export default function Show( {user, setUser, refresh, setRefresh}){

    const { id } = useParams()
    // Component state that will hold our data
    const [showData, setShowData] = useState({})
    // Navigation Hook to navigate from page to page 
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
          try {
            // Assign our axios response to a variable. Use the id from params to get our speciifc task
            const {data} = await axios.get(`http://localhost:3000/threads/${id}`)
            // Set the showData state to the data we recieved from our server. 
            setShowData(data)
          } catch (err) {
    
            console.log(err)
          }
        })()
      },[])




    return (
        <>
        <NavBar user={user} setUser={setUser} />
        <UpdateForm user={user} refresh={refresh} setRefresh={setRefresh} />
         <ShowPageThreadCard user={user} refresh={refresh} setRefresh={setRefresh} />
        <Footer  />
        </>
     

    )
}