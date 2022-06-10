import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useState, useEffect } from 'react'



export default function NewThreadCard({user, refresh,setRefresh}) {



  const [threads, setThreads] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/threads/byuser/${user._id}`)
        setThreads(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [refresh])

  return (

    <Card>
      {user.threads  === 0 ?
         <Card.Header>No Previous Thread History</Card.Header>:
         <Card.Header>Thread History</Card.Header>
      }
    
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
                <Button href={`/threads/${thread._id}`}  variant="secondary"> Edit Thread</Button>
              </Card.Body>
            </Card> 



          )
        })
      }

    </Card>
  )



}
