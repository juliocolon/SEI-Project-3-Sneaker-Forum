import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../index.css';
import { useState, useRef } from 'react'
import axios from 'axios'


export default function ThreadForm() {


    const [didSubmit, setDidSubmit] = useState(false)
    const threadtitle = useRef(null)
    const brandcategory = useRef(null)
    const threadbody = useRef(null)





  const handleSubmit = async (evt) => {
    evt.preventDefault()

    try {
      await axios.post('http://localhost:3000/threads', {
        threadtitle: threadtitle.current.value,
        brandcategory: brandcategory.current.value, 
        threadbody: threadbody.current.value, 
      })
      setDidSubmit(!didSubmit)
    } catch (err) {
      console.log(err)
    }
  }


    return (
        <Form className="thread-form">
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Label style={{color: "white"}}>Thread Title</Form.Label>
                <Form.Control ref={threadtitle} type="text" required />
            </Form.Group>
            <Form.Label style={{color: "white"}}>Brand Category</Form.Label>
            <Form.Select ref={brandcategory} className="mb-4" required>
                <option>Choose Category</option>
                <option value="Nike">Nike</option>
                <option value="Jordan">Jordan</option>
                <option value="Adidas">Adidas</option>
            </Form.Select>
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{color: "white"}}>Thread Body</Form.Label>
                <Form.Control ref={threadbody} type="text" as="textarea" rows={6} required />
            </Form.Group>
            <Button variant="secondary" href="/threads" onClick={handleSubmit} type="submit">
                Post Thread
            </Button>
        </Form>
    )
}