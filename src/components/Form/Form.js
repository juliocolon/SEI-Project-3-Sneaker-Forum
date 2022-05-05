import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../index.css';


export default function ThreadForm() {
    return (
        <Form className="thread-form">
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Label style={{color: "white"}}>Thread Title</Form.Label>
                <Form.Control type="text" required />
            </Form.Group>
            <Form.Label style={{color: "white"}}>Brand Category</Form.Label>
            <Form.Select className="mb-4" required>
                <option>Choose Category</option>
                <option value="1">Nike</option>
                <option value="2">Jordan</option>
                <option value="3">Adidas</option>
            </Form.Select>
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{color: "white"}}>Thread Body</Form.Label>
                <Form.Control type="text" as="textarea" rows={6} required />
            </Form.Group>
            <Button variant="secondary" type="submit">
                Post Thread
            </Button>
        </Form>
    )
}