import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'



export default function ThreadHistoryThreadCard({ refresh, setRefresh }) {

    const [threads, setThreads] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`/threads`)
                setThreads(data)
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [refresh])
    console.log(threads)



    return (

        <Card>
            <Card.Header>Current Threads</Card.Header>
            {

                threads.map((thread, index) => {
                    const { threadtitle, threadbody, brandcategory } = thread;


                    return (
                        <Card key={index}>

                            <Card.Body>
                                <Card.Title style={{ textDecoration: "underline", fontSize: "22px", fontWeight: "bolder", color: "#778899" }}> {threadtitle}</Card.Title>
                                <Card.Text>
                                    Brand: {brandcategory}
                                </Card.Text>
                                <Card.Text>
                                    {threadbody}
                                </Card.Text>
                            </Card.Body>
                        </Card>



                    )
                })
            }

        </Card>
    )





}
