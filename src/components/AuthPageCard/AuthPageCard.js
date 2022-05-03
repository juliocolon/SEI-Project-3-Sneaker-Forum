import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function AuthPageCard() {
    return (
        <Card>
            <Card.Header><h4>Featured Threads</h4></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button className='button-red' variant="secondary">Go somewhere</Button>
                <hr />
            </Card.Body>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button className='button' variant="secondary">Go somewhere</Button>
                <hr />
            </Card.Body>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
            </Card.Body>
            </Card>
            
    )
}