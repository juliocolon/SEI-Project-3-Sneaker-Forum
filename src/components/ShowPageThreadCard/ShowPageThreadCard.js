import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'



export default function ShowPageThreadCard({ refresh, setRefresh }) {

    const {id} = useParams(); 
    const navigate = useNavigate()
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`/threads/${id}`)
                setThreads(data)
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [refresh])
    console.log(threads)


    const handleDelete = async () => {
        try {
            await axios.delete(`/threads/${id}`)
        } catch (err) {
          console.log()
        } 
        finally{navigate("/threads/new")
        setRefresh(!refresh)
        }
      }

    return (
        <Card>
            <Card.Header>Selected Thread</Card.Header>
            <Card.Body>
                <Card.Title style={{ textDecoration: "underline", fontSize: "22px", fontWeight: "bolder", color: "#778899" }}> {threads.threadtitle}</Card.Title>
                <Card.Text>
                    Brand: {threads.threadtitle}
                </Card.Text>
                <Card.Text>
                    {threads.threadbody}
                </Card.Text>
                <Button onClick={handleDelete} variant="secondary"> Delete Thread</Button>
            </Card.Body>
        </Card>
    )




}
