import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function AuthPageCard() {
    return (
        <Card>
            <Card.Header><h4>Previous Threads</h4></Card.Header>
            <Card.Body>
                <Card.Title style={{textDecoration: "underline",fontSize: "22px", fontWeight: "bolder", color: "#778899"}}>The New Balance 550 Keeps It Simple In “White/Grey”</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button href="https://sneakernews.com/2022/05/04/new-balance-550-white-grey-bb550wtg/" target="_blank" variant="secondary">Read  More</Button>
                <hr />
            </Card.Body>
            <Card.Body>
                <Card.Title style={{textDecoration: "underline",fontSize: "22px", fontWeight: "bolder", color: "#778899"}}>The Nike Air Force 1 Mid Tries Out The “Reverse Panda” Look</Card.Title>
                <Card.Text>
               
                </Card.Text>
                <Button href=" https://sneakernews.com/2022/05/04/nike-air-force-1-mid-reverse-panda-dv2224-001/" target="_blank" variant="secondary">Read More</Button>
                <hr />
            </Card.Body>
            <Card.Body>
                <Card.Title style={{textDecoration: "underline",fontSize: "22px", fontWeight: "bolder", color: "#778899" }}>Mike Trout’s New Nike Signature Shoe Is Dropping In Several Colorways</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button href="https://sneakernews.com/2022/05/04/nike-force-zoom-trout-ltd-turf-release-date/" target="_blank" variant="secondary">Read More</Button>
            </Card.Body>
            </Card>
            
    )
}